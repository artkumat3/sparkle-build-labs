import { useState } from "react";
import { Send, Mail, MapPin, ArrowUpRight } from "lucide-react";
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
    } catch (error) {
      toast({ title: "Error", description: "Something went wrong.", variant: "destructive" });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Left */}
          <motion.div
            className="space-y-10"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4">Contact</h2>
              <p className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
                Let's work<br />together.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:aryan-gupta@zohomail.in" className="text-foreground hover:text-primary transition-colors">
                  aryan-gupta@zohomail.in
                </a>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">Mau, Uttar Pradesh, India</span>
              </div>
            </div>

            <div className="space-y-4 pt-4">
              <p className="text-sm text-muted-foreground uppercase tracking-widest">Social</p>
              <div className="flex flex-col gap-3">
                {["Github", "LinkedIn", "Twitter", "Instagram"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="group flex items-center gap-2 text-foreground hover:text-primary transition-colors w-fit"
                  >
                    <span className="text-base">{social}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm text-muted-foreground">Name</label>
                <Input
                  id="name" name="name" placeholder="Your name"
                  value={formData.name} onChange={handleChange} required
                  className="bg-secondary/50 border-border focus:border-primary rounded-lg h-12"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm text-muted-foreground">Email</label>
                <Input
                  id="email" name="email" type="email" placeholder="your@email.com"
                  value={formData.email} onChange={handleChange} required
                  className="bg-secondary/50 border-border focus:border-primary rounded-lg h-12"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm text-muted-foreground">Message</label>
                <Textarea
                  id="message" name="message" placeholder="Tell me about your project..."
                  value={formData.message} onChange={handleChange} required rows={5}
                  className="bg-secondary/50 border-border focus:border-primary resize-none rounded-lg"
                />
              </div>
              <Button
                type="submit" size="lg" disabled={isLoading}
                className="w-full bg-foreground text-background hover:bg-foreground/90 rounded-full h-12 text-sm uppercase tracking-wider"
              >
                {isLoading ? "Sending..." : <>Send Message <Send className="ml-2 w-4 h-4" /></>}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
