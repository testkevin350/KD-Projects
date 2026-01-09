
import React from 'react';
import { Page } from '../App';

interface ServicesProps {
  onNavigate: (page: Page) => void;
}

// Fix: Use React.ReactNode instead of JSX.Element to fix "Cannot find namespace 'JSX'" error
const servicesData: { title: string, description: string, icon: React.ReactNode, page: Page }[] = [
  {
    page: 'utiliteit',
    title: 'Utiliteitsbouw',
    description: 'Intelligente krachtinstallaties en data-infrastructuur voor complexe zakelijke omgevingen.',
    icon: (
      <svg className="w-12 h-12 text-copper" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
    )
  },
  {
    page: 'residentieel',
    title: 'Residentiële Projecten',
    description: 'Maatwerk domotica en exclusieve verlichting voor high-end woningbouw en luxe villa\'s.',
    icon: (
      <svg className="w-12 h-12 text-copper" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
    )
  },
  {
    page: 'service',
    title: 'Service & Onderhoud',
    description: '24/7 bedrijfszekerheid door proactief beheer en preventieve technische controles.',
    icon: (
      <svg className="w-12 h-12 text-copper" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924-1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
    )
  }
];

const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
  return (
    <section id="diensten" className="py-24 bg-darkSlate">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="max-w-xl">
            <h2 className="text-copper font-bold tracking-[0.2em] uppercase text-sm mb-4">Onze Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">TECHNISCHE PERFECTIE</h3>
          </div>
          <p className="text-gray-500 max-w-sm font-light">
            Klik op een van onze specialismen voor gedetailleerde informatie over onze werkwijze en technische mogelijkheden.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <button 
              key={index} 
              onClick={() => onNavigate(service.page)}
              className="group text-left p-10 bg-anthracite border border-white/5 hover:border-copper/50 transition-all duration-500 relative overflow-hidden"
            >
              <div className="mb-6 group-hover:scale-110 transition-transform duration-500">{service.icon}</div>
              <h4 className="text-2xl font-bold mb-4">{service.title}</h4>
              <p className="text-gray-400 font-light leading-relaxed mb-8">
                {service.description}
              </p>
              <span className="text-copper text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                Lees Meer <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
