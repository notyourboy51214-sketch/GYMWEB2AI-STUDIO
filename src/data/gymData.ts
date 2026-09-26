export interface ProgramItem {
  id: string;
  title: string;
  category: string;
  description: string;
  features: string[];
  schedule: string;
}

export interface TrainerItem {
  id: string;
  name: string;
  role: string;
  badge: string;
  bio: string;
  specialties: string[];
  image: string;
  certifications: string[];
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  regularAdmissionFee: string;
  currentPromoFee: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export interface TestimonialItem {
  id: string;
  author: string;
  role: string;
  text: string;
  rating: number;
  highlight: string;
  date: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'promo' | 'trainers' | 'facility' | 'membership';
}

export const GYM_DETAILS = {
  name: "Iron Culture Fitness",
  tagline: "The Underground Sanctuary of Raw Strength",
  category: "Fitness Center",
  rating: 4.8,
  reviewCount: 123,
  address: "House #B10 Basement, Block 16, Gulistan-e-Johar, Karachi, Pakistan",
  area: "Gulistan-e-Johar, Karachi",
  phone: "+92 334 3288995",
  rawPhone: "+923343288995",
  whatsappNumber: "923343288995",
  hoursText: "Open daily, closes 10:30 PM",
  hoursDetail: "Monday – Sunday: 06:00 AM – 10:30 PM",
  promoTitle: "Free Admission Until 31st July 2026",
  promoDeadline: "2026-07-31T23:59:59",
  promoSavings: "Save Rs. 2,500 registration fee",
};

export const PROGRAMS: ProgramItem[] = [
  {
    id: "strength-power",
    title: "Heavy Strength & Powerlifting",
    category: "Barbell & Iron Mechanics",
    description: "Progressive overload coaching on competition-grade barbells, power racks, and deadlift platforms. Built for raw strength progression without unnecessary gimmicks.",
    features: [
      "Rigid squat racks & Olympic spec bars",
      "Calibrated cast iron weight plates",
      "Technique auditing on Squat, Bench, Deadlift",
      "Form-first progressive programming"
    ],
    schedule: "Daily 6:00 AM – 10:30 PM"
  },
  {
    id: "personal-training",
    title: "1-on-1 Dedicated Coaching",
    category: "Individualized Programming",
    description: "Close supervision tailored to your body's biomechanics. Whether building lean muscle or correcting chronic posture imbalances, our coaches ensure every rep counts.",
    features: [
      "Direct form correction and spotter support",
      "Progress tracking and lifting logs",
      "Custom splits designed for your schedule",
      "Injury prevention & mobility primers"
    ],
    schedule: "Morning & Evening Slots Available"
  },
  {
    id: "womens-adaptive",
    title: "Women's Strength & Conditioning",
    category: "Led by Coach Ghazal",
    description: "A comfortable, empowering environment designed for women of all fitness levels. Led with patience, clear technique instruction, and zero intimidation.",
    features: [
      "Targeted posterior chain & core conditioning",
      "Safe, progressive resistance training",
      "Comfortable and respectful environment",
      "Tailored intensity based on current fitness"
    ],
    schedule: "Dedicated Morning & Afternoon Windows"
  },
  {
    id: "medical-rehab",
    title: "Medical Condition & Post-Injury Adaptation",
    category: "Specialized Adaptive Training",
    description: "Our signature rehabilitation-friendly training. Specially adapted workouts for clients with lumbar disc concerns, joint replacements, hypertension, or chronic pain.",
    features: [
      "Non-axial spinal loading alternatives",
      "Joint-friendly angle modifications",
      "Gradual stability & tendon strengthening",
      "Patience-first pacing with medical awareness"
    ],
    schedule: "By Appointment with Specialist Coach Ghazal"
  },
  {
    id: "functional-hypertrophy",
    title: "Hypertrophy & Cable Systems",
    category: "Muscle Building & Toning",
    description: "Heavy plate-loaded and selectorized cable circuits to safely maximize muscular tension, definition, and metabolic endurance with zero equipment queues.",
    features: [
      "Multi-angle cable stations & pulldowns",
      "Plate-loaded leg presses & hack squats",
      "Isolate target muscle groups safely",
      "High-volume hypertrophy routines"
    ],
    schedule: "All Day Access"
  }
];

export const TRAINERS: TrainerItem[] = [
  {
    id: "ghazal",
    name: "Coach Ghazal",
    role: "Senior Coach & Medical Adaptation Specialist",
    badge: "Client Favorite · Standout Specialist",
    bio: "Renowned across Gulistan-e-Johar for unmatched patience and meticulous individual attention. Ghazal excels at modifying resistance exercises around lumbar disc herniations, knee pain, hypertension, and post-surgery rehabilitation so clients regain strength safely.",
    specialties: [
      "Medical Condition Adaptation",
      "Spinal & Joint Safe Mechanics",
      "Women's Strength & Conditioning",
      "Patient 1-on-1 Technique Guidance"
    ],
    certifications: ["Specialized Biomechanics", "Corrective Exercise", "Certified Strength Coach"],
    image: "/src/assets/images/trainer_ghazal_coach_1790416637659.jpg"
  },
  {
    id: "farhan",
    name: "Coach Farhan Tariq",
    role: "Evening Head Coach & Strength Supervisor",
    badge: "Evening Desk & Heavy Iron Expert",
    bio: "Known by members for his welcoming presence at the front desk and expert evening floor guidance. Farhan assists lifters with heavy spot checks, barbell kinematics, and safe progressive overload in a zero-ego basement culture.",
    specialties: [
      "Barbell Kinematics & Power Lifts",
      "Evening Floor Supervision & Spotting",
      "Beginner Strength Onboarding",
      "Muscle Hypertrophy Splits"
    ],
    certifications: ["Advanced Resistance Training", "Barbell Conditioning", "First Aid Certified"],
    image: "/src/assets/images/trainer_farhan_coach_1790416653772.jpg"
  },
  {
    id: "tariq",
    name: "Tariq Qureshi",
    role: "Facility Director & Equipment Integrity Lead",
    badge: "Facility & Onboarding Lead",
    bio: "Maintains our heavy iron equipment in immaculate working order and ensures every newcomer feels confident navigating the free weights section from their first walk-in.",
    specialties: [
      "Facility Hygiene & Equipment Maintenance",
      "Member Consultations & Goal Setting",
      "Safety Protocols & Ergonomics"
    ],
    certifications: ["Facility Management", "Ergonomic Systems"],
    image: "/src/assets/images/hero_iron_culture_gym_1790416620919.jpg"
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "monthly",
    name: "Monthly Iron Pass",
    price: "Rs. 3,500",
    period: "per month",
    regularAdmissionFee: "Rs. 2,500",
    currentPromoFee: "FREE (Rs. 0)",
    description: "The most flexible and honest monthly fitness rate in Gulistan-e-Johar. No lock-in contracts.",
    features: [
      "Full gym access 7 days a week (6 AM – 10:30 PM)",
      "Free Admission Promo applied (Save Rs. 2,500)",
      "Complete free weights & cable machine floor",
      "Evening coach spotter and desk assistance",
      "Clean basement locker & washroom facility",
      "No auto-renewal traps or surprise charges"
    ]
  },
  {
    id: "quarterly",
    name: "Quarterly Strength",
    price: "Rs. 9,500",
    period: "for 3 months",
    popular: true,
    regularAdmissionFee: "Rs. 2,500",
    currentPromoFee: "FREE (Rs. 0)",
    description: "Our most popular package for serious lifters seeking continuous physical transformation.",
    features: [
      "All Monthly Iron Pass benefits included",
      "Free Admission Promo applied (Save Rs. 2,500)",
      "1 complimentary posture & mobility consultation with Coach Ghazal",
      "Custom 12-week progressive strength routine",
      "Priority locker allocation",
      "Guaranteed price lock for renewals"
    ]
  },
  {
    id: "annual",
    name: "Annual Iron Culture",
    price: "Rs. 32,000",
    period: "per year",
    regularAdmissionFee: "Rs. 2,500",
    currentPromoFee: "FREE (Rs. 0)",
    description: "Maximum long-term savings for dedicated athletes who consider Iron Culture their second home.",
    features: [
      "Unrestricted 365-day gym access",
      "Free Admission Promo applied (Save Rs. 2,500)",
      "2 in-depth medical adaptation / movement audits with Coach Ghazal",
      "Permanent dedicated locker space",
      "4 complimentary guest passes per year",
      "Free Iron Culture grip chalk pouch & shaker"
    ]
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "t1",
    author: "Ayesha Khan",
    role: "Johar Block 16 Resident",
    rating: 5,
    highlight: "Adapted workouts around my back condition",
    text: "After a lumbar disc scare, I thought heavy lifting was out of the question for life. Coach Ghazal changed everything. Her patience, posture audits, and personalized modifications allowed me to strengthen my core and back with zero discomfort. An absolute gem in Karachi.",
    date: "Google Review"
  },
  {
    id: "t2",
    author: "Daniyal Mansoor",
    role: "Competitive Powerlifter",
    rating: 5,
    highlight: "Real heavy iron & honest monthly dues",
    text: "So many gyms in Johar charge insane admission fees for fragile plastic machines. Iron Culture is the real deal: cast iron plates, rigid cages, clean air circulation in the basement, and monthly rates that are genuinely affordable. You get 10x what you pay for.",
    date: "Google Review"
  },
  {
    id: "t3",
    author: "Bilal Siddiqui",
    role: "Evening Lifter",
    rating: 5,
    highlight: "Knowledgeable evening coach & friendly desk",
    text: "The evening trainer Farhan is always watching the floor. He won't hesitate to step in, adjust your grip on bench, or spot your squat. The front desk staff knows everyone by name and treats newcomers with complete respect.",
    date: "Google Review"
  },
  {
    id: "t4",
    author: "Hamza Rehman",
    role: "Member since 2025",
    rating: 5,
    highlight: "Impeccably maintained facility",
    text: "The equipment is oiled, cables never stick, and the rubber flooring is kept pristine every single day. Taking advantage of the Free Admission offer was the best fitness decision I made.",
    date: "Google Review"
  }
];

export const FAQ_LIST: FAQItem[] = [
  {
    question: "What are the exact terms of the Free Admission promo?",
    answer: "Any new member who registers on or before 31st July 2026 pays exactly Rs. 0 for admission and registration fees (regularly Rs. 2,500). You only pay your standard monthly or quarterly membership fee with zero hidden overhead.",
    category: "promo"
  },
  {
    question: "Can I train here if I have a pre-existing medical condition or joint injury?",
    answer: "Yes, this is one of our defining strengths. Coach Ghazal specializes in tailoring workouts around medical conditions, herniated discs, arthritis, and post-surgery rehabilitation. We conduct a preliminary movement assessment to eliminate high-risk movements and build safe strength.",
    category: "trainers"
  },
  {
    question: "What are your operating hours and walk-in policy?",
    answer: "We are open daily Monday through Sunday from 6:00 AM until 10:30 PM. Walk-ins are always welcome to tour our House #B10 basement facility, meet the trainers, or purchase a single-day training pass.",
    category: "facility"
  },
  {
    question: "Is there guidance available during evening hours?",
    answer: "Absolutely. Our evening head trainer Farhan and front desk supervisors are on the floor every night until 10:30 PM to assist with form, spot heavy lifts, and ensure safe equipment operation.",
    category: "trainers"
  },
  {
    question: "Are there dedicated training hours or programs for women?",
    answer: "Yes. Coach Ghazal leads dedicated women's strength sessions and private coaching blocks with customized resistance programming in a secure, respectful, and private environment.",
    category: "membership"
  },
  {
    question: "Where exactly are you located in Gulistan-e-Johar?",
    answer: "We are located at House #B10 Basement, Block 16, Gulistan-e-Johar, Karachi. Just off the main access street with convenient basement access and street parking.",
    category: "facility"
  }
];

export const FACILITY_GALLERY = [
  {
    id: "weights",
    title: "Cast Iron Heavy Free Weights",
    category: "Heavy Free Weights",
    description: "Solid steel barbells, bumper and cast iron plates, and dumbbell racks ranging from light warm-ups to heavy lifting pairs.",
    image: "/src/assets/images/facility_free_weights_zone_1790416666925.jpg"
  },
  {
    id: "cables",
    title: "Selectorized Cable Stations & Leg Press",
    category: "Precision Resistance",
    description: "Smooth pulley mechanics, dual adjustable cables, and heavy-duty leg press machinery calibrated for safe hypertrophy.",
    image: "/src/assets/images/facility_cable_machines_1790416684347.jpg"
  },
  {
    id: "arena",
    title: "Basement Strength Atmosphere",
    category: "Atmosphere & Ventilation",
    description: "Raw industrial aesthetic with dedicated ventilation, high-density impact rubber flooring, and heavy power racks.",
    image: "/src/assets/images/hero_iron_culture_gym_1790416620919.jpg"
  }
];
