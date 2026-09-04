import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, PhoneCall, Sparkles, Image as ImageIcon } from 'lucide-react';
import { COMPANY_INFO } from '../data/acData';

interface HeroProps {
  onOpenQuoteModal: () => void;
  onExploreServices: () => void;
}

const HERO_IMAGES = [
  {
    id: 'ceiling-ladder',
    label: 'Technician on Ladder (Reference Style)',
    // Authentic HVAC technician in hard hat & safety vest servicing ceiling AC equipment on a ladder
    url: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2070&q=90',
    alt: 'Professional technician in safety gear on ladder repairing indoor AC system',
    objectPosition: 'object-[75%_center]',
  },
  {
    id: 'unit-diagnostics',
    label: 'Precision Diagnostics',
    url: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=2070&q=90',
    alt: 'Technician with testing instruments repairing air conditioner',
    objectPosition: 'object-center',
  },
  {
    id: 'split-mounting',
    label: 'Split AC Installation',
    url: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=2070&q=90',
    alt: 'Technician installing and servicing wall-mounted air conditioner',
    objectPosition: 'object-right',
  },
];

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal, onExploreServices }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const currentImage = HERO_IMAGES[selectedImageIndex];

  return (
    <section id="home" className="relative min-h-[620px] lg:min-h-[720px] flex items-center overflow-hidden bg-[#090e1a] text-white">
      {/* Background Image - High Visibility, Vivid Colors, Clear Positioning */}
      <div className="absolute inset-0 z-0">
        <img
          src={currentImage.url}
          alt={currentImage.alt}
          className={`w-full h-full object-cover ${currentImage.objectPosition} opacity-90 sm:opacity-95 transition-opacity duration-700 ease-in-out`}
        />

        {/* Directional gradient: darker on the left for maximum text readability, clear and transparent on the right to show the technician, ladder, and AC unit */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#090e1a] via-[#090e1a]/85 to-transparent sm:via-[#090e1a]/70 lg:via-[#090e1a]/55 lg:to-black/15" />
        
        {/* Subtle top and bottom vignettes */}
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#090e1a]/80 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#090e1a] to-transparent" />
      </div>

      {/* Giant "SERVICE" Watermark from the reference image */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none z-0 overflow-hidden w-full text-center"
        aria-hidden="true"
      >
        <span className="text-[100px] sm:text-[150px] md:text-[200px] lg:text-[250px] font-black tracking-widest uppercase text-watermark opacity-75 block font-display leading-none">
          SERVICE
        </span>
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 w-full">
        <div className="max-w-2xl lg:max-w-3xl">
          {/* Eyebrow matching reference */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/90 backdrop-blur-md mb-6 text-xs sm:text-sm text-slate-100 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping" />
            <span className="font-semibold text-orange-400">Providing Best AC Repair Service</span>
          </div>

          {/* Main Headline matching reference */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-6 font-display drop-shadow-md">
            Professional Cooling <br className="hidden sm:inline" />
            <span className="text-white">&amp; Heating </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-amber-300">
              Service
            </span>
          </h1>

          {/* Subtext description */}
          <p className="text-base sm:text-lg text-slate-200 leading-relaxed mb-8 max-w-xl font-normal drop-shadow-sm">
            Fast, dependable air conditioning repair, deep jet-pump cleaning, refrigerant leak fix, and expert installations.
            Available 24/7 with on-demand certified technicians arriving at your doorstep.
          </p>

          {/* Action Buttons matching the "Read More" orange button in reference */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              id="hero-read-more-btn"
              onClick={onExploreServices}
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-semibold text-base shadow-xl shadow-orange-500/35 transition-all transform hover:-translate-y-0.5 cursor-pointer group"
            >
              <span>Read More</span>
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              id="hero-quote-btn"
              onClick={onOpenQuoteModal}
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-slate-900/90 hover:bg-slate-800 text-slate-100 font-semibold text-base border border-slate-600/80 backdrop-blur-md transition-all cursor-pointer shadow-md"
            >
              Get Free Estimate
            </button>

            <a
              id="hero-emergency-call"
              href={`tel:${COMPANY_INFO.phone.replace(/[^0-9+]/g, '')}`}
              className="inline-flex items-center gap-2 text-sm text-slate-200 hover:text-orange-400 transition-colors py-2 px-3 bg-slate-900/40 rounded-lg backdrop-blur-sm"
            >
              <PhoneCall className="w-4 h-4 text-orange-400" />
              <span>Emergency: <strong className="text-white">{COMPANY_INFO.phone}</strong></span>
            </a>
          </div>

          {/* Trust Highlights */}
          <div className="mt-12 pt-8 border-t border-slate-700/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs sm:text-sm text-slate-200">
            <div className="flex items-center gap-2 font-medium">
              <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
              <span>15+ Yrs Industry Trust</span>
            </div>
            <div className="flex items-center gap-2 font-medium">
              <ShieldCheck className="w-4 h-4 text-orange-400 shrink-0" />
              <span>90-Day Repair Warranty</span>
            </div>
            <div className="flex items-center gap-2 font-medium col-span-2 sm:col-span-1">
              <Zap className="w-4 h-4 text-orange-400 shrink-0" />
              <span>30-45 Min Avg Response</span>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Background View Switcher (Bottom Right) */}
      <div className="absolute bottom-5 right-5 z-20 hidden md:flex items-center gap-1.5 p-1.5 rounded-xl bg-slate-900/85 backdrop-blur-md border border-slate-700/80 shadow-lg text-xs">
        <span className="text-[11px] text-slate-400 px-2 font-medium flex items-center gap-1">
          <ImageIcon className="w-3 h-3 text-orange-400" /> View:
        </span>
        {HERO_IMAGES.map((img, idx) => (
          <button
            key={img.id}
            onClick={() => setSelectedImageIndex(idx)}
            className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-all cursor-pointer ${
              selectedImageIndex === idx
                ? 'bg-orange-500 text-white shadow-sm'
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            {idx === 0 ? 'Ladder View' : idx === 1 ? 'Diagnostics' : 'Installation'}
          </button>
        ))}
      </div>
    </section>
  );
};
