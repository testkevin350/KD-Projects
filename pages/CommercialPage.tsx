
import React from 'react';
import { Page } from '../App';

const CommercialPage: React.FC<{ onNavigate: (page: Page) => void }> = ({ onNavigate }) => {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <button onClick={() => onNavigate('home')} className="text-copper text-xs font-bold uppercase tracking-widest flex items-center gap-2 mb-8 hover:-translate-x-2 transition-transform">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M10 19l-7-7m0 0l7-7m-7 7h18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> Terug naar Home
          </button>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">UTILITEITSBOUW</h1>
          <p className="text-xl text-gray-400 font-light max-w-3xl">
            Van kantoortorens tot complexe industriële faciliteiten: wij engineeren en realiseren de elektrische ruggengraat van uw onderneming.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200" alt="Commercial Building" className="grayscale border border-white/5" />
          <div className="space-y-8">
            <h2 className="text-3xl font-bold border-l-4 border-copper pl-6">ONZE OPLOSSINGEN</h2>
            <ul className="space-y-6">
              {[
                { t: 'Krachtinstallaties', d: 'Ontwerp en realisatie van hoofd- en onderverdelingen voor zware belasting.' },
                { t: 'Verlichtingsbeheer', d: 'DALI en KNX gestuurde systemen voor maximale energie-efficiëntie.' },
                { t: 'Data-infrastructuur', d: 'Gecertificeerde netwerkbekabeling en serverruimte inrichting.' },
                { t: 'Beveiliging', d: 'Brandmeld- en ontruimingsinstallaties conform de laatste normeringen.' }
              ].map((item, i) => (
                <li key={i}>
                  <h4 className="text-white font-bold uppercase text-xs tracking-widest mb-1">{item.t}</h4>
                  <p className="text-gray-400 font-light">{item.d}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-anthracite p-12 border border-white/5 text-center">
          <h3 className="text-2xl font-bold mb-6">KLAAR VOOR EEN TECHNISCHE PARTNER?</h3>
          <button onClick={() => { onNavigate('home'); setTimeout(() => document.getElementById('contact')?.scrollIntoView(), 100); }} className="bg-copper px-12 py-4 font-bold uppercase tracking-widest hover:bg-copperLight transition-all">
            Vraag een consult aan
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommercialPage;
