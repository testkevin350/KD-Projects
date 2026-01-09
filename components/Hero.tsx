
import React from 'react';
import { Page } from '../App';

interface HeroProps {
  onNavigate: (page: Page) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-anthracite">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#B87333 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-darkSlate/40 via-transparent to-darkSlate"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="inline-block mb-6 px-4 py-1 border border-copper/30 bg-copper/5 text-copper text-xs font-bold tracking-[0.3em] uppercase animate-fade-in">
          Excellence in Engineering
        </div>
        
        <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter leading-none">
          MEESTER IN <br />
          <span className="text-gradient">ELEKTROTECHNIEK</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
          KD-Projects realiseert de onzichtbare infrastructuur van morgen. Precisie, innovatie en betrouwbaarheid vormen de kern van onze technische oplossingen.
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <button 
            onClick={() => onNavigate('projecten')}
            className="w-full md:w-auto px-10 py-4 bg-copper text-white font-bold uppercase tracking-widest hover:bg-copperLight transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-copper/20"
          >
            Bekijk Portfolio
          </button>
          <a 
            href="#contact" 
            className="w-full md:w-auto px-10 py-4 border border-white/20 text-white font-bold uppercase tracking-widest hover:bg-white hover:text-darkSlate transition-all duration-300 transform hover:-translate-y-1"
          >
            Project Bespreken
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-copper to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
