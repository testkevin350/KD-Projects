
import React from 'react';
import { Page } from '../App';

interface HeaderProps {
  isScrolled: boolean;
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const Header: React.FC<HeaderProps> = ({ isScrolled, currentPage, onNavigate }) => {
  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled || currentPage !== 'home'
          ? 'bg-darkSlate/90 backdrop-blur-md py-4 border-b border-white/5' 
          : 'bg-transparent py-8'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <button onClick={() => onNavigate('home')} className="flex items-center gap-2 group outline-none">
          <div className="w-10 h-10 border-2 border-copper flex items-center justify-center font-bold text-xl group-hover:bg-copper group-hover:text-white transition-all duration-300">
            KD
          </div>
          <span className="text-xl font-extrabold tracking-tighter text-white">PROJECTS</span>
        </button>

        <nav className="hidden lg:flex items-center space-x-8 text-[11px] font-bold tracking-[0.2em] uppercase">
          <button 
            onClick={() => onNavigate('home')} 
            className={`${currentPage === 'home' ? 'text-copper' : 'text-gray-400 hover:text-white'} transition-colors`}
          >
            Home
          </button>
          <div className="group relative">
            <button className={`${['utiliteit', 'residentieel', 'service'].includes(currentPage) ? 'text-copper' : 'text-gray-400 hover:text-white'} transition-colors flex items-center gap-1`}>
              Expertise <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <div className="absolute top-full left-0 mt-4 w-64 bg-anthracite border border-white/5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-2xl py-2">
              <button onClick={() => onNavigate('utiliteit')} className="w-full text-left px-6 py-3 hover:bg-copper/10 hover:text-copper transition-colors text-gray-400 uppercase text-[10px]">Utiliteitsbouw</button>
              <button onClick={() => onNavigate('residentieel')} className="w-full text-left px-6 py-3 hover:bg-copper/10 hover:text-copper transition-colors text-gray-400 uppercase text-[10px]">Residentiële Projecten</button>
              <button onClick={() => onNavigate('service')} className="w-full text-left px-6 py-3 hover:bg-copper/10 hover:text-copper transition-colors text-gray-400 uppercase text-[10px]">Service & Onderhoud</button>
            </div>
          </div>
          <button 
            onClick={() => onNavigate('projecten')} 
            className={`${currentPage === 'projecten' ? 'text-copper' : 'text-gray-400 hover:text-white'} transition-colors`}
          >
            Projecten
          </button>
          <button 
            onClick={() => onNavigate('contact')}
            className={`border border-copper px-5 py-2 transition-all duration-300 ${currentPage === 'contact' ? 'bg-copper text-white' : 'text-copper hover:bg-copper hover:text-white'}`}
          >
            Contact
          </button>
        </nav>

        <button className="lg:hidden text-copper">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
