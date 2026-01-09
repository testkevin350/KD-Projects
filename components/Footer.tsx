
import React from 'react';
import { Page } from '../App';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-darkSlate border-t border-white/5 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-12">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 border-2 border-copper flex items-center justify-center font-bold text-sm">
                KD
              </div>
              <span className="font-extrabold tracking-tighter text-lg uppercase text-white">Projects</span>
            </div>
            
            <div className="flex gap-4">
              <a href="https://instagram.com/kdprojects" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-copper transition-colors group">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
            <div>
              <h5 className="text-white font-bold uppercase text-[10px] tracking-widest mb-6">Expertise</h5>
              <ul className="space-y-4 text-gray-500 text-xs font-medium uppercase tracking-wider">
                <li><button onClick={() => onNavigate('utiliteit')} className="hover:text-copper transition-colors">Utiliteit</button></li>
                <li><button onClick={() => onNavigate('residentieel')} className="hover:text-copper transition-colors">Residentieel</button></li>
                <li><button onClick={() => onNavigate('service')} className="hover:text-copper transition-colors">Service</button></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-bold uppercase text-[10px] tracking-widest mb-6">Bedrijf</h5>
              <ul className="space-y-4 text-gray-500 text-xs font-medium uppercase tracking-wider">
                <li><button onClick={() => onNavigate('home')} className="hover:text-copper transition-colors">Over Ons</button></li>
                <li><button onClick={() => onNavigate('projecten')} className="hover:text-copper transition-colors">Projecten</button></li>
                <li><button onClick={() => onNavigate('contact')} className="hover:text-copper transition-colors">Contact</button></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-gray-500 text-[10px] font-medium uppercase tracking-widest text-center md:text-left leading-relaxed">
            &copy; {new Date().getFullYear()} KD-Projects BV. Engineering Excellence.<br className="md:hidden" /> KvK: 12345678 — BTW: BE 0123.456.789
          </p>

          <div className="flex gap-8 text-[10px] uppercase tracking-widest text-gray-600 font-bold">
            <button onClick={() => onNavigate('privacy')} className="hover:text-copper transition-colors">Privacy</button>
            <button onClick={() => onNavigate('voorwaarden')} className="hover:text-copper transition-colors">Voorwaarden</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
