import React from 'react';
import { PhoneCall, Calendar, MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '../data/acData';

interface MobileQuickBarProps {
  onOpenQuoteModal: () => void;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = ({ onOpenQuoteModal }) => {
  return (
    <div 
      id="mobile-quick-action-bar" 
      className="fixed bottom-0 left-0 right-0 z-40 bg-slate-900/95 backdrop-blur-md border-t border-slate-800 p-2.5 sm:hidden shadow-2xl flex items-center justify-around gap-2"
    >
      {/* Call Now */}
      <a
        id="mobile-quick-call"
        href={`tel:${COMPANY_INFO.phone.replace(/[^0-9+]/g, '')}`}
        className="flex-1 py-2.5 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-100 flex items-center justify-center gap-1.5 text-xs font-semibold"
      >
        <PhoneCall className="w-3.5 h-3.5 text-orange-400" />
        <span>Call Now</span>
      </a>

      {/* WhatsApp Chat */}
      <a
        id="mobile-quick-whatsapp"
        href={COMPANY_INFO.socials.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="py-2.5 px-3.5 rounded-lg bg-emerald-700/80 hover:bg-emerald-600 text-white flex items-center justify-center text-xs font-semibold"
        title="Chat on WhatsApp"
      >
        <MessageSquare className="w-4 h-4 text-white" />
      </a>

      {/* Book AC Service */}
      <button
        id="mobile-quick-book"
        onClick={onOpenQuoteModal}
        className="flex-[1.4] py-2.5 px-3 rounded-lg bg-orange-500 hover:bg-orange-600 text-white flex items-center justify-center gap-1.5 text-xs font-bold shadow-md shadow-orange-500/30 cursor-pointer"
      >
        <Calendar className="w-3.5 h-3.5" />
        <span>Book Service</span>
      </button>
    </div>
  );
};
