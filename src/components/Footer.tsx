import React from 'react';
import { Phone, MessageCircle, Mail, MapPin, Instagram, Youtube, Facebook, ArrowUp } from 'lucide-react';
import { TFRLogo } from './TFRLogo';
import { gymData } from '../lib/gymData';
import logoImage from '../assets/images/logo.jpg';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Membership', href: '#membership' },
    { label: 'Classes', href: '#classes' },
    { label: 'Training', href: '#training' },
    { label: 'Schedule', href: '#schedule' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <footer className="bg-[#050505] border-t border-white/10 pt-16 pb-24 sm:pb-16 text-neutral-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 shrink-0">
                <img src={logoImage} alt="" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-2xl font-bold tracking-wider text-white">
                  THE FITNESS <span className="text-[#FFC400]">REVOLUTION</span>
                </span>
                <span className="text-[10px] tracking-[0.2em] text-[#B7B7B7] uppercase font-semibold">
                  TFR · Nazimabad No. 4, Karachi
                </span>
              </div>
            </div>

            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
              "Train. Transform. Revolutionize." A premier fitness and physical training center
              committed to helping individuals in Karachi achieve functional strength and peak physical health.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={gymData.social.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-[#111111] hover:bg-white/10 border border-white/10 flex items-center justify-center text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 text-[#E1306C]" />
              </a>
              <a
                href={gymData.social.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-[#111111] hover:bg-white/10 border border-white/10 flex items-center justify-center text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 text-[#1877F2]" />
              </a>
              <a
                href={gymData.social.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-[#111111] hover:bg-white/10 border border-white/10 flex items-center justify-center text-white transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4 text-[#FF0000]" />
              </a>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-display text-lg font-bold uppercase tracking-wider text-white mb-4">
              SITE NAVIGATION
            </h4>
            <ul className="grid grid-cols-2 gap-2.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-[#C7FF00] transition-colors inline-block py-0.5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Operating Hours (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-display text-lg font-bold uppercase tracking-wider text-white mb-4">
              TRAINING HOURS
            </h4>
            <div className="space-y-2 text-neutral-400">
              <div>
                <span className="text-[11px] font-bold text-neutral-200 block">Morning Floor:</span>
                <span>6:00 AM – 11:00 AM</span>
              </div>
              <div>
                <span className="text-[11px] font-bold text-[#00AEEF] block">Ladies Dedicated:</span>
                <span className="text-white">11:00 AM – 4:00 PM</span>
              </div>
              <div>
                <span className="text-[11px] font-bold text-neutral-200 block">Evening Session:</span>
                <span>5:00 PM – 2:00 AM</span>
              </div>
              <div className="text-neutral-500 pt-1">
                Sunday: Closed
              </div>
            </div>
          </div>

          {/* Contact Details (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display text-lg font-bold uppercase tracking-wider text-white mb-4">
              DIRECT CHANNELS
            </h4>
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#FFC400] shrink-0 mt-0.5" />
              <p className="text-neutral-300">
                Nazimabad No. 4, Block C, Plot #7, Main Hadi Market, Basement of Meezan Bank, Karachi
              </p>
            </div>
            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-[#FFC400] shrink-0" />
              <a href={`tel:${gymData.contact.phoneRaw}`} className="text-white hover:text-[#FFC400] transition-colors">
                {gymData.contact.phone}
              </a>
            </div>
            <div className="flex items-center gap-2.5">
              <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
              <a href={`https://wa.me/${gymData.contact.whatsappRaw}`} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#25D366] transition-colors">
                {gymData.contact.whatsapp}
              </a>
            </div>
            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-[#00AEEF] shrink-0" />
              <a href={`mailto:${gymData.contact.email}`} className="text-white hover:text-[#00AEEF] transition-colors truncate">
                {gymData.contact.email}
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-neutral-500">
          <p>
            © 2026 The Fitness Revolution (TFR). All rights reserved. Nazimabad, Karachi, Pakistan.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white transition-colors cursor-pointer group"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
};
