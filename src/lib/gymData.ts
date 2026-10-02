/**
 * The Fitness Revolution (TFR) - Central Gym Configuration Data
 * 
 * All business information, contact channels, membership plans, schedules,
 * and media assets are centralized here. The gym owner can modify prices,
 * hours, offers, and class listings from this single file.
 */

import heroAthleteImg from '../assets/images/hero_athlete_dark_1790962119516.jpg';
import gymInteriorImg from '../assets/images/gym_interior_modern_1790962131488.jpg';
import womenTrainingImg from '../assets/images/women_fitness_training_1790962142471.jpg';
import personalCoachingImg from '../assets/images/personal_coaching_session_1790962153679.jpg';
import strengthBarbellImg from '../assets/images/strength_barbell_training_1790962165181.jpg';

export interface MembershipPlan {
  id: string;
  name: string;
  price: string;
  duration: string;
  badge?: string;
  popular?: boolean;
  features: string[];
  description: string;
}

export interface GymClass {
  id: string;
  name: string;
  category: 'strength' | 'cardio' | 'women' | 'coaching' | 'functional';
  description: string;
  duration: string;
  difficulty: 'All Levels' | 'Intermediate' | 'Advanced';
  trainer: string;
  schedule: string;
  confirmed: boolean;
}

export interface GymOffer {
  id: string;
  title: string;
  description: string;
  discount: string;
  validUntil: string;
  active: boolean; // Set to true when promotional campaign is active
}

export interface DaySchedule {
  day: string;
  shortDay: string;
  morning: string;
  ladies: string;
  evening: string;
  status: 'Open' | 'Closed';
}

export const gymData = {
  name: "The Fitness Revolution",
  shortName: "TFR",
  tagline: "Train with purpose. Build strength. Transform your body.",
  eyebrow: "THE FITNESS REVOLUTION",
  
  contact: {
    phone: "+92 346 2223903",
    phoneRaw: "+923462223903",
    whatsapp: "+92 302 2336003",
    whatsappRaw: "923022336003",
    email: "fitnessrevolution11@gmail.com",
    website: "https://thefitnessrevolution.com/",
    whatsappDefaultMessage: "Hello The Fitness Revolution! I'm interested in gym membership & training details.",
  },

  address: {
    venue: "Basement of Meezan Bank",
    market: "Main Hadi Market",
    plot: "Plot #7, Block C",
    area: "Nazimabad No. 4",
    city: "Karachi",
    postalCode: "74600",
    country: "Pakistan",
    full: "Nazimabad No. 4, Block C, Plot #7, Main Hadi Market, Basement of Meezan Bank, Karachi 74600, Pakistan",
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.3963493867666!2d67.03052677537286!3d24.918000042881105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f8152e93739%3A0xe5a1b3be00df5585!2sThe%20Fitness%20Revolution!5e0!3m2!1sen!2s!4v1742080000000!5m2!1sen!2s",
    googleMapsDirectionUrl: "https://maps.google.com/?q=The+Fitness+Revolution+Nazimabad+No+4+Karachi",
  },

  social: {
    instagram: "tfr_0fficial",
    instagramUrl: "https://www.instagram.com/tfr_0fficial/",
    facebook: "The Fitness Revolution",
    facebookUrl: "https://www.facebook.com/search/top?q=The%20Fitness%20Revolution",
    youtube: "The Fitness Revolution",
    youtubeUrl: "https://www.youtube.com/@TheFitnessRevolution",
  },

  // Verified Public Review Data (Honest, strictly factual)
  reviewsMeta: {
    source: "Public Facebook Listing",
    recommendationRate: "66%",
    totalReviews: 7,
    note: "Public social listing verified data. Contact TFR directly for member testimonials.",
  },

  hoursNotice: "Please confirm today's timings before visiting as session hours may adjust for holidays and prayer times.",

  // Weekly Timings configuration (easily customizable by gym owner)
  weeklySchedule: [
    { day: "Monday", shortDay: "Mon", morning: "6:00 AM – 11:00 AM", ladies: "11:00 AM – 4:00 PM", evening: "5:00 PM – 2:00 AM", status: "Open" },
    { day: "Tuesday", shortDay: "Tue", morning: "6:00 AM – 11:00 AM", ladies: "11:00 AM – 4:00 PM", evening: "5:00 PM – 2:00 AM", status: "Open" },
    { day: "Wednesday", shortDay: "Wed", morning: "6:00 AM – 11:00 AM", ladies: "11:00 AM – 4:00 PM", evening: "5:00 PM – 2:00 AM", status: "Open" },
    { day: "Thursday", shortDay: "Thu", morning: "6:00 AM – 11:00 AM", ladies: "11:00 AM – 4:00 PM", evening: "5:00 PM – 2:00 AM", status: "Open" },
    { day: "Friday", shortDay: "Fri", morning: "6:00 AM – 11:00 AM", ladies: "11:00 AM – 4:00 PM", evening: "5:00 PM – 2:00 AM", status: "Open" },
    { day: "Saturday", shortDay: "Sat", morning: "6:00 AM – 11:00 AM", ladies: "11:00 AM – 4:00 PM", evening: "5:00 PM – 2:00 AM", status: "Open" },
    { day: "Sunday", shortDay: "Sun", morning: "CLOSED", ladies: "CLOSED", evening: "CLOSED", status: "Closed" },
  ] as DaySchedule[],

  // Current Promotions configuration (decoupled from hardcoded templates)
  offers: [
    {
      id: "seasonal-welcome",
      title: "New Member Welcome Inquiry",
      description: "Contact TFR management for current seasonal sign-up specials and package discounts.",
      discount: "Inquire for Rates",
      validUntil: "Current Season",
      active: true,
    },
    {
      id: "historical-dec-promo",
      title: "Promotional Flash Sale (Historical)",
      description: "Public historical social post listing. Contact staff to inquire if active promotions are currently ongoing.",
      discount: "Flat 20% OFF",
      validUntil: "Archived Notice",
      active: false, // Inactive by default per user guidelines
    },
  ] as GymOffer[],

  // Membership Packages - Price fields ready for gym management to edit
  membershipPlans: [
    {
      id: "monthly",
      name: "Monthly Membership",
      price: "CONTACT FOR CURRENT PRICE",
      duration: "1 Month",
      popular: false,
      description: "Full access to TFR gym floor, free weights, resistance machines, and conditioning area.",
      features: [
        "Unrestricted access during designated training hours",
        "Full access to strength & free-weight area",
        "Cardio equipment & resistance machines",
        "Locker access & changing room",
        "General gym floor assistance",
      ],
    },
    {
      id: "quarterly",
      name: "3 Month Membership",
      price: "CONTACT FOR CURRENT PRICE",
      duration: "3 Months",
      popular: true,
      badge: "MOST POPULAR",
      description: "Our recommended commitment duration to achieve measurable strength and physique progression.",
      features: [
        "All Monthly Plan privileges included",
        "Discounted multi-month commitment rate",
        "Initial fitness consultation & goal setting",
        "Workout routine orientation",
        "Separate ladies' training hours access",
      ],
    },
    {
      id: "semi-annual",
      name: "6 Month Membership",
      price: "CONTACT FOR CURRENT PRICE",
      duration: "6 Months",
      popular: false,
      badge: "BEST VALUE",
      description: "Long-term dedication for athletes and fitness enthusiasts seeking serious physical transformation.",
      features: [
        "All 3-Month Plan privileges included",
        "Maximum savings per month tier",
        "Priority access to personal trainers",
        "Periodic progress evaluation",
        "Guaranteed renewal rate lock",
      ],
    },
  ] as MembershipPlan[],

  // Services offered
  services: [
    {
      id: "gym-access",
      title: "GYM MEMBERSHIP",
      subtitle: "Strength & Resistance Floor",
      description: "Comprehensive training facility equipped with heavy-duty free weights, selectorized stations, and barbell platforms.",
      status: "Confirmed",
      image: gymInteriorImg,
    },
    {
      id: "personal-training",
      title: "PERSONAL TRAINING",
      subtitle: "One-on-One Guided Coaching",
      description: "Tailored workout programming, strict form supervision, progressive overload tracking, and personal accountability.",
      status: "Confirmed",
      image: personalCoachingImg,
    },
    {
      id: "ladies-fitness",
      title: "WOMEN'S TRAINING",
      subtitle: "Dedicated Ladies Hours (11 AM – 4 PM)",
      description: "Comfortable, safe, and focused training hours dedicated exclusively for women to train with confidence.",
      status: "Confirmed",
      image: womenTrainingImg,
    },
    {
      id: "strength-conditioning",
      title: "STRENGTH & CONDITIONING",
      subtitle: "Progressive Physical Development",
      description: "Structured functional training routines designed to build muscular power, stamina, and lean density.",
      status: "Confirmed",
      image: strengthBarbellImg,
    },
    {
      id: "group-training",
      title: "GROUP / FITNESS TRAINING",
      subtitle: "Information Coming Soon",
      description: "Collaborative energetic team workouts. Specific schedule and class slots to be confirmed by TFR management.",
      status: "Information coming soon",
      image: heroAthleteImg,
    },
    {
      id: "online-coaching",
      title: "ONLINE CLASSES & PROGRAMS",
      subtitle: "Information Coming Soon",
      description: "Remote training and digital fitness plans. Inquire directly with TFR staff for availability.",
      status: "Information coming soon",
      image: gymInteriorImg,
    },
  ],

  // Classes & Timetable model
  classes: [
    {
      id: "cls-strength",
      name: "Heavy Strength & Hypertrophy",
      category: "strength",
      description: "Compound barbell lifts, dumbbell pressing, and guided progressive resistance for muscle growth.",
      duration: "60 mins",
      difficulty: "All Levels",
      trainer: "TFR Floor Coach",
      schedule: "Mon – Sat (Morning & Evening sessions)",
      confirmed: true,
    },
    {
      id: "cls-ladies",
      name: "Ladies Dedicated Fitness Hour",
      category: "women",
      description: "Safe, private, and focused training block for female members covering mobility, toning, and strength.",
      duration: "Daily Slot",
      difficulty: "All Levels",
      trainer: "Ladies Training Supervisor",
      schedule: "Mon – Sat: 11:00 AM – 4:00 PM",
      confirmed: true,
    },
    {
      id: "cls-cardio",
      name: "Endurance & Conditioning",
      category: "cardio",
      description: "Treadmill intervals, stamina circuits, and caloric burn workouts to elevate metabolic rate.",
      duration: "45 mins",
      difficulty: "All Levels",
      trainer: "TFR Coach",
      schedule: "Daily during open floor hours",
      confirmed: true,
    },
    {
      id: "cls-personal",
      name: "1-on-1 Personal Transformation",
      category: "coaching",
      description: "Customized biomechanical assessment, personal routine design, and strict goal tracking.",
      duration: "Custom",
      difficulty: "All Levels",
      trainer: "Assigned Personal Trainer",
      schedule: "By Appointment",
      confirmed: true,
    },
  ] as GymClass[],

  // Frequently Asked Questions (Strictly verified or truthful fallback per instructions)
  faqs: [
    {
      question: "What are your gym timings?",
      answer: "The published hours for The Fitness Revolution are Morning: 6:00 AM – 11:00 AM, Evening: 5:00 PM – 2:00 AM, with separate Ladies' hours from 11:00 AM – 4:00 PM. Sunday is closed. Please confirm today's timings before visiting as schedules may adjust for holidays and prayer times.",
    },
    {
      question: "Where is The Fitness Revolution located?",
      answer: "TFR is located at Nazimabad No. 4, Block C, Plot #7, Main Hadi Market, in the Basement of Meezan Bank, Karachi 74600, Pakistan.",
    },
    {
      question: "Do you have separate ladies' timings?",
      answer: "Yes, The Fitness Revolution features a dedicated women's timing window from 11:00 AM to 4:00 PM, Monday through Saturday.",
    },
    {
      question: "How much does membership cost?",
      answer: "Please contact TFR directly via WhatsApp at +92 302 2336003 or phone at +92 346 2223903 for the latest, verified fee schedule and current promotions.",
    },
    {
      question: "Do you offer personal training?",
      answer: "Yes, personal training and structured guidance are available. Speak to our front desk or message us on WhatsApp to discuss your goals and coach assignment.",
    },
    {
      question: "What classes are available?",
      answer: "We offer general strength training, resistance equipment coaching, cardio conditioning, and dedicated ladies fitness hours. For specialized group class schedules, please contact TFR.",
    },
    {
      question: "How can I join?",
      answer: "You can submit the membership inquiry form on this website, message us directly on WhatsApp (+92 302 2336003), or visit our facility in Nazimabad No. 4.",
    },
    {
      question: "Can I contact TFR through WhatsApp?",
      answer: "Yes! WhatsApp is our fastest channel for fee inquiries, timing confirmations, and registrations: +92 302 2336003.",
    },
    {
      question: "Do you offer online classes?",
      answer: "Information regarding remote workout programming and online classes is coming soon. Please contact TFR management for current remote options.",
    },
    {
      question: "Do I need to book before visiting?",
      answer: "Walk-in visitors are welcome during operational hours to inspect the facilities and discuss memberships. Calling or messaging via WhatsApp beforehand is recommended to confirm current floor availability.",
    },
  ],

  // Gallery items using real and generated contextual assets
  gallery: [
    {
      id: "gal-1",
      title: "TFR Main Strength Floor & Dumbbells",
      category: "GYM",
      image: gymInteriorImg,
      caption: "Spacious training floor with yellow and black equipment theme in Nazimabad No. 4.",
    },
    {
      id: "gal-2",
      title: "Athlete Conditioning & Drive",
      category: "TRAINING",
      image: heroAthleteImg,
      caption: "High-intensity training and progressive overload.",
    },
    {
      id: "gal-3",
      title: "Women's Dedicated Fitness",
      category: "WOMEN",
      image: womenTrainingImg,
      caption: "Focused, empowering space during dedicated ladies hours (11 AM - 4 PM).",
    },
    {
      id: "gal-4",
      title: "Heavy Barbell & Power Training",
      category: "TRAINING",
      image: strengthBarbellImg,
      caption: "Compound movements and serious strength building.",
    },
    {
      id: "gal-5",
      title: "Personal Coaching & Technique Supervision",
      category: "COACHING",
      image: personalCoachingImg,
      caption: "Structured form coaching to maximize results and prevent injury.",
    },
  ],

  // Local SEO & Schema Data
  seo: {
    title: "The Fitness Revolution | Gym & Fitness Center in Nazimabad, Karachi",
    description: "The Fitness Revolution is a gym and fitness center in Nazimabad, Karachi. Explore memberships, fitness training, classes, personal training and more.",
    keywords: [
      "gym in Nazimabad",
      "gym in Karachi",
      "fitness center Karachi",
      "fitness gym Nazimabad",
      "The Fitness Revolution",
      "TFR Karachi",
      "gym Nazimabad Karachi",
      "personal training Karachi",
    ],
  },
};
