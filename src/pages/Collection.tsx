import React from 'react';
import { Mail } from 'lucide-react';

const Collection: React.FC = () => {
  const barrels = [
    {
      number: "019",
      name: "Cognac Oak",
      age: "4 years, 3 months, 3 days",
      bottlingDate: "04/02/24",
      oakType: "French Oak, Ex-Cognac",
      abv: "55%",
      yield: "216 bottles",
      status: "Available",
      image: "https://images.pexels.com/photos/5946517/pexels-photo-5946517.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    {
      number: "025",
      name: "Bordeaux Oak",
      age: "5 years, 1 month, 12 days",
      bottlingDate: "03/15/24",
      oakType: "French Oak, Ex-Bordeaux",
      abv: "55%",
      yield: "198 bottles",
      status: "Reserved",
      image: "https://images.pexels.com/photos/4946684/pexels-photo-4946684.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    {
      number: "032",
      name: "American Oak",
      age: "6 years, 0 months, 5 days",
      bottlingDate: "02/28/24",
      oakType: "American Oak, Ex-Bourbon",
      abv: "55%",
      yield: "224 bottles",
      status: "Available",
      image: "https://images.pexels.com/photos/5946515/pexels-photo-5946515.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    {
      number: "041",
      name: "Sherry Oak",
      age: "4 years, 8 months, 18 days",
      bottlingDate: "01/22/24",
      oakType: "Spanish Oak, Ex-Sherry",
      abv: "55%",
      yield: "203 bottles",
      status: "Available",
      image: "https://images.pexels.com/photos/5946523/pexels-photo-5946523.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    {
      number: "058",
      name: "Port Oak",
      age: "5 years, 4 months, 22 days",
      bottlingDate: "12/18/23",
      oakType: "Portuguese Oak, Ex-Port",
      abv: "55%",
      yield: "187 bottles",
      status: "Reserved",
      image: "https://images.pexels.com/photos/4946665/pexels-photo-4946665.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    {
      number: "067",
      name: "Virgin Oak",
      age: "7 years, 2 months, 8 days",
      bottlingDate: "11/30/23",
      oakType: "French Oak, Virgin",
      abv: "55%",
      yield: "241 bottles",
      status: "Available",
      image: "https://images.pexels.com/photos/5946519/pexels-photo-5946519.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    }
  ];

  return (
    <div className="pt-24 pb-16">
      {/* Header */}
      <section className="px-6 mb-16">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-100 mb-8">
            Our Barrel Archive
          </h1>
          <p className="text-lg md:text-xl text-primary-100/80 max-w-3xl mx-auto leading-relaxed">
            <span className="font-body font-light tracking-[0.05em]">A glimpse into Felipe Navarro's hidden cellar. Every barrel tells a different story.</span> 
            Aged in hand-selected oak, bottled at full strength, and never blended.
          </p>
        </div>
      </section>

      {/* Barrel Grid */}
      <section className="px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {barrels.map((barrel) => (
              <div key={barrel.number} className="bg-primary-800 border border-primary-700 overflow-hidden group hover:border-gold-500/50 transition-all duration-300">
                <div className="aspect-w-16 aspect-h-10 overflow-hidden">
                  <img 
                    src={barrel.image} 
                    alt={`Barrel ${barrel.number}`}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-serif text-xl font-semibold text-primary-100">
                      Barrel #{barrel.number}
                    </h3>
                    <span className={`px-3 py-1 text-xs font-medium uppercase tracking-wider ${
                      barrel.status === 'Available' 
                        ? 'bg-green-900/30 text-green-400 border border-green-400/30' 
                        : 'bg-amber-900/30 text-amber-400 border border-amber-400/30'
                    }`}>
                      {barrel.status}
                    </span>
                  </div>
                  
                  <h4 className="text-gold-500 font-medium mb-4">{barrel.name}</h4>
                  
                  <div className="space-y-2 text-sm text-primary-100/80 mb-6">
                    <div className="flex justify-between">
                      <span>Aged For:</span>
                      <span className="text-primary-100">{barrel.age}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Bottling Date:</span>
                      <span className="text-primary-100">{barrel.bottlingDate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Oak Type:</span>
                      <span className="text-primary-100">{barrel.oakType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>ABV:</span>
                      <span className="text-primary-100">{barrel.abv}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Yield:</span>
                      <span className="text-primary-100">{barrel.yield}</span>
                    </div>
                  </div>
                  
                  <a
                    href="mailto:sales@privadatequila.com"
                    className="w-full flex items-center justify-center space-x-2 py-3 border border-gold-500 text-gold-500 font-medium tracking-wider hover:bg-gold-500 hover:text-primary-900 transition-all duration-300 uppercase text-sm"
                  >
                    <Mail className="h-4 w-4" />
                    <span>Inquire</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Collection;