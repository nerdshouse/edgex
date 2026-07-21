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
      "EdgeX Academy is founded by ISB and IIM alumni to bridge the gap between academic learning and the skills leading recruiters actually evaluate. Our programs combine structured learning, real-world business experience, and interviewer perspectives to help MBA students, engineering students, and working professionals prepare confidently for corporate business careers.",
    missionBold:
      "Our mission is to provide high-quality mentorship and real world knowledge to all our students to enable their professional success.",
  },

  seo: {
    title: "EdgeX Academy | Interview and GD Coaching and online courses",
    description:
      `Everything you need for your next corporate career move.​ Whether you're preparing for campus placements, transitioning from engineering into business roles, switching jobs as a working professional, or applying to leading business schools, EdgeX brings structured learning, expert mentorship, and practical interview preparation together under one platform.`,
    ogImage: "/media/og-image.png",
  },

  nav: [
    { label: "MBA Students", href: "/mba-students" },
    { label: "Engineering Students", href: "/engineering-students" },
    { label: "Working Professionals", href: "/working-professionals" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],

  navExternal: [
    { label: "Login", href: "https://web.classplusapp.com/login?orgCode=dtkhkw" },
  ],

  hero: {
    title: "Prepare for Corporate Business Careers with EdgeX",
    subtitle:
      "Placement & Lateral Interview preparation designed for Consulting, Strategy, Operations, Growth, General Management, Category & Revenue, Product Management, Analytics and other business roles",
    badge: "Founded by ISB & IIM Alums",
    audiences: [
      {
        title: "MBA Students",
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
        title: "Engineering Students",
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
        title: "Working Professionals",
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
        title: "ConsultPro for B-Schools",
        href: "/mba-students/courses/consulting-advanced-2026",
      },
      {
        title: "Placement Foundations for B-Schools",
        href: "/mba-students/courses/placement-foundations-2026",
      },
      {
        title: "Placement Foundations for Engineers",
        href: "/engineering-students/courses/placement-foundations-engineers",
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
      label: "Interviewed 100+ MBA & Engineering students for top firms",
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
    bio: "Former Management Consultant with over a decade of corporate experience. Punita has prepared for, cracked, and conducted interviews across leading organizations, bringing real interviewer perspectives into every EdgeX program.\nEvery course is personally designed by her and continuously refined with inputs from experienced recruiters, industry professionals, and alumni from leading institutions.",
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
      q: "Who are EdgeX programs designed for?",
      a: "EdgeX specializes in interview preparation for corporate business careers. Our programs are designed for MBA students, Engineering students aspiring for business roles, and working professionals preparing for lateral opportunities across consulting, strategy, general management, analytics, operations, product, marketing, growth, category, and other business functions.",
    },
    {
      q: "Are your courses live or self-paced?",
      a: "All EdgeX programs follow a hybrid learning model. The core curriculum is delivered through high-quality self-paced recorded lectures, allowing you to learn anytime at your own pace. Depending on the course, students may also receive access to live doubt-clearing sessions conducted by the EdgeX team.\n\nIn addition, EdgeX GD Labs are conducted live over Zoom, where students participate in moderated Group Discussion simulations with peers from their own cohort. Students may also book one-to-one services such as mock interviews, CV reviews, career guidance, and MBA application support whenever they require personalized assistance.",
    },
    {
      q: "Do you offer offline classroom programs?",
      a: "No. EdgeX is currently an online-first learning platform. All courses, live sessions, Group Discussion Labs, and mentoring activities are conducted virtually, allowing students and working professionals from across India to participate without geographical constraints.",
    },
    {
      q: "Which course or cohort should I choose?",
      a: "EdgeX offers separate learning pathways for MBA students, Engineering students, and Working Professionals. Each curriculum is tailored to the experience level and interview expectations of that cohort while covering the business interview skills most relevant to their career stage. Simply choose the pathway that best matches your current profile.",
    },
    {
      q: "Are the courses suitable for technical or software engineering interviews?",
      a: "Our programs are specifically designed for corporate business roles rather than technical or core engineering hiring processes. They are ideal for consulting, strategy, analytics, operations, product, growth, category, marketing, and other business functions. Technical assessments such as coding interviews, system design, software engineering interviews, or other domain-specific technical evaluations are not covered.",
    },
    {
      q: "Today, most students prepare using advice from seniors. Why do we need EdgeX?",
      a: "Most interview preparation today is built around advice from seniors, recent alumni, and scattered online resources. While these can be extremely helpful, they naturally reflect the perspective of someone who has recently gone through the process themselves. Developing a deeper understanding of what recruiters consistently evaluate across companies, industries, and roles comes only through years of corporate experience, interviewing candidates, mentoring professionals, and observing hiring decisions over time.\n\nEdgeX was created to bridge this information gap. Our mission is to make practical corporate knowledge and interviewer perspectives accessible in a structured way, connecting students and working professionals with insights developed through years of industry experience rather than a single interview journey.",
    },
    {
      q: "How are EdgeX courses different from other interview preparation resources?",
      a: "EdgeX courses are not simply collections of interview tips or recorded lectures. Every program is designed as a structured learning journey that develops the skills leading recruiters consistently evaluate across business interviews.\n\nThe curriculum combines practical business concepts, structured problem-solving methodologies, behavioural interview preparation, consulting frameworks, interviewer perspectives, curated learning resources, guided demonstrations, assignments, and practical examples drawn from real corporate scenarios. The courses are continuously reviewed and refined with inputs from experienced recruiters, corporate professionals, and industry advisors to ensure the content remains practical, relevant, and aligned with evolving hiring practices.",
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
    "MBA Placement Preparation",
    "Engineering Placement Preparation(Business Roles)",
    "Lateral Interview Preparation for Working Professionals",
    "Consulting & Strategy Interview Preparation",
  ],
} as const;

export const logo = {
  lightSrc: "/media/EdX-Light-Logo.png",
  darkSrc: "/media/EdX-Dark-Logo.png",
  alt: "EdgeX Academy",
};
