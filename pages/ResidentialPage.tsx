
import React from 'react';
import { Page } from '../App';

const ResidentialPage: React.FC<{ onNavigate: (page: Page) => void }> = ({ onNavigate }) => {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <button onClick={() => onNavigate('home')} className="text-copper text-xs font-bold uppercase tracking-widest flex items-center gap-2 mb-8 hover:-translate-x-2 transition-transform">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M10 19l-7-7m0 0l7-7m-7 7h18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> Terug naar Home
          </button>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">HIGH-END WONINGBOUW</h1>
          <p className="text-xl text-gray-400 font-light max-w-3xl">
            Wij transformeren woningen in intelligente leefomgevingen waar luxe en techniek naadloos samenkomen.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div className="space-y-8 order-2 lg:order-1">
            <h2 className="text-3xl font-bold border-l-4 border-copper pl-6">HET COMFORT VAN MORGEN</h2>
            <div className="space-y-8 text-gray-400 font-light">
              <p>Exclusieve woningbouw vraagt om een unieke benadering. Geen standaard oplossingen, maar maatwerk dat aansluit bij uw levensstijl en architectuur.</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  'Smart Home Integratie',
                  'Exclusief Lichtplan',
                  'Home Cinema & Audio',
                  'Klimaatbeheersing',
                  'Alarmsystemen',
                  'Laadinfrastructuur'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-copper"></div>
                    <span className="text-white font-medium uppercase text-[10px] tracking-widest">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <img src="https://images.unsplash.com/photo-1600585154340-be6199f7d009?auto=format&fit=crop&q=80&w=1200" alt="Luxury Villa" className="grayscale border border-white/5 order-1 lg:order-2" />
        </div>
      </div>
    </div>
  );
};

export default ResidentialPage;
