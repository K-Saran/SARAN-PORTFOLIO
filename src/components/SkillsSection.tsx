import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Palette, Figma, Smartphone, Globe, Zap } from 'lucide-react';


export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code,
      color: "cyan",
      skills: [
        { name: "React/Next.js", level: 95 },
        { name: "SQL", level: 100 },
        { name: "HTML5/CSS3", level: 95 },
        { name: "JavaScript", level: 92 },
        { name: "TailwindCSS", level: 48 },
        { name: "Python", level: 85 }
      ]
    },
    {
      title: "Design Tools",
      icon: Palette,
      color: "magenta",
      skills: [
        { name: "Figma", level: 92 },
        { name: "Adobe Photoshop", level: 88 },
        { name: "Adobe Illustrator", level: 85 },
        { name: "Adobe After Effects", level: 80 },
        { name: "Sketch", level: 75 },
        { name: "Blender", level: 40 }
      ]
    },
    {
      title: "UI/UX Design",
      icon: Figma,
      color: "purple",
      skills: [
        { name: "User Research", level: 88 },
        { name: "Wireframing", level: 92 },
        { name: "Prototyping", level: 90 },
        { name: "Design Systems", level: 95 },
        { name: "User Testing", level: 85 },
        { name: "Accessibility", level: 82 }
      ]
    }
  ];

  const tools = [
    { name: "React", icon: "⚛️", color: "cyan" },
    { name: "SQL", icon: "⛃", color: "blue" },
    { name: "JavaScript", icon: "🟨", color: "yellow" },
    { name: "Figma", icon: "🎨", color: "magenta" },
    { name: "Node.js", icon: "🟢", color: "green" },
    { name: "Photoshop", icon: "🎭", color: "purple" },
    { name: "Git", icon: "🐧", color: "orange" },
    { name: "PYTHON", icon: "🇵🇾", color: "blue" }
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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
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
          <h2 className="text-4xl md:text-6xl font-bold neon-text-cyan mb-4 flicker-subtle">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and creative capabilities
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto mt-6 glow-cyan" />
        </motion.div>

        {/* Skills Categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-3 gap-8 mb-16"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className={`bg-card/40 backdrop-blur-lg rounded-lg p-8 neon-border-${category.color} hover-glow-${category.color} card-3d`}
            >
              {/* Category Header */}
              <div className="text-center mb-8">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={isInView ? { scale: 1, rotate: 0 } : {}}
                  transition={{ delay: categoryIndex * 0.2 + 0.3, duration: 0.6 }}
                  className={`inline-flex p-4 bg-neon-${category.color} rounded-full mb-4`}
                >
                  <category.icon size={32} className="text-background" />
                </motion.div>
                <h3 className={`text-xl font-bold neon-text-${category.color}`}>
                  {category.title}
                </h3>
              </div>

              {/* Skills List with Animated Bars */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5 }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-foreground">
                        {skill.name}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    
                    {/* Animated Progress Bar */}
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ 
                          delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.7,
                          duration: 1,
                          ease: "easeOut"
                        }}
                        className={`h-full bg-gradient-to-r from-neon-${category.color} to-neon-${category.color}/70 rounded-full relative overflow-hidden`}
                      >
                        {/* Shimmer Effect */}
                        <motion.div
                          animate={{
                            x: [-100, 100],
                          }}
                          transition={{
                            repeat: Infinity,
                            duration: 2,
                            ease: "linear",
                            delay: categoryIndex * 0.2 + skillIndex * 0.1 + 1.2
                          }}
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent w-full h-full"
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tools & Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold neon-text-purple mb-8">
            Tools & Technologies
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 max-w-4xl mx-auto">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                transition={{ delay: index * 0.1 + 1, duration: 0.5 }}
                whileHover={{ 
                  scale: 1.1, 
                  rotate: 10,
                  transition: { duration: 0.2 }
                }}
                className={`bg-card/40 backdrop-blur-lg rounded-lg p-6 neon-border-${tool.color} hover-glow-${tool.color} text-center cursor-pointer group`}
              >
                <motion.div
                  animate={{ 
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2
                  }}
                  className="text-3xl mb-2"
                >
                  {tool.icon}
                </motion.div>
                <p className={`text-xs font-medium neon-text-${tool.color} group-hover:flicker`}>
                  {tool.name}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Fun Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-16 bg-card/20 backdrop-blur-lg rounded-lg p-8 neon-border text-center"
        >
          <h3 className="text-xl font-bold neon-text-cyan mb-6">
            By the Numbers
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "5,000+", label: "Lines of Code" },
              { number: "20+", label: "Design Mockups" },
              { number: "15+", label: "Technologies" },
              { number: "100%", label: "Passion Level" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.1 + 1.4, duration: 0.5 }}
                className="space-y-2"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: index * 0.1 + 1.6 }}
                  className="text-2xl font-bold neon-text-magenta"
                >
                  {stat.number}
                </motion.div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};