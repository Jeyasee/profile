import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Smartphone, 
  Shield, 
  Database, 
  GitBranch, 
  TestTube, 
  Cpu,
  Cloud,
  Blocks
} from "lucide-react";

const skillCategories = [
  {
    icon: Smartphone,
    title: "Android Development",
    skills: [
      { name: "Kotlin", level: 95 },
      { name: "Java", level: 90 },
      { name: "Jetpack Compose", level: 85 },
      { name: "React Native", level: 75 },
    ],
  },
  {
    icon: Blocks,
    title: "Architecture & Design",
    skills: [
      { name: "MVVM", level: 95 },
      { name: "Clean Architecture", level: 90 },
      { name: "SOLID Principles", level: 90 },
      { name: "Modular Design", level: 85 },
    ],
  },
  {
    icon: Shield,
    title: "Security",
    skills: [
      { name: "OAuth / Session Auth", level: 90 },
      { name: "Keystore / ProGuard", level: 85 },
      { name: "Appdome / Promon", level: 85 },
      { name: "Firebase Auth", level: 80 },
    ],
  },
  {
    icon: Database,
    title: "Database & Storage",
    skills: [
      { name: "Room", level: 90 },
      { name: "Realm", level: 85 },
      { name: "SQLite", level: 85 },
      { name: "Firebase", level: 80 },
    ],
  },
  {
    icon: GitBranch,
    title: "CI/CD & Version Control",
    skills: [
      { name: "Git / GitHub", level: 95 },
      { name: "GitHub Actions", level: 85 },
      { name: "Jenkins", level: 80 },
      { name: "GitLab CI", level: 80 },
    ],
  },
  {
    icon: TestTube,
    title: "Testing & QA",
    skills: [
      { name: "JUnit", level: 85 },
      { name: "Mockito", level: 85 },
      { name: "Espresso", level: 80 },
      { name: "Unit Testing", level: 90 },
    ],
  },
  {
    icon: Cloud,
    title: "Backend & APIs",
    skills: [
      { name: "REST APIs", level: 95 },
      { name: "Retrofit", level: 90 },
      { name: "Coroutines", level: 90 },
      { name: "RxJava", level: 80 },
    ],
  },
  {
    icon: Cpu,
    title: "Tools & SDK",
    skills: [
      { name: "Android Studio", level: 95 },
      { name: "Firebase Suite", level: 85 },
      { name: "Google Maps", level: 85 },
      { name: "Bluetooth / Camera", level: 80 },
    ],
  },
];

const SkillBar = ({ name, level, delay }: { name: string; level: number; delay: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-sm text-muted-foreground">{level}%</span>
      </div>
      <div className="skill-bar">
        <motion.div
          className="skill-bar-fill"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subtitle mx-auto">
            A comprehensive toolkit for building robust mobile applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="glass-card p-6 rounded-2xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <category.icon className="text-primary" size={20} />
                </div>
                <h3 className="font-semibold text-sm">{category.title}</h3>
              </div>
              
              {category.skills.map((skill, skillIndex) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  delay={categoryIndex * 0.1 + skillIndex * 0.1}
                />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
