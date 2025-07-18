import React from 'react';
import { Check, Award, Calendar, Droplets } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    "Bottled at 55%, never diluted",
    "Exact age statement to the day",
    "Specific barrel origin (Ex-Bordeaux, Ex-Cognac)",
    "Single barrel, hand-numbered",
    "Bottling date included",
    "100% Blue Weber Agave",
    "Additive-free",
    "Optional personalization (engraving, labeling)",
    "Packaged in 6-pack wooden crates with provenance card"
  ];

  return (
    <div className="pb-16">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center py-8">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/TEQUILA_GHOST_42.jpg)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900 via-primary-900/80 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center w-full h-full z-10">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-primary-100 text-center w-full">
            Our Story
          </h1>
        </div>
      </section>

      {/* The Discovery */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg prose-invert max-w-none">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-gold-500 mb-8">
              We believe tequila deserves the same respect as the world’s finest bourbons, cognacs, and scotches.
            </h2>
            <p className="text-lg md:text-xl text-primary-100/80 leading-relaxed mb-8">
              Felipe, our master tequilero, has spent years perfecting his private barrel program - a hidden stash of extra añejos aged with extraordinary care.
            </p>
            <p className="text-lg md:text-xl text-primary-100/80 leading-relaxed mb-8">
              One night, tasting through these barrels with Ghost Tequila’s CEO David Gordon, the idea took shape. “Best añejo I’ve ever had,” David said. They knew they had to share it - but only with those who appreciate tequila as much as they do.
            </p>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-gold-500 mt-8">
              <span className="tracking-[0.12em]">PRIVADA</span> is that private reserve - now yours to savor.
            </h2>
          </div>
        </div>
      </section>

      {/* Why Privada is Different */}
      <section className="py-24 px-6 bg-primary-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-16">
            Why <span className="text-gold-500 uppercase tracking-[0.12em]">PRIVADA</span> is Different
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4 p-4">
                <div className="flex-shrink-0 mt-1">
                  <Check className="h-5 w-5 text-gold-500" />
                </div>
                <span className="text-primary-100/90 leading-relaxed">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Heritage Stats */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <Calendar className="h-12 w-12 text-gold-500 mx-auto mb-4" />
              <div className="font-serif text-3xl font-bold text-primary-100 mb-2">25+</div>
              <div className="text-primary-100/80">Years of Experience</div>
            </div>
            
            <div className="p-6">
              <Award className="h-12 w-12 text-gold-500 mx-auto mb-4" />
              <div className="font-serif text-3xl font-bold text-primary-100 mb-2">100%</div>
              <div className="text-primary-100/80">Blue Weber Agave</div>
            </div>
            
            <div className="p-6">
              <Droplets className="h-12 w-12 text-gold-500 mx-auto mb-4" />
              <div className="font-serif text-3xl font-bold text-primary-100 mb-2">55%</div>
              <div className="text-primary-100/80">Barrel Strength</div>
            </div>
            
            <div className="p-6">
              <div className="h-12 w-12 text-gold-500 mx-auto mb-4 flex items-center justify-center font-serif text-2xl font-bold">
                ∞
              </div>
              <div className="font-serif text-3xl font-bold text-primary-100 mb-2">0</div>
              <div className="text-primary-100/80">Additives</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;