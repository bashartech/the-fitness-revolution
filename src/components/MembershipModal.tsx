import React, { useState } from 'react';
import { X, CheckCircle, MessageCircle, Send, Dumbbell } from 'lucide-react';
import { gymData, MembershipPlan } from '../lib/gymData';

interface MembershipModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan?: MembershipPlan | null;
}

export const MembershipModal: React.FC<MembershipModalProps> = ({
  isOpen,
  onClose,
  selectedPlan,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    whatsapp: '',
    email: '',
    gender: 'Male',
    age: '',
    fitnessGoal: 'Muscle Building & Strength',
    plan: selectedPlan?.name || '3 Month Membership',
    preferredTime: 'Evening (5:00 PM – 2:00 AM)',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sync plan if prop changes
  React.useEffect(() => {
    if (selectedPlan) {
      setFormData((prev) => ({ ...prev, plan: selectedPlan.name }));
    }
  }, [selectedPlan]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Frontend submission simulation (ready for CRM / API endpoint integration)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const constructWhatsAppMessage = () => {
    const text = `*New Membership Inquiry - The Fitness Revolution*
• *Name:* ${formData.fullName || 'Not specified'}
• *Phone:* ${formData.phone || 'Not specified'}
• *WhatsApp:* ${formData.whatsapp || formData.phone || 'Not specified'}
• *Email:* ${formData.email || 'Not specified'}
• *Gender:* ${formData.gender}
• *Age:* ${formData.age || 'Not specified'}
• *Selected Plan:* ${formData.plan}
• *Fitness Goal:* ${formData.fitnessGoal}
• *Preferred Slot:* ${formData.preferredTime}
• *Note:* ${formData.message || 'None'}`;
    return `https://wa.me/${gymData.contact.whatsappRaw}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#0F0F0F] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-neutral-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Dumbbell className="w-4 h-4 text-[#C7FF00]" />
              <span className="text-[11px] font-bold tracking-widest uppercase text-[#C7FF00]">
                MEMBERSHIP INQUIRY
              </span>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-black uppercase tracking-wide text-white mb-2">
              JOIN THE REVOLUTION
            </h3>
            <p className="text-xs text-neutral-400 mb-6">
              Complete your details below. Our front desk staff at Nazimabad No. 4 will confirm current fees and enrollment steps.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Tariq Ahmed"
                    className="w-full bg-[#181818] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#C7FF00]"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="03XX XXXXXXX"
                    className="w-full bg-[#181818] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#C7FF00]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* WhatsApp Number */}
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1">
                    WhatsApp Number (if different)
                  </label>
                  <input
                    type="tel"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    placeholder="03XX XXXXXXX"
                    className="w-full bg-[#181818] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#C7FF00]"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full bg-[#181818] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#C7FF00]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Gender */}
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1">
                    Gender
                  </label>
                  <select
                    value={formData.gender}
                    onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                    className="w-full bg-[#181818] border border-white/10 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#C7FF00]"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female (Ladies Slot 11 AM - 4 PM)</option>
                    <option value="Prefer not to say">Prefer not to say</option>
                  </select>
                </div>

                {/* Age */}
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1">
                    Age
                  </label>
                  <input
                    type="number"
                    min="14"
                    max="85"
                    value={formData.age}
                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                    placeholder="e.g. 24"
                    className="w-full bg-[#181818] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#C7FF00]"
                  />
                </div>

                {/* Membership Plan */}
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1">
                    Selected Plan
                  </label>
                  <select
                    value={formData.plan}
                    onChange={(e) => setFormData({ ...formData, plan: e.target.value })}
                    className="w-full bg-[#181818] border border-white/10 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#C7FF00]"
                  >
                    {gymData.membershipPlans.map((p) => (
                      <option key={p.id} value={p.name}>
                        {p.name} ({p.duration})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Fitness Goal */}
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1">
                    Primary Fitness Goal
                  </label>
                  <select
                    value={formData.fitnessGoal}
                    onChange={(e) => setFormData({ ...formData, fitnessGoal: e.target.value })}
                    className="w-full bg-[#181818] border border-white/10 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#C7FF00]"
                  >
                    <option value="Muscle Building & Strength">Muscle Building & Strength</option>
                    <option value="Weight Loss & Fat Reduction">Weight Loss & Fat Reduction</option>
                    <option value="Personal Training Coaching">Personal Training Coaching</option>
                    <option value="General Physical Conditioning">General Physical Conditioning</option>
                    <option value="Ladies Dedicated Training">Ladies Dedicated Training</option>
                  </select>
                </div>

                {/* Preferred Training Time */}
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1">
                    Preferred Training Hours
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full bg-[#181818] border border-white/10 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#C7FF00]"
                  >
                    <option value="Morning (6:00 AM – 11:00 AM)">Morning (6:00 AM – 11:00 AM)</option>
                    <option value="Ladies Exclusive (11:00 AM – 4:00 PM)">Ladies Exclusive (11:00 AM – 4:00 PM)</option>
                    <option value="Evening (5:00 PM – 2:00 AM)">Evening (5:00 PM – 2:00 AM)</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1">
                  Questions / Additional Notes
                </label>
                <textarea
                  rows={2}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us if you have prior gym experience or specific injuries..."
                  className="w-full bg-[#181818] border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#C7FF00]"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 py-3 px-6 bg-[#C7FF00] hover:bg-[#d5ff33] text-black font-black text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(199,255,0,0.25)]"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isSubmitting ? "PROCESSING..." : "REQUEST MEMBERSHIP INFO"}</span>
                </button>

                <a
                  href={constructWhatsAppMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#25D366] border border-[#25D366]/30 font-bold text-xs uppercase tracking-wider rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send via WhatsApp</span>
                </a>
              </div>
            </form>
          </div>
        ) : (
          /* Submission Confirmation State */
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 bg-[#C7FF00]/10 border border-[#C7FF00]/30 rounded-full flex items-center justify-center mx-auto text-[#C7FF00]">
              <CheckCircle className="w-8 h-8" />
            </div>

            <h3 className="font-display text-3xl font-black uppercase text-white tracking-wide">
              INQUIRY RECEIVED!
            </h3>

            <p className="text-xs text-neutral-300 max-w-md mx-auto leading-relaxed">
              Thank you, <span className="text-white font-bold">{formData.fullName}</span>. 
              Your request for the <span className="text-[#FFC400] font-bold">{formData.plan}</span> has been logged.
              Our team at The Fitness Revolution will reach out shortly.
            </p>

            <div className="p-4 rounded-xl bg-black/60 border border-white/10 max-w-md mx-auto text-left text-xs space-y-1 text-neutral-400">
              <p><strong className="text-white">Facility:</strong> Nazimabad No. 4, Karachi</p>
              <p><strong className="text-white">Contact Phone:</strong> {gymData.contact.phone}</p>
              <p><strong className="text-white">WhatsApp Desk:</strong> {gymData.contact.whatsapp}</p>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
              <a
                href={constructWhatsAppMessage()}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-6 bg-[#25D366] hover:bg-[#20ba5a] text-black font-black text-xs uppercase tracking-wider rounded-xl inline-flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>CONFIRM ON WHATSAPP NOW</span>
              </a>

              <button
                onClick={onClose}
                className="py-3 px-6 bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider rounded-xl"
              >
                CLOSE
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
