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
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center py-8">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/TEQUILA_GHOST_42.jpg)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900 via-primary-900/80 to-transparent" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-primary-100 mb-8">
            The Story Behind Privada
          </h1>
        </div>
      </section>

      {/* The Discovery */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-100 mb-12 text-center">
            The Discovery
          </h2>
          
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-lg md:text-xl text-primary-100/80 leading-relaxed mb-8">
              One night, while tasting through Felipe's cellar, David Gordon took a sip. 
              The liquid was unlike anything he had experienced—complex, layered, with 
              a depth that could only come from years of patient aging in the finest oak.
            </p>
            
            <p className="text-lg md:text-xl text-primary-100/80 leading-relaxed mb-8">
              "Best añejo I've ever had," he said, setting down the glass with reverence.
            </p>
            
            <p className="text-lg md:text-xl text-primary-100/80 leading-relaxed">
              They knew they had to share it—but only with those who would truly understand. 
              This wasn't tequila for the masses. This was liquid history, bottled tradition, 
              aged perfection that deserved respect.
            </p>
          </div>
        </div>
      </section>

      {/* Why Privada is Different */}
      <section className="py-24 px-6 bg-primary-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-100 mb-16 text-center">
            Why Privada is Different
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