import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface PasswordGateProps {
  onAuthenticate: () => void;
}

const PasswordGate: React.FC<PasswordGateProps> = ({ onAuthenticate }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // To change the password, edit the string in the handleSubmit function below:
    // if (password.toLowerCase() === 'entrada') { ... }
    // Change 'entrada' to your desired password.
    if (password.toLowerCase() === 'entrada') {
      onAuthenticate();
    } else {
      setError(true);
      setTimeout(() => setError(false), 3000);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/TEQUILA_GHOST_80.jpg)'
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80" />
      
      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-md w-full">
          <div className="bg-black/70 px-8 py-10 mb-8 shadow-lg inline-block w-full">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-gold-500 mb-4 tracking-[0.18em]">
              PRIVADA
            </h1>
            <p className="text-lg md:text-xl text-primary-100/90 mb-4 leading-relaxed font-light tracking-wider">
              EXCLUSIVE TEQUILA BARRELS
            </p>
            <p className="font-serif text-2xl md:text-3xl text-gold-500 mb-8 font-light tracking-[0.2em]">
              COMING SOON
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter access code"
                  className="w-full px-6 py-4 bg-black/30 border border-gold-500/30 rounded-none text-primary-100 placeholder-primary-100/60 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500 text-center tracking-wider"
                />
                {error && (
                  <p className="text-red-400 text-sm mt-2">Invalid access code</p>
                )}
              </div>
              <button
                type="submit"
                className="w-full py-4 border-2 border-gold-500 text-gold-500 font-medium tracking-wider hover:bg-gold-500 hover:text-primary-900 transition-all duration-300 uppercase"
              >
                Enter
              </button>
            </form>
            <div className="mt-6">
              <Link 
                to="/request-access"
                className="block w-full py-4 border-2 border-primary-100/30 text-primary-100 font-medium tracking-wider hover:border-primary-100 hover:bg-primary-100/10 transition-all duration-300 uppercase text-center"
              >
                Request Access
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordGate;