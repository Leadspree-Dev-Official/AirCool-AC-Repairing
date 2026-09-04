import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/acData';

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'AC Breakdown Repair',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        service: 'AC Breakdown Repair',
        message: '',
      });
    }, 5000);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Contact Details */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="w-6 h-0.5 bg-orange-500 rounded-full"></span>
                <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-orange-400">
                  Get In Touch
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-display">
                Need Fast AC Service Or Consultation?
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                Reach our centralized dispatch desk directly. For urgent breakdowns, our nearest technician is typically less than 30 minutes away.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-800/80 border border-slate-700/80">
                <div className="w-10 h-10 rounded-lg bg-orange-500 text-white flex items-center justify-center shrink-0 shadow-md shadow-orange-500/20">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Direct Service Hotline</h4>
                  <a
                    href={`tel:${COMPANY_INFO.phone.replace(/[^0-9+]/g, '')}`}
                    className="text-base sm:text-lg font-bold text-white hover:text-orange-400 transition-colors"
                  >
                    {COMPANY_INFO.phone}
                  </a>
                  <p className="text-xs text-slate-400">24 Hours / 7 Days a week</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-800/80 border border-slate-700/80">
                <div className="w-10 h-10 rounded-lg bg-slate-700 text-orange-400 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Email Inquiries</h4>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="text-sm sm:text-base font-bold text-white hover:text-orange-400 transition-colors"
                  >
                    {COMPANY_INFO.email}
                  </a>
                  <p className="text-xs text-slate-400">Response within 2 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-800/80 border border-slate-700/80">
                <div className="w-10 h-10 rounded-lg bg-slate-700 text-orange-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Central Workshop &amp; Office</h4>
                  <p className="text-sm font-medium text-white">{COMPANY_INFO.address}</p>
                  <p className="text-xs text-slate-400">Metro-wide mobile dispatch coverage</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Callback Request Form */}
          <div className="lg:col-span-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-white text-slate-900 shadow-2xl border border-slate-100">
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-orange-600 block">
                  Fast Callback Desk
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900">
                  Request a Free Callback
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Leave your number and an HVAC expert will call you within 10 minutes.
                </p>
              </div>

              {submitted ? (
                <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500 text-white mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-emerald-900 font-display">
                    Callback Request Received!
                  </h4>
                  <p className="text-xs text-emerald-700">
                    Our lead dispatcher is calling you shortly on your provided number.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Doe"
                      className="w-full text-xs sm:text-sm p-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(603) 123-4567"
                      className="w-full text-xs sm:text-sm p-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Required Service
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full text-xs sm:text-sm p-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 bg-white"
                    >
                      <option value="AC Breakdown Repair">AC Breakdown &amp; Repair</option>
                      <option value="Deep Jet Wash Cleaning">Deep Jet Wash Cleaning</option>
                      <option value="Gas Refill / Leak Detection">Gas Refill / Leak Detection</option>
                      <option value="New AC Installation">New AC Installation</option>
                      <option value="Commercial HVAC Maintenance">Commercial HVAC Maintenance</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Brief Description / Note (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us what problem your AC is having..."
                      className="w-full text-xs sm:text-sm p-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-4 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs sm:text-sm shadow-lg shadow-orange-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Request Urgent Callback</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
