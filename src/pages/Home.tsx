import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Droplets, Award, Grape } from 'lucide-react';

const Home: React.FC = () => {
  const features = [
    {
      icon: <Droplets className="h-8 w-8 text-gold-500" />,
      title: "55% Bottled Strength",
      description: "Not diluted to industry standard 40%. Full-flavor, 55% tequila."
    },
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
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/TEQUILA_GHOST_80.jpg)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900 via-primary-900/60 to-transparent" />
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-primary-100 mb-8 leading-tight">
            A Hidden Reserve.<br />
            <span className="text-gold-500">Bottled for the Few.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-primary-100/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            <span className="font-body font-light tracking-[0.05em]">Felipe Navarro's personal archive of extra añejo tequila - now offered privately for the first time.</span>
          </p>
          
          <Link
            to="/collection"
            className="inline-block px-12 py-4 border-2 border-gold-500 text-gold-500 font-medium tracking-wider hover:bg-gold-500 hover:text-primary-900 transition-all duration-300 uppercase"
          >
            Explore the Collection →
          </Link>
        </div>
      </section>

      {/* Features Section */}
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

      {/* CTA Section */}
      <section className="py-24 px-6 bg-primary-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-100 mb-8">
            Want access to our full archive?
          </h2>
          
          <Link
            to="/contact"
            className="inline-block px-12 py-4 border-2 border-gold-500 text-gold-500 font-medium tracking-wider hover:bg-gold-500 hover:text-primary-900 transition-all duration-300 uppercase"
          >
            Request Access →
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;