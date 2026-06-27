export const site = {
  name: "EdgeX Academy",
  tagline: "Interview and GD Coaching and online courses",
  domain: "edgex.co.in",
  loginUrl: "https://web.classplusapp.com/login?orgCode=dtkhkw",

  contact: {
    email: "office@edgex.co.in",
    phone: "+91-9203595283",
    location: "Bengaluru, India",
    officeHours: "Mon – Fri, 9am – 7pm IST · Weekends: 10am – 2pm IST",
  },

  footer: {
    mission:
      "EdgeX Academy is founded by ISB & IIM alums to help students prepare for their most important career moves.",
    missionBold:
      "Our mission is to provide high-quality mentorship and real world knowledge to all our students to enable their professional success.",
  },

  seo: {
    title: "EdgeX Academy | Interview and GD Coaching and online courses",
    description:
      "EdgeX Foundations is India's most comprehensive placement interview preparation course for students targeting non-core, non-tech business and managerial roles. Stop winging your placement interviews - start preparing systematically.",
    ogImage: "/media/og-image.png",
  },

  nav: [
    { label: "Engineering Students", href: "/engineering-students" },
    { label: "MBA Students", href: "/mba-students" },
    { label: "Working Professionals", href: "/working-professionals" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],

  navExternal: [
    { label: "Login", href: "https://web.classplusapp.com/login?orgCode=dtkhkw" },
  ],

  hero: {
    title: "Prepare for Your Dream Job with EdgeX",
    subtitle:
      "India's Largest Learning Platform for Corporate Aspirants & Working Professionals",
    badge: "Founded by ISB & IIM Alums",
    audiences: [
      {
        title: "Placement prep for Engineering Students",
        href: "/engineering-students",
        items: [
          "Interview Prep Courses",
          "CV Prep",
          "CV Reviews",
          "Mock GD Practice",
          "Consulting Prep",
          "1:1 Mock Interviews",
        ],
      },
      {
        title: "Placement prep for MBA Students",
        href: "/mba-students",
        items: [
          "Interview Prep Courses",
          "Advanced Consulting prep",
          "CV Prep",
          "CV Reviews",
          "Mock GD Practice",
          "1:1 Mock Interviews",
        ],
      },
      {
        title: "Lateral Interviews for Working Professionals",
        href: "/working-professionals",
        items: [
          "Lateral Interview Prep",
          "1:1 CV Prep Support",
          "B-School Essay Reviews",
          "B-School Interview Prep",
        ],
      },
    ],
  },

  /** @deprecated legacy fields — used by inner pages / video block */
  heroLegacy: {
    label: "Placement essentials for engineers",
    title: "Crack placement interviews with confidence.",
    description:
      "EdgeX Foundations is India's most comprehensive placement interview preparation program - case interviews, guesstimates, GDs, behavioral rounds, and business fundamentals. Taught from the interviewer's perspective by Punita Shrivastava.",
    ctaPrimary: { label: "Start preparing", href: "/cohorts" },
    ctaSecondary: { label: "Watch demo class", href: "/demo" },
    image: "/media/hero.png",
    imageAlt: "Crack placement interviews with confidence",
  },

  videoFeature: {
    label: "See it in action",
    heading: "Crack placement interviews with confidence.",
    description:
      "A look inside the EdgeX method - how we prepare you for case interviews, guesstimates, GDs, and behavioral rounds from the interviewer's perspective.",
    youtubeId: "p7iwXvBnbIE",
    runtime: "Watch the intro",
    caption: "EdgeX Foundations - course walkthrough",
    points: [
      "Taught from the interviewer's perspective",
      "Frameworks for cases, guesstimates & GDs",
      "Built for Tier 1 & Tier 2 placement prep",
    ],
  },

  stats: [
    { value: "40+", label: "Recorded lectures" },
    { value: "3 yr", label: "Course access" },
    { value: "Hybrid", label: "Live + recorded" },
    { value: "June '26", label: "Next live batch" },
  ],

  programHighlight: {
    label: "Placement essentials for engineers",
    title: "LIVE + Recorded Course Package",
    note: "EdgeX Foundations - hybrid format with instant recorded access and live 3-month batches.",
  },

  featuredCourses: {
    title: "Featured Courses",
    courses: [
      {
        title: "Complete Placement Prep for Engineers",
        href: "/engineering-students",
      },
      {
        title: "Placement Essentials for B-Schools",
        href: "/mba-students",
      },
      {
        title: "Consulting Advanced for B Schools",
        href: "/mba-students",
      },
    ],
  },

  instructorProfile: {
    label: "Meet your instructor",
    name: "Punita Shrivastava",
    education: ["ISB Hyderabad (MBA)", "NIT-D (B.Tech)"],
    summary:
      "Experience in Management Consulting, Business Analytics, Strategy & Ops, Product and Data Analytics.",
    quote: "Because confidence in an interview isn't luck.",
    quoteAccent: "It's preparation.",
    headline: "Learn from someone who has been on both ends of the table for Top Global Firms.",
    headlineAccent: "both ends of the table",
    interviewed: {
      label: "Interviewed 100+ Engineers for top firms",
      roles: [
        { company: "PwC Strategy&", role: "Management Consultant" },
        { company: "BCG", role: "Business Analyst" },
        { company: "Mu Sigma", role: "Decision Scientist" },
        { company: "Airtel", role: "Product Analytics Lead" },
        { company: "Furlenco", role: "Founder's Office Associate" },
      ],
    },
    otherOffers: {
      label: "Other offers obtained across 10 years of corporate career",
      companies: ["Amazon", "Deloitte", "Flipkart", "Barclays", "American Express", "Meesho"],
    },
  },

  accessBreakdown: {
    label: "Your access breakdown",
    title: "Everything included with enrollment",
    timeline: [
      {
        category: "Recorded content",
        color: "emerald",
        span: "Year 0 → Year 3",
        badge: "3 years",
        detail: "Instant access — 6 modules, 40+ lectures, assignments",
      },
      {
        category: "Live batches",
        color: "blue",
        span: "Year 0 → Year 3",
        badge: "Flexible",
        detail: "2-month batch — weekend classes, new batches every month",
      },
      {
        category: "Group discussion preparation",
        color: "neutral",
        span: "Year 0 → Year 3",
        badge: "Flexible",
        detail: "2 mock GDs & feedback",
      },
      {
        category: "EdgeX Corporate Club",
        color: "accent",
        span: "Year 0 → Lifetime",
        badge: "Lifetime",
        detail: "Networking, podcasts, events with corporate leaders",
      },
    ],
    cards: [
      {
        stat: "3",
        statSuffix: "years",
        title: "Recorded access",
        desc: "Lectures, assignments, cheat sheets and question banks. Content updated monthly.",
      },
      {
        stat: "~",
        title: "Flexible live batch",
        desc: "Weekend classes. New batches every month — schedule shared in advance. Pre-enroll flexibly anytime in the 3 years.",
      },
      {
        stat: "GD",
        title: "GD preparation",
        desc: "30-minute mock GDs conducted virtually with similar cohort groups. Detailed personalized feedback from experts.",
      },
      {
        stat: "∞",
        title: "EdgeX Corporate Club",
        desc: "Guest lectures, podcasts, and networking events with senior corporate professionals.",
      },
    ],
  },

  enrollTimeline: {
    label: "What to expect",
    title: "When you enroll",
    steps: [
      {
        side: "left" as const,
        text: "You buy the course package today",
        delay: null,
      },
      {
        side: "right" as const,
        text: "Instant access to 6 recorded modules unlocked. Start preparing at your own pace. 7–8 weeks recommended.",
        delay: null,
      },
      {
        side: "right" as const,
        text: "Fill in a simple Google Form to help us understand your profile and your aspirations.",
        delay: "2 days",
      },
      {
        side: "left" as const,
        text: "A dedicated Teaching Assistant (TA) is assigned to you, based on your profile",
        delay: "5 days",
      },
      {
        side: "left" as const,
        text: "Your TA gets in touch with further instructions, LIVE batches & GD schedules and availability",
        delay: "2 days",
      },
      {
        side: "right" as const,
        text: "Book your LIVE batch slots and Mock GD slots closer to your placements, to refine your preparation. Keep in touch with your TA for all schedules and bookings.",
        delay: "7 days",
      },
      {
        side: "left" as const,
        text: "You are added to EdgeX Corporate Club Forum for all Corporate Club event details",
        delay: null,
      },
      {
        side: "right" as const,
        text: "Attend events of your choice and be a part of the EdgeX community, forever.",
        delay: null,
      },
    ],
  },

  designedFor: {
    label: "EdgeX Foundations Course Package",
    title: "Designed for Business, Consulting, and Analytics Roles",
    description:
      "A course built to give you structured methods and systematic frameworks for your college placement prep - taught from the interviewer's perspective.",
    groups: [
      {
        tag: "Designed for",
        items: [
          "B.Tech / B.E. students targeting Business Roles & the Managerial track (Tier 1 & Tier 2).",
          "Business, Economics, and Commerce students from premier institutions.",
          "MBA students looking to build foundational knowledge.",
        ],
      },
      {
        tag: "Program Fit",
        items: [
          "Non-negotiable for Consulting, Strategy, General Management, Ops, Program Management, Business Analytics and similar roles.",
          "Also useful for all other students targeting Engineering & Software, Product, IT, and Research roles - given specific domain knowledge is prepared by the student.",
        ],
      },
    ],
    targetRoles: [
      "Corporate Strategy",
      "Consulting",
      "General Management",
      "Business Analytics",
      "Data Analytics",
      "Product Management",
      "Product Analytics",
      "Marketing",
      "Operations",
    ],
  },

  features: [
    {
      title: "40+ recorded lectures",
      desc: "Instant access to lectures, assignments, cheat sheets, and question banks - learn at your own pace.",
    },
    {
      title: "Live 3-month batches",
      desc: "Enroll into a live batch anytime within your 3-year access window for structured, instructor-led learning.",
    },
    {
      title: "Weekly GD slots",
      desc: "Book group discussion slots every week. Anonymous, roll-number based participation with video on.",
    },
    {
      title: "Case & guesstimate prep",
      desc: "Covers case interviews, guesstimates, behavioral and HR rounds, and business fundamentals.",
    },
    {
      title: "CV & company research",
      desc: "CV writing, shortlisting strategy, company research, role targeting, and interview mental models.",
    },
    {
      title: "EdgeX Corporate Club",
      desc: "Exclusive lifetime access to networking events. Optional 1:1 mock interviews available as add-on.",
    },
  ],

  howItWorks: [
    {
      number: "01",
      title: "Enroll & get instant access",
      desc: "All recorded modules, assignments, and resources unlock immediately in your EdgeX portal.",
    },
    {
      number: "02",
      title: "Learn at your pace",
      desc: "Work through 40+ lectures, cheat sheets, and question banks on your schedule.",
    },
    {
      number: "03",
      title: "Join a live batch",
      desc: "Reserve your seat in a 3-month live batch - next intake starts 13 June 2026.",
    },
    {
      number: "04",
      title: "Practice GDs & interviews",
      desc: "Book weekly GD slots, get recorded feedback, and optionally add 1:1 mock interviews.",
    },
  ],

  instructor: {
    name: "Punita Shrivastava",
    role: "Lead Instructor & Founder",
    bio: "EdgeX Foundations is designed and created by Punita, drawing from her experience cracking several interviews and interviewing hundreds of candidates. She incorporates inputs from her network of IIM, IIT, and NIT alumni.",
    initials: "PS",
  },

  demoClass: {
    title: "Demo Class",
    heading: "EdgeX Foundations Class Preview",
    clips: [
      { title: "Course Introduction: Lecture 1.1", subtitle: "Clip from actual class" },
      { title: "Case Questions: Revenue Equation Lecture 2.2", subtitle: "Clip from actual class" },
    ],
  },

  liveBatches: {
    title: "Live Batches",
    heading: "Enroll now to book your slots!",
    scheduleImage: "/media/live-batches.png",
    startDate: "13 June 2026",
    note: "Current third-year students are encouraged to enroll ASAP to reserve seats for live batches.",
  },

  faqs: [
    {
      q: "Who is the lead instructor?",
      a: "The course is taught end-to-end by Punita Shrivastava. EdgeX Foundations is designed and created by Punita, drawing from her own experience of cracking several interviews and interviewing hundreds of candidates. She has also taken inputs from her network of IIM, IIT, & NIT Alums to incorporate varied perspectives.",
    },
    {
      q: "Is this a live or recorded course?",
      a: "It is a hybrid format, the best of both worlds. As soon as you enroll, you get instant access to 40+ recorded lectures, assignments, cheat sheets and question banks that you can go through at your own pace. On top of that, you can enroll into a live 3-month batch anytime within your 3-year window. Similarly, there are multiple slots for GDs that are scheduled every week, you can book your slots whenever you feel ready for them.",
    },
    {
      q: "How long is the course valid for?",
      a: "You receive 3-year extended access to all course materials and recordings.",
    },
    {
      q: "Are mock interviews included?",
      a: '1:1 Mock Interviews are available as an optional add-on. However, all students get exclusive lifetime access to "The EdgeX Corporate Club" for networking events.',
    },
    {
      q: "When will I get access to recorded modules?",
      a: "Instantly! As soon as you enroll, all recorded course material is available in your EdgeX portal, ready to watch at your own pace.",
    },
    {
      q: "When do LIVE Batches start?",
      a: "Live Batches are starting on 13th of June 2026. Current third year students are encouraged to enroll asap to reserve their seats for the LIVE batches.",
    },
    {
      q: "Will my participation be anonymous?",
      a: "Absolutely. Your enrollment is completely private and will not be revealed to other students. GD participation is roll-number based and candidate's actual name and credentials are not shared.",
    },
    {
      q: "Who will I have the GD with?",
      a: "GDs are conducted on ZOOM (video conferences) with 6~8 students from various Tier 1 & 2 colleges in India. While your participation is anonymous, it is mandatory to have your video ON during the GD. Admin aims to pair students from similar cohorts/colleges against each other for best close to real-world simulation.",
    },
    {
      q: "Who will conduct the GDs?",
      a: "GDs are moderated by Teaching Assistants. All GD sessions are recorded - EdgeX faculty goes through the recordings later to assess your performance and provide you a detailed written feedback.",
    },
  ],

  companySlider: {
    label: "Placement outcomes",
    title: "Students have cracked interviews at",
    lanes: [
      [
        "Accenture",
        "PwC",
        "Deloitte",
        "ZS Associates",
        "Mu Sigma",
        "Amazon",
        "Flipkart",
        "BCG",
        "Bain",
        "McKinsey",
        "AT Kearney",
        "KPMG",
        "Goldman Sachs",
        "Razorpay",
      ],
      [
        "Amex",
        "EY",
        "Barclays",
        "Zinnov",
        "Cognizant Consulting",
        "Vector Consulting",
        "Oliver Wyman",
        "Airtel",
        "HUL",
        "ITC",
        "Meesho",
        "Capgemini",
        "Swiggy",
        "PhonePe",
      ],
    ],
  },

  companies: [
    "BCG",
    "McKinsey",
    "Deloitte",
    "Amazon",
    "Razorpay",
    "HUL",
    "Goldman Sachs",
    "Bain",
    "Flipkart",
    "ITC",
  ],

  audiences: [
    "B.Tech, B.E, BBA, B.Com and MBA students",
    "IITs, NITs, BITS, VIT, Manipal, DTU, NSUT, and top colleges",
    "Consulting, analytics, product, FMCG, and finance roles",
    "BCG, McKinsey, Deloitte, Amazon, Razorpay, HUL, Goldman Sachs & more",
  ],
} as const;

export const logo = {
  src: "/media/logo.png",
  alt: "EdgeX Academy",
};
