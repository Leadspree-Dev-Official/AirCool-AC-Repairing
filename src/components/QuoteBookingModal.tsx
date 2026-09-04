import React, { useState } from 'react';
import { 
  X, 
  CheckCircle2, 
  Calendar, 
  Clock, 
  Phone, 
  MapPin, 
  Calculator, 
  Printer, 
  ExternalLink, 
  ShieldCheck,
  Zap,
  Snowflake
} from 'lucide-react';
import { SERVICES_DATA, SUPPORTED_BRANDS, COMPANY_INFO } from '../data/acData';
import { QuoteBookingForm, BookingReceipt } from '../types';

interface QuoteBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedServiceId?: string;
}

export const QuoteBookingModal: React.FC<QuoteBookingModalProps> = ({
  isOpen,
  onClose,
  preselectedServiceId,
}) => {
  const [formData, setFormData] = useState<QuoteBookingForm>({
    name: '',
    phone: '',
    email: '',
    address: '',
    serviceId: preselectedServiceId || 'ac-installation',
    acType: 'split',
    acCount: 1,
    brand: 'Daikin',
    issue: 'not-cooling',
    preferredDate: new Date().toISOString().split('T')[0],
    preferredTimeSlot: 'morning',
    notes: '',
  });

  const [receipt, setReceipt] = useState<BookingReceipt | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Update serviceId when preselectedServiceId changes
  React.useEffect(() => {
    if (preselectedServiceId) {
      setFormData((prev) => ({ ...prev, serviceId: preselectedServiceId }));
    }
  }, [preselectedServiceId]);

  if (!isOpen) return null;

  // Real-time calculation logic
  const calculateEstimatedCost = () => {
    const baseService = SERVICES_DATA.find((s) => s.id === formData.serviceId);
    let base = baseService ? baseService.priceStartingAt : 49;

    // AC type multiplier
    if (formData.acType === 'window') base *= 0.85;
    if (formData.acType === 'cassette') base *= 1.4;
    if (formData.acType === 'central') base *= 1.8;

    // Unit count
    const totalMin = Math.round(base * formData.acCount);
    const totalMax = Math.round(totalMin * 1.35 + 10);

    return { min: totalMin, max: totalMax };
  };

  const cost = calculateEstimatedCost();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate reliable booking creation
    setTimeout(() => {
      const generatedReceipt: BookingReceipt = {
        bookingId: `AC-${Math.floor(100000 + Math.random() * 900000)}`,
        createdAt: new Date().toLocaleString(),
        form: { ...formData },
        estimatedCost: cost,
        status: 'Confirmed',
      };
      setReceipt(generatedReceipt);
      setIsSubmitting(false);
    }, 600);
  };

  const handlePrint = () => {
    window.print();
  };

  const getWhatsAppMessage = () => {
    if (!receipt) return '';
    const selectedService = SERVICES_DATA.find((s) => s.id === receipt.form.serviceId)?.title || receipt.form.serviceId;
    const text = `Hello AirCool! I just booked an AC service.%0A%0A*Booking ID:* ${receipt.bookingId}%0A*Customer:* ${receipt.form.name}%0A*Phone:* ${receipt.form.phone}%0A*Service:* ${selectedService}%0A*AC Type:* ${receipt.form.acType.toUpperCase()} (${receipt.form.acCount} Unit(s))%0A*Brand:* ${receipt.form.brand}%0A*Address:* ${receipt.form.address}%0A*Preferred Slot:* ${receipt.form.preferredDate} (${receipt.form.preferredTimeSlot})%0A*Est. Range:* $${receipt.estimatedCost.min} - $${receipt.estimatedCost.max}%0A%0APlease confirm my appointment technician.`;
    return `https://wa.me/16031234567?text=${text}`;
  };

  return (
    <div 
      id="quote-modal-overlay" 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div 
        id="quote-modal-content"
        className="relative bg-white rounded-2xl max-w-2xl w-full my-8 shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-slate-900 text-white p-5 sm:p-6 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-orange-500 text-white flex items-center justify-center shadow-md shadow-orange-500/30">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold font-display leading-tight">
                {receipt ? 'Booking Confirmed!' : 'Get Instant AC Quote & Schedule'}
              </h3>
              <p className="text-xs text-slate-400">
                {receipt ? 'Your technician will be dispatched promptly' : 'Calculate accurate pricing with no hidden charges'}
              </p>
            </div>
          </div>

          <button
            id="modal-close-btn"
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {receipt ? (
          /* Booking Receipt Confirmation View */
          <div className="p-6 sm:p-8 space-y-6">
            <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-2">
              <div className="w-12 h-12 rounded-full bg-emerald-500 text-white mx-auto flex items-center justify-center shadow-lg shadow-emerald-500/30">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-emerald-900 font-display">
                Service Order Confirmed!
              </h4>
              <p className="text-xs text-emerald-700 max-w-md mx-auto">
                Thank you, <strong className="font-semibold">{receipt.form.name}</strong>. An assigned AirCool master technician will call you 15 minutes before arrival.
              </p>
            </div>

            {/* Receipt Details Card */}
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-3">
              <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                <span className="text-slate-500">Booking Reference</span>
                <span className="font-mono font-bold text-sm text-slate-900 bg-white px-2 py-0.5 rounded border border-slate-200">
                  {receipt.bookingId}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 py-1">
                <div>
                  <span className="text-slate-500 block">Service Requested</span>
                  <span className="font-semibold text-slate-800">
                    {SERVICES_DATA.find((s) => s.id === receipt.form.serviceId)?.title || 'AC Service'}
                  </span>
                </div>
                <div>
                  <span className="text-slate-500 block">Unit Type &amp; Brand</span>
                  <span className="font-semibold text-slate-800">
                    {receipt.form.brand} ({receipt.form.acType.toUpperCase()} - {receipt.form.acCount}x)
                  </span>
                </div>
                <div>
                  <span className="text-slate-500 block">Appointment Date</span>
                  <span className="font-semibold text-slate-800">
                    {receipt.form.preferredDate} ({receipt.form.preferredTimeSlot.toUpperCase()})
                  </span>
                </div>
                <div>
                  <span className="text-slate-500 block">Contact Phone</span>
                  <span className="font-semibold text-slate-800">{receipt.form.phone}</span>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-200 flex justify-between items-center">
                <span className="text-slate-600 font-medium">Estimated Price Range</span>
                <span className="text-base font-extrabold text-orange-600 font-display">
                  ${receipt.estimatedCost.min} - ${receipt.estimatedCost.max}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                id="whatsapp-confirm-btn"
                href={getWhatsAppMessage()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs text-center flex items-center justify-center gap-2 shadow-md shadow-emerald-600/20 transition-all"
              >
                <span>Confirm via WhatsApp</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={handlePrint}
                className="py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs flex items-center justify-center gap-2 transition-colors"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print Receipt</span>
              </button>

              <button
                onClick={() => {
                  setReceipt(null);
                  onClose();
                }}
                className="py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          /* Interactive Quote Calculator and Booking Form */
          <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-5">
            {/* Real-time Estimated Cost Banner */}
            <div className="p-4 rounded-xl bg-orange-50/80 border border-orange-200 flex items-center justify-between">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-orange-700 block">
                  Estimated Labor &amp; Diagnostic Cost
                </span>
                <span className="text-2xl font-extrabold text-slate-900 font-display">
                  ${cost.min} – ${cost.max}
                </span>
              </div>
              <div className="text-right text-[11px] text-slate-500">
                <span className="inline-flex items-center gap-1 text-emerald-600 font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5" /> 90-Day Warranty
                </span>
                <span className="block">Transparent pricing, pay after test</span>
              </div>
            </div>

            {/* Service & AC Specs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Select AC Service *
                </label>
                <select
                  value={formData.serviceId}
                  onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
                  className="w-full text-xs sm:text-sm p-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                  required
                >
                  {SERVICES_DATA.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.title} (From ${s.priceStartingAt})
                    </option>
                  ))}
                  <option value="gas-charging">Refrigerant / Gas Charging ($49)</option>
                  <option value="pcb-repair">PCB Circuit Repair ($59)</option>
                  <option value="uninstallation">Safe Uninstallation ($35)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  AC Unit Type *
                </label>
                <select
                  value={formData.acType}
                  onChange={(e) => setFormData({ ...formData, acType: e.target.value as any })}
                  className="w-full text-xs sm:text-sm p-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                  required
                >
                  <option value="split">Wall Mounted Split AC</option>
                  <option value="window">Window AC</option>
                  <option value="cassette">Ceiling Cassette AC</option>
                  <option value="central">Central Ducted HVAC</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Brand *
                </label>
                <select
                  value={formData.brand}
                  onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                  className="w-full text-xs sm:text-sm p-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                >
                  {SUPPORTED_BRANDS.map((b) => (
                    <option key={b} value={b}>{b}</option>
                  ))}
                  <option value="Other">Other Brand</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Quantity *
                </label>
                <div className="flex items-center border border-slate-300 rounded-lg overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, acCount: Math.max(1, formData.acCount - 1) })}
                    className="w-8 py-2 bg-slate-100 text-slate-700 hover:bg-slate-200 font-bold text-sm"
                  >
                    -
                  </button>
                  <span className="flex-1 text-center font-bold text-xs text-slate-800">
                    {formData.acCount}
                  </span>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, acCount: Math.min(10, formData.acCount + 1) })}
                    className="w-8 py-2 bg-slate-100 text-slate-700 hover:bg-slate-200 font-bold text-sm"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Primary Issue
                </label>
                <select
                  value={formData.issue}
                  onChange={(e) => setFormData({ ...formData, issue: e.target.value })}
                  className="w-full text-xs sm:text-sm p-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                >
                  <option value="not-cooling">No Cooling / Warm Air</option>
                  <option value="water-leak">Water Leaking Indoors</option>
                  <option value="noise">Strange Sound / Vibration</option>
                  <option value="smell">Musty / Chemical Odor</option>
                  <option value="general-service">Routine Tune-up &amp; Cleaning</option>
                  <option value="gas-leak">Gas Leakage Detected</option>
                </select>
              </div>
            </div>

            {/* Appointment Schedule */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Preferred Date *
                </label>
                <div className="relative">
                  <input
                    type="date"
                    value={formData.preferredDate}
                    min={new Date().toISOString().split('T')[0]}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full text-xs sm:text-sm p-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Preferred Time Slot *
                </label>
                <select
                  value={formData.preferredTimeSlot}
                  onChange={(e) => setFormData({ ...formData, preferredTimeSlot: e.target.value })}
                  className="w-full text-xs sm:text-sm p-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                  required
                >
                  <option value="emergency">⚡ Immediate Emergency (Under 45 Mins)</option>
                  <option value="morning">Morning (8:00 AM - 12:00 PM)</option>
                  <option value="afternoon">Afternoon (12:00 PM - 4:00 PM)</option>
                  <option value="evening">Evening (4:00 PM - 8:00 PM)</option>
                </select>
              </div>
            </div>

            {/* Customer Details */}
            <div className="space-y-3 pt-2 border-t border-slate-200">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                Your Contact Information
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Full Name *"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full text-xs sm:text-sm p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                  required
                />

                <input
                  type="tel"
                  placeholder="Phone Number (e.g. 603-123-4567) *"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full text-xs sm:text-sm p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                  required
                />
              </div>

              <input
                type="text"
                placeholder="Full Street Address / Apartment & Pincode *"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="w-full text-xs sm:text-sm p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                required
              />
            </div>

            {/* Submit CTA */}
            <div className="pt-3">
              <button
                type="submit"
                id="submit-booking-btn"
                disabled={isSubmitting}
                className="w-full py-3.5 px-4 rounded-xl bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 text-white font-bold text-sm shadow-lg shadow-orange-500/30 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    <span>Processing Instant Booking...</span>
                  </>
                ) : (
                  <>
                    <Zap className="w-4 h-4 fill-current" />
                    <span>Confirm Booking &amp; Lock Price (${cost.min} - ${cost.max})</span>
                  </>
                )}
              </button>

              <p className="text-[11px] text-center text-slate-400 mt-2">
                No credit card required upfront • Free rescheduling • 100% money-back guarantee
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
