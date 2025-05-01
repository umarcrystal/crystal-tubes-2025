
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  MapPin, 
  Phone, 
  Mail
} from "lucide-react";

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-steel-gray">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4 text-steel-dark">Contact Us</h2>
          <p className="text-steel-text max-w-3xl mx-auto">
            Get in touch with our team for any inquiries or to request a quote.
            We're here to help you find the perfect steel pipe solutions for your needs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
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
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-steel-dark">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="h-12 w-12 rounded-full bg-steel flex items-center justify-center shrink-0">
                    <MapPin className="h-6 w-6 text-steel-dark" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold">Our Location</h4>
                    <p className="text-steel-text mt-1">
                      123 Industrial Area, Andheri East, Mumbai 400072, Maharashtra, India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-12 w-12 rounded-full bg-steel flex items-center justify-center shrink-0">
                    <Phone className="h-6 w-6 text-steel-dark" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold">Phone Number</h4>
                    <p className="text-steel-text mt-1">
                      +91 22 1234 5678
                    </p>
                    <p className="text-steel-text">
                      +91 98765 43210
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-12 w-12 rounded-full bg-steel flex items-center justify-center shrink-0">
                    <Mail className="h-6 w-6 text-steel-dark" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold">Email Address</h4>
                    <p className="text-steel-text mt-1">
                      info@mumbaisteel.com
                    </p>
                    <p className="text-steel-text">
                      sales@mumbaisteel.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4 text-steel-dark">Business Hours</h3>
              <div className="bg-white p-5 rounded-lg shadow-md">
                <div className="flex justify-between py-2 border-b">
                  <span>Monday - Friday</span>
                  <span className="font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span>Saturday</span>
                  <span className="font-medium">9:00 AM - 1:00 PM</span>
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.1160984287!2d72.74109995709657!3d19.08219783958225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1651132182407!5m2!1sen!2sin" 
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mumbai Steel Pipes Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
