import React from 'react';
import { Phone, Mail, Clock } from 'lucide-react';
import { COMPANY_INFO } from '../data/acData';

export const TopBar: React.FC = () => {
  return (
    <div id="top-bar" className="bg-[#0b0f17] text-slate-300 text-xs border-b border-slate-800/80 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4">
        {/* Contact Info */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-6">
          <a
            id="top-bar-phone"
            href={`tel:${COMPANY_INFO.phone.replace(/[^0-9+]/g, '')}`}
            className="flex items-center gap-1.5 hover:text-orange-400 transition-colors group"
          >
            <Phone className="w-3.5 h-3.5 text-orange-500 group-hover:scale-110 transition-transform" />
            <span className="font-medium tracking-wide">{COMPANY_INFO.phone}</span>
          </a>

          <a
            id="top-bar-email"
            href={`mailto:${COMPANY_INFO.email}`}
            className="flex items-center gap-1.5 hover:text-orange-400 transition-colors group"
          >
            <Mail className="w-3.5 h-3.5 text-orange-500 group-hover:scale-110 transition-transform" />
            <span>{COMPANY_INFO.email}</span>
          </a>

          <div className="hidden md:flex items-center gap-1.5 text-slate-400">
            <Clock className="w-3.5 h-3.5 text-slate-500" />
            <span>24/7 Emergency Support Available</span>
          </div>
        </div>

        {/* Social Links & Location Notice */}
        <div className="flex items-center gap-3">
          <span className="hidden lg:inline text-slate-400 text-[11px] pr-2 border-r border-slate-700">
            Fast 45-Min On-Site Dispatch
          </span>
          <div className="flex items-center gap-2.5 text-slate-300">
            <a
              id="top-social-twitter"
              href={COMPANY_INFO.socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
              className="w-6 h-6 rounded-full bg-slate-800/80 hover:bg-orange-500 flex items-center justify-center transition-all hover:text-white"
            >
              <span className="text-[11px] font-bold">𝕏</span>
            </a>
            <a
              id="top-social-facebook"
              href={COMPANY_INFO.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-6 h-6 rounded-full bg-slate-800/80 hover:bg-orange-500 flex items-center justify-center transition-all hover:text-white"
            >
              <span className="text-[11px] font-bold">f</span>
            </a>
            <a
              id="top-social-instagram"
              href={COMPANY_INFO.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-6 h-6 rounded-full bg-slate-800/80 hover:bg-orange-500 flex items-center justify-center transition-all hover:text-white"
            >
              <span className="text-[11px] font-bold">📸</span>
            </a>
            <a
              id="top-social-whatsapp"
              href={COMPANY_INFO.socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-6 h-6 rounded-full bg-slate-800/80 hover:bg-emerald-600 flex items-center justify-center transition-all hover:text-white"
            >
              <span className="text-[11px] font-bold">💬</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
