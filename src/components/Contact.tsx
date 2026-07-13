import { useState } from "react";
import { Send, Mail, ArrowUpRight, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { motion } from "framer-motion";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const { error } = await supabase.from("contact_submissions").insert([formData]);
      if (error) throw error;
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
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          className="mb-12 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xs font-medium text-primary uppercase tracking-[0.25em] mb-5">Contact</h2>
          <p className="font-display text-3xl md:text-5xl font-bold tracking-tight">
            Let's <span className="text-gradient">work</span> together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-5">
          {/* Email card */}
          <motion.a
            href="mailto:aryan-gupta@zohomail.in"
            className="bento-glow lg:col-span-7 p-8 md:p-10 group flex flex-col justify-between min-h-[200px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-start justify-between">
              <Mail className="w-6 h-6 text-primary" />
              <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </div>
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Email</p>
              <p className="font-display text-2xl md:text-3xl font-semibold break-all">aryan-gupta@zohomail.in</p>
              <p className="text-sm text-muted-foreground">Best for project inquiries — I usually reply within 24 hours.</p>
            </div>
          </motion.a>

          {/* Socials */}
          <motion.div
            className="bento lg:col-span-5 p-8 flex flex-col justify-between min-h-[200px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Elsewhere</p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
                </span>
                <span className="text-foreground font-medium">Available for new work</span>
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                <a
                  href="https://github.com/aryngpt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-border/60 bg-background/40 text-sm font-medium text-foreground/85 hover:text-primary hover:border-primary/50 transition-colors"
                >
                  <Github className="w-4 h-4" /> GitHub
                </a>
                <a
                  href="https://instagram.com/the.aryan.builds/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-border/60 bg-background/40 text-sm font-medium text-foreground/85 hover:text-primary hover:border-primary/50 transition-colors"
                >
                  <Instagram className="w-4 h-4" /> Instagram
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form — full width */}
          <motion.div
            className="bento lg:col-span-12 p-8 md:p-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label htmlFor="name" className="text-xs uppercase tracking-widest text-muted-foreground">Name</label>
                <Input
                  id="name" name="name" placeholder="Your name"
                  value={formData.name} onChange={handleChange} required
                  className="bg-background/50 border-border focus:border-primary rounded-xl h-12"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-xs uppercase tracking-widest text-muted-foreground">Email</label>
                <Input
                  id="email" name="email" type="email" placeholder="your@email.com"
                  value={formData.email} onChange={handleChange} required
                  className="bg-background/50 border-border focus:border-primary rounded-xl h-12"
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label htmlFor="message" className="text-xs uppercase tracking-widest text-muted-foreground">Message</label>
                <Textarea
                  id="message" name="message" placeholder="Tell me about your project..."
                  value={formData.message} onChange={handleChange} required rows={5}
                  className="bg-background/50 border-border focus:border-primary resize-none rounded-xl"
                />
              </div>
              <div className="md:col-span-2 flex justify-end">
                <Button
                  type="submit" size="lg" disabled={isLoading}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full h-12 px-8 text-sm uppercase tracking-wider font-semibold"
                >
                  {isLoading ? "Sending..." : <>Send Message <Send className="ml-2 w-4 h-4" /></>}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
