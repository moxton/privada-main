import React from 'react';
import { Briefcase, ShoppingBag, Truck, Bike, Award, Edit, Layers, Percent, Calendar, Package, FileText, Archive } from 'lucide-react';

const Bottling: React.FC = () => {
  return (
    <div className="pb-16 bg-primary-900 min-h-screen">
      <section className="px-6 mb-16 pt-16">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-100 mb-8 mt-16">
            Bottles & Service
          </h1>
        </div>
        <div className="max-w-4xl mx-auto flex flex-col gap-12 mt-12">
          {/* Combined Card: Privada Bottles */}
          <div className="flex flex-col md:flex-row bg-black/70 border border-gold-500 shadow-lg p-0 w-full overflow-hidden">
            <div className="flex-1 p-10 flex flex-col justify-center">
              <h2 className="font-serif text-2xl font-bold text-gold-500 mb-6 tracking-[0.12em]">PRIVADA Bottles</h2>
              <div className="flex flex-col gap-4 w-full">
                <div className="flex items-start gap-4">
                  <Award className="h-6 w-6 text-gold-500 mt-1 flex-shrink-0" />
                  <div className="text-left">
                    <div className="font-serif text-base text-gold-500 font-semibold mb-1">Embossed Bottles</div>
                    <div className="text-primary-100/90 text-sm font-light">Every bottle embossed with "PRIVADA"</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Edit className="h-6 w-6 text-gold-500 mt-1 flex-shrink-0" />
                  <div className="text-left">
                    <div className="font-serif text-base text-gold-500 font-semibold mb-1">Personalization</div>
                    <div className="text-primary-100/90 text-sm font-light">Option for personalized engraving / branding on bottle and on label</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Layers className="h-6 w-6 text-gold-500 mt-1 flex-shrink-0" />
                  <div className="text-left">
                    <div className="font-serif text-base text-gold-500 font-semibold mb-1">Single Barrel</div>
                    <div className="text-primary-100/90 text-sm font-light">Individually numbered, never bulk blended</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Percent className="h-6 w-6 text-gold-500 mt-1 flex-shrink-0" />
                  <div className="text-left">
                    <div className="font-serif text-base text-gold-500 font-semibold mb-1">Premium Strength</div>
                    <div className="text-primary-100/90 text-sm font-light">Bottled at 55%, not standard 40%</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Calendar className="h-6 w-6 text-gold-500 mt-1 flex-shrink-0" />
                  <div className="text-left">
                    <div className="font-serif text-base text-gold-500 font-semibold mb-1">Age Statement</div>
                    <div className="text-primary-100/90 text-sm font-light">Exact maturation to the day, not rounded by year</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Calendar className="h-6 w-6 text-gold-500 mt-1 flex-shrink-0" />
                  <div className="text-left">
                    <div className="font-serif text-base text-gold-500 font-semibold mb-1">Bottling Date</div>
                    <div className="text-primary-100/90 text-sm font-light">Precise bottling date, not just the year</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Package className="h-6 w-6 text-gold-500 mt-1 flex-shrink-0" />
                  <div className="text-left">
                    <div className="font-serif text-base text-gold-500 font-semibold mb-1">Barrel Type</div>
                    <div className="text-primary-100/90 text-sm font-light">Specific cask provenance - never generic</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <FileText className="h-6 w-6 text-gold-500 mt-1 flex-shrink-0" />
                  <div className="text-left">
                    <div className="font-serif text-base text-gold-500 font-semibold mb-1">Provenance Card</div>
                    <div className="text-primary-100/90 text-sm font-light">Barrel-specific details, tasting notes, and certificate of authenticity</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Archive className="h-6 w-6 text-gold-500 mt-1 flex-shrink-0" />
                  <div className="text-left">
                    <div className="font-serif text-base text-gold-500 font-semibold mb-1">Packaging</div>
                    <div className="text-primary-100/90 text-sm font-light">Bottles packaged in 6-pack wooden boxes</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 min-h-[400px] bg-black flex items-center justify-center">
              <img src="/bottle1.png" alt="Privada bottle" className="w-full h-[32rem] max-h-[90vh] object-contain rounded shadow-inner" />
            </div>
          </div>
          {/* Card 2: Service Details */}
          <div className="bg-black/70 border border-gold-500 shadow-lg p-12 w-full flex flex-col items-center text-center">
            <h2 className="font-serif text-2xl font-bold text-gold-500 mb-8 tracking-[0.12em]">SERVICE DETAILS</h2>
            <div className="flex flex-col gap-8 w-full max-w-xl mx-auto">
              <div className="flex items-start gap-6">
                <Briefcase className="h-8 w-8 text-gold-500 mt-1" />
                <div className="text-left">
                  <div className="font-serif text-lg text-gold-500 font-semibold mb-1">Get Access, Get Approved</div>
                  <div className="text-primary-100/90 text-base font-light">Consult with our team to gain access to PRIVADA</div>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <ShoppingBag className="h-8 w-8 text-gold-500 mt-1" />
                <div className="text-left">
                  <div className="font-serif text-lg text-gold-500 font-semibold mb-1">Purchase</div>
                  <div className="text-primary-100/90 text-base font-light">Once Privada barrel is purchased, bottling date is issued</div>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <Truck className="h-8 w-8 text-gold-500 mt-1" />
                <div className="text-left">
                  <div className="font-serif text-lg text-gold-500 font-semibold mb-1">Import</div>
                  <div className="text-primary-100/90 text-base font-light">Bottles are shipped into US and stored at our warehouse</div>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <Bike className="h-8 w-8 text-gold-500 mt-1" />
                <div className="text-left">
                  <div className="font-serif text-lg text-gold-500 font-semibold mb-1">Delivery Options</div>
                  <div className="text-primary-100/90 text-base font-light">Option to have shipped all at once or in 5+ case increments</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Bottling; 