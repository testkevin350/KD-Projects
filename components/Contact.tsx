
import React from 'react';
import { Page } from '../App';

const ContactSection: React.FC<{ onNavigate: (page: Page) => void }> = ({ onNavigate }) => {
  return (
    <section id="contact-cta" className="py-24 bg-darkSlate border-t border-white/5">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-copper font-bold tracking-[0.2em] uppercase text-sm mb-4">Samenwerken?</h2>
        <h3 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter uppercase leading-none">Laten we uw volgende <br/><span className="text-gradient">project realiseren</span></h3>
        <p className="text-gray-500 max-w-2xl mx-auto mb-12 font-light text-lg">
          Heeft u een technisch vraagstuk of bent u op zoek naar een betrouwbare partner voor uw elektrotechnische installaties?
        </p>
        <button 
          onClick={() => onNavigate('contact')}
          className="px-12 py-5 bg-copper text-white font-bold uppercase tracking-[0.2em] hover:bg-copperLight transition-all duration-300 shadow-xl shadow-copper/20"
        >
          Neem Direct Contact Op
        </button>
      </div>
    </section>
  );
};

export default ContactSection;
