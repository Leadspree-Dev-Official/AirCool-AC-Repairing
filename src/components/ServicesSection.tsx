import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Wrench, 
  Sparkles, 
  Flame, 
  ArrowRight, 
  Check, 
  ChevronRight,
  Gauge,
  Cpu,
  Zap,
  ArrowDownToLine,
  Info
} from 'lucide-react';
import { SERVICES_DATA, ADDITIONAL_SERVICES } from '../data/acData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onOpenQuoteModal: (serviceId?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenQuoteModal }) => {
  const [activeCardId, setActiveCardId] = useState<string>('ac-installation');
  const [selectedServiceDetails, setSelectedServiceDetails] = useState<ServiceItem | null>(null);
  const [showAllServices, setShowAllServices] = useState(false);

  // Icon mapping
  const renderIcon = (name: string, className = 'w-6 h-6') => {
    switch (name) {
      case 'ShieldCheck':
        return <ShieldCheck className={className} />;
      case 'Wrench':
        return <Wrench className={className} />;
      case 'Sparkles':
        return <Sparkles className={className} />;
      case 'Flame':
        return <Flame className={className} />;
      default:
        return <Wrench className={className} />;
    }
  };

  const renderAdditionalIcon = (icon: string) => {
    switch (icon) {
      case 'Gauge':
        return <Gauge className="w-5 h-5 text-orange-500" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-orange-500" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-orange-500" />;
      case 'ArrowDownToLine':
        return <ArrowDownToLine className="w-5 h-5 text-orange-500" />;
      default:
        return <Wrench className="w-5 h-5 text-orange-500" />;
    }
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-slate-50/70 border-y border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header matching reference */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center gap-2 mb-2">
            <span className="w-6 h-0.5 bg-orange-500 rounded-full"></span>
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-orange-600">
              Featured Services
            </span>
            <span className="w-6 h-0.5 bg-orange-500 rounded-full"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 font-display">
            Popular Repair Service
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 font-normal">
            Specialized solutions for residential split units, central HVAC systems, and commercial rooftop cooling.
          </p>
        </div>

        {/* 4 Cards Grid - precisely matching the reference layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {SERVICES_DATA.map((service) => {
            const isHighlighted = activeCardId === service.id;

            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                onMouseEnter={() => setActiveCardId(service.id)}
                className={`group relative rounded-xl bg-white border transition-all duration-300 flex flex-col overflow-hidden cursor-pointer ${
                  isHighlighted
                    ? 'border-orange-500 shadow-xl ring-2 ring-orange-500/20 translate-y-[-4px]'
                    : 'border-slate-200/90 hover:border-slate-300 shadow-sm hover:shadow-md'
                }`}
                onClick={() => setSelectedServiceDetails(service)}
              >
                {/* Image Frame */}
                <div className="relative h-48 sm:h-44 w-full overflow-hidden bg-slate-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  
                  {/* Price Tag pill */}
                  <span className="absolute top-3 right-3 px-2.5 py-1 text-xs font-bold rounded-md bg-black/70 backdrop-blur-sm text-orange-400 border border-white/10">
                    From ${service.priceStartingAt}
                  </span>
                </div>

                {/* Card Body - Highlighted state vs Standard state as depicted in reference */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  {/* If highlighted: show expanded orange header badge, text and Read More button */}
                  {isHighlighted ? (
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-orange-500 text-white flex items-center justify-center shrink-0 shadow-md shadow-orange-500/30">
                          {renderIcon(service.iconName, 'w-5 h-5')}
                        </div>
                        <div>
                          <h3 className="font-bold text-slate-900 text-base leading-snug">
                            {service.title}
                          </h3>
                          <span className="text-[11px] text-orange-600 font-semibold uppercase tracking-wider">
                            Popular Choice
                          </span>
                        </div>
                      </div>

                      <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                        {service.shortDesc}
                      </p>

                      <div className="pt-2 flex items-center gap-2">
                        <button
                          type="button"
                          id={`service-read-more-${service.id}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedServiceDetails(service);
                          }}
                          className="w-full py-2 px-3 text-xs font-semibold rounded-md bg-orange-500 hover:bg-orange-600 text-white transition-colors flex items-center justify-center gap-1.5 shadow-sm shadow-orange-500/30"
                        >
                          <span>Read More</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ) : (
                    /* Default state matching reference: Icon on left, title on right, clean card */
                    <div className="flex items-center gap-3.5 py-2">
                      <div className="w-10 h-10 rounded-lg bg-orange-50 text-orange-600 border border-orange-200 flex items-center justify-center shrink-0 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                        {renderIcon(service.iconName, 'w-5 h-5')}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-slate-900 text-sm sm:text-base truncate group-hover:text-orange-600 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-xs text-slate-500 truncate">
                          Quick same-day dispatch
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Fast Action Footer */}
                  <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      Warranty Included
                    </span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenQuoteModal(service.id);
                      }}
                      className="font-semibold text-orange-600 hover:text-orange-700 hover:underline flex items-center gap-0.5"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Specialized Services Bar */}
        <div className="mt-14">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 text-center sm:text-left">
              <div className="w-10 h-10 rounded-lg bg-slate-900 text-white flex items-center justify-center shrink-0">
                <Wrench className="w-5 h-5 text-orange-400" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Need Specialized AC Repairs?</h4>
                <p className="text-xs text-slate-500">Gas Leak Testing, PCB Circuit Micro-Soldering, Compressor Replacement &amp; AMC</p>
              </div>
            </div>

            <button
              id="toggle-more-services-btn"
              onClick={() => setShowAllServices(!showAllServices)}
              className="px-4 py-2 text-xs font-semibold rounded-lg text-slate-700 hover:text-orange-600 hover:bg-orange-50 border border-slate-200 transition-all cursor-pointer whitespace-nowrap"
            >
              {showAllServices ? 'Hide Extra Services' : 'View All Specialized Services'}
            </button>
          </div>

          {/* Extended Services Grid when expanded */}
          {showAllServices && (
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 animate-in fade-in duration-300">
              {ADDITIONAL_SERVICES.map((extra) => (
                <div
                  key={extra.id}
                  className="p-4 rounded-xl bg-white border border-slate-200 hover:border-orange-300 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="w-9 h-9 rounded-lg bg-orange-50 flex items-center justify-center">
                      {renderAdditionalIcon(extra.icon)}
                    </div>
                    <h5 className="text-sm font-bold text-slate-900">{extra.title}</h5>
                    <p className="text-xs text-slate-500 leading-relaxed">{extra.desc}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-900">${extra.price} fixed</span>
                    <button
                      onClick={() => onOpenQuoteModal(extra.id)}
                      className="text-xs font-semibold text-orange-600 hover:text-orange-700 flex items-center gap-1"
                    >
                      Book <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Service Details Modal */}
      {selectedServiceDetails && (
        <div 
          id="service-detail-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedServiceDetails(null)}
        >
          <div 
            className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-100"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-48 w-full">
              <img
                src={selectedServiceDetails.image}
                alt={selectedServiceDetails.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <button
                onClick={() => setSelectedServiceDetails(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 text-white hover:bg-black/80 flex items-center justify-center text-sm font-bold transition-colors"
              >
                ✕
              </button>
              <div className="absolute bottom-3 left-4 right-4 text-white">
                <span className="text-xs uppercase tracking-wider font-semibold text-orange-400">
                  AirCool Service Details
                </span>
                <h3 className="text-xl font-bold font-display">{selectedServiceDetails.title}</h3>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <p className="text-sm text-slate-600 leading-relaxed">
                {selectedServiceDetails.fullDesc}
              </p>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2.5">
                  What&apos;s Included In This Service:
                </h4>
                <div className="space-y-2">
                  {selectedServiceDetails.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-400 block">Starting Price</span>
                  <span className="text-xl font-extrabold text-slate-900 font-display">
                    ${selectedServiceDetails.priceStartingAt}
                  </span>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => setSelectedServiceDetails(null)}
                    className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => {
                      const sId = selectedServiceDetails.id;
                      setSelectedServiceDetails(null);
                      onOpenQuoteModal(sId);
                    }}
                    className="px-5 py-2.5 text-xs font-bold text-white bg-orange-500 hover:bg-orange-600 rounded-lg shadow-md shadow-orange-500/20 transition-all"
                  >
                    Book This Service
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
