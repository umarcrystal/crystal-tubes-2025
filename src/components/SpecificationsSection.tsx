import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import ScrollAnimation from './ScrollAnimation';

const SpecificationsSection: React.FC = () => {
  return (
    <section id="specifications" className="py-20 bg-white">
      <div className="container-custom max-w-full">
        <ScrollAnimation animation="animate-fade-in">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Product Specifications</h2>
            <p className="text-steel-text max-w-3xl mx-auto">
              Our products comply with various national and international standards. 
              Here are some of the common specifications for our high-quality steel pipes.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid gap-8">
          <ScrollAnimation animation="animate-fade-in">
            <div className="bg-steel-gray rounded-lg p-6 transform transition-all duration-300 hover:shadow-lg">
              <h3 className="text-xl font-bold mb-4">ERW Steel Pipe Specifications</h3>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Parameter</TableHead>
                      <TableHead>Standard</TableHead>
                      <TableHead>Details</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Size Range</TableCell>
                      <TableCell>IS 1239, IS 3589, ASTM A53</TableCell>
                      <TableCell>15 NB to 600 NB (1/2" to 24")</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Wall Thickness</TableCell>
                      <TableCell>IS 1239, IS 3589, IS 10577</TableCell>
                      <TableCell>SCH 10 to SCH 160, 2mm to 16mm</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Length</TableCell>
                      <TableCell>Custom</TableCell>
                      <TableCell>Single Random (4-7m), Double Random (7-14m), Cut Length</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Material Grade</TableCell>
                      <TableCell>ASTM, API, IS</TableCell>
                      <TableCell>A106 Gr.B/C, API 5L Gr.B/X42/X52/X60/X65/X70</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Surface Treatment</TableCell>
                      <TableCell>IS 4736, ASTM A53</TableCell>
                      <TableCell>Black, Galvanized, 3LPE Coated, FBE Coated</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="animate-fade-in" delay={100}>
            <div className="bg-steel-gray rounded-lg p-6 transform transition-all duration-300 hover:shadow-lg">
              <h3 className="text-xl font-bold mb-4">Seamless Pipe Specifications</h3>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Parameter</TableHead>
                      <TableHead>Standard</TableHead>
                      <TableHead>Details</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Size Range</TableCell>
                      <TableCell>ASTM A106, ASTM A333</TableCell>
                      <TableCell>15 NB to 600 NB (1/2" to 24")</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Wall Thickness</TableCell>
                      <TableCell>ASTM A53, A106, API 5L</TableCell>
                      <TableCell>SCH 10 to SCH XXS, 2.11mm to 30mm</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Length</TableCell>
                      <TableCell>ASTM, DIN, IS</TableCell>
                      <TableCell>4 to 12 meters, Cut to Size</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Material Grade</TableCell>
                      <TableCell>ASTM, IS, DIN</TableCell>
                      <TableCell>ASTM A106 Gr.B/C, API 5L Gr.B/X42/X52/X60/X65/X70</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">End Type</TableCell>
                      <TableCell>ANSI B16.25</TableCell>
                      <TableCell>Plain End, Beveled End, Threaded</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="animate-fade-in" delay={200}>
            <div className="bg-steel-gray rounded-lg p-6 transform transition-all duration-300 hover:shadow-lg">
              <h3 className="text-xl font-bold mb-4">HSAW Pipe Specifications</h3>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Parameter</TableHead>
                      <TableHead>Standard</TableHead>
                      <TableHead>Details</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Size Range</TableCell>
                      <TableCell>API 5L, ASTM A252</TableCell>
                      <TableCell>406.4mm to 2540mm (16" to 100")</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Wall Thickness</TableCell>
                      <TableCell>API 5L, ASTM A252</TableCell>
                      <TableCell>6mm to 25mm</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Length</TableCell>
                      <TableCell>API 5L</TableCell>
                      <TableCell>12m, 18m, Custom Lengths</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Material Grade</TableCell>
                      <TableCell>API 5L</TableCell>
                      <TableCell>Gr.B, X42, X46, X52, X56, X60, X65, X70</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Coating</TableCell>
                      <TableCell>DIN 30670, API RP 5L2</TableCell>
                      <TableCell>3LPE, FBE, Epoxy, Coal Tar Epoxy</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="animate-fade-in" delay={300}>
            <div className="bg-steel-gray rounded-lg p-6 transform transition-all duration-300 hover:shadow-lg">
              <h3 className="text-xl font-bold mb-4">LSAW Pipe Specifications</h3>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Parameter</TableHead>
                      <TableHead>Standard</TableHead>
                      <TableHead>Details</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Size Range</TableCell>
                      <TableCell>API 5L, ASTM A252</TableCell>
                      <TableCell>406.4mm to 1625mm (16" to 64")</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Wall Thickness</TableCell>
                      <TableCell>API 5L</TableCell>
                      <TableCell>6mm to 50mm</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Length</TableCell>
                      <TableCell>API 5L</TableCell>
                      <TableCell>12m, 24m, Custom Lengths</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Material Grade</TableCell>
                      <TableCell>API 5L</TableCell>
                      <TableCell>Gr.B, X42, X46, X52, X56, X60, X65, X70, X80</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Application</TableCell>
                      <TableCell>API 5L, ASTM A252</TableCell>
                      <TableCell>Oil & Gas Transmission, Water Pipelines, Piling</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
          </ScrollAnimation>

          <div className="mt-8 text-center">
            <ScrollAnimation animation="animate-fade-in" delay={400}>
              <p className="text-steel-text mb-4">
                All our products undergo rigorous quality control and testing procedures to ensure they meet 
                national and international standards before dispatch.
              </p>
              <a 
                href="#contact" 
                className="inline-block bg-steel hover:brightness-95 text-steel-dark py-3 px-6 rounded-md transition-all font-medium hover:transform hover:scale-105"
              >
                Request Detailed Specifications
              </a>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecificationsSection;
