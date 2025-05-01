
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const products = [
  {
    id: 1,
    name: 'Mild Steel ERW Pipes',
    description: 'Electric Resistance Welded pipes made from high-grade mild steel, suitable for various industrial applications.',
    image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    name: 'Seamless Steel Pipes',
    description: 'Premium quality seamless pipes offering superior strength and durability for high-pressure applications.',
    image: 'https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    name: 'Carbon Steel Pipes',
    description: 'High-carbon content pipes designed for applications requiring exceptional tensile strength.',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    name: 'Galvanized Steel Pipes',
    description: 'Corrosion-resistant galvanized pipes ideal for water supply, irrigation, and plumbing systems.',
    image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=800&q=80',
  },
];

const ProductsSection: React.FC = () => {
  return (
    <section id="products" className="py-20 bg-steel-gray">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">Our Premium Products</h2>
          <p className="text-steel-text max-w-2xl mx-auto">
            We supply a wide range of high-quality steel pipes manufactured to meet
            international standards and specifications.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col">
              <div className="h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{product.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-steel-text">{product.description}</p>
              </CardContent>
              <CardFooter>
                <a 
                  href="#contact" 
                  className="text-steel-dark font-medium bg-steel rounded px-4 py-2 w-full text-center hover:brightness-95 transition-all"
                >
                  Request Quote
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
