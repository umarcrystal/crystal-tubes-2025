
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-steel-dark text-steel-light py-4 sticky top-0 z-50">
      <div className="container-custom flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="font-bold text-xl">Mumbai Steel Pipes</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="hover:text-steel transition-colors">Home</a>
          <a href="#products" className="hover:text-steel transition-colors">Products</a>
          <a href="#about" className="hover:text-steel transition-colors">About</a>
          <a href="#services" className="hover:text-steel transition-colors">Services</a>
          <a href="#specifications" className="hover:text-steel transition-colors">Specifications</a>
          <a href="#contact" className="hover:text-steel transition-colors">Contact</a>
        </div>

        <div className="hidden md:block">
          <a href="mailto:crystaltubes.msk95@gmail.com?subject=Quote%20Request&body=I%20would%20like%20to%20request%20a%20quote%20for%20your%20products.">
            <Button className="bg-steel hover:bg-steel/90 text-steel-dark">Get Quote</Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-steel-light focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-steel-dark border-t border-gray-700 py-4 animated-fade-in">
          <div className="container-custom flex flex-col space-y-4">
            <a href="#home" className="hover:text-steel transition-colors">Home</a>
            <a href="#products" className="hover:text-steel transition-colors">Products</a>
            <a href="#about" className="hover:text-steel transition-colors">About</a>
            <a href="#services" className="hover:text-steel transition-colors">Services</a>
            <a href="#specifications" className="hover:text-steel transition-colors">Specifications</a>
            <a href="#contact" className="hover:text-steel transition-colors">Contact</a>
            <a href="mailto:crystaltubes.msk95@gmail.com?subject=Quote%20Request&body=I%20would%20like%20to%20request%20a%20quote%20for%20your%20products.">
              <Button className="bg-steel hover:bg-steel/90 text-steel-dark w-full">Get Quote</Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
