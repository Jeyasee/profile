import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Shield, Users, Zap } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Expert Developer",
    description: "Java, Kotlin, React Native, PhoneGap, Objective-C",
  },
  {
    icon: Shield,
    title: "Security Focused",
    description: "Banking, Finance, IoT, Enterprise Mobility",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Clean Architecture, SOLID Principles, MVVM",
  },
  {
    icon: Users,
    title: "Team Leadership",
    description: "Sprint Planning, Code Review, Team Mentoring",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subtitle mx-auto">
            A passionate mobile developer crafting exceptional digital experiences
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Main Content Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 rounded-3xl"
          >
            <h3 className="text-2xl font-bold mb-6 text-primary">Professional Summary</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Experienced Android Native Application Developer with over{" "}
              <span className="text-foreground font-semibold">10 years of expertise</span>{" "}
              in designing, developing, and maintaining high-performance, secure, and 
              scalable Android applications.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Proficient in{" "}
              <span className="text-primary">Java</span> and{" "}
              <span className="text-primary">Kotlin</span>, with hands-on experience in 
              React Native, PhoneGap, and Objective-C. Specialized in building{" "}
              <span className="text-foreground font-semibold">banking, finance, and IoT-based</span>{" "}
              mobile applications.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Strong emphasis on <span className="text-accent">security</span>,{" "}
              <span className="text-accent">performance optimization</span>, and{" "}
              <span className="text-accent">clean architecture</span>. Proven leadership 
              in guiding cross-functional teams, delivering enterprise-grade solutions, 
              and implementing CI/CD pipelines.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-glass-border">
              <div className="text-center">
                <div className="text-3xl font-bold neon-text">10+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold neon-text">50+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold neon-text">6+</div>
                <div className="text-sm text-muted-foreground">Banking Apps</div>
              </div>
            </div>
          </motion.div>

          {/* Highlight Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="glass-card p-6 rounded-2xl group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="text-primary" size={24} />
                </div>
                <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
