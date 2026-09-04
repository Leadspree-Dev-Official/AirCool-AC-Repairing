import React from 'react';
import { Star, CheckCircle, Quote } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/acData';

export const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-20 bg-slate-50 border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center gap-2 mb-2">
            <span className="w-6 h-0.5 bg-orange-500 rounded-full"></span>
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-orange-600">
              Customer Feedback
            </span>
            <span className="w-6 h-0.5 bg-orange-500 rounded-full"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 font-display">
            What Homeowners &amp; Businesses Say
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600">
            Over 14,000 satisfied cooling clients across residential and commercial sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              className="p-7 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-orange-300 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Stars and Quote mark */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-slate-200" />
                </div>

                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-6 italic">
                  &ldquo;{t.comment}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover border border-slate-200"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <h4 className="font-bold text-slate-900 text-sm truncate">{t.name}</h4>
                    {t.verified && (
                      <CheckCircle className="w-3.5 h-3.5 text-sky-500 shrink-0" title="Verified Customer" />
                    )}
                  </div>
                  <p className="text-[11px] text-slate-500 truncate">{t.location}</p>
                  <span className="text-[10px] text-orange-600 font-semibold">{t.serviceReceived}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
