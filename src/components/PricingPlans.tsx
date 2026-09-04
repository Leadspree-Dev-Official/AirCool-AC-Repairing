import React from 'react';
import { Check, Zap, Shield, Clock } from 'lucide-react';
import { PRICING_PLANS } from '../data/acData';

interface PricingPlansProps {
  onSelectPlan: (planId: string) => void;
}

export const PricingPlans: React.FC<PricingPlansProps> = ({ onSelectPlan }) => {
  return (
    <section id="pricing" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center gap-2 mb-2">
            <span className="w-6 h-0.5 bg-orange-500 rounded-full"></span>
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-orange-600">
              Clear &amp; Transparent
            </span>
            <span className="w-6 h-0.5 bg-orange-500 rounded-full"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 font-display">
            Service Packages &amp; Pricing
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600">
            No surprise add-ons. Every package includes a comprehensive cooling test and written warranty.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-2xl flex flex-col justify-between transition-all duration-300 relative ${
                plan.popular
                  ? 'bg-slate-900 text-white shadow-2xl ring-2 ring-orange-500 scale-105 z-10 p-8'
                  : 'bg-slate-50 text-slate-900 border border-slate-200 hover:border-slate-300 shadow-sm p-7'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider rounded-full bg-orange-500 text-white shadow-md">
                    Most Popular Choice
                  </span>
                </div>
              )}

              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className={`text-lg font-bold font-display ${plan.popular ? 'text-white' : 'text-slate-900'}`}>
                    {plan.name}
                  </h3>
                </div>

                <p className={`text-xs mb-6 ${plan.popular ? 'text-slate-300' : 'text-slate-500'}`}>
                  {plan.description}
                </p>

                <div className="flex items-baseline gap-1 mb-6">
                  <span className={`text-4xl font-extrabold font-display ${plan.popular ? 'text-white' : 'text-slate-900'}`}>
                    ${plan.price}
                  </span>
                  <span className={`text-xs ${plan.popular ? 'text-slate-400' : 'text-slate-500'}`}>
                    / per unit
                  </span>
                </div>

                <div className={`flex items-center gap-4 text-xs py-3 px-3 rounded-lg mb-6 ${
                  plan.popular ? 'bg-slate-800 text-slate-300' : 'bg-white border border-slate-200 text-slate-600'
                }`}>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-orange-500" />
                    {plan.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Shield className="w-3.5 h-3.5 text-emerald-500" />
                    {plan.warranty}
                  </span>
                </div>

                <div className="space-y-3 mb-8">
                  <p className={`text-xs font-bold uppercase tracking-wider ${plan.popular ? 'text-slate-400' : 'text-slate-700'}`}>
                    Included Checklist:
                  </p>
                  {plan.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs">
                      <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                        plan.popular ? 'bg-orange-500/20 text-orange-400' : 'bg-emerald-100 text-emerald-700'
                      }`}>
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span className={plan.popular ? 'text-slate-200' : 'text-slate-700'}>
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onSelectPlan(plan.id === 'jet-deep' ? 'dust-cleaning' : plan.id)}
                className={`w-full py-3.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  plan.popular
                    ? 'bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-500/30'
                    : 'bg-slate-900 hover:bg-orange-500 text-white shadow-sm'
                }`}
              >
                <Zap className="w-3.5 h-3.5 fill-current" />
                <span>Book This Package</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
