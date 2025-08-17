import { Navbar } from './Navbar';
import { HeroSection } from './HeroSection';
import { AboutSection } from './AboutSection';
import { ProjectsSection } from './ProjectsSection';
import { SkillsSection } from './SkillsSection';
import { ContactSection } from './ContactSection';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const Portfolio = () => {
  useScrollAnimation();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <HeroSection />
        <div className="scroll-reveal"><AboutSection /></div>
        <div className="scroll-reveal"><ProjectsSection /></div>
        <div className="scroll-reveal"><SkillsSection /></div>
        <div className="scroll-reveal"><ContactSection /></div>
      </main>
      
      {/* Footer */}
      <footer className="py-8 border-t border-muted/30 bg-card/20 backdrop-blur-lg">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 Saran. Built with{' '}
            <span className="neon-text-cyan">React</span>,{' '}
            <span className="neon-text-magenta">Node</span>, and{' '}
            <span className="neon-text-purple">lots of coffee</span> ☕
          </p>
        </div>
      </footer>
    </div>
  );
};