
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const products = [
  {
    id: 1,
    name: 'MS ERW Pipes',
    description: 'Electric Resistance Welded mild steel pipes suitable for water, oil, gas and various structural applications.',
    image: 'https://crystal-tubes.com/img/product-1.jpg',
  },
  {
    id: 2,
    name: 'MS Seamless Pipes',
    description: 'Premium seamless pipes with no welding joints, offering superior strength for high-pressure industrial applications.',
    image: 'https://crystal-tubes.com/img/product-3.jpg',
  },
  {
    id: 3,
    name: 'SS Seamless & Welded Pipes',
    description: 'Stainless steel pipes featuring excellent corrosion resistance, perfect for chemical processing and food industries.',
    image: 'https://crystal-tubes.com/img/product-5.jpg',
  },
  {
    id: 4,
    name: 'API 5L Pipes',
    description: 'Pipes conforming to API 5L standard, specifically designed for oil and gas transmission in petroleum industries.',
    image: 'https://crystal-tubes.com/img/product-2.jpg',
  },
];

const ProductsSection: React.FC = () => {
  return (
    <section id="products" className="py-20 bg-steel-gray">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">Our Premium Products</h2>
          <p className="text-steel-text max-w-2xl mx-auto">
            We manufacture and supply a comprehensive range of high-quality steel pipes and tubes that meet
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
