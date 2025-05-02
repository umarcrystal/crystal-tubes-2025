import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { MoveRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="bg-steel-dark text-steel-light pt-16 md:pt-20 pb-24 md:pb-32 overflow-hidden relative">
      {/* Futuristic background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-steel opacity-30 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-32 h-32 rounded-full bg-steel opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 rounded-full bg-steel opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        <div className="grid grid-cols-8 gap-2 h-full w-full opacity-10">
          {Array.from({ length: 64 }).map((_, index) => (
            <div 
              key={index} 
              className="border border-steel/30"
              style={{ 
                animationDelay: `${Math.random() * 5}s`,
                animation: 'pulse 4s infinite ease-in-out'
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="container-custom grid md:grid-cols-2 gap-10 items-center relative z-10">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
          <h1 className="heading-xl mb-4 mt-0">
            Next-Gen <span className="text-steel bg-clip-text bg-gradient-to-r from-steel to-amber-300">Steel Pipes</span> for 
            <br className="hidden md:block" /> Industrial Excellence
          </h1>
          <p className="text-lg mb-8 text-gray-300 transform transition-all duration-1000 delay-300" 
             style={{ transitionDelay: '0.3s', opacity: isVisible ? 1 : 0 }}>
            Mumbai's trusted supplier of high-quality Mild Steel ERW & Seamless pipes
            with over 30 years of experience serving various industrial sectors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 transform transition-all duration-1000 delay-500" 
               style={{ transitionDelay: '0.6s', opacity: isVisible ? 1 : 0 }}>
            <a href="#products">
              <Button className="bg-steel hover:bg-steel/90 text-steel-dark group relative overflow-hidden w-full sm:w-auto">
                <span className="relative z-10 flex items-center gap-2">
                  Explore Products
                  <MoveRight size={16} className="transition-transform group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></span>
              </Button>
            </a>
            <a href="#contact">
              <Button variant="outline" className="border-steel text-steel hover:bg-steel/20 group w-full sm:w-auto">
                <span className="flex items-center gap-2">
                  Contact Us
                  <span className="w-1 h-1 rounded-full bg-steel group-hover:w-4 transition-all duration-300"></span>
                </span>
              </Button>
            </a>
          </div>
        </div>
        
        <div className={`rounded-lg overflow-hidden shadow-2xl relative transform transition-all duration-1000 delay-700 hidden md:block ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}
             style={{ transitionDelay: '0.9s', height: '500px' }}>
          {/* Futuristic frame */}
          <div className="absolute inset-0 border-2 border-steel/50 rounded-lg"></div>
          <div className="absolute inset-0 border border-steel rounded-lg" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' }}></div>
          <div className="absolute -top-1 -right-1 w-10 h-10 border-t-2 border-r-2 border-steel"></div>
          <div className="absolute -bottom-1 -left-1 w-10 h-10 border-b-2 border-l-2 border-steel"></div>
          
          {/* Scanning effect */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-steel/30 animate-scan"></div>
          </div>
          
          <img 
            src="/images/pic01.jpeg" 
            alt="Steel Pipes Manufacturing"
            className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
            style={{ objectPosition: 'center' }}
          />
        </div>
      </div>
      
      {/* Tech lines */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-steel/50 to-transparent"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-steel/30 to-transparent"></div>
    </section>
  );
};

export default HeroSection;
