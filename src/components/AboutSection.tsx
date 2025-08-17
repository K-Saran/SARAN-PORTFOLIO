import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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

  const stats = [
    { number: "1.5+", label: "Years Experience" },
    { number: "15+", label: "Projects Completed" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support Available" },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold neon-text-purple mb-4 flicker">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-magenta mx-auto glow-cyan" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Profile */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Profile Card */}
              <div className="bg-card/40 backdrop-blur-lg rounded-lg p-8 neon-border hover-glow-cyan card-3d">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-neon-cyan to-neon-magenta rounded-full flex items-center justify-center text-2xl font-bold text-background">
                      S
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold neon-text-cyan">Saran</h3>
                      <p className="text-muted-foreground">Creative Developer</p>
                    </div>
                  </div>
                  
                  <p className="text-foreground leading-relaxed">
                    I'm a passionate digital creator who specializes in transforming ideas into stunning 
                    visual experiences. With expertise spanning web development, graphic design, and 
                    UI/UX design, I bring a unique perspective to every project.
                  </p>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    My journey began with a fascination for the intersection of technology and art. 
                    Today, I help businesses and individuals create memorable digital experiences 
                    that not only look amazing but also deliver results.
                  </p>
                </div>
              </div>

              {/* Skills Preview */}
              <div className="bg-card/30 backdrop-blur-lg rounded-lg p-6 neon-border-magenta">
                <h4 className="text-xl font-semibold neon-text-magenta mb-4">Core Expertise</h4>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    'React & TypeScript',
                    'UI/UX Design',
                    'Graphic Design',
                    'Motion Design'
                  ].map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: index * 0.1 + 0.5 }}
                      className="flex items-center space-x-2"
                    >
                      <div className="w-2 h-2 bg-neon-cyan rounded-full glow-cyan" />
                      <span className="text-sm text-foreground">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column - Stats & Values */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    className="bg-card/40 backdrop-blur-lg rounded-lg p-6 text-center neon-border-purple hover-glow-purple card-3d"
                  >
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ delay: index * 0.1 + 0.5 }}
                      className="text-3xl font-bold neon-text-cyan mb-2"
                    >
                      {stat.number}
                    </motion.div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </motion.div>
                ))}
              </div>

              {/* Philosophy */}
              <div className="bg-card/40 backdrop-blur-lg rounded-lg p-8 neon-border-cyan">
                <h4 className="text-xl font-semibold neon-text-cyan mb-4">My Philosophy</h4>
                <blockquote className="text-foreground italic leading-relaxed">
                  "Design is not just what it looks like and feels like. Design is how it works. 
                  I believe in creating solutions that are not only visually stunning but also 
                  intuitive and meaningful."
                </blockquote>
              </div>

              {/* What I Do */}
              <div className="space-y-4">
                {[
                  {
                    title: "Web Development",
                    description: "Building responsive, modern web applications with cutting-edge technologies.",
                    color: "cyan"
                  },
                  {
                    title: "Graphic Design",
                    description: "Creating visual identities and brand materials that tell compelling stories.",
                    color: "magenta"
                  },
                  {
                    title: "UI/UX Design",
                    description: "Designing user experiences that are both beautiful and functional.",
                    color: "purple"
                  }
                ].map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, x: 30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.1 + 0.4 }}
                    className={`bg-card/30 backdrop-blur-lg rounded-lg p-4 neon-border-${service.color} border-l-4`}
                  >
                    <h5 className={`font-semibold neon-text-${service.color} mb-2`}>
                      {service.title}
                    </h5>
                    <p className="text-sm text-muted-foreground">
                      {service.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};