
import React from 'react';
import { Page } from '../App';

const MaintenancePage: React.FC<{ onNavigate: (page: Page) => void }> = ({ onNavigate }) => {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <button onClick={() => onNavigate('home')} className="text-copper text-xs font-bold uppercase tracking-widest flex items-center gap-2 mb-8 hover:-translate-x-2 transition-transform">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M10 19l-7-7m0 0l7-7m-7 7h18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> Terug naar Home
          </button>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">SERVICE & ONDERHOUD</h1>
          <p className="text-xl text-gray-400 font-light max-w-3xl">
            Uw installatie in topconditie. Wij bieden de zekerheid van continuïteit door vakmanschap en 24/7 paraatheid.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            { t: '24/7 Storing', d: 'Een calamiteit kent geen kantoortijden. Onze monteurs staan altijd paraat.' },
            { t: 'Preventief', d: 'Voorkom uitval door periodieke keuringen en proactief onderhoud.' },
            { t: 'Monitoring', d: 'Remote beheer van uw kritieke systemen voor directe probleemoplossing.' }
          ].map((item, i) => (
            <div key={i} className="p-10 border border-white/10 bg-anthracite/50">
              <h3 className="text-copper font-bold text-lg mb-4 uppercase tracking-widest">{item.t}</h3>
              <p className="text-gray-400 font-light">{item.d}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MaintenancePage;
