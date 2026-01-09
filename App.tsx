
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import ContactSection from './components/Contact';
import Footer from './components/Footer';
import CommercialPage from './pages/CommercialPage';
import ResidentialPage from './pages/ResidentialPage';
import MaintenancePage from './pages/MaintenancePage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';

export type Page = 'home' | 'utiliteit' | 'residentieel' | 'service' | 'projecten' | 'contact' | 'privacy' | 'voorwaarden';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [scrolled, setScrolled] = useState(false);

  // GitHub Pages SPA logic: check URL parameters for route
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const p = params.get('p');
    if (p && ['home', 'utiliteit', 'residentieel', 'service', 'projecten', 'contact', 'privacy', 'voorwaarden'].includes(p)) {
      setCurrentPage(p as Page);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    window.scrollTo(0, 0);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'utiliteit': return <CommercialPage onNavigate={setCurrentPage} />;
      case 'residentieel': return <ResidentialPage onNavigate={setCurrentPage} />;
      case 'service': return <MaintenancePage onNavigate={setCurrentPage} />;
      case 'projecten': return <ProjectsPage onNavigate={setCurrentPage} />;
      case 'contact': return <ContactPage onNavigate={setCurrentPage} />;
      case 'privacy': return <PrivacyPage onNavigate={setCurrentPage} />;
      case 'voorwaarden': return <TermsPage onNavigate={setCurrentPage} />;
      default: return (
        <>
          <Hero onNavigate={setCurrentPage} />
          <Services onNavigate={setCurrentPage} />
          <About />
          <ContactSection onNavigate={setCurrentPage} />
        </>
      );
    }
  };

  return (
    <div className="min-h-screen bg-darkSlate selection:bg-copper selection:text-white transition-colors duration-500">
      <Header isScrolled={scrolled} currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="animate-fade-in">
        {renderPage()}
      </main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
};

export default App;
