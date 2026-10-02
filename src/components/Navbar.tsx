import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowUpRight } from 'lucide-react';
import { TFRLogo } from './TFRLogo';
import { gymData } from '../lib/gymData';
import logoImage from '../assets/images/logo.jpg';


interface NavbarProps {
  onOpenJoinModal: (planId?: string) => void;
  activeSection?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenJoinModal, activeSection = 'home' }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Membership', href: '#membership' },
    { label: 'Classes', href: '#classes' },
    { label: 'Training', href: '#training' },
    { label: 'Schedule', href: '#schedule' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#050505]/90 backdrop-blur-md py-3 border-b border-white/10 shadow-2xl'
          : 'bg-transparent py-5 border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Zone 1: Brand Wordmark & Official TFR Logo */}
        <a
          href="#home"
          className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C7FF00] rounded-lg"
          aria-label="The Fitness Revolution Homepage"
        >
          <div className="w-10 h-10 transition-transform duration-300 group-hover:scale-105 shrink-0">
          
            <img src={logoImage} alt="" />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-xl sm:text-2xl font-bold tracking-wider text-white leading-tight">
              THE FITNESS <span className="text-[#FFC400]">REVOLUTION</span>
            </span>
            <span className="text-[10px] tracking-[0.2em] text-[#B7B7B7] uppercase font-medium">
              Nazimabad No. 4 · Karachi
            </span>
          </div>
        </a>

        {/* Zone 2: Navigation Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-semibold tracking-wide transition-colors relative py-1 hover:text-white ${
                  isActive ? 'text-white' : 'text-[#B7B7B7]'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C7FF00] rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Primary Actions */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <a
            href={`tel:${gymData.contact.phoneRaw}`}
            className="flex items-center gap-2 px-3.5 py-2 text-xs font-bold tracking-wider uppercase text-white hover:text-[#FFC400] transition-colors border border-white/10 hover:border-[#FFC400]/40 rounded-lg bg-[#111111]/80"
          >
            <Phone className="w-3.5 h-3.5 text-[#FFC400]" />
            <span>CALL NOW</span>
          </a>

          <button
            onClick={() => onOpenJoinModal()}
            className="flex items-center gap-1.5 px-5 py-2 text-xs font-black tracking-wider uppercase text-black bg-[#C7FF00] hover:bg-[#d8ff33] rounded-lg transition-all duration-200 transform hover:scale-[1.02] shadow-[0_0_20px_rgba(199,255,0,0.3)] cursor-pointer"
          >
            <span>JOIN NOW</span>
            <ArrowUpRight className="w-4 h-4 stroke-[3]" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={() => onOpenJoinModal()}
            className="px-3 py-1.5 text-[11px] font-black uppercase text-black bg-[#C7FF00] rounded-md"
          >
            JOIN
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-neutral-300 hover:text-white focus:outline-none"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Sliding Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[60px] bg-[#050505]/98 backdrop-blur-xl z-50 flex flex-col justify-between p-6 sm:hidden border-t border-white/10 overflow-y-auto">
          <div className="space-y-4 pt-2">
            <div className="text-[11px] uppercase tracking-widest text-[#B7B7B7] font-bold px-2">
              Navigation Menu
            </div>
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-display text-3xl font-bold tracking-wide text-neutral-200 hover:text-[#C7FF00] px-2 py-1 transition-colors border-b border-white/5"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="pt-6 pb-8 border-t border-white/10 space-y-3">
            <div className="text-xs text-neutral-400 mb-2">
              <p className="font-semibold text-white">{gymData.name}</p>
              <p>{gymData.address.full}</p>
            </div>
            
            <a
              href={`tel:${gymData.contact.phoneRaw}`}
              className="flex items-center justify-center gap-2 w-full py-3 bg-[#111111] border border-white/10 text-white rounded-xl font-bold text-sm"
            >
              <Phone className="w-4 h-4 text-[#FFC400]" />
              <span>Call: {gymData.contact.phone}</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenJoinModal();
              }}
              className="flex items-center justify-center gap-2 w-full py-3 bg-[#C7FF00] text-black font-black text-sm tracking-wider uppercase rounded-xl shadow-[0_0_20px_rgba(199,255,0,0.3)]"
            >
              <span>REQUEST MEMBERSHIP INFO</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
