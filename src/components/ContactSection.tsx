import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  MapPin, 
  Phone, 
  Mail,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import ScrollAnimation from './ScrollAnimation';

const locations = [
  {
    id: 1,
    name: "Mumbai (Head Office)",
    address: "B-707, 7th Floor, Kailas Business Park, Veer Savarkar Marg, Park Site, Vikhroli (W), Mumbai - 400079",
    phone: ["+91 22 4003 3774", "+91 22 4003 3775"],
    email: ["crystaltubes.msk95@gmail.com", "info@mumbaisteel.com"]
  },
  {
    id: 2,
    name: "Thane",
    address: "Shop No. 3, Ground Floor, Siddhi Tower, Near Gaondevi Mandir, Thane West - 400601",
    phone: ["+91 22 2542 6587"],
    email: ["thane@mumbaisteel.com"]
  },
  {
    id: 3,
    name: "Kharghar",
    address: "Plot No. 23, Sector 8, Kharghar, Navi Mumbai - 410210",
    phone: ["+91 22 2774 9532"],
    email: ["kharghar@mumbaisteel.com"]
  },
  {
    id: 4,
    name: "Kalamboli",
    address: "Plot No. 45, Metal Market, Kalamboli, Navi Mumbai - 410218",
    phone: ["+91 22 2743 6821"],
    email: ["kalamboli@mumbaisteel.com"]
  }
];

const ContactSection: React.FC = () => {
  const [activeLocation, setActiveLocation] = useState<number>(1);
  const [expandedLocations, setExpandedLocations] = useState<boolean>(false);

  const toggleLocations = () => {
    setExpandedLocations(!expandedLocations);
  };

  const selectLocation = (id: number) => {
    setActiveLocation(id);
    if (window.innerWidth < 768) {
      setExpandedLocations(false);
    }
  };

  const currentLocation = locations.find(loc => loc.id === activeLocation) || locations[0];

  return (
    <section id="contact" className="py-20 bg-steel-gray">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4 text-steel-dark">Contact Us</h2>
          <p className="text-steel-text max-w-3xl mx-auto">
            Get in touch with our team for inquiries or to request a quote.
            We're committed to providing you with the best steel pipe solutions for your specific needs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-6 text-steel-dark">Send us a Message</h3>
            
            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-steel-text mb-1">Name</label>
                  <Input 
                    type="text" 
                    id="name" 
                    placeholder="Your name" 
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-steel-text mb-1">Email</label>
                  <Input 
                    type="email" 
                    id="email" 
                    placeholder="Your email" 
                    className="w-full"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-steel-text mb-1">Subject</label>
                <Input 
                  type="text" 
                  id="subject" 
                  placeholder="Subject" 
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-steel-text mb-1">Message</label>
                <Textarea 
                  id="message" 
                  placeholder="Your message" 
                  className="w-full h-32"
                />
              </div>
              
              <Button className="w-full bg-steel text-steel-dark hover:brightness-95">Send Message</Button>
            </form>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-steel-dark">Our Locations</h3>
              
              {/* Location Selector */}
              <div className="relative mb-6">
                <div 
                  className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center cursor-pointer"
                  onClick={toggleLocations}
                >
                  <h4 className="font-bold">{currentLocation.name}</h4>
                  {expandedLocations ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                </div>
                
                {/* Dropdown for locations */}
                {expandedLocations && (
                  <div className="absolute z-10 w-full mt-1 bg-white rounded-lg shadow-lg py-2">
                    {locations.map(location => (
                      <div 
                        key={location.id}
                        className={`p-3 cursor-pointer hover:bg-steel hover:text-steel-dark transition-colors ${activeLocation === location.id ? "bg-steel/50" : ""}`}
                        onClick={() => selectLocation(location.id)}
                      >
                        {location.name}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Location Details */}
              <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
                <div className="flex items-start">
                  <div className="h-12 w-12 rounded-full bg-steel flex items-center justify-center shrink-0">
                    <MapPin className="h-6 w-6 text-steel-dark" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold">Address</h4>
                    <p className="text-steel-text mt-1">
                      {currentLocation.address}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-12 w-12 rounded-full bg-steel flex items-center justify-center shrink-0">
                    <Phone className="h-6 w-6 text-steel-dark" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold">Phone Numbers</h4>
                    {currentLocation.phone.map((phone, index) => (
                      <p key={index} className="text-steel-text mt-1">
                        {phone}
                      </p>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-12 w-12 rounded-full bg-steel flex items-center justify-center shrink-0">
                    <Mail className="h-6 w-6 text-steel-dark" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold">Email Address</h4>
                    {currentLocation.email.map((email, index) => (
                      <p key={index} className="text-steel-text mt-1">
                        {email}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4 text-steel-dark">Business Hours</h3>
              <div className="bg-white p-5 rounded-lg shadow-md">
                <div className="flex justify-between py-2 border-b">
                  <span>Monday - Friday</span>
                  <span className="font-medium">10:00 AM - 6:30 PM</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span>Saturday</span>
                  <span className="font-medium">10:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between py-2">
                  <span>Sunday</span>
                  <span className="font-medium">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-6 text-center text-steel-dark">Our Location</h3>
          <div className="h-96 w-full rounded-lg overflow-hidden shadow-md">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.022255966887!2d72.92411507427778!3d19.10293785161739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c7cd797b5b89%3A0x3c4b4b7be3f74023!2sKailas%20Business%20Park%2C%20Hiranandani%20Gardens%2C%20Vikhroli%20West%2C%20Mumbai%2C%20Maharashtra%20400079!5e0!3m2!1sen!2sin!4v1683359538938!5m2!1sen!2sin" 
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Crystal Tubes Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
