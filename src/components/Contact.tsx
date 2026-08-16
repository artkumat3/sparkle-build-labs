import { useState } from "react";
import { Send, Mail, ArrowUpRight, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { motion } from "framer-motion";
import { z } from "zod";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Please enter your name" })
    .max(100, { message: "Name must be under 100 characters" })
    .regex(/^[^<>]*$/, { message: "Name contains invalid characters" }),
  email: z
    .string()
    .trim()
    .email({ message: "Please enter a valid email" })
    .max(255, { message: "Email must be under 255 characters" }),
  message: z
    .string()
    .trim()
    .min(10, { message: "Message must be at least 10 characters" })
    .max(2000, { message: "Message must be under 2000 characters" })
    .regex(/^(?!.*<\s*script)/i, { message: "Message contains disallowed content" }),
});

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [honeypot, setHoneypot] = useState("");
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      toast({
        title: "Please fix the form",
        description: result.error.issues[0]?.message ?? "Invalid input",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      const { name, email, message } = result.data;
      const { data, error } = await supabase.functions.invoke("validate-contact", {
        body: { name, email, message, website: honeypot },
      });
      if (error) {
        // Try to extract server-provided message (e.g. spam_detected)
        let serverMsg = "Something went wrong.";
        try {
          const ctx = (error as { context?: Response }).context;
          if (ctx) {
            const body = await ctx.json();
            if (body?.message) serverMsg = body.message;
            else if (body?.error === "spam_detected") serverMsg = "Your message looks automated. Please rewrite it and try again.";
          }
        } catch { /* ignore */ }
        toast({ title: "Couldn't send", description: serverMsg, variant: "destructive" });
        return;
      }
      if (data && (data as { error?: string }).error) {
        toast({
          title: "Couldn't send",
          description: (data as { message?: string }).message ?? "Please try again.",
          variant: "destructive",
        });
        return;
      }
      toast({ title: "Message sent!", description: "I'll get back to you soon." });
      setFormData({ name: "", email: "", message: "" });
    } catch {
      toast({ title: "Error", description: "Something went wrong.", variant: "destructive" });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="edition py-20 md:py-28 scroll-mt-24 border-t border-border">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
        <div className="lg:col-span-4">
          <h2 className="kicker mb-4">Contact</h2>
          <div className="rule" />
          <p className="mt-6 text-sm text-muted-foreground leading-relaxed max-w-xs">
            Best for project inquiries — I usually reply within 24 hours.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span className="text-sm text-foreground/85">Available for new work</span>
          </div>
          <div className="mt-8 flex items-center gap-5">
            <a
              href="https://github.com/aryngpt"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-foreground/75 hover:text-foreground/80 transition-colors"
            >
              <Github className="w-4 h-4" /> GitHub
            </a>
            <a
              href="mailto:aryan-gupta@zohomail.in"
              className="inline-flex items-center gap-2 text-sm text-foreground/75 hover:text-foreground/80 transition-colors"
            >
              <Mail className="w-4 h-4" /> Email
            </a>
          </div>
        </div>

        <div className="lg:col-span-8">
          <motion.a
            href="mailto:aryan-gupta@zohomail.in"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group block display-xl text-2xl md:text-3xl lg:text-4xl text-foreground hover:text-foreground/70 transition-colors underline decoration-border decoration-1 underline-offset-[10px] break-words"
          >
            aryan-gupta@zohomail.in
            <ArrowUpRight className="inline w-8 h-8 ml-2 align-top text-foreground/80 opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.a>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-14 grid md:grid-cols-2 gap-6 border-t border-border pt-10"
          >
            {/* Honeypot – must stay empty. Hidden from real users. */}
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              aria-hidden="true"
              style={{ position: "absolute", left: "-10000px", width: 1, height: 1, opacity: 0 }}
            />
            <div className="space-y-2">
              <label htmlFor="name" className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">Name</label>
              <Input
                id="name" name="name" placeholder="Your name"
                value={formData.name} onChange={handleChange} required
                className="bg-transparent border-0 border-b border-border rounded-none px-0 h-12 focus-visible:ring-0 focus-visible:border-primary"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">Email</label>
              <Input
                id="email" name="email" type="email" placeholder="your@email.com"
                value={formData.email} onChange={handleChange} required
                className="bg-transparent border-0 border-b border-border rounded-none px-0 h-12 focus-visible:ring-0 focus-visible:border-primary"
              />
            </div>
            <div className="space-y-2 md:col-span-2">
              <label htmlFor="message" className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">Message</label>
              <Textarea
                id="message" name="message" placeholder="Tell me about your project..."
                value={formData.message} onChange={handleChange} required rows={5}
                className="bg-transparent border-0 border-b border-border rounded-none px-0 resize-none focus-visible:ring-0 focus-visible:border-primary"
              />
            </div>
            <div className="md:col-span-2 flex justify-end">
              <Button
                type="submit" size="lg" disabled={isLoading}
                className="rounded-none h-12 px-8 text-[11px] uppercase tracking-[0.24em] font-medium"
              >
                {isLoading ? "Sending..." : <>Send Message <Send className="ml-2 w-4 h-4" /></>}
              </Button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
