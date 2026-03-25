import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="py-8 border-t border-border/30"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            Designed and Developed by <span className="text-foreground">Aryan Gupta</span>
          </p>
          <p className="text-sm text-muted-foreground">
            © {currentYear}
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
