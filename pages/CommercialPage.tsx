
import React from 'react';
import { Page } from '../App';

const CommercialPage: React.FC<{ onNavigate: (page: Page) => void }> = ({ onNavigate }) => {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <button onClick={() => onNavigate('home')} className="text-copper text-xs font-bold uppercase tracking-widest flex items-center gap-2 mb-8 hover:-translate-x-2 transition-transform">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M10 19l-7-7m0 0l7-7m-7 7h18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> Terug naar Home
          </button>
          <h1 className="text-4xl xs:text-5xl md:text-7xl font-black mb-6 tracking-tighter uppercase leading-tight">UTILITEITSBOUW</h1>
          <p className="text-lg md:text-xl text-gray-400 font-light max-w-3xl leading-relaxed">
            Van kantoortorens tot complexe industriële faciliteiten: wij engineeren en realiseren de elektrische ruggengraat van uw onderneming.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 mb-24">
          <div className="aspect-video lg:aspect-auto">
            <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200" alt="Commercial Building" className="w-full h-full object-cover grayscale border border-white/5 shadow-2xl" />
          </div>
          <div className="space-y-8">
            <h2 className="text-2xl md:text-3xl font-bold border-l-4 border-copper pl-6 uppercase tracking-tight">ONZE OPLOSSINGEN</h2>
            <ul className="space-y-8">
              {[
                { t: 'Krachtinstallaties', d: 'Ontwerp en realisatie van hoofd- en onderverdelingen voor zware belasting.' },
                { t: 'Verlichtingsbeheer', d: 'DALI en KNX gestuurde systemen voor maximale energie-efficiëntie.' },
                { t: 'Data-infrastructuur', d: 'Gecertificeerde netwerkbekabeling en serverruimte inrichting.' },
                { t: 'Beveiliging', d: 'Brandmeld- en ontruimingsinstallaties conform de laatste normeringen.' }
              ].map((item, i) => (
                <li key={i}>
                  <h4 className="text-white font-bold uppercase text-[10px] tracking-widest mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-copper"></span> {item.t}
                  </h4>
                  <p className="text-gray-400 font-light text-sm md:text-base leading-relaxed">{item.d}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-anthracite p-8 md:p-16 border border-white/5 text-center shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-1 h-full bg-copper group-hover:w-2 transition-all"></div>
          <h3 className="text-xl md:text-3xl font-black mb-8 uppercase tracking-tighter">KLAAR VOOR EEN TECHNISCHE PARTNER?</h3>
          <button onClick={() => onNavigate('contact')} className="w-full sm:w-auto bg-copper px-12 py-5 font-bold uppercase tracking-widest hover:bg-copperLight transition-all shadow-xl shadow-copper/20">
            Vraag een consult aan
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommercialPage;
