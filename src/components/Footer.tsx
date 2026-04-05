import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-glass-border/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-2 text-muted-foreground"
          >
            <span>© {new Date().getFullYear()} David Jeyaseelan.</span>
            <span className="hidden sm:inline">Built with</span>
            <Heart size={14} className="text-primary hidden sm:inline" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-6"
          >
            <a
              href="#about"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              About
            </a>
            <a
              href="#skills"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Skills
            </a>
            <a
              href="#experience"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
