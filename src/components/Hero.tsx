import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

export const Hero = () => {
  const [currentTitle, setCurrentTitle] = useState('');
  const titles = ['Full-Stack Developer', 'UI/UX Designer', 'Problem Solver', 'Tech Enthusiast'];
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 150;
    const pauseTime = isDeleting ? 1000 : 2000;

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < titles[titleIndex].length) {
        setCurrentTitle(titles[titleIndex].substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setCurrentTitle(titles[titleIndex].substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === titles[titleIndex].length) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % titles.length);
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, titleIndex, titles]);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden animated-gradient">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-hero opacity-50"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Hi, I'm <span className="text-gradient">Durvas Palve</span>
              </h1>
              <div className="h-20 flex items-center justify-center lg:justify-start">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-muted-foreground">
                  I'm a <span className="text-primary typing-animation">{currentTitle}</span>
                </h2>
              </div>
            </div>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              Passionate about creating beautiful, functional web applications that make a difference.
              I combine technical expertise with creative problem-solving to bring ideas to life.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="xl" className="group">
                View My Work
                <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
              </Button>
              <Button variant="glass" size="xl">
                Download Resume
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 justify-center lg:justify-start">
              <Button variant="ghost" size="icon" className="hover:text-primary hover:scale-110">
                <Github className="h-6 w-6" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary hover:scale-110">
                <Linkedin className="h-6 w-6" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary hover:scale-110">
                <Mail className="h-6 w-6" />
              </Button>
            </div>
          </div>

          {/* Removed the image section */}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={scrollToAbout}
            className="flex flex-col items-center text-muted-foreground hover:text-primary transition-smooth group"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDown className="h-6 w-6 animate-bounce group-hover:translate-y-1" />
          </button>
        </div>
      </div>
    </section>
  );
};