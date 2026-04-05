import { motion } from "framer-motion";
import { Download, FolderOpen, Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary) / 0.3) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Glowing Ring */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))',
                  padding: '3px',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-full h-full rounded-full bg-background" />
              </motion.div>
              
              {/* Profile Placeholder */}
              <div className="absolute inset-3 rounded-full glass-card flex items-center justify-center overflow-hidden">
                <div className="text-6xl md:text-7xl font-bold gradient-text">DJ</div>
              </div>
              
              {/* Floating Badge */}
              <motion.div
                className="absolute -right-2 top-8 glass-card px-4 py-2 rounded-full"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <span className="text-primary text-sm font-medium">10+ Years</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="inline-block px-4 py-2 rounded-full glass-card text-primary text-sm font-medium mb-6">
                Available for Opportunities
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            >
              Hi, I'm{" "}
              <span className="gradient-text">David Jeyaseelan</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl md:text-2xl lg:text-3xl text-primary font-semibold mb-4"
            >
              Android Team Lead & Mobile Application Architect
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-8"
            >
              10+ Years of Expertise in Banking, Finance, IoT & Secure Enterprise Mobility.
              Building high-performance, secure, and scalable mobile solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <a href="/David_Jeyaseelan_Resume.pdf" download>
                <Button variant="hero" size="lg" className="gap-2">
                  <Download size={20} />
                  Download Resume
                </Button>
              </a>
              <Button 
                variant="heroOutline" 
                size="lg" 
                className="gap-2"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <FolderOpen size={20} />
                View Projects
              </Button>
              <Button 
                variant="heroGhost" 
                size="lg" 
                className="gap-2"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Mail size={20} />
                Contact Me
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ChevronDown size={32} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
