import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Team Lead",
    company: "Trane Technologies",
    location: "Chennai, India",
    period: "February 2025 – Present",
    description: [
      "Leading cross-functional teams in design, maintenance, and management of Android applications on Google Play Store",
      "Implementing advanced architectural improvements using MVVM and Kotlin Coroutines",
      "Applied SOLID principles to improve code maintainability, testability, and scalability",
      "Global refrigeration solutions app (Thermo King Connect) with React Native integration",
      "Bluetooth & camera integration for secure proximity communication",
    ],
    tags: ["Kotlin", "MVVM", "React Native", "Team Leadership", "Bluetooth"],
  },
  {
    title: "Senior Software Engineer",
    company: "Tagit India Pvt Ltd",
    location: "Chennai, India",
    period: "January 2019 – February 2025",
    description: [
      "Upgraded Android applications using latest native frameworks and modern Android development tools",
      "Introduced advanced security measures: Session Token Authorization, OAuth, ProGuard, Keystore",
      "Incorporated Appdome and Promon (AI-based security solutions) for data protection",
      "Led end-to-end development for major banking projects: Citibank IN, AU 0101, Axis Bank",
      "Ensured adherence to stringent security and performance standards",
    ],
    tags: ["Banking Apps", "OAuth", "Appdome", "Promon", "Security"],
  },
  {
    title: "Software Engineer",
    company: "ParamPriti Web",
    location: "Chennai, India",
    period: "April 2017 – January 2019",
    description: [
      "Independently developed and launched the Finzapp Android application on Google Play Store",
      "Followed structured SDLC: POC → HLD → LLD with formal sign-off from Product Owner",
      "End-to-end ownership from concept to deployment",
    ],
    tags: ["Finzapp", "SDLC", "End-to-End Development"],
  },
  {
    title: "Junior Software Engineer",
    company: "Genesis Circle",
    location: "Chennai, India",
    period: "November 2015 – April 2017",
    description: [
      "Enhanced Qtanium Connect, an IoT-based hybrid mobile application",
      "Used PhoneGap and Telerik AppBuilder for cross-platform compatibility",
      "Ensured performance and reliability across platforms",
    ],
    tags: ["IoT", "PhoneGap", "Hybrid App", "Telerik"],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle mx-auto">
            A decade of building impactful mobile solutions
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 w-0.5 h-full bg-gradient-to-b from-primary via-accent to-transparent" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title + exp.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex items-start gap-8 mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-primary bg-background shadow-lg shadow-primary/30 z-10" />

              {/* Content Card */}
              <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                <div className="glass-card p-6 rounded-2xl">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Briefcase className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                  </div>

                  {/* Meta */}
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={14} />
                      {exp.location}
                    </span>
                  </div>

                  {/* Description */}
                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
