import React, { useState, useEffect } from 'react';
import { Snowflake, Menu, X, PhoneCall } from 'lucide-react';
import { COMPANY_INFO } from '../data/acData';

interface NavbarProps {
  onOpenQuoteModal: (preselectedServiceId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'services', 'projects', 'pricing', 'reviews', 'faq', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About Us', href: '#about', id: 'about' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Pricing', href: '#pricing', id: 'pricing' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-100 py-3'
          : 'bg-white/90 backdrop-blur-sm border-b border-slate-200/80 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo matching reference */}
          <a
            id="brand-logo"
            href="#home"
            className="flex items-center gap-2.5 group select-none"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 text-white flex items-center justify-center shadow-md shadow-slate-900/10 group-hover:scale-105 transition-all">
              <Snowflake className="w-6 h-6 text-sky-400 animate-spin-slow" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full border-2 border-white"></span>
            </div>
            <div>
              <div className="flex items-center">
                <span className="text-2xl font-bold tracking-tight text-slate-900 font-display">
                  Air<span className="text-orange-500 font-extrabold">Cool</span>
                </span>
              </div>
              <p className="text-[10px] font-semibold tracking-wider uppercase text-slate-400 -mt-1">
                AC Repairing & HVAC
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav id="desktop-nav-menu" className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  onClick={() => handleNavClick(link.href)}
                  className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-colors cursor-pointer ${
                    isActive
                      ? 'text-orange-600 font-semibold bg-orange-50/80'
                      : 'text-slate-600 hover:text-slate-950 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Action CTA matching reference */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              id="nav-quick-call"
              href={`tel:${COMPANY_INFO.phone.replace(/[^0-9+]/g, '')}`}
              className="p-2.5 rounded-full text-slate-600 hover:text-orange-600 hover:bg-orange-50 transition-colors"
              title="Call Now"
            >
              <PhoneCall className="w-4 h-4 text-orange-500" />
            </a>

            <button
              id="nav-get-quote-btn"
              onClick={() => onOpenQuoteModal()}
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold tracking-wide text-slate-900 border-2 border-slate-900 hover:bg-orange-500 hover:border-orange-500 hover:text-white rounded-lg transition-all duration-200 shadow-sm cursor-pointer"
            >
              Get A Quote
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              id="mobile-quote-trigger"
              onClick={() => onOpenQuoteModal()}
              className="px-3 py-1.5 text-xs font-semibold bg-orange-500 text-white rounded-lg shadow-sm"
            >
              Quote
            </button>
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div id="mobile-nav-drawer" className="sm:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 shadow-xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                id={`mobile-nav-${link.id}`}
                onClick={() => handleNavClick(link.href)}
                className={`text-left px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                  activeSection === link.id
                    ? 'text-orange-600 bg-orange-50 font-semibold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              id="mobile-nav-quote-btn"
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full py-2.5 text-center text-sm font-semibold text-white bg-orange-500 hover:bg-orange-600 rounded-lg shadow-sm cursor-pointer"
            >
              Get A Quote
            </button>
            <a
              id="mobile-nav-call-btn"
              href={`tel:${COMPANY_INFO.phone.replace(/[^0-9+]/g, '')}`}
              className="w-full py-2.5 text-center text-sm font-semibold text-slate-800 border border-slate-200 rounded-lg flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-orange-500" />
              Call {COMPANY_INFO.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
