import React from 'react';
import { Snowflake, Phone, Mail, MapPin, ArrowRight, Heart } from 'lucide-react';
import { COMPANY_INFO, SERVICES_DATA } from '../data/acData';

interface FooterProps {
  onOpenQuoteModal: (serviceId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuoteModal }) => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="main-footer" className="bg-[#070a0f] text-slate-400 text-xs border-t border-slate-800 relative">
      {/* Top Footer Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-orange-500 text-white flex items-center justify-center shadow-md shadow-orange-500/20">
                <Snowflake className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white font-display">
                Air<span className="text-orange-500">Cool</span>
              </span>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              AirCool AC Repairing is your premier HVAC and cooling service provider. We deliver certified air conditioning installation, chemical jet cleaning, gas charging, and emergency repairs for homes and commercial facilities.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={COMPANY_INFO.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="w-8 h-8 rounded-lg bg-slate-800/90 hover:bg-orange-500 hover:text-white flex items-center justify-center transition-colors text-slate-300"
              >
                𝕏
              </a>
              <a
                href={COMPANY_INFO.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-lg bg-slate-800/90 hover:bg-orange-500 hover:text-white flex items-center justify-center transition-colors text-slate-300 font-bold"
              >
                f
              </a>
              <a
                href={COMPANY_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-lg bg-slate-800/90 hover:bg-orange-500 hover:text-white flex items-center justify-center transition-colors text-slate-300"
              >
                📸
              </a>
              <a
                href={COMPANY_INFO.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-8 h-8 rounded-lg bg-slate-800/90 hover:bg-emerald-600 hover:text-white flex items-center justify-center transition-colors text-slate-300"
              >
                💬
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white font-display tracking-wide uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { label: 'Home', href: '#home' },
                { label: 'Who We Are', href: '#about' },
                { label: 'Popular Services', href: '#services' },
                { label: 'Completed Projects', href: '#projects' },
                { label: 'Pricing Plans', href: '#pricing' },
                { label: 'Reviews', href: '#reviews' },
                { label: 'FAQ', href: '#faq' },
              ].map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="hover:text-orange-400 transition-colors text-left flex items-center gap-1.5 cursor-pointer"
                  >
                    <ArrowRight className="w-3 h-3 text-slate-600" />
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white font-display tracking-wide uppercase">
              Our Services
            </h4>
            <ul className="space-y-2">
              {SERVICES_DATA.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => onOpenQuoteModal(s.id)}
                    className="hover:text-orange-400 transition-colors text-left flex items-center gap-1.5 cursor-pointer"
                  >
                    <ArrowRight className="w-3 h-3 text-slate-600" />
                    <span>{s.title}</span>
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => onOpenQuoteModal('gas-charging')}
                  className="hover:text-orange-400 transition-colors text-left flex items-center gap-1.5 cursor-pointer"
                >
                  <ArrowRight className="w-3 h-3 text-slate-600" />
                  <span>Gas Charging &amp; Leak Testing</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenQuoteModal('pcb-repair')}
                  className="hover:text-orange-400 transition-colors text-left flex items-center gap-1.5 cursor-pointer"
                >
                  <ArrowRight className="w-3 h-3 text-slate-600" />
                  <span>Inverter PCB Board Repair</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Emergency */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white font-display tracking-wide uppercase">
              Contact &amp; Emergency
            </h4>
            
            <div className="space-y-3 text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-orange-500 shrink-0" />
                <a
                  href={`tel:${COMPANY_INFO.phone.replace(/[^0-9+]/g, '')}`}
                  className="text-white hover:text-orange-400 font-semibold transition-colors"
                >
                  {COMPANY_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-orange-500 shrink-0" />
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="hover:text-orange-400 transition-colors"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-[11px] text-slate-300">
              <span className="font-semibold text-orange-400 block mb-1">
                24/7 Rapid Emergency Response
              </span>
              <span>Always open for urgent breakdowns, water leaks, and hospital/server room cooling failures.</span>
            </div>
          </div>

        </div>
      </div>

      {/* Mandatory Attribution & Bottom Bar as required by user prompt */}
      <div className="border-t border-slate-800/80 bg-black/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left text-xs">
            
            {/* Copyright */}
            <div className="text-slate-500">
              &copy; {currentYear} <strong className="text-slate-400 font-semibold">{COMPANY_INFO.name}</strong>. All rights reserved.
            </div>

            {/* Developer & Powered By Attribution (MANDATORY REQUIREMENT) */}
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <span className="text-slate-500">Developer:</span>
                <a
                  id="footer-developer-link"
                  href={COMPANY_INFO.developer.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-400 hover:text-orange-300 font-semibold underline underline-offset-4 decoration-orange-500/50 hover:decoration-orange-400 transition-all"
                >
                  {COMPANY_INFO.developer.name}
                </a>
              </div>

              <span className="hidden sm:inline text-slate-700">•</span>

              <div className="flex items-center gap-1.5">
                <span className="text-slate-500">Powered by</span>
                <a
                  id="footer-powered-by-link"
                  href={`https://${COMPANY_INFO.poweredBy.url.replace(/^https?:\/\//, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-orange-400 font-semibold underline underline-offset-4 decoration-slate-600 hover:decoration-orange-400 transition-all"
                >
                  {COMPANY_INFO.poweredBy.name} ({COMPANY_INFO.poweredBy.url.replace(/^https?:\/\//, '')})
                </a>
              </div>
            </div>

            {/* Privacy & Terms */}
            <div className="flex items-center gap-4 text-slate-500 text-[11px]">
              <a href="#about" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
              <a href="#about" className="hover:text-slate-300 transition-colors">Terms of Service</a>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};
