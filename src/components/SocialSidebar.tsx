import { Github, Linkedin, Twitter, Instagram } from "lucide-react";
import { motion } from "framer-motion";

const socials = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

const SocialSidebar = () => {
  return (
    <motion.div
      className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-6"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.2, duration: 0.6 }}
    >
      {socials.map((social) => (
        <a
          key={social.label}
          href={social.href}
          className="text-muted-foreground hover:text-foreground transition-colors duration-300"
          aria-label={social.label}
        >
          <social.icon className="w-5 h-5" />
        </a>
      ))}
    </motion.div>
  );
};

export default SocialSidebar;
