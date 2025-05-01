
import React from 'react';
import { Button } from "@/components/ui/button";

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="bg-steel-dark text-steel-light py-24 md:py-32">
      <div className="container-custom grid md:grid-cols-2 gap-10 items-center">
        <div className="animate-fade-in">
          <h1 className="heading-xl mb-4">
            Premium <span className="text-steel">Steel Pipes</span> for 
            Industrial Excellence
          </h1>
          <p className="text-lg mb-8 text-gray-300">
            Mumbai's trusted supplier of high-quality Mild Steel ERW & Seamless pipes
            with over 30 years of experience serving various industrial sectors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-steel hover:bg-steel/90 text-steel-dark">Explore Products</Button>
            <Button variant="outline" className="border-steel text-steel hover:bg-steel/20">Contact Us</Button>
          </div>
        </div>
        <div className="rounded-lg overflow-hidden shadow-2xl animate-fade-in hidden md:block">
          <img 
            src="https://crystal-tubes.com/img/home-banner-img4.jpg" 
            alt="Steel Pipes Manufacturing"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
