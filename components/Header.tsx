
import React, { useState, useEffect } from 'react';
import { Page } from '../App';

interface HeaderProps {
  isScrolled: boolean;
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const Header: React.FC<HeaderProps> = ({ isScrolled, currentPage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigateAndClose = (page: Page) => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  // Blokkeer scrollen van de achtergrond als het menu open is
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        isScrolled || currentPage !== 'home' || isMenuOpen
          ? 'bg-darkSlate py-4 border-b border-white/10 shadow-2xl' 
          : 'bg-transparent py-8 border-b border-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <button 
          onClick={() => navigateAndClose('home')} 
          className="flex items-center gap-2 group relative z-[130] outline-none"
        >
          <div className="w-8 h-8 md:w-10 md:h-10 border-2 border-copper flex items-center justify-center font-bold text-lg md:text-xl group-hover:bg-copper group-hover:text-white transition-all duration-300 bg-darkSlate lg:bg-transparent">
            KD
          </div>
          <span className="text-lg md:text-xl font-extrabold tracking-tighter text-white">PROJECTS</span>
        </button>

        {/* Desktop Navigatie */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-10 text-[10px] xl:text-[11px] font-bold tracking-[0.2em] uppercase">
          <button onClick={() => onNavigate('home')} className={`${currentPage === 'home' ? 'text-copper' : 'text-gray-400 hover:text-white'} transition-colors`}>Home</button>
          <button onClick={() => onNavigate('utiliteit')} className={`${currentPage === 'utiliteit' ? 'text-copper' : 'text-gray-400 hover:text-white'} transition-colors`}>Utiliteit</button>
          <button onClick={() => onNavigate('residentieel')} className={`${currentPage === 'residentieel' ? 'text-copper' : 'text-gray-400 hover:text-white'} transition-colors`}>Residentieel</button>
          <button onClick={() => onNavigate('service')} className={`${currentPage === 'service' ? 'text-copper' : 'text-gray-400 hover:text-white'} transition-colors`}>Service</button>
          <button onClick={() => onNavigate('projecten')} className={`${currentPage === 'projecten' ? 'text-copper' : 'text-gray-400 hover:text-white'} transition-colors`}>Projecten</button>
          <button onClick={() => onNavigate('contact')} className="border border-copper px-6 py-2 text-copper hover:bg-copper hover:text-white transition-all">Contact</button>
        </nav>

        {/* Mobiele Hamburger Knop */}
        <button 
          className="lg:hidden text-white relative z-[130] p-2 flex items-center gap-3 group outline-none focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="text-[10px] font-bold uppercase tracking-widest text-white/70">
            {isMenuOpen ? 'Sluiten' : 'Menu'}
          </span>
          <div className="flex flex-col gap-1.5 w-6">
            <span className={`h-[2px] w-full bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-[8px] bg-copper' : 'bg-white'}`}></span>
            <span className={`h-[2px] w-full bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'bg-white'}`}></span>
            <span className={`h-[2px] w-full bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-[8px] bg-copper' : 'bg-white'}`}></span>
          </div>
        </button>

        {/* Mobiel Menu Overlay (Ondoorzichtig) */}
        <div 
          className={`fixed inset-0 bg-darkSlate z-[110] transition-all duration-500 ease-in-out lg:hidden flex flex-col pt-32 px-10 ${
            isMenuOpen ? 'translate-x-0 opacity-100 visible' : 'translate-x-full opacity-0 invisible'
          }`}
        >
          {/* Subtiele achtergrond grid voor luxe gevoel, maar wel ondoorzichtig */}
          <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#B87333 0.5px, transparent 0.5px)', backgroundSize: '30px 30px' }}></div>

          <nav className="flex flex-col space-y-7 relative z-10 overflow-y-auto pb-10">
            {/* Hoofd Secties */}
            <button 
              onClick={() => navigateAndClose('home')} 
              className={`text-4xl font-black uppercase tracking-tighter text-left ${currentPage === 'home' ? 'text-copper' : 'text-white'}`}
            >
              Home
            </button>
            <button 
              onClick={() => navigateAndClose('projecten')} 
              className={`text-4xl font-black uppercase tracking-tighter text-left ${currentPage === 'projecten' ? 'text-copper' : 'text-white'}`}
            >
              Projecten
            </button>
            <button 
              onClick={() => navigateAndClose('contact')} 
              className={`text-4xl font-black uppercase tracking-tighter text-left ${currentPage === 'contact' ? 'text-copper' : 'text-white'}`}
            >
              Contact
            </button>

            {/* Expertise met luxe indicators */}
            <div className="flex flex-col space-y-4 pt-8 border-t border-white/10">
              <span className="text-copper/60 text-[10px] font-bold uppercase tracking-[0.4em] mb-2">Onze Expertise</span>
              
              <button 
                onClick={() => navigateAndClose('utiliteit')} 
                className={`flex items-center gap-5 group py-2 ${currentPage === 'utiliteit' ? 'text-copper' : 'text-white'}`}
              >
                <div className={`w-8 h-[2px] ${currentPage === 'utiliteit' ? 'bg-copper' : 'bg-white/20'} transition-all`}></div>
                <span className="text-2xl font-bold uppercase tracking-widest">Utiliteit</span>
              </button>

              <button 
                onClick={() => navigateAndClose('residentieel')} 
                className={`flex items-center gap-5 group py-2 ${currentPage === 'residentieel' ? 'text-copper' : 'text-white'}`}
              >
                <div className={`w-8 h-[2px] ${currentPage === 'residentieel' ? 'bg-copper' : 'bg-white/20'} transition-all`}></div>
                <span className="text-2xl font-bold uppercase tracking-widest">Residentieel</span>
              </button>

              <button 
                onClick={() => navigateAndClose('service')} 
                className={`flex items-center gap-5 group py-2 ${currentPage === 'service' ? 'text-copper' : 'text-white'}`}
              >
                <div className={`w-8 h-[2px] ${currentPage === 'service' ? 'bg-copper' : 'bg-white/20'} transition-all`}></div>
                <span className="text-2xl font-bold uppercase tracking-widest">Service</span>
              </button>
            </div>

            {/* Footer van het menu */}
            <div className="pt-10 flex gap-6 border-t border-white/5">
              <button onClick={() => navigateAndClose('privacy')} className="text-[10px] font-bold uppercase tracking-widest text-white/30">Privacy</button>
              <button onClick={() => navigateAndClose('voorwaarden')} className="text-[10px] font-bold uppercase tracking-widest text-white/30">Voorwaarden</button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
