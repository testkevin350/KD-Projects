
import React, { useState } from 'react';
import { Page } from '../App';

const ContactPage: React.FC<{ onNavigate: (page: Page) => void }> = ({ onNavigate }) => {
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In een productieomgeving zou u hier een service zoals Formspree of EmailJS gebruiken.
    // Voorbeeld: fetch('https://formspree.io/f/uw-id', { method: 'POST', body: new FormData(e.currentTarget) })
    setStatus('Bedankt! Uw bericht is verzonden. Wij nemen zo spoedig mogelijk contact met u op.');
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-darkSlate">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/3">
            <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter uppercase leading-none">Contact</h1>
            <p className="text-gray-400 font-light text-lg mb-12">
              Onze specialisten staan klaar om uw technische uitdagingen om te zetten in hoogwaardige oplossingen.
            </p>

            <div className="space-y-8">
              <div>
                <h4 className="text-copper font-bold uppercase text-[10px] tracking-widest mb-4">Adres</h4>
                <p className="text-white font-medium">Industrieweg 42,<br/>2000 Antwerpen, België</p>
              </div>
              <div>
                <h4 className="text-copper font-bold uppercase text-[10px] tracking-widest mb-4">E-mail & Telefoon</h4>
                <p className="text-white font-medium">info@kd-projects.be</p>
                <p className="text-white font-medium">+32 (0) 3 123 45 67</p>
              </div>
              <div>
                <h4 className="text-copper font-bold uppercase text-[10px] tracking-widest mb-4">Volg ons</h4>
                <div className="flex gap-4">
                  <a href="https://instagram.com/kdprojects" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-copper transition-all duration-300 group">
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3 bg-anthracite p-8 md:p-12 border border-white/5">
            {status ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20">
                <div className="w-16 h-16 bg-copper rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/></svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">BERICHT VERSTUURD</h3>
                <p className="text-gray-400 mb-8">{status}</p>
                <button onClick={() => setStatus(null)} className="text-copper font-bold uppercase tracking-widest text-xs border-b border-copper">Nieuw bericht sturen</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-bold text-copper uppercase tracking-[0.2em] mb-3">Naam</label>
                    <input required name="name" type="text" className="w-full bg-darkSlate border border-white/10 px-4 py-4 text-white focus:outline-none focus:border-copper transition-colors" placeholder="Uw volledige naam"/>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-copper uppercase tracking-[0.2em] mb-3">E-mail</label>
                    <input required name="email" type="email" className="w-full bg-darkSlate border border-white/10 px-4 py-4 text-white focus:outline-none focus:border-copper transition-colors" placeholder="uw@email.be"/>
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-copper uppercase tracking-[0.2em] mb-3">Bedrijf (optioneel)</label>
                  <input name="company" type="text" className="w-full bg-darkSlate border border-white/10 px-4 py-4 text-white focus:outline-none focus:border-copper transition-colors" placeholder="Bedrijfsnaam"/>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-copper uppercase tracking-[0.2em] mb-3">Bericht</label>
                  <textarea required name="message" rows={6} className="w-full bg-darkSlate border border-white/10 px-4 py-4 text-white focus:outline-none focus:border-copper transition-colors resize-none" placeholder="Beschrijf uw aanvraag of project..."></textarea>
                </div>
                <button type="submit" className="w-full py-5 bg-copper text-white font-bold uppercase tracking-[0.2em] hover:bg-copperLight transition-all transform active:scale-[0.98] shadow-xl shadow-copper/20">
                  Verstuur Aanvraag
                </button>
                <p className="text-[10px] text-gray-500 text-center uppercase tracking-widest mt-4">
                  Door te versturen gaat u akkoord met onze <button type="button" onClick={() => onNavigate('privacy')} className="text-copper hover:underline">Privacy Policy</button>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
