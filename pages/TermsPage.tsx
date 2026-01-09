
import React from 'react';
import { Page } from '../App';

const TermsPage: React.FC<{ onNavigate: (page: Page) => void }> = ({ onNavigate }) => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-darkSlate">
      <div className="container mx-auto px-6 max-w-4xl">
        <button onClick={() => onNavigate('home')} className="text-copper text-xs font-bold uppercase tracking-widest flex items-center gap-2 mb-12 hover:-translate-x-2 transition-transform">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M10 19l-7-7m0 0l7-7m-7 7h18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> Terug naar Home
        </button>
        
        <h1 className="text-4xl md:text-6xl font-black mb-12 tracking-tighter uppercase">Algemene Voorwaarden</h1>
        
        <div className="space-y-12 text-gray-300 font-light leading-relaxed">
          <section>
            <h2 className="text-white font-bold text-xl mb-4 uppercase tracking-widest">1. Definities</h2>
            <p>In deze voorwaarden wordt onder 'KD-Projects' verstaan: de gebruiker van deze voorwaarden. Onder 'Opdrachtgever' wordt verstaan: de rechtspersoon of natuurlijke persoon die een opdracht aan KD-Projects verstrekt.</p>
          </section>

          <section>
            <h2 className="text-white font-bold text-xl mb-4 uppercase tracking-widest">2. Geldigheid van Offertes</h2>
            <p>Tenzij anders vermeld, zijn onze offertes 30 dagen geldig. Prijzen zijn exclusief BTW en andere heffingen van overheidswege, tenzij anders aangegeven.</p>
          </section>

          <section>
            <h2 className="text-white font-bold text-xl mb-4 uppercase tracking-widest">3. Intellectueel Eigendom</h2>
            <p>KD-Projects behoudt zich de rechten en bevoegdheden voor die haar toekomen op grond van de Auteurswet en andere intellectuele wet- en regelgeving met betrekking tot ontwerpen, schema's en technische plannen.</p>
          </section>

          <section>
            <h2 className="text-white font-bold text-xl mb-4 uppercase tracking-widest">4. Overmacht</h2>
            <p>KD-Projects is niet gehouden tot het nakomen van enige verplichting jegens de Opdrachtgever indien zij daartoe gehinderd wordt als gevolg van een omstandigheid die niet is te wijten aan schuld (zoals leveringsproblemen bij fabrikanten of extreme weersomstandigheden).</p>
          </section>

          <section>
            <h2 className="text-white font-bold text-xl mb-4 uppercase tracking-widest">5. Toepasselijk recht</h2>
            <p>Op alle rechtsbetrekkingen waarbij KD-Projects partij is, is uitsluitend het Belgisch recht van toepassing. De rechter in het arrondissement Antwerpen is bij uitsluiting bevoegd van geschillen kennis te nemen.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
