
import React from 'react';
import { Page } from '../App';

const PrivacyPage: React.FC<{ onNavigate: (page: Page) => void }> = ({ onNavigate }) => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-darkSlate">
      <div className="container mx-auto px-6 max-w-4xl">
        <button onClick={() => onNavigate('home')} className="text-copper text-xs font-bold uppercase tracking-widest flex items-center gap-2 mb-12 hover:-translate-x-2 transition-transform">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M10 19l-7-7m0 0l7-7m-7 7h18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> Terug naar Home
        </button>
        
        <h1 className="text-4xl md:text-6xl font-black mb-12 tracking-tighter uppercase">Privacy Policy</h1>
        
        <div className="space-y-12 text-gray-300 font-light leading-relaxed">
          <section>
            <h2 className="text-white font-bold text-xl mb-4 uppercase tracking-widest">1. Identiteit</h2>
            <p>KD-Projects BV, gevestigd aan de Industrieweg 42, 2000 Antwerpen, is verantwoordelijk voor de verwerking van persoonsgegevens zoals weergegeven in deze privacyverklaring.</p>
            <p className="mt-2 text-copper font-medium">Contactpersoon: info@kd-projects.be</p>
          </section>

          <section>
            <h2 className="text-white font-bold text-xl mb-4 uppercase tracking-widest">2. Persoonsgegevens die wij verwerken</h2>
            <p>KD-Projects verwerkt uw persoonsgegevens doordat u gebruik maakt van onze diensten en/of omdat u deze zelf aan ons verstrekt via het contactformulier. Wij verwerken:</p>
            <ul className="list-disc ml-6 mt-4 space-y-2">
              <li>Voor- en achternaam</li>
              <li>E-mailadres</li>
              <li>Telefoonnummer (indien verstrekt)</li>
              <li>Bedrijfsgegevens</li>
              <li>IP-adres (geanonimiseerd voor statistieken)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white font-bold text-xl mb-4 uppercase tracking-widest">3. Bijzondere persoonsgegevens</h2>
            <p>Onze website en dienst heeft niet de intentie gegevens te verzamelen over websitebezoekers die jonger zijn dan 16 jaar. Tenzij ze toestemming hebben van ouders of voogd.</p>
          </section>

          <section>
            <h2 className="text-white font-bold text-xl mb-4 uppercase tracking-widest">4. Beveiliging van uw gegevens</h2>
            <p>KD-Projects neemt de bescherming van uw gegevens serieus en neemt passende maatregelen om misbruik, verlies, onbevoegde toegang, ongewenste openbaarmaking en ongeoorloofde wijziging tegen te gaan. Onze website maakt gebruik van een betrouwbaar SSL-certificaat.</p>
          </section>

          <section>
            <h2 className="text-white font-bold text-xl mb-4 uppercase tracking-widest">5. Klachtrecht</h2>
            <p>KD-Projects wil u er tevens op wijzen dat u de mogelijkheid heeft om een klacht in te dienen bij de nationale toezichthouder, de Gegevensbeschermingsautoriteit (GBA) in België of de Autoriteit Persoonsgegevens in Nederland.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
