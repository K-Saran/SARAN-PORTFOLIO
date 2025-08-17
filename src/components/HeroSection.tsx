import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Scene3D } from './Scene3D';

export const HeroSection = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  
  const texts = [
    "Web Developer",
    "Graphic Designer", 
    "UI-UX Designer"
  ];

  useEffect(() => {
    const currentText = texts[currentTextIndex];
    let index = 0;
    
    const typewriter = setInterval(() => {
      if (index <= currentText.length) {
        setDisplayedText(currentText.slice(0, index));
        index++;
      } else {
        clearInterval(typewriter);
        // Wait before starting next text
        setTimeout(() => {
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typewriter);
  }, [currentTextIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden cyber-grid">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 0, 10]} />
          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Scene3D />
        </Canvas>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold neon-text-cyan flicker-subtle"
          >
            SARAN
          </motion.h1>

          {/* Animated Description */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative"
          >
            <h2 className="text-2xl md:text-4xl font-light text-foreground mb-4">
              I'm a
            </h2>
            <div className="relative inline-block">
              <motion.h3 
                className="text-3xl md:text-5xl font-bold neon-text-magenta min-h-[1.2em]"
                key={currentTextIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
              >
                {displayedText}
                <span className="animate-pulse">|</span>
              </motion.h3>
            </div>
          </motion.div>

          {/* Glowing Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-card/30 backdrop-blur-lg rounded-lg p-8 neon-border-purple hover-glow-purple transition-all duration-300"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              Passionate about creating digital experiences that blend creativity with functionality. 
              I transform ideas into beautiful, interactive solutions that make a difference.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 30px hsl(180 100% 50% / 0.5)",
                borderColor: "hsl(180 100% 50%)"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-transparent border border-neon-cyan text-neon-cyan rounded-lg transition-all duration-300 font-medium hover:text-white"
            >
              View My Work
            </motion.button>
            
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 30px hsl(300 100% 50% / 0.6)",
                background: "linear-gradient(45deg, hsl(300 100% 50%), hsl(270 100% 50%), hsl(300 100% 50%))"
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-neon-magenta to-neon-purple text-white rounded-lg transition-all duration-300 font-medium text-center"
            >
              Download Resume
            </motion.a>
            
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 30px hsl(270 100% 50% / 0.5)",
                borderColor: "hsl(270 100% 50%)"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-transparent border border-neon-purple text-neon-purple rounded-lg transition-all duration-300 font-medium hover:text-white"
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-neon-cyan rounded-full p-1 glow-cyan"
          >
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-neon-cyan rounded-full mx-auto"
            />
          </motion.div>
          <p className="text-xs text-muted-foreground mt-2">Scroll Down</p>
        </motion.div>
      </div>
    </section>
  );
};