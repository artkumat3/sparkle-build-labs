import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors';
import { createClient } from 'npm:@supabase/supabase-js@2';
import { z } from 'npm:zod@3';

const BodySchema = z.object({
  name: z.string().trim().min(2).max(100).regex(/^[^<>]*$/),
  email: z.string().trim().email().max(255),
  message: z.string().trim().min(10).max(2000).regex(/^(?!.*<\s*script)/i),
  // honeypot – must be empty
  website: z.string().max(0).optional().default(""),
});

const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

async function classifyMessage(name: string, email: string, message: string) {
  if (!LOVABLE_API_KEY) return { genuine: true, reason: "ai_unavailable", score: 0.5 };

  const prompt = `You are a spam and authenticity classifier for a personal portfolio contact form.
Determine if this submission is a GENUINE inquiry from a real person (project inquiry, job, collaboration, feedback, question) or FAKE/SPAM (gibberish, keyboard mashing, generic bot text, SEO spam, phishing, XSS/script injection attempts, marketing blasts, adult content, crypto scams).

Name: ${name}
Email: ${email}
Message: ${message}

Respond by calling the classify function.`;

  const res = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${LOVABLE_API_KEY}`,
    },
    body: JSON.stringify({
      model: "google/gemini-2.5-flash-lite",
      messages: [{ role: "user", content: prompt }],
      tools: [
        {
          type: "function",
          function: {
            name: "classify",
            description: "Classify the submission.",
            parameters: {
              type: "object",
              properties: {
                genuine: { type: "boolean", description: "true if a real human inquiry" },
                confidence: { type: "number", description: "0..1 confidence in the classification" },
                reason: { type: "string", description: "short reason (spam, gibberish, injection, ok, etc.)" },
              },
              required: ["genuine", "confidence", "reason"],
              additionalProperties: false,
            },
          },
        },
      ],
      tool_choice: { type: "function", function: { name: "classify" } },
    }),
  });

  if (!res.ok) {
    const body = await res.text();
    console.error("AI gateway error", res.status, body);
    // fail-open so real users aren't blocked by an outage
    return { genuine: true, reason: "ai_error", score: 0.5 };
  }
  const data = await res.json();
  const call = data.choices?.[0]?.message?.tool_calls?.[0]?.function?.arguments;
  try {
    const parsed = typeof call === "string" ? JSON.parse(call) : call;
    return {
      genuine: !!parsed.genuine,
      reason: String(parsed.reason ?? ""),
      score: Number(parsed.confidence ?? 0.5),
    };
  } catch {
    return { genuine: true, reason: "parse_error", score: 0.5 };
  }
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });

  try {
    const parsed = BodySchema.safeParse(await req.json());
    if (!parsed.success) {
      return new Response(
        JSON.stringify({ error: "Invalid input", details: parsed.error.flatten().fieldErrors }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }
    const { name, email, message, website } = parsed.data;

    // Honeypot triggered – pretend success, drop silently
    if (website && website.length > 0) {
      return new Response(JSON.stringify({ ok: true }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const verdict = await classifyMessage(name, email, message);
    if (!verdict.genuine && verdict.score >= 0.6) {
      return new Response(
        JSON.stringify({
          error: "spam_detected",
          message: "Your message looks automated. Please rewrite it in your own words and try again.",
          reason: verdict.reason,
        }),
        { status: 422, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const admin = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);
    const { error } = await admin.from("contact_submissions").insert([{ name, email, message }]);
    if (error) {
      console.error("insert error", error);
      return new Response(
        JSON.stringify({ error: "insert_failed", details: error.message }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    return new Response(JSON.stringify({ ok: true, verdict }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("validate-contact error", e);
    return new Response(JSON.stringify({ error: "server_error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
