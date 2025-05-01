import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <h2 className="heading-lg mb-6 text-steel-dark">About <span className="text-steel">Crystal Tubes</span></h2>
            <p className="text-lg text-gray-600 mb-8">
              Established in 1980, Crystal Tubes has evolved into one of India's leading manufacturers and suppliers of high-quality steel pipes and tubes. 
              With over four decades of industry experience, we specialize in ERW MS pipes, seamless pipes, and tubes that meet rigorous national and international standards.
            </p>
            <p className="mb-6 text-steel-text">
              Our state-of-the-art manufacturing facilities combined with stringent quality control measures ensure that each product delivers exceptional performance, 
              durability, and reliability across various industrial applications including oil & gas, construction, and infrastructure projects.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-steel-gray p-6 rounded-lg">
                <div className="text-4xl font-bold text-steel mb-2">40+</div>
                <div className="text-steel-text">Years of Excellence</div>
              </div>
              <div className="bg-steel-gray p-6 rounded-lg">
                <div className="text-4xl font-bold text-steel mb-2">1000+</div>
                <div className="text-steel-text">Satisfied Clients</div>
              </div>
              <div className="bg-steel-gray p-6 rounded-lg">
                <div className="text-4xl font-bold text-steel mb-2">5000+</div>
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
                src="https://crystal-tubes.com/img/about-img.jpg" 
                alt="Company facilities" 
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
