
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <h2 className="heading-lg mb-6 text-steel-dark">About <span className="text-steel">Mumbai Steel Pipes</span></h2>
            <p className="mb-4 text-steel-text">
              Established in 2005, Mumbai Steel Pipes has grown to become one of the leading suppliers of mild steel ERW and seamless pipes in the region. 
              With state-of-the-art manufacturing facilities and strict quality control measures, we ensure each product meets the highest industry standards.
            </p>
            <p className="mb-6 text-steel-text">
              Our team of experienced professionals works closely with clients to understand their specific requirements and provide tailored solutions that 
              meet their technical specifications and budget constraints.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-steel-gray p-6 rounded-lg">
                <div className="text-4xl font-bold text-steel mb-2">15+</div>
                <div className="text-steel-text">Years of Experience</div>
              </div>
              <div className="bg-steel-gray p-6 rounded-lg">
                <div className="text-4xl font-bold text-steel mb-2">500+</div>
                <div className="text-steel-text">Satisfied Clients</div>
              </div>
              <div className="bg-steel-gray p-6 rounded-lg">
                <div className="text-4xl font-bold text-steel mb-2">1000+</div>
                <div className="text-steel-text">Projects Completed</div>
              </div>
              <div className="bg-steel-gray p-6 rounded-lg">
                <div className="text-4xl font-bold text-steel mb-2">ISO</div>
                <div className="text-steel-text">9001:2015 Certified</div>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-steel rounded-lg"></div>
              <img 
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&q=80" 
                alt="Company headquarters" 
                className="rounded-lg w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
