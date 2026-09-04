import React from 'react';
import { 
  Award, 
  ShieldCheck, 
  Clock, 
  ThumbsUp, 
  BadgePercent, 
  CheckCircle2 
} from 'lucide-react';
import { COMPANY_INFO, SUPPORTED_BRANDS } from '../data/acData';

export const WhyChooseUs: React.FC = () => {
  const stats = [
    { label: 'Years Of Experience', value: '15+', icon: Award },
    { label: 'Completed AC Projects', value: '14,500+', icon: CheckCircle2 },
    { label: 'Certified HVAC Technicians', value: '38+', icon: ShieldCheck },
    { label: 'Customer Satisfaction', value: '99.4%', icon: ThumbsUp },
  ];

  const features = [
    {
      title: 'Fixed Upfront Pricing',
      desc: 'No hidden callout fees or post-repair shocks. You get an itemized quote before we begin.',
      icon: BadgePercent,
    },
    {
      title: '45-Min Emergency Dispatch',
      desc: 'Rapid mobile service vans stocked with genuine OEM capacitors, motors, and cooling coils.',
      icon: Clock,
    },
    {
      title: '90-Day Written Warranty',
      desc: 'Every repair is backed by our unconditional guarantee. If issue persists, we return free.',
      icon: ShieldCheck,
    },
    {
      title: 'Multi-Brand Certified',
      desc: 'Factory-trained on Inverter, VRF, Split, Window, and Central systems across all major brands.',
      icon: Award,
    },
  ];

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-16 border-b border-slate-800">
          {stats.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div key={idx} className="text-center p-4">
                <div className="w-12 h-12 rounded-xl bg-orange-500/15 text-orange-400 mx-auto flex items-center justify-center mb-3 border border-orange-500/20">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-white font-display">
                  {s.value}
                </div>
                <div className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">
                  {s.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Why Choose Us Content & Cards */}
        <div className="pt-16">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-orange-400">
              The AirCool Advantage
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mt-2 font-display">
              Why 14,000+ Customers Trust AirCool
            </h2>
            <p className="mt-3 text-sm text-slate-400">
              Precision climate engineering, uncompromising safety standards, and courteous customer service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, idx) => {
              const Icon = f.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-xl bg-slate-800/60 border border-slate-700/70 hover:border-orange-500/50 hover:bg-slate-800 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-orange-500 text-white flex items-center justify-center mb-4 shadow-md shadow-orange-500/20 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-base text-white mb-2">{f.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Brands We Service Section */}
        <div className="mt-16 pt-12 border-t border-slate-800">
          <p className="text-xs text-center font-bold uppercase tracking-widest text-slate-400 mb-6">
            Authorized Service &amp; Spare Parts For All Top AC Brands
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 opacity-85">
            {SUPPORTED_BRANDS.map((brand, idx) => (
              <span
                key={idx}
                className="px-3.5 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700/80 text-xs sm:text-sm font-semibold text-slate-300 hover:text-orange-400 hover:border-orange-500/40 transition-colors"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
