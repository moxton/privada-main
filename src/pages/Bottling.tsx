import React from 'react';
import { Briefcase, ShoppingBag, Truck, Bike } from 'lucide-react';

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
              <ul className="text-primary-100/90 text-lg font-light list-disc pl-6 space-y-3">
                <li className="pl-2">Every bottle embossed with "PRIVADA"</li>
                <li className="pl-2">Option for personalized engraving / branding on bottle and on label</li>
                <li className="pl-2">Single Barrel - individually numbered, never bulk blended</li>
                <li className="pl-2">Bottled at 55%, not diluted to standard 40%</li>
                <li className="pl-2">Age Statement - exact maturation to the day, not rounded by year</li>
                <li className="pl-2">Bottling Date: Precise bottling date, not just the year</li>
                <li className="pl-2">Barrel Type: Specific cask provenance - never generic</li>
                <li className="pl-2">Provenance card included, with barrel-specific details, tasting notes, and certificate of authenticity</li>
                <li className="pl-2">Bottles packaged in 6-pack wooden boxes</li>
              </ul>
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