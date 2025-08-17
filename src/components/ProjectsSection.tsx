import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const projects = [
    {
      id: 1,
      title: "PRIME SHOP",
      description: "Interactive e-commerce platform with real-time analytics and dynamic product visualization. Built for a leading retail brand.",
      technologies: ["HTML", "CSS", "JAVASCRIPT"],
      color: "cyan",
      liveUrl: "https://k-saran.github.io/PRIME-SHOP/index.html",
      githubUrl: "https://github.com/K-Saran/PRIME-SHOP.git"
    },
    {
      id: 2,
      title: "MEMORY SEQUENCE GAME",
      description: "Engaging memory sequence game with animated transitions. Features multiple difficulty levels and user tracking.",
      technologies: ["HTML", "CSS", "JAVASCRIPT"],
      color: "magenta",
      liveUrl: "https://k-saran.github.io/MEMORY-SQUENCE-GAME",
      githubUrl: "https://github.com/K-Saran/MEMORY-SQUENCE-GAME"
    },
    {
      id: 3,
      title: "MEMORY MATCHING GAME",
      description: "It is a simple two player game where players take turns to flip two cards at a time, trying to find matching pairs. The game ends when all pairs are found.",
      technologies: ["HTML", "CSS", "JAVASCRIPT"],
      color: "purple",
      liveUrl: "https://k-saran.github.io/MEMORY-CARDFLIP-GAME",
      githubUrl: "https://github.com/K-Saran/MEMORY-CARDFLIP-GAME"
    },
    {
      id: 4,
      title: "WEATHER APP",
      description: "Real-time weather application with geolocation support. Fetches data from a public API and displays current conditions and forecasts.",
      technologies: ["HTML", "CSS", "JAVASCRIPT"],
      color: "cyan                ",
      liveUrl: "https://k-saran.github.io/WEATHER-APP",
      githubUrl: "https://github.com/K-Saran/WEATHER-APP"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-10" />
      
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold neon-text-magenta mb-4 flicker-subtle">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my latest work in web development, design, and digital experiences
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-magenta to-neon-purple mx-auto mt-6 glow-magenta" />
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.03, 
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className={`group bg-card/40 backdrop-blur-lg rounded-lg overflow-hidden neon-border-${project.color} hover-glow-${project.color} card-3d relative`}
            >
              {/* Project Image Placeholder */}
              <div className={`h-48 bg-gradient-to-br from-neon-${project.color} to-background/20 relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
                    className={`w-16 h-16 bg-neon-${project.color} rounded-full flex items-center justify-center text-2xl font-bold text-background`}
                  >
                    {project.id}
                  </motion.div>
                </div>
                
               {/* Overlay with links */}
<div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
  {/* Live Demo Icon */}
  <motion.a
    href={project.liveUrl}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className={`p-3 bg-neon-${project.color} text-background rounded-full hover-glow-${project.color} transition-all duration-300`}
  >
    <ExternalLink size={20} />
  </motion.a>

  {/* Github Icon */}
  <motion.a
    href={project.githubUrl}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className={`p-3 border-2 border-neon-${project.color} text-neon-${project.color} rounded-full hover-glow-${project.color} transition-all duration-300`}
  >
    <Github size={18} />
  </motion.a>
</div>


              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <h3 className={`text-xl font-bold neon-text-${project.color} group-hover:flicker`}>
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: index * 0.1 + techIndex * 0.05 + 0.7 }}
                      className="px-3 py-1 bg-muted/30 border border-muted rounded-full text-xs font-medium text-foreground hover:border-primary transition-colors"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

              {/* Action Buttons */}
<div className="flex space-x-3 pt-4">
  {/* Live Demo */}
  <motion.a
    href={project.liveUrl}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={`flex-1 px-4 py-2 bg-neon-${project.color} text-background rounded-lg text-center text-sm font-medium hover:shadow-lg transition-all duration-300`}
  >
    Live Demo
  </motion.a>

  {/* Code */}
  <motion.a
    href={project.githubUrl}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={`flex-1 px-4 py-2 border-2 border-neon-${project.color} text-neon-${project.color} rounded-lg text-center text-sm font-medium hover-glow-${project.color} transition-all duration-300`}
  >
    Code
  </motion.a>
</div>

              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-transparent border-2 border-neon-cyan text-neon-cyan rounded-lg hover-glow-cyan transition-all duration-300 font-medium"
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};