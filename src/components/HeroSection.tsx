import React, { useEffect, useRef } from 'react';
import { ArrowDown, Cpu, Rocket, Github, Linkedin, Milestone, Sparkles, User, Code, Target, Star, Zap, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import { useAuth } from '../contexts/AuthContext';
import tanish1 from '../assets/tanish1.jpg';

const HeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { user } = useAuth();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedElements = sectionRef.current?.querySelectorAll('.animate-on-load');
    animatedElements?.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      animatedElements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section 
      id="hero" 
      ref={sectionRef} 
      className="min-h-screen relative pt-20 pb-10 px-4 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-electric/10 rounded-full filter blur-[120px]"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-violet/10 rounded-full filter blur-[100px]"></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-mint/10 rounded-full filter blur-[80px]"></div>
        <div className="absolute top-1/3 right-1/3 w-48 h-48 bg-electric/5 rounded-full filter blur-[90px]"></div>
      </div>

      <div className="w-full max-w-7xl mx-auto z-10 relative">
        {/* Top Bar with Welcome */}
        {user && (
          <div className="text-center mb-12 animate-on-load opacity-0 translate-y-10 transition-all duration-700 delay-50">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-electric/20 text-electric rounded-full text-sm font-medium border border-electric/30 backdrop-blur-sm">
              <Sparkles size={16} />
              Welcome, {user.name}! 👋
            </div>
          </div>
        )}

        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 xl:gap-20 items-center min-h-[80vh]">
          
          {/* Left Content */}
          <div className="space-y-10 animate-on-load opacity-0 translate-y-10 transition-all duration-700 delay-100">
            {/* Tagline */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-electric font-mono text-sm">
                <div className="w-2 h-2 bg-electric rounded-full animate-pulse"></div>
                <span>U22CS069, B.Tech in Computer Science and Engineering, SVNIT'26</span>
              </div>
              <h4 className="text-electric font-mono text-lg md:text-xl">
                Developing with Vision; Fostering TechnoCommercial.
              </h4>
            </div>
            
            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Hi, I'm <span className="text-gradient">Tanish</span>
              </h1>
<h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white/90 leading-tight">
  Delivering Engineering Brilliance—<span className="text-electric">Smart</span>, <span className="text-violet">Secure</span>, and Always Ready to <span className="text-mint">Grow</span>.
</h2>

            </div>
            
            {/* Description */}
            <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl">
              {user 
                ? "Ready to collaborate on something amazing? Let's build the future together!"
                : "Passionate about creating innovative solutions that make a difference. Explore my work and let's connect!"
              }
            </p>

            {/* Quick Stats Row */}
            <div className="flex gap-8">
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-electric">7+</p>
                <p className="text-sm text-white/70 font-medium">Projects</p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-violet">2+</p>
                <p className="text-sm text-white/70 font-medium">Years</p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-mint">50+</p>
                <p className="text-sm text-white/70 font-medium">Students Mentored</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6">
              <a 
                href="https://github.com/ttanishh" 
                target="_blank" 
                rel="noopener noreferrer"
                className="glass-card h-14 w-14 rounded-full flex items-center justify-center transition-all duration-300 hover:text-electric hover:scale-110 border border-white/10"
                aria-label="GitHub Profile"
              >
                <Github size={22} />
              </a>
              <a 
                href="https://www.linkedin.com/in/tanish2311/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="glass-card h-14 w-14 rounded-full flex items-center justify-center transition-all duration-300 hover:text-electric hover:scale-110 border border-white/10"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={22} />
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6">
              <Button 
                asChild
                variant="default"
                className="glass-card bg-gradient-glow animate-gradient-shift group flex items-center gap-3 px-10 py-7 text-white font-medium transition-all duration-300 hover:scale-105"
              >
                <a href="#projects">
                  <span>Explore My Work</span>
                  <Cpu size={20} className="transition-transform group-hover:translate-y-1" />
                </a>
              </Button>
              <Button 
                asChild
                variant="outline"
                className="glass-card group flex items-center gap-3 px-10 py-7 text-white font-medium hover:border-electric transition-all duration-300 hover:scale-105"
              >
                <a href="#contact">
                  <span>{user ? "Start Collaborating" : "Let's Collaborate"}</span>
                  <Rocket size={20} className="transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right Side - Hero Image */}
          <div className="animate-on-load opacity-0 translate-y-10 transition-all duration-700 delay-300">
            <div className="relative group w-80 h-80 sm:w-96 sm:h-96 lg:w-[32rem] lg:h-[32rem] mx-auto">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-electric/40 via-violet/30 to-mint/20 rounded-full blur-xl"></div>
              
              {/* Image Container */}
              <div className="relative w-full h-full glass-card rounded-full overflow-hidden border-2 border-white/10 hover:border-electric/30 transition-all duration-500 shadow-lg hover:shadow-electric/20">
                <img
                  src={tanish1}
                  alt="Tanish"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/60 text-white text-sm sm:text-base text-center px-6 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <span>
                  {user 
                    ? `👋 Hi ${user.name}, ready to build something amazing?`
                    : "👋 Hi, I'm Tanish — what's your day saying to you?"
                  }
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-20 text-center animate-on-load opacity-0 translate-y-10 transition-all duration-700 delay-500">
          <div className="flex items-center justify-center gap-6 mb-6">
            <div className="w-12 h-px bg-white/20"></div>
            <span className="text-white/60 text-sm font-medium">Scroll to explore</span>
            <div className="w-12 h-px bg-white/20"></div>
          </div>
          <ArrowDown size={24} className="text-white/60 mx-auto animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
