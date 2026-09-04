import React from 'react';
import { Check, ArrowRight, ShieldAlert, Award, Clock } from 'lucide-react';
import { COMPANY_INFO } from '../data/acData';

interface WhoWeAreProps {
  onOpenQuoteModal: () => void;
  onExploreServices: () => void;
}

export const WhoWeAre: React.FC<WhoWeAreProps> = ({ onOpenQuoteModal, onExploreServices }) => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image Collage with Experience Badge & Dot Pattern */}
          <div className="lg:col-span-6 relative">
            {/* Dot Pattern Graphic from reference */}
            <div className="absolute -top-6 -left-6 z-0 hidden sm:grid grid-cols-5 gap-2 opacity-70">
              {Array.from({ length: 25 }).map((_, i) => (
                <span key={i} className="w-1.5 h-1.5 rounded-full bg-orange-400"></span>
              ))}
            </div>

            {/* Main Collage Frame */}
            <div className="relative z-10 grid grid-cols-12 gap-4">
              {/* Primary Top Image (Technician on Indoor AC) */}
              <div className="col-span-8 overflow-hidden rounded-2xl shadow-xl shadow-slate-900/10 border-4 border-white group">
                <img
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
                  alt="Certified technician inspecting split AC unit"
                  className="w-full h-56 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Overlapping Secondary Image (Outdoor Unit Servicing) */}
              <div className="col-span-8 col-start-5 -mt-12 overflow-hidden rounded-2xl shadow-2xl shadow-slate-900/15 border-4 border-white group">
                <img
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80"
                  alt="HVAC repairman servicing outdoor compressor"
                  className="w-full h-52 sm:h-60 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Orange 15+ Years Experience Badge matching reference image */}
              <div className="absolute top-1/2 left-1/3 -translate-x-1/4 -translate-y-1/2 z-20 w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-gradient-to-br from-orange-500 to-amber-600 border-4 border-white shadow-2xl shadow-orange-500/40 flex flex-col items-center justify-center text-white text-center p-2 animate-float">
                <span className="text-2xl sm:text-3xl font-extrabold tracking-tight font-display leading-tight">
                  15+
                </span>
                <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider leading-tight text-orange-100">
                  Years Of <br /> Experience
                </span>
              </div>
            </div>

            {/* Subtle decorative airflow lines below collage */}
            <div className="absolute -bottom-8 left-1/4 w-48 h-12 opacity-30 pointer-events-none">
              <svg viewBox="0 0 200 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-orange-500 stroke-current stroke-2">
                <path d="M0,25 C50,5 150,45 200,25" />
                <path d="M10,35 C60,15 160,55 210,35" strokeDasharray="4 4" />
              </svg>
            </div>
          </div>

          {/* Right Column: Content matching reference image */}
          <div className="lg:col-span-6 relative">
            {/* Who We Are eyebrow with orange bar */}
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-0.5 bg-orange-500 rounded-full"></span>
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-orange-600">
                Who We Are
              </span>
            </div>

            {/* Headline matching reference */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight mb-6 font-display">
              Welcome To Ac Repair <br />
              <span className="text-slate-900">Service</span>
            </h2>

            {/* Informative description */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
              At <strong className="text-slate-900 font-semibold">{COMPANY_INFO.name}</strong>, we pride ourselves on being your most dependable climate partner. Whether your unit has stopped cooling, leaks water onto your walls, or makes abnormal screeching noises, our licensed technicians bring over 15 years of certified expertise right to your home or office.
            </p>

            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-8">
              We eliminate guesswork with digital airflow diagnostics, calibrated pressure tests, and upfront written estimates before turning a single screw.
            </p>

            {/* Checklist Items with Orange Rounded Checkmarks */}
            <div className="space-y-3.5 mb-9">
              <div className="flex items-start gap-3 group">
                <div className="w-6 h-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-sm font-medium text-slate-700">
                  Certified technicians with strict background checks &amp; factory training
                </span>
              </div>

              <div className="flex items-start gap-3 group">
                <div className="w-6 h-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-sm font-medium text-slate-700">
                  100% Genuine OEM components backed by our written service guarantee
                </span>
              </div>

              <div className="flex items-start gap-3 group">
                <div className="w-6 h-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-sm font-medium text-slate-700">
                  Prompt same-day scheduling &amp; 24/7 urgent breakdown assistance
                </span>
              </div>
            </div>

            {/* CTA Button "Explore now" matching reference */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                id="who-we-are-explore-btn"
                onClick={onExploreServices}
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm tracking-wide shadow-md shadow-orange-500/30 transition-all hover:translate-y-[-2px] cursor-pointer group"
              >
                <span>Explore now</span>
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="who-we-are-quote-btn"
                onClick={onOpenQuoteModal}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-sm transition-colors cursor-pointer"
              >
                Book Inspection
              </button>
            </div>

            {/* Air Conditioner Sketch / Line-art Illustration on Bottom Right matching reference */}
            <div className="absolute -bottom-6 right-0 opacity-20 pointer-events-none hidden md:block w-44">
              <svg viewBox="0 0 200 100" fill="none" stroke="currentColor" className="w-full text-slate-800 stroke-1">
                {/* AC Indoor Unit Outline */}
                <rect x="10" y="20" width="180" height="50" rx="6" />
                <line x1="20" y1="58" x2="180" y2="58" />
                <line x1="30" y1="64" x2="170" y2="64" />
                {/* Louver flap */}
                <path d="M25 68 L175 68" />
                {/* Digital Display */}
                <rect x="145" y="32" width="22" height="12" rx="2" />
                {/* Airflow waves */}
                <path d="M40 76 Q70 95 100 85 T160 95" strokeDasharray="3 3" />
                <path d="M50 82 Q80 100 110 90 T150 100" strokeDasharray="3 3" />
              </svg>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
