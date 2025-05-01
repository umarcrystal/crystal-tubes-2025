
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const SpecificationsSection: React.FC = () => {
  return (
    <section id="specifications" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">Product Specifications</h2>
          <p className="text-steel-text max-w-3xl mx-auto">
            We offer a wide range of steel pipes that meet various international standards and specifications.
            Here are some of the common specifications for our products.
          </p>
        </div>

        <div className="grid gap-8">
          <div className="bg-steel-gray rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">ERW Pipe Specifications</h3>
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
                    <TableCell>ASTM A53</TableCell>
                    <TableCell>15mm NB to 500mm NB</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Wall Thickness</TableCell>
                    <TableCell>IS 1239, IS 3589, IS 10577</TableCell>
                    <TableCell>1.5mm to 14.27mm</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Length</TableCell>
                    <TableCell>Custom</TableCell>
                    <TableCell>Single Random, Double Random, Cut to Size</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Material Grade</TableCell>
                    <TableCell>ASTM, IS, BS</TableCell>
                    <TableCell>MS, Mild Steel, Carbon Steel</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Surface Treatment</TableCell>
                    <TableCell>IS 4736</TableCell>
                    <TableCell>Black, Galvanized, Painted</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>

          <div className="bg-steel-gray rounded-lg p-6">
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
                    <TableCell>ASTM A106</TableCell>
                    <TableCell>15mm NB to 400mm NB</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Wall Thickness</TableCell>
                    <TableCell>ASTM A53, A106</TableCell>
                    <TableCell>SCH 10 to SCH 160, XXS</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Length</TableCell>
                    <TableCell>Custom</TableCell>
                    <TableCell>4 to 12 meters, Cut to Size</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Material Grade</TableCell>
                    <TableCell>ASTM, IS, DIN</TableCell>
                    <TableCell>Carbon Steel, Alloy Steel, Stainless Steel</TableCell>
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

          <div className="mt-8 text-center">
            <p className="text-steel-text mb-4">
              All our products undergo strict quality control and testing procedures to ensure they meet 
              international standards and specifications.
            </p>
            <a 
              href="#contact" 
              className="inline-block bg-steel hover:brightness-95 text-steel-dark py-3 px-6 rounded-md transition-all font-medium"
            >
              Request Detailed Specifications
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecificationsSection;
