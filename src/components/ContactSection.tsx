import React, { useState } from 'react';
import { Phone, MessageCircle, Mail, MapPin, Send, CheckCircle2, ArrowRight } from 'lucide-react';
import { gymData } from '../lib/gymData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    interest: 'Membership',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const whatsappDirectUrl = `https://wa.me/${gymData.contact.whatsappRaw}?text=${encodeURIComponent(
    `Hello TFR! My name is ${formData.name || 'Visitor'}. I'm interested in ${formData.interest}. ${formData.message || ''}`
  )}`;

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#0B0B0B] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#C7FF00]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#C7FF00] font-bold">
              GET IN TOUCH
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-none">
            COME TRAIN <span className="text-[#FFC400]">WITH US.</span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 mt-4 leading-relaxed">
            Have questions about membership packages, ladies timings, or personal coaching? 
            Reach out through direct phone, WhatsApp, or our inquiry desk.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Direct Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Phone Card */}
            <a
              href={`tel:${gymData.contact.phoneRaw}`}
              className="p-5 rounded-2xl bg-[#111111] border border-white/10 hover:border-[#FFC400]/40 transition-colors flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-black flex items-center justify-center text-[#FFC400] shrink-0 border border-white/5">
                <Phone className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#FFC400] block">
                  CALL PHONE DESK
                </span>
                <div className="font-display text-xl font-bold text-white group-hover:text-[#FFC400] transition-colors">
                  {gymData.contact.phone}
                </div>
                <span className="text-xs text-neutral-400">Direct Front Desk Line</span>
              </div>
            </a>

            {/* WhatsApp Card */}
            <a
              href={`https://wa.me/${gymData.contact.whatsappRaw}?text=${encodeURIComponent(gymData.contact.whatsappDefaultMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-[#111111] border border-white/10 hover:border-[#25D366]/40 transition-colors flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-black flex items-center justify-center text-[#25D366] shrink-0 border border-white/5">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#25D366] block">
                  WHATSAPP CHAT
                </span>
                <div className="font-display text-xl font-bold text-white group-hover:text-[#25D366] transition-colors">
                  {gymData.contact.whatsapp}
                </div>
                <span className="text-xs text-neutral-400">Instant Fee Inquiries & Registrations</span>
              </div>
            </a>

            {/* Email Card */}
            <a
              href={`mailto:${gymData.contact.email}`}
              className="p-5 rounded-2xl bg-[#111111] border border-white/10 hover:border-[#00AEEF]/40 transition-colors flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-black flex items-center justify-center text-[#00AEEF] shrink-0 border border-white/5">
                <Mail className="w-5 h-5" />
              </div>
              <div className="flex-1 truncate">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#00AEEF] block">
                  OFFICIAL EMAIL
                </span>
                <div className="text-sm font-bold text-white group-hover:text-[#00AEEF] transition-colors truncate">
                  {gymData.contact.email}
                </div>
                <span className="text-xs text-neutral-400">Management & Inquiries</span>
              </div>
            </a>

            {/* Address Summary */}
            <div className="p-5 rounded-2xl bg-[#0F0F0F] border border-white/10 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-black flex items-center justify-center text-white shrink-0 border border-white/5">
                <MapPin className="w-5 h-5 text-[#C7FF00]" />
              </div>
              <div className="text-xs text-neutral-300 leading-relaxed">
                <strong className="text-white block font-display text-lg tracking-wide uppercase">
                  {gymData.name}
                </strong>
                <p>{gymData.address.plot}, {gymData.address.market}</p>
                <p>{gymData.address.venue}</p>
                <p>{gymData.address.area}, {gymData.address.city} {gymData.address.postalCode}</p>
              </div>
            </div>

          </div>

          {/* Contact Message Form (7 cols) */}
          <div className="lg:col-span-7 rounded-3xl bg-[#0F0F0F] border border-white/10 p-6 sm:p-8 shadow-xl">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="font-display text-2xl font-bold uppercase text-white mb-2">
                  CONTACT TFR DESK
                </h3>
                <p className="text-xs text-neutral-400 mb-6">
                  Fill in your message and our staff will get back to you promptly.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Asad Malik"
                      className="w-full bg-[#181818] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#C7FF00]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1">
                      Phone / WhatsApp *
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

                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1">
                      I'm interested in:
                    </label>
                    <select
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full bg-[#181818] border border-white/10 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#C7FF00]"
                    >
                      <option value="Membership">Membership</option>
                      <option value="Personal Training">Personal Training</option>
                      <option value="Classes">Classes</option>
                      <option value="Women's Training">Women's Training</option>
                      <option value="Pricing">Pricing</option>
                      <option value="General Question">General Question</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Brief summary of inquiry"
                    className="w-full bg-[#181818] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#C7FF00]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1">
                    Message *
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your message here..."
                    className="w-full bg-[#181818] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#C7FF00]"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="flex-1 py-3 px-6 bg-[#C7FF00] hover:bg-[#d5ff33] text-black font-black text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(199,255,0,0.25)]"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{submitting ? "SENDING..." : "SEND MESSAGE →"}</span>
                  </button>

                  <a
                    href={whatsappDirectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-4 bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#25D366] border border-[#25D366]/30 font-bold text-xs uppercase tracking-wider rounded-xl transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send via WhatsApp</span>
                  </a>
                </div>
              </form>
            ) : (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 bg-[#C7FF00]/10 border border-[#C7FF00]/30 rounded-full flex items-center justify-center mx-auto text-[#C7FF00]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-display text-3xl font-black uppercase text-white">
                  MESSAGE SENT
                </h3>
                <p className="text-xs text-neutral-300 max-w-md mx-auto">
                  Thank you for reaching out to The Fitness Revolution. Our staff will respond to your inquiry shortly.
                </p>
                <div className="pt-4 flex justify-center gap-3">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', phone: '', email: '', interest: 'Membership', subject: '', message: '' });
                    }}
                    className="py-2.5 px-6 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
