import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Github, Linkedin, Send, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon!",
    });
    
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    {
      name: "Email",
      icon: Mail,
      url: "mailto:sarankumaran@gmail.com",
      color: "cyan",
      handle: "sarankumaran7733@gmail.com"
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/K-Saran",
      color: "purple",
      handle: "@saran"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/k-saran-47b638326",
      color: "blue",
      handle: "/in/saran"
    }
  ];

  const contactInfo = [
    {
      icon: MapPin,
      label: "Location",
      value: "Sorry cannot share my location",
      color: "cyan"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9080038063",
      color: "magenta"
    },
    {
      icon: Mail,
      label: "Email",
      value: "sarankumaran7733@gmail.com",
      color: "purple"
    }
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
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
          <h2 className="text-4xl md:text-6xl font-bold neon-text-purple mb-4 flicker-subtle">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to start your next project? Let's create something amazing together!
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-purple to-neon-cyan mx-auto mt-6 glow-purple" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card/40 backdrop-blur-lg rounded-lg p-8 neon-border-cyan hover-glow-cyan"
          >
            <h3 className="text-2xl font-bold neon-text-cyan mb-6">
              Send me a message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
              >
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-input border border-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-cyan focus:border-transparent transition-all duration-300 text-foreground"
                  placeholder="John Doe"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
              >
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-input border border-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-cyan focus:border-transparent transition-all duration-300 text-foreground"
                  placeholder="john@example.com"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 }}
              >
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-input border border-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-cyan focus:border-transparent transition-all duration-300 text-foreground resize-none"
                  placeholder="Tell me about your project..."
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7 }}
              >
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-neon-cyan text-background hover:bg-neon-cyan/90 transition-all duration-300 font-medium py-3 rounded-lg group"
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="mr-2"
                    >
                      ⚡
                    </motion.div>
                  ) : (
                    <Send size={20} className="mr-2 group-hover:animate-pulse" />
                  )}
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </motion.div>
            </form>
          </motion.div>

          {/* Contact Info & Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            {/* Contact Information */}
            <div className="bg-card/40 backdrop-blur-lg rounded-lg p-8 neon-border-magenta hover-glow-magenta">
              <h3 className="text-2xl font-bold neon-text-magenta mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.1 + 0.5 }}
                    className="flex items-center space-x-4"
                  >
                    <div className={`p-3 bg-neon-${info.color} rounded-full`}>
                      <info.icon size={20} className="text-background" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      <p className="font-medium text-foreground">{info.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-card/40 backdrop-blur-lg rounded-lg p-8 neon-border-purple hover-glow-purple">
              <h3 className="text-2xl font-bold neon-text-purple mb-6">
                Connect With Me
              </h3>
              
              <div className="space-y-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: index * 0.1 + 0.6 }}
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center space-x-4 p-4 bg-card/30 rounded-lg border border-muted hover:border-neon-${link.color} transition-all duration-300 group`}
                  >
                    <div className={`p-3 bg-neon-${link.color} rounded-full group-hover:animate-pulse`}>
                      <link.icon size={20} className="text-background" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground group-hover:text-primary">
                        {link.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {link.handle}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9 }}
              className="bg-card/20 backdrop-blur-lg rounded-lg p-6 neon-border text-center"
            >
              <h4 className="text-lg font-bold neon-text-cyan mb-2">
                Let's Build Something Amazing
              </h4>
              <p className="text-sm text-muted-foreground">
                I'm always excited to work on new projects and collaborate with creative minds.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};