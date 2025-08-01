import React from 'react';
import { Clock, Droplets, Award, Grape, Shield, Edit, FileText } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: <Clock className="h-8 w-8 text-gold-500" />,
      title: "4+ Year Maturation",
      description: "Aged to the exact day, in rare oak casks with provenance."
    },
    {
      icon: <Grape className="h-8 w-8 text-gold-500" />,
      title: "100% de Agave",
      description: "No glycerin, no coloring, no nonsense. Just agave, oak, and time."
    },
    {
      icon: <Award className="h-8 w-8 text-gold-500" />,
      title: "Single Barrel, Never Blended",
      description: "Each bottle comes from one unique barrel. No mixing, no batching."
    },
    {
      icon: <Award className="h-8 w-8 text-gold-500" />,
      title: "Embossed Bottles",
      description: "Every bottle embossed with \"PRIVADA\""
    },
    {
      icon: <Edit className="h-8 w-8 text-gold-500" />,
      title: "Personalization",
      description: "Option for personalized engraving / branding on bottle and on label"
    },
    {
      icon: <Droplets className="h-8 w-8 text-gold-500" />,
      title: "Cask Strength",
      description: "Bottled at 55%, not standard 40%"
    },
    {
      icon: <FileText className="h-8 w-8 text-gold-500" />,
      title: "Provenance Card",
      description: "Barrel-specific details, tasting notes, and certificate of authenticity"
    },
    {
      icon: <Shield className="h-8 w-8 text-gold-500" />,
      title: "100% Additive Free",
      description: "Just agave, water and wood - that's it"
    }
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

      {/* What Makes Privada Different */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center text-primary-100 mb-16">
            What Makes <span className="text-gold-500 uppercase tracking-[0.12em]">PRIVADA</span> Different
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6">
                <div className="flex justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="font-serif text-xl font-semibold text-primary-100 mb-4">
                  {feature.title}
                </h3>
                <p className="text-primary-100/80 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;