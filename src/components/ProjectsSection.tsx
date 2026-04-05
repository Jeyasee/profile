// // // import { motion } from "framer-motion";
// // // import { useInView } from "framer-motion";
// // // import { useRef, useState } from "react";
// // // import { ExternalLink, Smartphone, Building2, Cpu, CreditCard } from "lucide-react";
// // // import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

// // // const projects = [
// // //   {
// // //     title: "Thermo King Connect",
// // //     category: "IoT & Fleet Management",
// // //     description: "Global refrigeration solutions app for Trane Technologies. Integrated React Native with native modules, Bluetooth & camera for secure proximity communication.",
// // //     fullDescription: "A comprehensive fleet management solution developed for Trane Technologies, enabling real-time monitoring and control of refrigeration units worldwide. The application seamlessly integrates React Native with native Android modules, featuring advanced Bluetooth connectivity for proximity-based communication and camera integration for secure authentication. Performance optimization achieved through Android Profiler analysis.",
// // //     icon: Cpu,
// // //     tags: ["Kotlin", "React Native", "Bluetooth", "Camera"],
// // //     technologies: ["Kotlin", "React Native", "Bluetooth LE", "Camera2 API", "Android Profiler", "Native Modules"],
// // //     role: "Team Lead",
// // //     color: "primary",
// // //   },
// // //   {
// // //     title: "Platform Science In-Cabin Monitoring",
// // //     category: "Fleet Technology",
// // //     description: "Advanced in-cabin monitoring solution with real-time tracking and performance analytics for fleet management.",
// // //     fullDescription: "An advanced driver monitoring and fleet analytics platform that provides real-time insights into driver behavior and vehicle performance. Features include continuous monitoring, alerting systems, and comprehensive analytics dashboards for fleet managers.",
// // //     icon: Smartphone,
// // //     tags: ["Android", "Real-time", "Analytics"],
// // //     technologies: ["Android SDK", "Real-time Data", "Analytics", "Background Services"],
// // //     role: "Senior Engineer",
// // //     color: "accent",
// // //   },
// // //   {
// // //     title: "Finzapp Mobile Banking",
// // //     category: "FinTech",
// // //     description: "End-to-end mobile banking application developed independently. Complete SDLC from POC to HLD to LLD with formal sign-off.",
// // //     fullDescription: "A complete mobile banking solution built from ground up, covering the entire software development lifecycle. Led the project from initial Proof of Concept through High-Level Design and Low-Level Design phases, ensuring proper documentation and stakeholder sign-offs at each milestone.",
// // //     icon: CreditCard,
// // //     tags: ["Banking", "Security", "SDLC"],
// // //     technologies: ["Java", "Android SDK", "REST APIs", "Security Implementation", "Clean Architecture"],
// // //     role: "Lead Developer",
// // //     color: "primary",
// // //   },
// // //   {
// // //     title: "AU 0101 Banking App",
// // //     category: "Banking",
// // //     description: "Major banking application with advanced security measures including OAuth, Session Token Authorization, and Appdome integration.",
// // //     fullDescription: "Enterprise banking application for AU Small Finance Bank featuring comprehensive security implementations. Integrated OAuth 2.0 authentication, session token management, and Appdome security shield for protection against reverse engineering and runtime attacks.",
// // //     icon: Building2,
// // //     tags: ["Banking", "OAuth", "Appdome"],
// // //     technologies: ["Kotlin", "MVVM", "OAuth 2.0", "Appdome", "Session Management", "Biometrics"],
// // //     role: "Senior Software Engineer",
// // //     color: "accent",
// // //   },
// // //   {
// // //     title: "Axis Bank Mobile App",
// // //     category: "Banking",
// // //     description: "Enterprise banking solution with Promon AI-based security, ProGuard obfuscation, and Keystore validation.",
// // //     fullDescription: "A robust mobile banking solution for Axis Bank incorporating AI-based security through Promon SHIELD. Implemented multiple layers of protection including ProGuard obfuscation, Keystore validation, and certificate pinning to ensure maximum security for financial transactions.",
// // //     icon: Building2,
// // //     tags: ["Banking", "Promon", "Security"],
// // //     technologies: ["Kotlin", "Promon SHIELD", "ProGuard", "Keystore", "Certificate Pinning"],
// // //     role: "Senior Software Engineer",
// // //     color: "primary",
// // //   },
// // //   {
// // //     title: "Qtanium Connect",
// // //     category: "IoT Hybrid",
// // //     description: "IoT-based hybrid mobile application built with PhoneGap and Telerik AppBuilder for cross-platform compatibility.",
// // //     fullDescription: "A cross-platform IoT application connecting smart devices for home and industrial automation. Built using PhoneGap and Telerik AppBuilder to ensure compatibility across multiple platforms while maintaining native-like performance and user experience.",
// // //     icon: Cpu,
// // //     tags: ["IoT", "PhoneGap", "Telerik", "Hybrid"],
// // //     technologies: ["PhoneGap", "Telerik AppBuilder", "JavaScript", "IoT Protocols", "Cross-platform"],
// // //     role: "Software Engineer",
// // //     color: "accent",
// // //   },
// // // ];

// // // type Project = typeof projects[0];

// // // const ProjectModal = ({ project, isOpen, onClose }: { project: Project | null; isOpen: boolean; onClose: () => void }) => {
// // //   if (!project) return null;

// // //   return (
// // //     <Dialog open={isOpen} onOpenChange={onClose}>
// // //       <DialogContent className="glass-card border-white/10 max-w-2xl">
// // //         <DialogHeader>
// // //           <div className="flex items-center gap-4 mb-4">
// // //             <div className={`w-14 h-14 rounded-xl ${
// // //               project.color === "primary" ? "bg-primary/10" : "bg-accent/10"
// // //             } flex items-center justify-center`}>
// // //               <project.icon className={project.color === "primary" ? "text-primary" : "text-accent"} size={28} />
// // //             </div>
// // //             <div>
// // //               <span className={`text-xs font-medium ${
// // //                 project.color === "primary" ? "text-primary" : "text-accent"
// // //               }`}>
// // //                 {project.category}
// // //               </span>
// // //               <DialogTitle className="text-2xl font-bold mt-1">{project.title}</DialogTitle>
// // //             </div>
// // //           </div>
// // //           <DialogDescription className="sr-only">
// // //             Detailed information about the {project.title} project
// // //           </DialogDescription>
// // //         </DialogHeader>
        
// // //         <div className="space-y-6">
// // //           <div>
// // //             <h4 className="text-sm font-semibold text-primary mb-2">Role</h4>
// // //             <p className="text-foreground">{project.role}</p>
// // //           </div>
          
// // //           <div>
// // //             <h4 className="text-sm font-semibold text-primary mb-2">Overview</h4>
// // //             <p className="text-muted-foreground leading-relaxed">{project.fullDescription}</p>
// // //           </div>
          
// // //           <div>
// // //             <h4 className="text-sm font-semibold text-primary mb-3">Technologies Used</h4>
// // //             <div className="flex flex-wrap gap-2">
// // //               {project.technologies.map((tech) => (
// // //                 <span
// // //                   key={tech}
// // //                   className={`px-3 py-1.5 text-sm rounded-lg ${
// // //                     project.color === "primary" 
// // //                       ? "bg-primary/10 text-primary border border-primary/20" 
// // //                       : "bg-accent/10 text-accent border border-accent/20"
// // //                   }`}
// // //                 >
// // //                   {tech}
// // //                 </span>
// // //               ))}
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </DialogContent>
// // //     </Dialog>
// // //   );
// // // };

// // // const ProjectCard = ({ project, index, onViewDetails }: { project: Project; index: number; onViewDetails: (project: Project) => void }) => {
// // //   const ref = useRef(null);
// // //   const isInView = useInView(ref, { once: true });

// // //   return (
// // //     <motion.div
// // //       ref={ref}
// // //       initial={{ opacity: 0, y: 50 }}
// // //       animate={isInView ? { opacity: 1, y: 0 } : {}}
// // //       transition={{ duration: 0.5, delay: index * 0.1 }}
// // //       className="relative group"
// // //     >
// // //       <div className="glass-card p-6 rounded-2xl h-full relative overflow-hidden">
// // //         {/* Glow Effect on Hover */}
// // //         <div
// // //           className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
// // //             project.color === "primary" ? "bg-primary/5" : "bg-accent/5"
// // //           }`}
// // //         />

// // //         {/* Glass Reflection */}
// // //         <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

// // //         {/* Content */}
// // //         <div className="relative z-10">
// // //           {/* Icon */}
// // //           <div className={`w-14 h-14 rounded-xl ${
// // //             project.color === "primary" ? "bg-primary/10" : "bg-accent/10"
// // //           } flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
// // //             <project.icon className={project.color === "primary" ? "text-primary" : "text-accent"} size={28} />
// // //           </div>

// // //           {/* Category */}
// // //           <span className={`text-xs font-medium ${
// // //             project.color === "primary" ? "text-primary" : "text-accent"
// // //           }`}>
// // //             {project.category}
// // //           </span>

// // //           {/* Title */}
// // //           <h3 className="text-xl font-bold mt-2 mb-3 group-hover:text-primary transition-colors">
// // //             {project.title}
// // //           </h3>

// // //           {/* Description */}
// // //           <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
// // //             {project.description}
// // //           </p>

// // //           {/* Tags */}
// // //           <div className="flex flex-wrap gap-2 mb-4">
// // //             {project.tags.map((tag) => (
// // //               <span
// // //                 key={tag}
// // //                 className="px-2 py-1 text-xs rounded-md bg-secondary text-muted-foreground"
// // //               >
// // //                 {tag}
// // //               </span>
// // //             ))}
// // //           </div>

// // //           {/* Link */}
// // //           <button
// // //             className={`flex items-center gap-2 text-sm font-medium ${
// // //               project.color === "primary" ? "text-primary" : "text-accent"
// // //             } hover:gap-3 transition-all`}
// // //             onClick={() => onViewDetails(project)}
// // //           >
// // //             View Details
// // //             <ExternalLink size={14} />
// // //           </button>
// // //         </div>
// // //       </div>
// // //     </motion.div>
// // //   );
// // // };

// // // const ProjectsSection = () => {
// // //   const ref = useRef(null);
// // //   const isInView = useInView(ref, { once: true, margin: "-100px" });
// // //   const [selectedProject, setSelectedProject] = useState<Project | null>(null);

// // //   return (
// // //     <section id="projects" className="py-24 relative" ref={ref}>
// // //       <div className="container mx-auto px-6">
// // //         <motion.div
// // //           initial={{ opacity: 0, y: 50 }}
// // //           animate={isInView ? { opacity: 1, y: 0 } : {}}
// // //           transition={{ duration: 0.6 }}
// // //           className="text-center mb-16"
// // //         >
// // //           <h2 className="section-title">
// // //             Featured <span className="gradient-text">Projects</span>
// // //           </h2>
// // //           <p className="section-subtitle mx-auto">
// // //             Enterprise solutions crafted with precision and security in mind
// // //           </p>
// // //         </motion.div>

// // //         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
// // //           {projects.map((project, index) => (
// // //             <ProjectCard 
// // //               key={project.title} 
// // //               project={project} 
// // //               index={index} 
// // //               onViewDetails={setSelectedProject}
// // //             />
// // //           ))}
// // //         </div>
// // //       </div>

// // //       <ProjectModal 
// // //         project={selectedProject} 
// // //         isOpen={!!selectedProject} 
// // //         onClose={() => setSelectedProject(null)} 
// // //       />
// // //     </section>
// // //   );
// // // };

// // // export default ProjectsSection;

// // import { motion } from "framer-motion";
// // import { useInView } from "framer-motion";
// // import React, { useRef, useState } from "react";
// // import { ExternalLink, Smartphone, Building2, Cpu, CreditCard } from "lucide-react";
// // import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

// // const projects = [
// //   {
// //     title: "Thermo King Connect",
// //     category: "IoT & Fleet Management",
// //     description: "Global refrigeration solutions app for Trane Technologies. Integrated React Native with native modules, Bluetooth & camera for secure proximity communication.",
// //     fullDescription: "A comprehensive fleet management solution developed for Trane Technologies, enabling real-time monitoring and control of refrigeration units worldwide. The application seamlessly integrates React Native with native Android modules, featuring advanced Bluetooth connectivity for proximity-based communication and camera integration for secure authentication. Performance optimization achieved through Android Profiler analysis.",
// //     icon: Cpu,
// //     tags: ["Kotlin", "React Native", "Bluetooth", "Camera"],
// //     technologies: ["Kotlin", "React Native", "Bluetooth LE", "Camera2 API", "Android Profiler", "Native Modules"],
// //     role: "Team Lead",
// //     color: "primary",
// //   },
// //   {
// //     title: "Platform Science In-Cabin Monitoring",
// //     category: "Fleet Technology",
// //     description: "Advanced in-cabin monitoring solution with real-time tracking and performance analytics for fleet management.",
// //     fullDescription: "An advanced driver monitoring and fleet analytics platform that provides real-time insights into driver behavior and vehicle performance. Features include continuous monitoring, alerting systems, and comprehensive analytics dashboards for fleet managers.",
// //     icon: Smartphone,
// //     tags: ["Android", "Real-time", "Analytics"],
// //     technologies: ["Android SDK", "Real-time Data", "Analytics", "Background Services"],
// //     role: "Senior Engineer",
// //     color: "accent",
// //   },
// //   {
// //     title: "Finzapp Mobile Banking",
// //     category: "FinTech",
// //     description: "End-to-end mobile banking application developed independently. Complete SDLC from POC to HLD to LLD with formal sign-off.",
// //     fullDescription: "A complete mobile banking solution built from ground up, covering the entire software development lifecycle. Led the project from initial Proof of Concept through High-Level Design and Low-Level Design phases, ensuring proper documentation and stakeholder sign-offs at each milestone.",
// //     icon: CreditCard,
// //     tags: ["Banking", "Security", "SDLC"],
// //     technologies: ["Java", "Android SDK", "REST APIs", "Security Implementation", "Clean Architecture"],
// //     role: "Lead Developer",
// //     color: "primary",
// //   },
// //   {
// //     title: "AU 0101 Banking App",
// //     category: "Banking",
// //     description: "Major banking application with advanced security measures including OAuth, Session Token Authorization, and Appdome integration.",
// //     fullDescription: "Enterprise banking application for AU Small Finance Bank featuring comprehensive security implementations. Integrated OAuth 2.0 authentication, session token management, and Appdome security shield for protection against reverse engineering and runtime attacks.",
// //     icon: Building2,
// //     tags: ["Banking", "OAuth", "Appdome"],
// //     technologies: ["Kotlin", "MVVM", "OAuth 2.0", "Appdome", "Session Management", "Biometrics"],
// //     role: "Senior Software Engineer",
// //     color: "accent",
// //   },
// //   {
// //     title: "Axis Bank Mobile App",
// //     category: "Banking",
// //     description: "Enterprise banking solution with Promon AI-based security, ProGuard obfuscation, and Keystore validation.",
// //     fullDescription: "A robust mobile banking solution for Axis Bank incorporating AI-based security through Promon SHIELD. Implemented multiple layers of protection including ProGuard obfuscation, Keystore validation, and certificate pinning to ensure maximum security for financial transactions.",
// //     icon: Building2,
// //     tags: ["Banking", "Promon", "Security"],
// //     technologies: ["Kotlin", "Promon SHIELD", "ProGuard", "Keystore", "Certificate Pinning"],
// //     role: "Senior Software Engineer",
// //     color: "primary",
// //   },
// //   {
// //     title: "Qtanium Connect",
// //     category: "IoT Hybrid",
// //     description: "IoT-based hybrid mobile application built with PhoneGap and Telerik AppBuilder for cross-platform compatibility.",
// //     fullDescription: "A cross-platform IoT application connecting smart devices for home and industrial automation. Built using PhoneGap and Telerik AppBuilder to ensure compatibility across multiple platforms while maintaining native-like performance and user experience.",
// //     icon: Cpu,
// //     tags: ["IoT", "PhoneGap", "Telerik", "Hybrid"],
// //     technologies: ["PhoneGap", "Telerik AppBuilder", "JavaScript", "IoT Protocols", "Cross-platform"],
// //     role: "Software Engineer",
// //     color: "accent",
// //   },
// // ];

// // type Project = typeof projects[0];

// // const ProjectModal = ({ project, isOpen, onClose }: { project: Project | null; isOpen: boolean; onClose: () => void }) => {
// //   if (!project) return null;

// //   return (
// //     <Dialog open={isOpen} onOpenChange={onClose}>
// //       <DialogContent className="glass-card border-white/10 max-w-2xl">
// //         <DialogHeader>
// //           <div className="flex items-center gap-4 mb-4">
// //             <div className={`w-14 h-14 rounded-xl ${
// //               project.color === "primary" ? "bg-primary/10" : "bg-accent/10"
// //             } flex items-center justify-center`}>
// //               <project.icon className={project.color === "primary" ? "text-primary" : "text-accent"} size={28} />
// //             </div>
// //             <div>
// //               <span className={`text-xs font-medium ${
// //                 project.color === "primary" ? "text-primary" : "text-accent"
// //               }`}>
// //                 {project.category}
// //               </span>
// //               <DialogTitle className="text-2xl font-bold mt-1">{project.title}</DialogTitle>
// //             </div>
// //           </div>
// //           <DialogDescription className="sr-only">
// //             Detailed information about the {project.title} project
// //           </DialogDescription>
// //         </DialogHeader>
        
// //         <div className="space-y-6">
// //           <div>
// //             <h4 className="text-sm font-semibold text-primary mb-2">Role</h4>
// //             <p className="text-foreground">{project.role}</p>
// //           </div>
          
// //           <div>
// //             <h4 className="text-sm font-semibold text-primary mb-2">Overview</h4>
// //             <p className="text-muted-foreground leading-relaxed">{project.fullDescription}</p>
// //           </div>
          
// //           <div>
// //             <h4 className="text-sm font-semibold text-primary mb-3">Technologies Used</h4>
// //             <div className="flex flex-wrap gap-2">
// //               {project.technologies.map((tech) => (
// //                 <span
// //                   key={tech}
// //                   className={`px-3 py-1.5 text-sm rounded-lg ${
// //                     project.color === "primary" 
// //                       ? "bg-primary/10 text-primary border border-primary/20" 
// //                       : "bg-accent/10 text-accent border border-accent/20"
// //                   }`}
// //                 >
// //                   {tech}
// //                 </span>
// //               ))}
// //             </div>
// //           </div>
// //         </div>
// //       </DialogContent>
// //     </Dialog>
// //   );
// // };

// // // ✅ Memoized ProjectCard to prevent unnecessary re-renders
// // const ProjectCard = React.memo(({ project, index, onViewDetails }: { project: Project; index: number; onViewDetails: (project: Project) => void }) => {
// //   const ref = useRef(null);
// //   const isInView = useInView(ref, { once: true });

// //   return (
// //     <motion.div
// //       ref={ref}
// //       initial={{ opacity: 0, y: 50 }}
// //       animate={isInView ? { opacity: 1, y: 0 } : {}}
// //       transition={{ duration: 0.5, delay: index * 0.1 }}
// //       className="relative group"
// //     >
// //       <div className="glass-card p-6 rounded-2xl h-full relative overflow-hidden">
// //         {/* Glow Effect on Hover - non-interactive */}
// //         <div
// //           className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
// //             project.color === "primary" ? "bg-primary/5" : "bg-accent/5"
// //           } pointer-events-none`}
// //         />

// //         {/* Glass Reflection - non-interactive */}
// //         <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

// //         {/* Content */}
// //         <div className="relative z-10">
// //           <div className={`w-14 h-14 rounded-xl ${
// //             project.color === "primary" ? "bg-primary/10" : "bg-accent/10"
// //           } flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
// //             <project.icon className={project.color === "primary" ? "text-primary" : "text-accent"} size={28} />
// //           </div>

// //           <span className={`text-xs font-medium ${
// //             project.color === "primary" ? "text-primary" : "text-accent"
// //           }`}>
// //             {project.category}
// //           </span>

// //           <h3 className="text-xl font-bold mt-2 mb-3 group-hover:text-primary transition-colors">
// //             {project.title}
// //           </h3>

// //           <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
// //             {project.description}
// //           </p>

// //           <div className="flex flex-wrap gap-2 mb-4">
// //             {project.tags.map((tag) => (
// //               <span
// //                 key={tag}
// //                 className="px-2 py-1 text-xs rounded-md bg-secondary text-muted-foreground"
// //               >
// //                 {tag}
// //               </span>
// //             ))}
// //           </div>

// //           <button
// //             className={`flex items-center gap-2 text-sm font-medium ${
// //               project.color === "primary" ? "text-primary" : "text-accent"
// //             } hover:gap-3 transition-all`}
// //             onClick={() => onViewDetails(project)}
// //           >
// //             View Details
// //             <ExternalLink size={14} />
// //           </button>
// //         </div>
// //       </div>
// //     </motion.div>
// //   );
// // });

// // ProjectCard.displayName = 'ProjectCard';

// // const ProjectsSection = () => {
// //   const ref = useRef(null);
// //   const isInView = useInView(ref, { once: true, margin: "-100px" });
// //   const [selectedProject, setSelectedProject] = useState<Project | null>(null);

// //   return (
// //     <section id="projects" className="py-24 relative" ref={ref}>
// //       <div className="container mx-auto px-6">
// //         <motion.div
// //           initial={{ opacity: 0, y: 50 }}
// //           animate={isInView ? { opacity: 1, y: 0 } : {}}
// //           transition={{ duration: 0.6 }}
// //           className="text-center mb-16"
// //         >
// //           <h2 className="section-title">
// //             Featured <span className="gradient-text">Projects</span>
// //           </h2>
// //           <p className="section-subtitle mx-auto">
// //             Enterprise solutions crafted with precision and security in mind
// //           </p>
// //         </motion.div>

// //         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
// //           {projects.map((project, index) => (
// //             <ProjectCard 
// //               key={project.title} 
// //               project={project} 
// //               index={index} 
// //               onViewDetails={setSelectedProject}
// //             />
// //           ))}
// //         </div>
// //       </div>

// //       {/* ✅ Add key to stabilize modal identity */}
// //       <ProjectModal 
// //         key={selectedProject?.title || "modal"}
// //         project={selectedProject} 
// //         isOpen={!!selectedProject} 
// //         onClose={() => setSelectedProject(null)} 
// //       />
// //     </section>
// //   );
// // };

// // export default ProjectsSection;

// // import { motion } from "framer-motion";
// // import { useInView } from "framer-motion";
// // import { useRef, useState } from "react";
// // import { ExternalLink, Smartphone, Building2, Cpu, CreditCard } from "lucide-react";
// // import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

// // const projects = [
// //   {
// //     title: "Thermo King Connect",
// //     category: "IoT & Fleet Management",
// //     description: "Global refrigeration solutions app for Trane Technologies. Integrated React Native with native modules, Bluetooth & camera for secure proximity communication.",
// //     fullDescription: "A comprehensive fleet management solution developed for Trane Technologies, enabling real-time monitoring and control of refrigeration units worldwide. The application seamlessly integrates React Native with native Android modules, featuring advanced Bluetooth connectivity for proximity-based communication and camera integration for secure authentication. Performance optimization achieved through Android Profiler analysis.",
// //     icon: Cpu,
// //     tags: ["Kotlin", "React Native", "Bluetooth", "Camera"],
// //     technologies: ["Kotlin", "React Native", "Bluetooth LE", "Camera2 API", "Android Profiler", "Native Modules"],
// //     role: "Team Lead",
// //     color: "primary",
// //   },
// //   {
// //     title: "Platform Science In-Cabin Monitoring",
// //     category: "Fleet Technology",
// //     description: "Advanced in-cabin monitoring solution with real-time tracking and performance analytics for fleet management.",
// //     fullDescription: "An advanced driver monitoring and fleet analytics platform that provides real-time insights into driver behavior and vehicle performance. Features include continuous monitoring, alerting systems, and comprehensive analytics dashboards for fleet managers.",
// //     icon: Smartphone,
// //     tags: ["Android", "Real-time", "Analytics"],
// //     technologies: ["Android SDK", "Real-time Data", "Analytics", "Background Services"],
// //     role: "Senior Engineer",
// //     color: "accent",
// //   },
// //   {
// //     title: "Finzapp Mobile Banking",
// //     category: "FinTech",
// //     description: "End-to-end mobile banking application developed independently. Complete SDLC from POC to HLD to LLD with formal sign-off.",
// //     fullDescription: "A complete mobile banking solution built from ground up, covering the entire software development lifecycle. Led the project from initial Proof of Concept through High-Level Design and Low-Level Design phases, ensuring proper documentation and stakeholder sign-offs at each milestone.",
// //     icon: CreditCard,
// //     tags: ["Banking", "Security", "SDLC"],
// //     technologies: ["Java", "Android SDK", "REST APIs", "Security Implementation", "Clean Architecture"],
// //     role: "Lead Developer",
// //     color: "primary",
// //   },
// //   {
// //     title: "AU 0101 Banking App",
// //     category: "Banking",
// //     description: "Major banking application with advanced security measures including OAuth, Session Token Authorization, and Appdome integration.",
// //     fullDescription: "Enterprise banking application for AU Small Finance Bank featuring comprehensive security implementations. Integrated OAuth 2.0 authentication, session token management, and Appdome security shield for protection against reverse engineering and runtime attacks.",
// //     icon: Building2,
// //     tags: ["Banking", "OAuth", "Appdome"],
// //     technologies: ["Kotlin", "MVVM", "OAuth 2.0", "Appdome", "Session Management", "Biometrics"],
// //     role: "Senior Software Engineer",
// //     color: "accent",
// //   },
// //   {
// //     title: "Axis Bank Mobile App",
// //     category: "Banking",
// //     description: "Enterprise banking solution with Promon AI-based security, ProGuard obfuscation, and Keystore validation.",
// //     fullDescription: "A robust mobile banking solution for Axis Bank incorporating AI-based security through Promon SHIELD. Implemented multiple layers of protection including ProGuard obfuscation, Keystore validation, and certificate pinning to ensure maximum security for financial transactions.",
// //     icon: Building2,
// //     tags: ["Banking", "Promon", "Security"],
// //     technologies: ["Kotlin", "Promon SHIELD", "ProGuard", "Keystore", "Certificate Pinning"],
// //     role: "Senior Software Engineer",
// //     color: "primary",
// //   },
// //   {
// //     title: "Qtanium Connect",
// //     category: "IoT Hybrid",
// //     description: "IoT-based hybrid mobile application built with PhoneGap and Telerik AppBuilder for cross-platform compatibility.",
// //     fullDescription: "A cross-platform IoT application connecting smart devices for home and industrial automation. Built using PhoneGap and Telerik AppBuilder to ensure compatibility across multiple platforms while maintaining native-like performance and user experience.",
// //     icon: Cpu,
// //     tags: ["IoT", "PhoneGap", "Telerik", "Hybrid"],
// //     technologies: ["PhoneGap", "Telerik AppBuilder", "JavaScript", "IoT Protocols", "Cross-platform"],
// //     role: "Software Engineer",
// //     color: "accent",
// //   },
// // ];

// // type Project = typeof projects[0];

// // const ProjectModal = ({ project, isOpen, onClose }: { project: Project | null; isOpen: boolean; onClose: () => void }) => {
// //   if (!project) return null;

// //   return (
// //     <Dialog open={isOpen} onOpenChange={onClose}>
// //       <DialogContent className="glass-card border-white/10 max-w-2xl">
// //         <DialogHeader>
// //           <div className="flex items-center gap-4 mb-4">
// //             <div className={`w-14 h-14 rounded-xl ${
// //               project.color === "primary" ? "bg-primary/10" : "bg-accent/10"
// //             } flex items-center justify-center`}>
// //               <project.icon className={project.color === "primary" ? "text-primary" : "text-accent"} size={28} />
// //             </div>
// //             <div>
// //               <span className={`text-xs font-medium ${
// //                 project.color === "primary" ? "text-primary" : "text-accent"
// //               }`}>
// //                 {project.category}
// //               </span>
// //               <DialogTitle className="text-2xl font-bold mt-1">{project.title}</DialogTitle>
// //             </div>
// //           </div>
// //           <DialogDescription className="sr-only">
// //             Detailed information about the {project.title} project
// //           </DialogDescription>
// //         </DialogHeader>
        
// //         <div className="space-y-6">
// //           <div>
// //             <h4 className="text-sm font-semibold text-primary mb-2">Role</h4>
// //             <p className="text-foreground">{project.role}</p>
// //           </div>
          
// //           <div>
// //             <h4 className="text-sm font-semibold text-primary mb-2">Overview</h4>
// //             <p className="text-muted-foreground leading-relaxed">{project.fullDescription}</p>
// //           </div>
          
// //           <div>
// //             <h4 className="text-sm font-semibold text-primary mb-3">Technologies Used</h4>
// //             <div className="flex flex-wrap gap-2">
// //               {project.technologies.map((tech) => (
// //                 <span
// //                   key={tech}
// //                   className={`px-3 py-1.5 text-sm rounded-lg ${
// //                     project.color === "primary" 
// //                       ? "bg-primary/10 text-primary border border-primary/20" 
// //                       : "bg-accent/10 text-accent border border-accent/20"
// //                   }`}
// //                 >
// //                   {tech}
// //                 </span>
// //               ))}
// //             </div>
// //           </div>
// //         </div>
// //       </DialogContent>
// //     </Dialog>
// //   );
// // };

// // // ✅ Plain ProjectCard with NO hover effects
// // const ProjectCard = ({ project, index, onViewDetails }: { project: Project; index: number; onViewDetails: (project: Project) => void }) => {
// //   const ref = useRef(null);
// //   const isInView = useInView(ref, { once: true });

// //   return (
// //     <motion.div
// //       ref={ref}
// //       initial={{ opacity: 0, y: 50 }}
// //       animate={isInView ? { opacity: 1, y: 0 } : {}}
// //       transition={{ duration: 0.5, delay: index * 0.1 }}
// //       className="relative"
// //     >
// //       <div className="glass-card p-6 rounded-2xl h-full relative overflow-hidden">
// //         {/* Icon */}
// //         <div className={`w-14 h-14 rounded-xl ${
// //           project.color === "primary" ? "bg-primary/10" : "bg-accent/10"
// //         } flex items-center justify-center mb-4`}>
// //           <project.icon className={project.color === "primary" ? "text-primary" : "text-accent"} size={28} />
// //         </div>

// //         {/* Category */}
// //         <span className={`text-xs font-medium ${
// //           project.color === "primary" ? "text-primary" : "text-accent"
// //         }`}>
// //           {project.category}
// //         </span>

// //         {/* Title */}
// //         <h3 className="text-xl font-bold mt-2 mb-3">
// //           {project.title}
// //         </h3>

// //         {/* Description */}
// //         <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
// //           {project.description}
// //         </p>

// //         {/* Tags */}
// //         <div className="flex flex-wrap gap-2 mb-4">
// //           {project.tags.map((tag) => (
// //             <span
// //               key={tag}
// //               className="px-2 py-1 text-xs rounded-md bg-secondary text-muted-foreground"
// //             >
// //               {tag}
// //             </span>
// //           ))}
// //         </div>

// //         {/* Link - no hover animation */}
// //         <button
// //           className={`flex items-center gap-2 text-sm font-medium ${
// //             project.color === "primary" ? "text-primary" : "text-accent"
// //           }`}
// //           onClick={() => onViewDetails(project)}
// //         >
// //           View Details
// //           <ExternalLink size={14} />
// //         </button>
// //       </div>
// //     </motion.div>
// //   );
// // };

// // const ProjectsSection = () => {
// //   const ref = useRef(null);
// //   const isInView = useInView(ref, { once: true, margin: "-100px" });
// //   const [selectedProject, setSelectedProject] = useState<Project | null>(null);
// // const [modalKey, setModalKey] = useState(0);
// //  const handleViewDetails = (project: Project) => {
// //     setSelectedProject(project);
// //     setModalKey(prev => prev + 1); // 👈 Force re-mount with new key
// //   };
// //   return (
// //     <section id="projects" className="py-24 relative" ref={ref}>
// //       <div className="container mx-auto px-6">
// //         <motion.div
// //           initial={{ opacity: 0, y: 50 }}
// //           animate={isInView ? { opacity: 1, y: 0 } : {}}
// //           transition={{ duration: 0.6 }}
// //           className="text-center mb-16"
// //         >
// //           <h2 className="section-title">
// //             Featured <span className="gradient-text">Projects</span>
// //           </h2>
// //           <p className="section-subtitle mx-auto">
// //             Enterprise solutions crafted with precision and security in mind
// //           </p>
// //         </motion.div>

// //         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
// //           {projects.map((project, index) => (
// //             <ProjectCard 
// //               key={project.title} 
// //               project={project} 
// //               index={index} 
// //               onViewDetails={handleViewDetails}
// //             />
// //           ))}
// //         </div>
// //       </div>

// //       <ProjectModal 
// //         key={`modal-${modalKey}`} // 👈 Unique key per open
// //         project={selectedProject} 
// //         isOpen={!!selectedProject} 
// //         onClose={() => {
// //           setSelectedProject(null);
// //           setModalKey(0); // Optional: reset for next open
// //         }} 
// //       />
// //     </section>
// //   );
// // };

// // export default ProjectsSection;

// // import { motion } from "framer-motion";
// // import { useInView } from "framer-motion";
// // import { useRef, useState, useEffect } from "react";
// // import { ExternalLink, Smartphone, Building2, Cpu, CreditCard } from "lucide-react";
// // import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";

// // const projects = [
// //   {
// //     title: "Thermo King Connect",
// //     category: "IoT & Fleet Management",
// //     description: "Global refrigeration solutions app for Trane Technologies. Integrated React Native with native modules, Bluetooth & camera for secure proximity communication.",
// //     fullDescription: "A comprehensive fleet management solution developed for Trane Technologies, enabling real-time monitoring and control of refrigeration units worldwide. The application seamlessly integrates React Native with native Android modules, featuring advanced Bluetooth connectivity for proximity-based communication and camera integration for secure authentication. Performance optimization achieved through Android Profiler analysis.",
// //     icon: Cpu,
// //     tags: ["Kotlin", "React Native", "Bluetooth", "Camera"],
// //     technologies: ["Kotlin", "React Native", "Bluetooth LE", "Camera2 API", "Android Profiler", "Native Modules"],
// //     role: "Team Lead",
// //     color: "primary",
// //   },
// //   {
// //     title: "Platform Science In-Cabin Monitoring",
// //     category: "Fleet Technology",
// //     description: "Advanced in-cabin monitoring solution with real-time tracking and performance analytics for fleet management.",
// //     fullDescription: "An advanced driver monitoring and fleet analytics platform that provides real-time insights into driver behavior and vehicle performance. Features include continuous monitoring, alerting systems, and comprehensive analytics dashboards for fleet managers.",
// //     icon: Smartphone,
// //     tags: ["Android", "Real-time", "Analytics"],
// //     technologies: ["Android SDK", "Real-time Data", "Analytics", "Background Services"],
// //     role: "Senior Engineer",
// //     color: "accent",
// //   },
// //   {
// //     title: "Finzapp Mobile Banking",
// //     category: "FinTech",
// //     description: "End-to-end mobile banking application developed independently. Complete SDLC from POC to HLD to LLD with formal sign-off.",
// //     fullDescription: "A complete mobile banking solution built from ground up, covering the entire software development lifecycle. Led the project from initial Proof of Concept through High-Level Design and Low-Level Design phases, ensuring proper documentation and stakeholder sign-offs at each milestone.",
// //     icon: CreditCard,
// //     tags: ["Banking", "Security", "SDLC"],
// //     technologies: ["Java", "Android SDK", "REST APIs", "Security Implementation", "Clean Architecture"],
// //     role: "Lead Developer",
// //     color: "primary",
// //   },
// //   {
// //     title: "AU 0101 Banking App",
// //     category: "Banking",
// //     description: "Major banking application with advanced security measures including OAuth, Session Token Authorization, and Appdome integration.",
// //     fullDescription: "Enterprise banking application for AU Small Finance Bank featuring comprehensive security implementations. Integrated OAuth 2.0 authentication, session token management, and Appdome security shield for protection against reverse engineering and runtime attacks.",
// //     icon: Building2,
// //     tags: ["Banking", "OAuth", "Appdome"],
// //     technologies: ["Kotlin", "MVVM", "OAuth 2.0", "Appdome", "Session Management", "Biometrics"],
// //     role: "Senior Software Engineer",
// //     color: "accent",
// //   },
// //   {
// //     title: "Axis Bank Mobile App",
// //     category: "Banking",
// //     description: "Enterprise banking solution with Promon AI-based security, ProGuard obfuscation, and Keystore validation.",
// //     fullDescription: "A robust mobile banking solution for Axis Bank incorporating AI-based security through Promon SHIELD. Implemented multiple layers of protection including ProGuard obfuscation, Keystore validation, and certificate pinning to ensure maximum security for financial transactions.",
// //     icon: Building2,
// //     tags: ["Banking", "Promon", "Security"],
// //     technologies: ["Kotlin", "Promon SHIELD", "ProGuard", "Keystore", "Certificate Pinning"],
// //     role: "Senior Software Engineer",
// //     color: "primary",
// //   },
// //   {
// //     title: "Qtanium Connect",
// //     category: "IoT Hybrid",
// //     description: "IoT-based hybrid mobile application built with PhoneGap and Telerik AppBuilder for cross-platform compatibility.",
// //     fullDescription: "A cross-platform IoT application connecting smart devices for home and industrial automation. Built using PhoneGap and Telerik AppBuilder to ensure compatibility across multiple platforms while maintaining native-like performance and user experience.",
// //     icon: Cpu,
// //     tags: ["IoT", "PhoneGap", "Telerik", "Hybrid"],
// //     technologies: ["PhoneGap", "Telerik AppBuilder", "JavaScript", "IoT Protocols", "Cross-platform"],
// //     role: "Software Engineer",
// //     color: "accent",
// //   },
// // ];

// // type Project = typeof projects[0];

// // const ProjectModal = ({ project, isOpen, onClose }: { project: Project | null; isOpen: boolean; onClose: () => void }) => {
// //   if (!project) return null;

// //   return (
// //     <Dialog open={isOpen} onOpenChange={onClose}>
// //       <DialogContent className="glass-card border-white/10 max-w-2xl pointer-events-none">
// //         {/* ✅ Explicit close button — since removed from DialogContent */}
// //         <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none">
// //           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
// //           <span className="sr-only">Close</span>
// //         </DialogClose>

// //         <DialogHeader>
// //           <div className="flex items-center gap-4 mb-4">
// //             <div className={`w-14 h-14 rounded-xl ${
// //               project.color === "primary" ? "bg-primary/10" : "bg-accent/10"
// //             } flex items-center justify-center`}>
// //               <project.icon className={project.color === "primary" ? "text-primary" : "text-accent"} size={28} />
// //             </div>
// //             <div>
// //               <span className={`text-xs font-medium ${
// //                 project.color === "primary" ? "text-primary" : "text-accent"
// //               }`}>
// //                 {project.category}
// //               </span>
// //               <DialogTitle className="text-2xl font-bold mt-1">{project.title}</DialogTitle>
// //             </div>
// //           </div>
// //           <DialogDescription className="sr-only">
// //             Detailed information about the {project.title} project
// //           </DialogDescription>
// //         </DialogHeader>
        
// //         <div className="space-y-6">
// //           <div>
// //             <h4 className="text-sm font-semibold text-primary mb-2">Role</h4>
// //             <p className="text-foreground">{project.role}</p>
// //           </div>
          
// //           <div>
// //             <h4 className="text-sm font-semibold text-primary mb-2">Overview</h4>
// //             <p className="text-muted-foreground leading-relaxed">{project.fullDescription}</p>
// //           </div>
          
// //           <div>
// //             <h4 className="text-sm font-semibold text-primary mb-3">Technologies Used</h4>
// //             <div className="flex flex-wrap gap-2">
// //               {project.technologies.map((tech) => (
// //                 <span
// //                   key={tech}
// //                   className={`px-3 py-1.5 text-sm rounded-lg ${
// //                     project.color === "primary" 
// //                       ? "bg-primary/10 text-primary border border-primary/20" 
// //                       : "bg-accent/10 text-accent border border-accent/20"
// //                   }`}
// //                 >
// //                   {tech}
// //                 </span>
// //               ))}
// //             </div>
// //           </div>
// //         </div>
// //       </DialogContent>
// //     </Dialog>
// //   );
// // };

// // const ProjectCard = ({ project, index, onViewDetails }: { project: Project; index: number; onViewDetails: (project: Project) => void }) => {
// //   const ref = useRef(null);
// //   const isInView = useInView(ref, { once: true });

// //   return (
// //     <motion.div
// //       ref={ref}
// //       initial={{ opacity: 0, y: 50 }}
// //       animate={isInView ? { opacity: 1, y: 0 } : {}}
// //       transition={{ duration: 0.5, delay: index * 0.1 }}
// //       className="relative"
// //     >
// //       <div className="glass-card p-6 rounded-2xl h-full relative overflow-hidden">
// //         <div className={`w-14 h-14 rounded-xl ${
// //           project.color === "primary" ? "bg-primary/10" : "bg-accent/10"
// //         } flex items-center justify-center mb-4`}>
// //           <project.icon className={project.color === "primary" ? "text-primary" : "text-accent"} size={28} />
// //         </div>

// //         <span className={`text-xs font-medium ${
// //           project.color === "primary" ? "text-primary" : "text-accent"
// //         }`}>
// //           {project.category}
// //         </span>

// //         <h3 className="text-xl font-bold mt-2 mb-3">
// //           {project.title}
// //         </h3>

// //         <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
// //           {project.description}
// //         </p>

// //         <div className="flex flex-wrap gap-2 mb-4">
// //           {project.tags.map((tag) => (
// //             <span
// //               key={tag}
// //               className="px-2 py-1 text-xs rounded-md bg-secondary text-muted-foreground"
// //             >
// //               {tag}
// //             </span>
// //           ))}
// //         </div>

// //         <button
// //           className={`flex items-center gap-2 text-sm font-medium ${
// //             project.color === "primary" ? "text-primary" : "text-accent"
// //           }`}
// //           onClick={() => onViewDetails(project)}
// //         >
// //           View Details
// //           <ExternalLink size={14} />
// //         </button>
// //       </div>
// //     </motion.div>
// //   );
// // };

// // const ProjectsSection = () => {
// //   const ref = useRef(null);
// //   const isInView = useInView(ref, { once: true, margin: "-100px" });
// //   const [selectedProject, setSelectedProject] = useState<Project | null>(null);
// //   // const [modalKey, setModalKey] = useState(0);

// //   // 🔒 Lock body scroll when modal is open
// //   // useEffect(() => {
// //   //   if (selectedProject) {
// //   //     document.body.style.overflow = 'hidden';
// //   //   } else {
// //   //     document.body.style.overflow = '';
// //   //   }

// //   //   return () => {
// //   //     document.body.style.overflow = '';
// //   //   };
// //   // }, [selectedProject]);

// //   const handleViewDetails = (project: Project) => {
// //     setSelectedProject(project);
// //     // setModalKey(prev => prev + 1);
// //   };

// //   return (
// //     <>
// //       {/* 👇 Main content section — no modal inside */}
// //       <section id="projects" className="py-24 relative" ref={ref}>
// //         <div className="container mx-auto px-6">
// //           <motion.div
// //             initial={{ opacity: 0, y: 50 }}
// //             animate={isInView ? { opacity: 1, y: 0 } : {}}
// //             transition={{ duration: 0.6 }}
// //             className="text-center mb-16"
// //           >
// //             <h2 className="section-title">
// //               Featured <span className="gradient-text">Projects</span>
// //             </h2>
// //             <p className="section-subtitle mx-auto">
// //               Enterprise solutions crafted with precision and security in mind
// //             </p>
// //           </motion.div>

// //           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
// //             {projects.map((project, index) => (
// //               <ProjectCard 
// //                 key={project.title} 
// //                 project={project} 
// //                 index={index} 
// //                 onViewDetails={handleViewDetails}
// //               />
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* ✅ Modal rendered as sibling — outside animated section */}
// //       <ProjectModal 
// //         // key={`modal-${modalKey}`}
// //         project={selectedProject} 
// //         isOpen={!!selectedProject} 
// //         onClose={() => {
// //           setSelectedProject(null);
// //           // setModalKey(0);
// //         }} 
// //       />
// //     </>
// //   );
// // };

// // export default ProjectsSection;

// import { useRef, useState } from "react";
// import { ExternalLink, Smartphone, Building2, Cpu, CreditCard } from "lucide-react";
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";

// // ✅ CRITICAL: RESTORED PROJECTS ARRAY (was missing in previous version)
// const projects = [
//   {
//     title: "Thermo King Connect",
//     category: "IoT & Fleet Management",
//     description: "Global refrigeration solutions app for Trane Technologies. Integrated React Native with native modules, Bluetooth & camera for secure proximity communication.",
//     fullDescription: "A comprehensive fleet management solution developed for Trane Technologies, enabling real-time monitoring and control of refrigeration units worldwide. The application seamlessly integrates React Native with native Android modules, featuring advanced Bluetooth connectivity for proximity-based communication and camera integration for secure authentication. Performance optimization achieved through Android Profiler analysis.",
//     icon: Cpu,
//     tags: ["Kotlin", "React Native", "Bluetooth", "Camera"],
//     technologies: ["Kotlin", "React Native", "Bluetooth LE", "Camera2 API", "Android Profiler", "Native Modules"],
//     role: "Team Lead",
//     color: "primary",
//   },
//   {
//     title: "Platform Science In-Cabin Monitoring",
//     category: "Fleet Technology",
//     description: "Advanced in-cabin monitoring solution with real-time tracking and performance analytics for fleet management.",
//     fullDescription: "An advanced driver monitoring and fleet analytics platform that provides real-time insights into driver behavior and vehicle performance. Features include continuous monitoring, alerting systems, and comprehensive analytics dashboards for fleet managers.",
//     icon: Smartphone,
//     tags: ["Android", "Real-time", "Analytics"],
//     technologies: ["Android SDK", "Real-time Data", "Analytics", "Background Services"],
//     role: "Senior Engineer",
//     color: "accent",
//   },
//   {
//     title: "Finzapp Mobile Banking",
//     category: "FinTech",
//     description: "End-to-end mobile banking application developed independently. Complete SDLC from POC to HLD to LLD with formal sign-off.",
//     fullDescription: "A complete mobile banking solution built from ground up, covering the entire software development lifecycle. Led the project from initial Proof of Concept through High-Level Design and Low-Level Design phases, ensuring proper documentation and stakeholder sign-offs at each milestone.",
//     icon: CreditCard,
//     tags: ["Banking", "Security", "SDLC"],
//     technologies: ["Java", "Android SDK", "REST APIs", "Security Implementation", "Clean Architecture"],
//     role: "Lead Developer",
//     color: "primary",
//   },
//   {
//     title: "AU 0101 Banking App",
//     category: "Banking",
//     description: "Major banking application with advanced security measures including OAuth, Session Token Authorization, and Appdome integration.",
//     fullDescription: "Enterprise banking application for AU Small Finance Bank featuring comprehensive security implementations. Integrated OAuth 2.0 authentication, session token management, and Appdome security shield for protection against reverse engineering and runtime attacks.",
//     icon: Building2,
//     tags: ["Banking", "OAuth", "Appdome"],
//     technologies: ["Kotlin", "MVVM", "OAuth 2.0", "Appdome", "Session Management", "Biometrics"],
//     role: "Senior Software Engineer",
//     color: "accent",
//   },
//   {
//     title: "Axis Bank Mobile App",
//     category: "Banking",
//     description: "Enterprise banking solution with Promon AI-based security, ProGuard obfuscation, and Keystore validation.",
//     fullDescription: "A robust mobile banking solution for Axis Bank incorporating AI-based security through Promon SHIELD. Implemented multiple layers of protection including ProGuard obfuscation, Keystore validation, and certificate pinning to ensure maximum security for financial transactions.",
//     icon: Building2,
//     tags: ["Banking", "Promon", "Security"],
//     technologies: ["Kotlin", "Promon SHIELD", "ProGuard", "Keystore", "Certificate Pinning"],
//     role: "Senior Software Engineer",
//     color: "primary",
//   },
//   {
//     title: "Qtanium Connect",
//     category: "IoT Hybrid",
//     description: "IoT-based hybrid mobile application built with PhoneGap and Telerik AppBuilder for cross-platform compatibility.",
//     fullDescription: "A cross-platform IoT application connecting smart devices for home and industrial automation. Built using PhoneGap and Telerik AppBuilder to ensure compatibility across multiple platforms while maintaining native-like performance and user experience.",
//     icon: Cpu,
//     tags: ["IoT", "PhoneGap", "Telerik", "Hybrid"],
//     technologies: ["PhoneGap", "Telerik AppBuilder", "JavaScript", "IoT Protocols", "Cross-platform"],
//     role: "Software Engineer",
//     color: "accent",
//   },
// ];

// type Project = typeof projects[0];

// const ProjectModal = ({ project, isOpen, onClose }: { project: Project | null; isOpen: boolean; onClose: () => void }) => {
//   if (!project) return null;

//   return (
//     <Dialog open={isOpen} onOpenChange={onClose}>
//       <DialogContent className="glass-card border-white/10 max-w-2xl">
//         <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
//           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//             <line x1="18" y1="6" x2="6" y2="18"></line>
//             <line x1="6" y1="6" x2="18" y2="18"></line>
//           </svg>
//           <span className="sr-only">Close</span>
//         </DialogClose>

//         <DialogHeader>
//           <div className="flex items-center gap-4 mb-4">
//             <div className={`w-14 h-14 rounded-xl ${
//               project.color === "primary" ? "bg-primary/10" : "bg-accent/10"
//             } flex items-center justify-center`}>
//               <project.icon className={project.color === "primary" ? "text-primary" : "text-accent"} size={28} />
//             </div>
//             <div>
//               <span className={`text-xs font-medium ${
//                 project.color === "primary" ? "text-primary" : "text-accent"
//               }`}>
//                 {project.category}
//               </span>
//               <DialogTitle className="text-2xl font-bold mt-1">{project.title}</DialogTitle>
//             </div>
//           </div>
//           <DialogDescription className="sr-only">
//             Detailed information about the {project.title} project
//           </DialogDescription>
//         </DialogHeader>
        
//         <div className="space-y-6">
//           <div>
//             <h4 className="text-sm font-semibold text-primary mb-2">Role</h4>
//             <p className="text-foreground">{project.role}</p>
//           </div>
          
//           <div>
//             <h4 className="text-sm font-semibold text-primary mb-2">Overview</h4>
//             <p className="text-muted-foreground leading-relaxed">{project.fullDescription}</p>
//           </div>
          
//           <div>
//             <h4 className="text-sm font-semibold text-primary mb-3">Technologies Used</h4>
//             <div className="flex flex-wrap gap-2">
//               {project.technologies.map((tech) => (
//                 <span
//                   key={tech}
//                   className={`px-3 py-1.5 text-sm rounded-lg ${
//                     project.color === "primary" 
//                       ? "bg-primary/10 text-primary border border-primary/20" 
//                       : "bg-accent/10 text-accent border border-accent/20"
//                   }`}
//                 >
//                   {tech}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </div>
//       </DialogContent>
//     </Dialog>
//   );
// };

// // ✅ COMPLETELY STATIC CARD - NO MOTION DEPENDENCIES
// const ProjectCard = ({ project, onViewDetails }: { project: Project; onViewDetails: (project: Project) => void }) => {
//   return (
//     <div className="relative">
//       <div className="glass-card p-6 rounded-2xl h-full relative overflow-hidden">
//         <div className={`w-14 h-14 rounded-xl ${
//           project.color === "primary" ? "bg-primary/10" : "bg-accent/10"
//         } flex items-center justify-center mb-4`}>
//           <project.icon className={project.color === "primary" ? "text-primary" : "text-accent"} size={28} />
//         </div>

//         <span className={`text-xs font-medium ${
//           project.color === "primary" ? "text-primary" : "text-accent"
//         }`}>
//           {project.category}
//         </span>

//         <h3 className="text-xl font-bold mt-2 mb-3">
//           {project.title}
//         </h3>

//         <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
//           {project.description}
//         </p>

//         <div className="flex flex-wrap gap-2 mb-4">
//           {project.tags.map((tag) => (
//             <span
//               key={tag}
//               className="px-2 py-1 text-xs rounded-md bg-secondary text-muted-foreground"
//             >
//               {tag}
//             </span>
//           ))}
//         </div>

//         <button
//           className={`flex items-center gap-2 text-sm font-medium ${
//             project.color === "primary" ? "text-primary" : "text-accent"
//           }`}
//           onClick={() => onViewDetails(project)}
//         >
//           View Details
//           <ExternalLink size={14} />
//         </button>
//       </div>
//     </div>
//   );
// };

// const ProjectsSection = () => {
//   const [selectedProject, setSelectedProject] = useState<Project | null>(null);

//   const handleViewDetails = (project: Project) => {
//     setSelectedProject(project);
//   };

//   return (
//     <>
//       {/* ✅ STATIC SECTION - ZERO ANIMATIONS */}
//       <section id="projects" className="py-24 relative">
//         <div className="container mx-auto px-6">
//           <div className="text-center mb-16">
//             <h2 className="section-title">
//               Featured <span className="gradient-text">Projects</span>
//             </h2>
//             <p className="section-subtitle mx-auto">
//               Enterprise solutions crafted with precision and security in mind
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {projects.map((project) => (
//               <ProjectCard 
//                 key={project.title} 
//                 project={project} 
//                 onViewDetails={handleViewDetails}
//               />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ✅ MODAL HANDLED BY shadcn/ui (no framer-motion dependencies in our code) */}
//       <ProjectModal 
//         project={selectedProject} 
//         isOpen={!!selectedProject} 
//         onClose={() => setSelectedProject(null)} 
//       />
//     </>
//   );
// };

// export default ProjectsSection;

// ProjectsSection.tsx
import { useState, useEffect } from "react";
import { ExternalLink, Smartphone, Building2, Cpu, CreditCard } from "lucide-react";

// ✅ CRITICAL: FULL PROJECTS ARRAY RESTORED (NO MISSING DATA)
const projects = [
  {
    title: "Thermo King Connect",
    category: "IoT & Fleet Management",
    description: "Global refrigeration solutions app for Trane Technologies. Integrated React Native with native modules, Bluetooth & camera for secure proximity communication.",
    fullDescription: "A comprehensive fleet management solution developed for Trane Technologies, enabling real-time monitoring and control of refrigeration units worldwide. The application seamlessly integrates React Native with native Android modules, featuring advanced Bluetooth connectivity for proximity-based communication and camera integration for secure authentication. Performance optimization achieved through Android Profiler analysis.",
    icon: Cpu,
    tags: ["Kotlin", "React Native", "Bluetooth", "Camera"],
    technologies: ["Kotlin", "React Native", "Bluetooth LE", "Camera2 API", "Android Profiler", "Native Modules"],
    role: "Team Lead",
    color: "primary",
  },
  {
    title: "Platform Science In-Cabin Monitoring",
    category: "Fleet Technology",
    description: "Advanced in-cabin monitoring solution with real-time tracking and performance analytics for fleet management.",
    fullDescription: "An advanced driver monitoring and fleet analytics platform that provides real-time insights into driver behavior and vehicle performance. Features include continuous monitoring, alerting systems, and comprehensive analytics dashboards for fleet managers.",
    icon: Smartphone,
    tags: ["Android", "Real-time", "Analytics"],
    technologies: ["Android SDK", "Real-time Data", "Analytics", "Background Services"],
    role: "Senior Engineer",
    color: "accent",
  },
  {
    title: "Finzapp Mobile Banking",
    category: "FinTech",
    description: "End-to-end mobile banking application developed independently. Complete SDLC from POC to HLD to LLD with formal sign-off.",
    fullDescription: "A complete mobile banking solution built from ground up, covering the entire software development lifecycle. Led the project from initial Proof of Concept through High-Level Design and Low-Level Design phases, ensuring proper documentation and stakeholder sign-offs at each milestone.",
    icon: CreditCard,
    tags: ["Banking", "Security", "SDLC"],
    technologies: ["Java", "Android SDK", "REST APIs", "Security Implementation", "Clean Architecture"],
    role: "Lead Developer",
    color: "primary",
  },
  {
    title: "AU 0101 Banking App",
    category: "Banking",
    description: "Major banking application with advanced security measures including OAuth, Session Token Authorization, and Appdome integration.",
    fullDescription: "Enterprise banking application for AU Small Finance Bank featuring comprehensive security implementations. Integrated OAuth 2.0 authentication, session token management, and Appdome security shield for protection against reverse engineering and runtime attacks.",
    icon: Building2,
    tags: ["Banking", "OAuth", "Appdome"],
    technologies: ["Kotlin", "MVVM", "OAuth 2.0", "Appdome", "Session Management", "Biometrics"],
    role: "Senior Software Engineer",
    color: "accent",
  },
  {
    title: "Axis Bank Mobile App",
    category: "Banking",
    description: "Enterprise banking solution with Promon AI-based security, ProGuard obfuscation, and Keystore validation.",
    fullDescription: "A robust mobile banking solution for Axis Bank incorporating AI-based security through Promon SHIELD. Implemented multiple layers of protection including ProGuard obfuscation, Keystore validation, and certificate pinning to ensure maximum security for financial transactions.",
    icon: Building2,
    tags: ["Banking", "Promon", "Security"],
    technologies: ["Kotlin", "Promon SHIELD", "ProGuard", "Keystore", "Certificate Pinning"],
    role: "Senior Software Engineer",
    color: "primary",
  },
  {
    title: "Qtanium Connect",
    category: "IoT Hybrid",
    description: "IoT-based hybrid mobile application built with PhoneGap and Telerik AppBuilder for cross-platform compatibility.",
    fullDescription: "A cross-platform IoT application connecting smart devices for home and industrial automation. Built using PhoneGap and Telerik AppBuilder to ensure compatibility across multiple platforms while maintaining native-like performance and user experience.",
    icon: Cpu,
    tags: ["IoT", "PhoneGap", "Telerik", "Hybrid"],
    technologies: ["PhoneGap", "Telerik AppBuilder", "JavaScript", "IoT Protocols", "Cross-platform"],
    role: "Software Engineer",
    color: "accent",
  },
];

type Project = typeof projects[0];

// ✅ ZERO-ANIMATION CUSTOM MODAL (REPLACES shadcn/ui Dialog)
const ProjectModal = ({ project, onClose }: { project: Project | null; onClose: () => void }) => {
  // Handle escape key
  useEffect(() => {
    if (!project) return;
    
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby={`modal-title-${project.title}`}
    >
      <div 
        className="glass-card border-white/10 max-w-2xl w-full bg-[#0f172a] rounded-2xl relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-sm opacity-70 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label="Close project details"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {/* Header */}
        <div className="px-6 pt-6 pb-4">
          <div className="flex items-center gap-4 mb-4">
            <div className={`w-14 h-14 rounded-xl ${
              project.color === "primary" ? "bg-primary/10" : "bg-accent/10"
            } flex items-center justify-center`}>
              <project.icon className={project.color === "primary" ? "text-primary" : "text-accent"} size={28} />
            </div>
            <div>
              <span className={`text-xs font-medium ${
                project.color === "primary" ? "text-primary" : "text-accent"
              }`}>
                {project.category}
              </span>
              <h2 
                id={`modal-title-${project.title}`}
                className="text-2xl font-bold mt-1 text-foreground"
              >
                {project.title}
              </h2>
            </div>
          </div>
        </div>
        
        {/* Content */}
        <div className="px-6 pb-6 space-y-6 max-h-[70vh] overflow-y-auto">
          <div>
            <h3 className="text-sm font-semibold text-primary mb-2">Role</h3>
            <p className="text-foreground">{project.role}</p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-primary mb-2">Overview</h3>
            <p className="text-muted-foreground leading-relaxed">{project.fullDescription}</p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-primary mb-3">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className={`px-3 py-1.5 text-sm rounded-lg ${
                    project.color === "primary" 
                      ? "bg-primary/10 text-primary border border-primary/20" 
                      : "bg-accent/10 text-accent border border-accent/20"
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ✅ STATIC PROJECT CARD (ZERO ANIMATIONS)
const ProjectCard = ({ project, onViewDetails }: { project: Project; onViewDetails: (project: Project) => void }) => {
  return (
    <div className="relative">
      <div className="glass-card p-6 rounded-2xl h-full relative overflow-hidden border border-white/5 hover:border-white/10 transition-colors">
        <div className={`w-14 h-14 rounded-xl ${
          project.color === "primary" ? "bg-primary/10" : "bg-accent/10"
        } flex items-center justify-center mb-4`}>
          <project.icon className={project.color === "primary" ? "text-primary" : "text-accent"} size={28} />
        </div>

        <span className={`text-xs font-medium ${
          project.color === "primary" ? "text-primary" : "text-accent"
        }`}>
          {project.category}
        </span>

        <h3 className="text-xl font-bold mt-2 mb-3 text-foreground">{project.title}</h3>

        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs rounded-md bg-secondary/50 text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        <button
          className={`flex items-center gap-2 text-sm font-medium ${
            project.color === "primary" ? "text-primary hover:text-primary/90" : "text-accent hover:text-accent/90"
          } transition-colors`}
          onClick={() => onViewDetails(project)}
          aria-label={`View details for ${project.title}`}
        >
          View Details
          <ExternalLink size={14} />
        </button>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isClient, setIsClient] = useState(false);

  // ✅ SSR-SAFE CLIENT CHECK
  useEffect(() => {
    setIsClient(true);
  }, []);

  // ✅ BODY SCROLL LOCK (NO COMMENTED CODE)
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  return (
    <>
      <section id="projects" className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-title">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Enterprise solutions crafted with precision and security in mind
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard 
                key={project.title} 
                project={project} 
                onViewDetails={() => setSelectedProject(project)} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* ✅ SSR-SAFE MODAL RENDERING */}
      {isClient && selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </>
  );
};

export default ProjectsSection;