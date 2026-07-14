import type { Course, Cohort } from "./cohorts.types";

export type { Course, Cohort } from "./cohorts.types";

import { mbaFaqs, m1Faqs, m2Faqs, m3Faqs, m4Faqs, e1Faqs, e2Faqs, engineeringFaqs, professionalFaqs, l1Faqs, l2Faqs, l3Faqs } from "./faqs";

export const cohorts: Cohort[] = [
  {
    slug: "edgex-foundations",
    title: "EdgeX Foundations",
    tag: "Flagship",
    tagline: "India's most comprehensive placement interview preparation program.",
    desc: "A hybrid LIVE + recorded program for students targeting non-core, non-tech business and managerial roles. Covers case interviews, guesstimates, GDs, behavioral rounds, CV strategy, and company research - taught end-to-end by Punita Shrivastava.",
    duration: "3-month live batch + 3-year access",
    nextBatch: "13 June 2026",
    seats: 60,
    price: 3150,
    originalPrice: 3490,
    courses: [
      {
        slug: "case-interviews",
        title: "Case Interviews & Guesstimates",
        desc: "Structured frameworks for consulting-style case questions and guesstimate problems - taught from the interviewer's perspective.",
        duration: "4 weeks",
        lessons: 12,
        hours: 8,
        level: "Intermediate",
        tag: "Interview",
        instructor: "Punita Shrivastava",
        instructorRole: "Lead Instructor, EdgeX Academy",
        journey: [
          { title: "You Enroll into the course" },
          { title: "Instant Access to Pre-Recorded Modules", timeframe: "instant" },
          { title: "Your TA reaches out to you for LIVE Doubt Clearing & GD Slots Booking", timeframe: "within 5 working days" },
          { title: "You are added to the EdgeX Corporate Club", timeframe: "within 7 days" }
        ],
        faqs: [
          { q: "Is this a live or recorded course?", a: "It is a hybrid format. You get instant access to recorded lectures, assignments, and question banks. You can also join a live batch and book weekly GD slots." },
          { q: "Will my participation be anonymous?", a: "Yes. Your enrollment is completely private. GD participation is roll-number based." },
          { q: "How long is my access valid?", a: "You receive 3-year extended access to all course materials, recordings, live batches, and GD slots." }
        ],
        outcomes: [
          "Break down case questions with structured frameworks",
          "Approach guesstimates with clarity and confidence",
          "Communicate your thinking process effectively",
          "Handle follow-up probes from interviewers",
        ],
        curriculum: [
          { week: "Week 1", topics: ["Case interview fundamentals", "Market sizing basics", "Profitability frameworks"] },
          { week: "Week 2", topics: ["Guesstimate techniques", "Revenue equation cases", "Practice drills"] },
          { week: "Week 3", topics: ["Advanced case types", "Industry-specific cases", "Mock case walkthroughs"] },
          { week: "Week 4", topics: ["Interviewer perspective", "Common mistakes", "Final case project"] },
        ],
      },
      {
        slug: "behavioral-hr",
        title: "Behavioral & HR Interview Prep",
        desc: "Master behavioral questions, HR rounds, and the communication patterns that get candidates hired.",
        duration: "3 weeks",
        lessons: 10,
        hours: 6,
        level: "Beginner",
        tag: "Interview",
        instructor: "Punita Shrivastava",
        instructorRole: "Lead Instructor, EdgeX Academy",
        journey: [
          { title: "You Enroll into the course" },
          { title: "Instant Access to Pre-Recorded Modules", timeframe: "instant" },
          { title: "Your TA reaches out to you for LIVE Doubt Clearing & GD Slots Booking", timeframe: "within 5 working days" },
          { title: "You are added to the EdgeX Corporate Club", timeframe: "within 7 days" }
        ],
        faqs: [
          { q: "Is this a live or recorded course?", a: "It is a hybrid format. You get instant access to recorded lectures, assignments, and question banks. You can also join a live batch and book weekly GD slots." },
          { q: "Will my participation be anonymous?", a: "Yes. Your enrollment is completely private. GD participation is roll-number based." },
          { q: "How long is my access valid?", a: "You receive 3-year extended access to all course materials, recordings, live batches, and GD slots." }
        ],
        outcomes: [
          "Answer behavioral questions with the STAR method",
          "Build a compelling personal narrative",
          "Handle HR and culture-fit rounds",
          "Project confidence and presence in interviews",
        ],
        curriculum: [
          { week: "Week 1", topics: ["Behavioral question types", "STAR framework", "Story banking"] },
          { week: "Week 2", topics: ["HR round preparation", "Salary & role questions", "Communication drills"] },
          { week: "Week 3", topics: ["Presence & body language", "Mock HR sessions", "Feedback review"] },
        ],
      },
      {
        slug: "group-discussions",
        title: "Group Discussions (GD)",
        desc: "Weekly live GD slots with anonymous participation, video-on simulation, and detailed written feedback from faculty.",
        duration: "Ongoing",
        lessons: 8,
        hours: 4,
        level: "Intermediate",
        tag: "GD",
        instructor: "EdgeX Teaching Assistants",
        instructorRole: "GD Moderators",
        journey: [
          { title: "You Enroll into the course" },
          { title: "Instant Access to Pre-Recorded Modules", timeframe: "instant" },
          { title: "Your TA reaches out to you for LIVE Doubt Clearing & GD Slots Booking", timeframe: "within 5 working days" },
          { title: "You are added to the EdgeX Corporate Club", timeframe: "within 7 days" }
        ],
        faqs: [
          { q: "Is this a live or recorded course?", a: "It is a hybrid format. You get instant access to recorded lectures, assignments, and question banks. You can also join a live batch and book weekly GD slots." },
          { q: "Will my participation be anonymous?", a: "Yes. Your enrollment is completely private. GD participation is roll-number based." },
          { q: "How long is my access valid?", a: "You receive 3-year extended access to all course materials, recordings, live batches, and GD slots." }
        ],
        outcomes: [
          "Participate confidently in group discussions",
          "Structure arguments under time pressure",
          "Collaborate with 6–8 peers from Tier 1 & 2 colleges",
          "Receive recorded feedback on performance",
        ],
        curriculum: [
          { week: "Module 1", topics: ["GD formats & evaluation criteria", "Opening & closing strategies", "Building on others' points"] },
          { week: "Module 2", topics: ["Current affairs topics", "Business case GDs", "Live practice slots"] },
        ],
      },
      {
        slug: "business-fundamentals",
        title: "Business Fundamentals",
        desc: "Core business concepts, industry knowledge, and mental models needed for consulting, analytics, and management roles.",
        duration: "4 weeks",
        lessons: 14,
        hours: 10,
        level: "Beginner",
        tag: "Core",
        instructor: "Punita Shrivastava",
        instructorRole: "Lead Instructor, EdgeX Academy",
        journey: [
          { title: "You Enroll into the course" },
          { title: "Instant Access to Pre-Recorded Modules", timeframe: "instant" },
          { title: "Your TA reaches out to you for LIVE Doubt Clearing & GD Slots Booking", timeframe: "within 5 working days" },
          { title: "You are added to the EdgeX Corporate Club", timeframe: "within 7 days" }
        ],
        faqs: [
          { q: "Is this a live or recorded course?", a: "It is a hybrid format. You get instant access to recorded lectures, assignments, and question banks. You can also join a live batch and book weekly GD slots." },
          { q: "Will my participation be anonymous?", a: "Yes. Your enrollment is completely private. GD participation is roll-number based." },
          { q: "How long is my access valid?", a: "You receive 3-year extended access to all course materials, recordings, live batches, and GD slots." }
        ],
        outcomes: [
          "Understand key business and industry concepts",
          "Apply mental models to interview questions",
          "Discuss companies and sectors intelligently",
          "Connect academic knowledge to real business problems",
        ],
        curriculum: [
          { week: "Week 1", topics: ["Business model basics", "P&L fundamentals", "Market dynamics"] },
          { week: "Week 2", topics: ["Industry deep-dives", "Consulting & analytics roles", "FMCG & product companies"] },
          { week: "Week 3", topics: ["Finance & banking overview", "Strategy frameworks", "Current business trends"] },
          { week: "Week 4", topics: ["Role targeting", "Company research methods", "Interview mental models"] },
        ],
      },
      {
        slug: "cv-company-research",
        title: "CV Writing & Company Research",
        desc: "Build a shortlist-worthy CV and research companies systematically for consulting, analytics, product, and finance roles.",
        duration: "2 weeks",
        lessons: 6,
        hours: 4,
        level: "Beginner",
        tag: "Career",
        instructor: "Punita Shrivastava",
        instructorRole: "Lead Instructor, EdgeX Academy",
        journey: [
          { title: "You Enroll into the course" },
          { title: "Instant Access to Pre-Recorded Modules", timeframe: "instant" },
          { title: "Your TA reaches out to you for LIVE Doubt Clearing & GD Slots Booking", timeframe: "within 5 working days" },
          { title: "You are added to the EdgeX Corporate Club", timeframe: "within 7 days" }
        ],
        outcomes: [
          "Write a CV that passes shortlisting",
          "Research target companies thoroughly",
          "Tailor applications to specific roles",
          "Build a target company list by sector",
        ],
        curriculum: [
          { week: "Week 1", topics: ["CV structure & formatting", "Achievement framing", "Shortlisting criteria"] },
          { week: "Week 2", topics: ["Company research frameworks", "Role targeting", "Application strategy"] },
        ],
      },
    ],
  },
  {
    slug: "mba",
    title: "MBA Placements",
    tag: "MBA",
    tagline: "Ace your summer internship & final placements.",
    desc: "Focused interview preparation and consulting readiness, taught by ISB & IIM alumni.",
    duration: "24 Months",
    nextBatch: "Instant Access",
    seats: 100,
    price: 4999,
    courses: [
      {
        slug: "placement-foundations-2026",
        title: "Placement Foundations for B-Schools - 2026",
        desc: "The complete interview foundation for MBA placements, covering structured problem solving, business judgement, behavioural interviews, communication, and interview strategy across business roles.",
        duration: "24 Months",
        lessons: 34,
        hours: 29,
        level: "Beginner",
        tag: "Placement",
        instructor: "Punita Shrivastava",
        instructorRole: "Lead Instructor",
        price: 4299,
        originalPrice: 4999,
        enrollHref: "https://dtkhkw.courses.store/859366",
        addons: ["Lifetime Access to EdgeX Corporate Club"],
        inclusions: [
          { category: "Pre-Recorded Modules", access: "24 Months, Instant Access upon enrolment" },
          { category: "LIVE Doubt Clearing sessions", access: "Slots Every Weekend - join as per your schedule" },
          { category: "GD Labs", access: "Slots Every Weekend - join as per your schedule" }
        ],
        callout: "Note that these modules contain powerful interview prep lessons for B School placements, irrespective of the domain. However specific technical or specialized topics needed for specific verticals/job functions, if any, is not covered and students should prepare from alternate sources.",
        journey: [
          { title: "You Enroll into the course" },
          { title: "Instant Access to Pre-Recorded Modules", timeframe: "instant" },
          { title: "Your TA reaches out to you for LIVE Doubt Clearing & GD Slots Booking", timeframe: "within 5 working days" },
          { title: "You are added to the EdgeX Corporate Club", timeframe: "within 7 days" }
        ],
        outcomes: [],
        faqs: m1Faqs,
        curriculum: [
          { 
            week: "Interview Fundamentals & Preparation Strategy", 
            topics: [],
            details: "Build a structured approach to interview preparation by understanding how interviewers evaluate candidates and what differentiates top performers. Learn effective preparation strategies, communication principles, interview-day readiness, professional demeanor and the strategic use of your résumé to guide conversations. The module also explores role-specific expectations across different corporate functions and provides practical frameworks to help you prepare with clarity and confidence for various business roles.",
            lectures: 7,
            assignments: 5,
            moduleHours: 5
          },
          { 
            week: "Structured Problem Solving & Functional Applications", 
            topics: [],
            details: "Develop a systematic approach to solving varied business and analytical problems using structured thinking frameworks such as MECE, top-down decomposition, issue trees, value chain analysis, hypothesis-driven reasoning, first-principles thinking, and user-centric analysis. Apply these techniques across a range of functional scenarios including product management, user journeys, marketing analytics, customer segmentation, operations, pricing, and business decision-making to communicate clear, logical, and well-structured solutions.",
            lectures: 12,
            assignments: 5,
            moduleHours: 10
          },
          { 
            week: "Leadership Principles, General Management, & Behavioral Assessment", 
            topics: [],
            details: "Develop a structured approach to behavioral interviews by understanding how interviewers evaluate leadership traits and professional qualities through targeted questions and pressure-testing techniques. Learn how to identify, prepare, and communicate evidence-based stories that demonstrate ownership, professional judgment, bias for action, integrity, growth mindset, customer focus, collaboration, resilience, and learning agility. Master techniques to articulate individual impact and team scenarios, navigate follow-up questions, and consistently present yourself as a high-potential candidate. The principles discussed are representative of the leadership traits assessed by leading organizations across consulting, technology, product, and corporate roles.",
            lectures: 10,
            assignments: 10,
            moduleHours: 10
          },
          { 
            week: "Navigating HR & Hiring Manager Interviews", 
            topics: [],
            details: "Develop a strategic understanding of HR and hiring manager interviews by learning the distinct objectives, evaluation criteria, and decision-making processes behind each stage. Explore how organizations assess cultural fit, motivation, communication, professionalism, and long-term potential, while identifying common pitfalls and interview \"no-nos\" that can negatively impact hiring outcomes.",
            lectures: 5,
            assignments: 2,
            moduleHours: 4
          }
        ]
      },
      {
        slug: "consulting-advanced-2026",
        title: "Consulting Pro for B-Schools - 2026",
        desc: "The complete consulting interview preparation program, covering case interviews, guesstimates, structured thinking, business frameworks, and executive communication.",
        duration: "24 Months",
        lessons: 39,
        hours: 33,
        level: "Beginner",
        tag: "Consulting",
        instructor: "Punita Shrivastava",
        instructorRole: "Lead Instructor",
        price: 6799,
        originalPrice: 7999,
        enrollHref: "https://dtkhkw.courses.store/854646",
        addons: ["Lifetime Access to EdgeX Corporate Club"],
        inclusions: [
          { category: "Pre-Recorded Modules", access: "24 Months, Instant Access upon enrolment" },
          { category: "LIVE Doubt Clearing sessions", access: "Slots Every Weekend - join as per your schedule" }
        ],
        callout: "Advanced Case Prep for Management, Strategy and General Consulting Interviews. Also useful for those looking for structured problem solving practice for non-consulting roles",
        journey: [
          { title: "You Enroll into the course" },
          { title: "Instant Access to Pre-Recorded Modules", timeframe: "instant" },
          { title: "Your TA reaches out to you for LIVE Doubt Clearing sessions booking", timeframe: "within 5 working days" },
          { title: "You are added to the EdgeX Corporate Club", timeframe: "within 7 days" }
        ],
        outcomes: [],
        faqs: m2Faqs,
        curriculum: [
          {
            week: "Structured Problem Solving & Core Business Frameworks",
            topics: [],
            details: "Develop the structured thinking and analytical toolkit used in consulting and strategy roles. Learn MECE principles, issue trees, hypothesis-driven problem solving, benchmarking, income statement analysis, and core business frameworks including Porter's Five Forces, Value Chain, BCG Matrix, the Pareto Principle and more. The module also covers industry value chains and applies these concepts to practical business scenarios. (PESTLE - diff b/w various financial statements)",
            lectures: 10,
            assignments: 2,
            moduleHours: 7
          },
          {
            week: "Case Interview Excellence",
            topics: [],
            details: "Master the structured approach to solving consulting case interviews across profitability, market entry, growth strategy, pricing, operations, M&A, and other common business scenarios. Learn how to ask insightful clarifying questions, develop robust frameworks, synthesize findings, and communicate recommendations with the confidence expected by top consulting firms.",
            lectures: 12,
            assignments: 4,
            moduleHours: 10
          },
          {
            week: "Guesstimates & Quantitative Reasoning",
            topics: [],
            details: "Develop a systematic approach to tackling estimation problems using logical assumptions, structured decomposition, and quantitative reasoning. Learn proven techniques to solve market sizing and guesstimate questions while clearly communicating your thought process under interview conditions.",
            lectures: 8,
            assignments: 6,
            moduleHours: 8
          },
          {
            week: "Consulting Readiness & Executive Presence",
            topics: [],
            details: "Go beyond case solving to develop the professional skills expected of successful consulting candidates. Learn networking strategies, interview etiquette, executive communication, and stakeholder management while understanding how to navigate the consulting recruitment process. The module also includes advanced storytelling techniques to help MBA students effectively present their summer internships, prior work experience, leadership roles, live projects, and business school experiences in interviews.",
            lectures: 4,
            assignments: 1,
            moduleHours: 3
          },
          {
            week: "Consulting Interview Demonstrations through Mock Sessions",
            topics: [],
            details: "Observe consulting interview demonstrations featuring guest IIM/ISB alum interviewers featuring case interviews & guesstimates. Learn correct styles of communication through Case diagnostics and guesstimate solutions. Communication techniques to demonstrate structured thinking, avoid common mistakes, and navigate real interview scenarios with confidence.",
            lectures: 5,
            moduleHours: 5
          }
        ]
      },
      {
        slug: "placement-combo-2026",
        title: "Consulting + Placement Essentials Combo 2026",
        desc: "The most comprehensive interview preparation program for MBA placements—combining role-agnostic interview foundations with advanced consulting interview preparation.",
        duration: "24 Months",
        lessons: 65,
        hours: 42,
        level: "Beginner",
        tag: "Combo",
        instructor: "Punita Shrivastava",
        instructorRole: "Lead Instructor",
        price: 8999,
        originalPrice: 12999,
        enrollHref: "https://dtkhkw.courses.store/869497",
        addons: ["Lifetime Access to EdgeX Corporate Club"],
        inclusions: [
          { category: "Pre-Recorded Modules", access: "24 Months, Instant Access upon enrolment" },
          { category: "LIVE Doubt Clearing sessions", access: "Slots Every Weekend - join as per your schedule" },
          { category: "2 Complimentary passes to EdgeX GD Labs (Virtual Mock GD practice)", access: "Slots Every Weekend - join as per your schedule" }
        ],
        callout: "EARLY BIRD BEST VALUE PRICE: 11000 + 1 CV REVIEW FREE",
        journey: [
          { title: "You Enroll into the course" },
          { title: "Instant Access to Pre-Recorded Modules", timeframe: "instant" },
          { title: "Your TA reaches out to you for LIVE Doubt Clearing & GD Slots Booking", timeframe: "within 5 working days" },
          { title: "You are added to the EdgeX Corporate Club", timeframe: "within 7 days" }
        ],
        outcomes: [],
        faqs: m3Faqs,
        curriculum: [
          {
            week: "Structured Problem Solving & Core Business Frameworks",
            topics: [],
            details: "Develop the structured thinking and analytical toolkit used in consulting and strategy roles. Learn MECE principles, issue trees, hypothesis-driven problem solving, benchmarking, income statement analysis, and core business frameworks including Porter's Five Forces, Value Chain, BCG Matrix, the Pareto Principle and more. The module also covers industry value chains and applies these concepts to practical business scenarios.",
            lectures: 10,
            moduleHours: 2
          },
          {
            week: "Case Interview Excellence",
            topics: [],
            details: "Master the structured approach to solving consulting case interviews across profitability, market entry, growth strategy, pricing, operations, M&A, and other common business scenarios. Learn how to ask insightful clarifying questions, develop robust frameworks, synthesize findings, and communicate recommendations with the confidence expected by top consulting firms.",
            lectures: 12,
            moduleHours: 4
          },
          {
            week: "Guesstimates & Quantitative Reasoning",
            topics: [],
            details: "Develop a systematic approach to tackling estimation problems using logical assumptions, structured decomposition, and quantitative reasoning. Learn proven techniques to solve market sizing and guesstimate questions while clearly communicating your thought process under interview conditions.",
            lectures: 8,
            moduleHours: 6
          },
          {
            week: "Consulting Readiness & Executive Presence",
            topics: [],
            details: "Go beyond case solving to develop the professional skills expected of successful consulting candidates. Learn networking strategies, interview etiquette, executive communication, and stakeholder management while understanding how to navigate the consulting recruitment process. The module also includes advanced storytelling techniques to help MBA students effectively present their summer internships, prior work experience, leadership roles, live projects, and business school experiences in interviews.",
            lectures: 4,
            moduleHours: 1
          },
          {
            week: "Consulting Interview Demonstrations through Mock Sessions",
            topics: [],
            details: "Observe complete consulting interview demonstrations featuring case interviews, guesstimates, and candidate interactions from start to finish. Learn how high-performing candidates structure their thinking, communicate effectively, avoid common mistakes, and navigate real interview scenarios with confidence.",
            lectures: 5
          },
          {
            week: "Interview Fundamentals & Preparation Strategy",
            topics: [],
            details: "Build a structured approach to interview preparation by understanding how interviewers evaluate candidates and what differentiates top performers. Learn effective preparation strategies, communication principles, interview-day readiness, professional demeanor and the strategic use of your résumé to guide conversations. The module also explores role-specific expectations across different corporate functions and provides practical frameworks to help you prepare with clarity and confidence for various business roles.",
            lectures: 7,
            moduleHours: 5
          },
          {
            week: "Structured Problem Solving & Functional Applications",
            topics: [],
            details: "Develop a systematic approach to solving varied business and analytical problems using structured thinking frameworks such as MECE, top-down decomposition, issue trees, value chain analysis, hypothesis-driven reasoning, first-principles thinking, and user-centric analysis. Apply these techniques across a range of functional scenarios including product management, user journeys, marketing analytics, customer segmentation, operations, pricing, and business decision-making to communicate clear, logical, and well-structured solutions. (Optimized for any overlaps with Module 1)",
            lectures: 4,
            moduleHours: 10
          },
          {
            week: "Leadership Principles, General Management, & Behavioral Assessment",
            topics: [],
            details: "Develop a structured approach to behavioral interviews by understanding how interviewers evaluate leadership traits and professional qualities through targeted questions and pressure-testing techniques. Learn how to identify, prepare, and communicate evidence-based stories that demonstrate ownership, professional judgment, bias for action, integrity, growth mindset, customer focus, collaboration, resilience, and learning agility. Master techniques to articulate individual impact and team scenarios, navigate follow-up questions, and consistently present yourself as a high-potential candidate. The principles discussed are representative of the leadership traits assessed by leading organizations across consulting, technology, product, and corporate roles.",
            lectures: 10,
            moduleHours: 10
          },
          {
            week: "Navigating HR & Hiring Manager Interviews",
            topics: [],
            details: "Develop a strategic understanding of HR and hiring manager interviews by learning the distinct objectives, evaluation criteria, and decision-making processes behind each stage. Explore how organizations assess cultural fit, motivation, communication, professionalism, and long-term potential, while identifying common pitfalls and interview \"no-nos\" that can negatively impact hiring outcomes.",
            lectures: 5,
            moduleHours: 4
          }
        ]
      },
      {
        slug: "gd-labs",
        title: "EdgeX GD Labs",
        desc: "Practice real corporate Group Discussions through live, moderated simulations designed to replicate placement processes. Receive personalized feedback from EdgeX faculty and progressively improve your communication, business thinking, leadership, and overall GD performance through structured practice.",
        duration: "Flexible",
        lessons: 2,
        hours: 1,
        level: "Beginner",
        tag: "Practice",
        instructor: "Punita Shrivastava",
        instructorRole: "Lead Instructor",
        price: 1999,
        enrollHref: "https://dtkhkw.courses.store/869500",
        callout: "EdgeX team tries to pair studnets preparing for similar firms in a group. TAs get your details over a google form to understand your goals",
        journey: [
          { title: "You Enroll in EdgeX GD Labs", timeframe: "Immediately after purchase" },
          { title: "Book Your Preferred GD Sessions", timeframe: "WITHIN 5 WORKING DAYS", desc: "Our team will share upcoming GD Lab slots. Choose sessions that fit your preparation timeline and book them in advance." },
          { title: "Participate in Live GD Simulations", timeframe: "WEEKENDS", desc: "Join live Zoom-based Group Discussions with 6–8 students from your cohort in a professionally moderated corporate-style environment." },
          { title: "Receive Your EdgeX GD Performance Report", timeframe: "WITHIN 5 WORKING DAYS AFTER EACH SESSION", desc: "Receive individualized feedback covering communication, leadership, business thinking, participation, and practical recommendations for improvement." },
          { title: "Continue Practicing Across Your Remaining Sessions", timeframe: "AS PER YOUR SCHEDULE" }
        ],
        outcomes: [],
        faqs: m4Faqs,
        curriculum: [
          {
            week: "Five Live GD Simulations",
            topics: [],
            details: "Participate in five live Group Discussion simulations conducted over Zoom in small batches of 6–8 participants from the same cohort. Sessions use carefully curated discussion topics, closely replicate the environment of corporate placement GDs, and are moderated by EdgeX TAs. Students are required to be in formal dress-up and keep their camera on. However, for protecting confidentiality, students details will not be displayed to other participants"
          },
          {
            week: "Personalized Expert Feedback & Guidance",
            topics: [],
            details: "Every session is recorded and individually reviewed by EdgeX faculty. Receive a structured performance report within five working days covering communication, clarity of thought, leadership, listening skills, business awareness, participation quality, and practical recommendations for improvement."
          }
        ]
      }
    ]
  },
  {
    slug: "engineering",
    title: "Engineering Placements",
    tag: "Engineering",
    tagline: "Top B.Tech/B.E. Placements",
    desc: "Curated courses for Engineers aspiring to consulting, analytics, strategy, operations, and other business careers.",
    duration: "24 Months",
    nextBatch: "Instant Access",
    seats: 100,
    price: 2999,
    courses: [
      {
        slug: "placement-foundations-engineers",
        title: "Placement Foundations for Engineers",
        desc: "Build the complete interview foundation for engineers aspiring to business careers, covering the core skills required across consulting, product, analytics, operations, and other business roles.",
        duration: "24 Months",
        lessons: 34,
        hours: 29,
        level: "Beginner",
        tag: "Placement",
        instructor: "Punita Shrivastava",
        instructorRole: "Lead Instructor",
        price: 2499,
        originalPrice: 2999,
        enrollHref: "https://dtkhkw.courses.store/779003",
        addons: ["Lifetime Access to EdgeX Corporate Club"],
        inclusions: [
          { category: "Pre-Recorded Modules", access: "24 Months, Instant Access upon enrolment" },
          { category: "LIVE Doubt Clearing sessions", access: "Slots Every Weekend - join as per your schedule" },
          { category: "GD Labs", access: "Slots Every Weekend - join as per your schedule" }
        ],
        callout: "Note that these modules contain powerful interview prep lessons for Engineers looking to get into business roles- consulting, analytics, product, operations etc. Concepts covered will also be highly useful for Core & Tech interviews, however specific technical or specialized topics needed for those job functions is not covered and students should prepare from alternate sources",
        journey: [
          { title: "You Enroll into the course" },
          { title: "Instant Access to Pre-Recorded Modules", timeframe: "instant" },
          { title: "Your TA reaches out to you for LIVE Doubt Clearing & GD Slots Booking", timeframe: "within 5 working days" },
          { title: "You are added to the EdgeX Corporate Club", timeframe: "within 7 days" }
        ],
        outcomes: [],
        faqs: e1Faqs,
        curriculum: [
          { 
            week: "Interview Fundamentals & Preparation Strategy", 
            topics: [],
            details: "Build a structured approach to interview preparation by understanding how interviewers evaluate candidates and what differentiates top performers. Learn effective preparation strategies, communication principles, interview-day readiness, professional demeanor and the strategic use of your résumé to guide conversations. The module also explores role-specific expectations across different corporate functions and provides practical frameworks to help you prepare with clarity and confidence for various business roles.",
            lectures: 7,
            assignments: 5,
            moduleHours: 5
          },
          { 
            week: "Structured Problem Solving & Functional Applications", 
            topics: [],
            details: "Develop a systematic approach to solving varied business and analytical problems using structured thinking frameworks such as MECE, top-down decomposition, issue trees, value chain analysis, hypothesis-driven reasoning, first-principles thinking, and user-centric analysis. Apply these techniques across a range of functional scenarios including product management, user journeys, marketing analytics, customer segmentation, operations, pricing, and business decision-making to communicate clear, logical, and well-structured solutions.",
            lectures: 12,
            assignments: 5,
            moduleHours: 10
          },
          { 
            week: "Leadership Principles, General Management, & Behavioral Assessment", 
            topics: [],
            details: "Develop a structured approach to behavioral interviews by understanding how interviewers evaluate leadership traits and professional qualities through targeted questions and pressure-testing techniques. Learn how to identify, prepare, and communicate evidence-based stories that demonstrate ownership, professional judgment, bias for action, integrity, growth mindset, customer focus, collaboration, resilience, and learning agility. Master techniques to articulate individual impact and team scenarios, navigate follow-up questions, and consistently present yourself as a high-potential candidate. The principles discussed are representative of the leadership traits assessed by leading organizations across consulting, technology, product, and corporate roles.",
            lectures: 10,
            assignments: 10,
            moduleHours: 10
          },
          { 
            week: "Navigating HR & Hiring Manager Interviews", 
            topics: [],
            details: "Develop a strategic understanding of HR and hiring manager interviews by learning the distinct objectives, evaluation criteria, and decision-making processes behind each stage. Explore how organizations assess cultural fit, motivation, communication, professionalism, and long-term potential, while identifying common pitfalls and interview \"no-nos\" that can negatively impact hiring outcomes.",
            lectures: 5,
            assignments: 2,
            moduleHours: 4
          }
        ]
      },
      {
        slug: "consulting-advanced-engineers",
        title: "ConsultPro for Engineers",
        desc: "The complete consulting interview preparation program—covering case interviews, guesstimates, structured thinking, business frameworks, and executive communication, designed for engineering students aspiring to business careers.",
        duration: "24 Months",
        lessons: 41,
        hours: 36,
        level: "Beginner",
        tag: "Consulting",
        instructor: "Punita Shrivastava",
        instructorRole: "Lead Instructor",
        price: 4999,
        originalPrice: 5999,
        enrollHref: "https://dtkhkw.courses.store/869650",
        addons: ["Lifetime Access to EdgeX Corporate Club"],
        inclusions: [
          { category: "Pre-Recorded Modules", access: "24 Months, Instant Access upon enrolment" },
          { category: "LIVE Doubt Clearing sessions", access: "Slots Every Weekend - join as per your schedule" }
        ],
        callout: "Advanced Case Prep for Management, Strategy and General Consulting Interviews. Also useful for those looking for structured problem solving practice for Analytics and related functions",
        journey: [
          { title: "You Enroll into the course" },
          { title: "Instant Access to Pre-Recorded Modules", timeframe: "instant" },
          { title: "Your TA reaches out to you for LIVE Doubt Clearing sessions booking", timeframe: "within 5 working days" },
          { title: "You are added to the EdgeX Corporate Club", timeframe: "within 7 days" }
        ],
        outcomes: [],
        faqs: e2Faqs,
        curriculum: [
          {
            week: "Business Foundations, Structured Problem Solving & Core Strategic Frameworks",
            topics: [],
            details: "Develop the structured thinking and analytical toolkit used in consulting and strategy roles. Learn MECE principles, issue trees, hypothesis-driven problem solving, benchmarking, income statement analysis, and core business frameworks including Porter's Five Forces, Value Chain, BCG Matrix, the Pareto Principle and more. The module also covers industry value chains and applies these concepts to practical business scenarios. (PESTLE - diff b/w various financial statements)",
            lectures: 12,
            assignments: 2,
            moduleHours: 10
          },
          {
            week: "Case Interview Excellence",
            topics: [],
            details: "Master the structured approach to solving consulting case interviews across profitability, market entry, growth strategy, pricing, operations, M&A, and other common business scenarios. Learn how to ask insightful clarifying questions, develop robust frameworks, synthesize findings, and communicate recommendations with the confidence expected by top consulting firms.",
            lectures: 12,
            assignments: 4,
            moduleHours: 10
          },
          {
            week: "Guesstimates & Quantitative Reasoning",
            topics: [],
            details: "Develop a systematic approach to tackling estimation problems using logical assumptions, structured decomposition, and quantitative reasoning. Learn proven techniques to solve market sizing and guesstimate questions while clearly communicating your thought process under interview conditions.",
            lectures: 8,
            assignments: 6,
            moduleHours: 8
          },
          {
            week: "Consulting Readiness & Executive Presence",
            topics: [],
            details: "Go beyond case solving to develop the professional skills expected of successful consulting candidates. Learn networking strategies, interview etiquette, executive communication, and stakeholder management while understanding how to navigate the consulting recruitment process. The module also includes advanced storytelling techniques to help MBA students effectively present their summer internships, prior work experience, leadership roles, live projects, and business school experiences in interviews.",
            lectures: 4,
            assignments: 1,
            moduleHours: 3
          },
          {
            week: "Interview Demonstrations through Mock Sessions",
            topics: [],
            details: "Observe consulting interview demonstrations featuring guest IIM/ISB alum interviewers featuring case interviews & guesstimates. Learn correct styles of communication through Case diagnostics and guesstimate solutions. Communication techniques to demonstrate structured thinking, avoid common mistakes, and navigate real interview scenarios with confidence.",
            lectures: 5,
            moduleHours: 5
          }
        ]
      },
      {
        slug: "placement-combo-engineers",
        title: "Consulting + Placement Essentials Combo",
        desc: "",
        duration: "24 Months",
        lessons: 65,
        hours: 42,
        level: "Beginner",
        tag: "Combo",
        instructor: "Punita Shrivastava",
        instructorRole: "Lead Instructor",
        price: 6299,
        originalPrice: 8999,
        enrollHref: "https://dtkhkw.courses.store/869651",
        addons: ["Lifetime Access to EdgeX Corporate Club"],
        inclusions: [
          { category: "Pre-Recorded Modules", access: "24 Months, Instant Access upon enrolment" },
          { category: "LIVE Doubt Clearing sessions", access: "Slots Every Weekend - join as per your schedule" },
          { category: "2 Complimentary passes to EdgeX GD Labs (Virtual Mock GD practice)", access: "Slots Every Weekend - join as per your schedule" }
        ],
        journey: [
          { title: "You Enroll into the course" },
          { title: "Instant Access to Pre-Recorded Modules", timeframe: "instant" },
          { title: "Your TA reaches out to you for LIVE Doubt Clearing & GD Slots Booking", timeframe: "within 5 working days" },
          { title: "You are added to the EdgeX Corporate Club", timeframe: "within 7 days" }
        ],
        outcomes: [],
        faqs: engineeringFaqs,
        curriculum: [
          {
            week: "Structured Problem Solving & Core Business Frameworks",
            topics: [],
            details: "Develop the structured thinking and analytical toolkit used in consulting and strategy roles. Learn MECE principles, issue trees, hypothesis-driven problem solving, benchmarking, income statement analysis, and core business frameworks including Porter's Five Forces, Value Chain, BCG Matrix, the Pareto Principle and more. The module also covers industry value chains and applies these concepts to practical business scenarios.",
            lectures: 10,
            moduleHours: 2
          },
          {
            week: "Case Interview Excellence",
            topics: [],
            details: "Master the structured approach to solving consulting case interviews across profitability, market entry, growth strategy, pricing, operations, M&A, and other common business scenarios. Learn how to ask insightful clarifying questions, develop robust frameworks, synthesize findings, and communicate recommendations with the confidence expected by top consulting firms.",
            lectures: 12,
            moduleHours: 4
          },
          {
            week: "Guesstimates & Quantitative Reasoning",
            topics: [],
            details: "Develop a systematic approach to tackling estimation problems using logical assumptions, structured decomposition, and quantitative reasoning. Learn proven techniques to solve market sizing and guesstimate questions while clearly communicating your thought process under interview conditions.",
            lectures: 8,
            moduleHours: 6
          },
          {
            week: "Consulting Readiness & Executive Presence",
            topics: [],
            details: "Go beyond case solving to develop the professional skills expected of successful consulting candidates. Learn networking strategies, interview etiquette, executive communication, and stakeholder management while understanding how to navigate the consulting recruitment process. The module also includes advanced storytelling techniques to help MBA students effectively present their summer internships, prior work experience, leadership roles, live projects, and business school experiences in interviews.",
            lectures: 4,
            moduleHours: 1
          },
          {
            week: "Consulting Interview Demonstrations through Mock Sessions",
            topics: [],
            details: "Observe complete consulting interview demonstrations featuring case interviews, guesstimates, and candidate interactions from start to finish. Learn how high-performing candidates structure their thinking, communicate effectively, avoid common mistakes, and navigate real interview scenarios with confidence.",
            lectures: 5
          },
          {
            week: "Interview Fundamentals & Preparation Strategy",
            topics: [],
            details: "Build a structured approach to interview preparation by understanding how interviewers evaluate candidates and what differentiates top performers. Learn effective preparation strategies, communication principles, interview-day readiness, professional demeanor and the strategic use of your résumé to guide conversations. The module also explores role-specific expectations across different corporate functions and provides practical frameworks to help you prepare with clarity and confidence for various business roles.",
            lectures: 7,
            moduleHours: 5
          },
          {
            week: "Structured Problem Solving & Functional Applications (Optimized for any overlaps with Module 1)",
            topics: [],
            details: "Develop a systematic approach to solving varied business and analytical problems using structured thinking frameworks such as MECE, top-down decomposition, issue trees, value chain analysis, hypothesis-driven reasoning, first-principles thinking, and user-centric analysis. Apply these techniques across a range of functional scenarios including product management, user journeys, marketing analytics, customer segmentation, operations, pricing, and business decision-making to communicate clear, logical, and well-structured solutions.",
            lectures: 4,
            moduleHours: 10
          },
          {
            week: "Leadership Principles, General Management, & Behavioral Assessment",
            topics: [],
            details: "Develop a structured approach to behavioral interviews by understanding how interviewers evaluate leadership traits and professional qualities through targeted questions and pressure-testing techniques. Learn how to identify, prepare, and communicate evidence-based stories that demonstrate ownership, professional judgment, bias for action, integrity, growth mindset, customer focus, collaboration, resilience, and learning agility. Master techniques to articulate individual impact and team scenarios, navigate follow-up questions, and consistently present yourself as a high-potential candidate. The principles discussed are representative of the leadership traits assessed by leading organizations across consulting, technology, product, and corporate roles.",
            lectures: 10,
            moduleHours: 10
          },
          {
            week: "Navigating HR & Hiring Manager Interviews",
            topics: [],
            details: "Develop a strategic understanding of HR and hiring manager interviews by learning the distinct objectives, evaluation criteria, and decision-making processes behind each stage. Explore how organizations assess cultural fit, motivation, communication, professionalism, and long-term potential, while identifying common pitfalls and interview \"no-nos\" that can negatively impact hiring outcomes.",
            lectures: 5,
            moduleHours: 4
          }
        ]
      },
      {
        slug: "gd-labs-engineers",
        title: "EdgeX GD Labs",
        desc: "Practice real corporate Group Discussions through live, moderated simulations designed to replicate placement processes. Receive personalized feedback from EdgeX faculty and progressively improve your communication, business thinking, leadership, and overall GD performance through structured practice.",
        duration: "24 Months",
        lessons: 2,
        hours: 1,
        level: "Beginner",
        tag: "Practice",
        instructor: "Punita Shrivastava",
        instructorRole: "Lead Instructor",
        price: 1999,
        enrollHref: "https://dtkhkw.courses.store/817173",
        inclusions: [],
        callout: "Advanced Case Prep for Management, Strategy and General Consulting Interviews. Also useful for those looking for structured problem solving practice for non-consulting roles",
        journey: [
          { title: "You Enroll in EdgeX GD Labs", timeframe: "Immediately after purchase" },
          { title: "Book Your Preferred GD Sessions", timeframe: "WITHIN 5 WORKING DAYS", desc: "Our team will share upcoming GD Lab slots. Choose sessions that fit your preparation timeline and book them in advance." },
          { title: "Participate in Live GD Simulations", timeframe: "WEEKENDS", desc: "Join live Zoom-based Group Discussions with 6–8 students from your cohort in a professionally moderated corporate-style environment." },
          { title: "Receive Your EdgeX GD Performance Report", timeframe: "WITHIN 5 WORKING DAYS AFTER EACH SESSION", desc: "Receive individualized feedback covering communication, leadership, business thinking, participation, and practical recommendations for improvement." },
          { title: "Continue Practicing Across Your Remaining Sessions", timeframe: "AS PER YOUR SCHEDULE" }
        ],
        outcomes: [],
        faqs: m4Faqs,
        curriculum: [
          {
            week: "Five Live GD Simulations",
            topics: [],
            details: "Participate in five live Group Discussion simulations conducted over Zoom in small batches of 6–8 participants from the same cohort. Sessions use carefully curated discussion topics, closely replicate the environment of corporate placement GDs, and are moderated by EdgeX TAs. Students are required to be in formal dress-up and keep their camera on. However, for protecting confidentiality, students details will not be displayed to other participants"
          },
          {
            week: "Personalized Expert Feedback & Guidance",
            topics: [],
            details: "Every session is recorded and individually reviewed by EdgeX faculty. Receive a structured performance report within five working days covering communication, clarity of thought, leadership, listening skills, business awareness, participation quality, and practical recommendations for improvement."
          }
        ]
      }
    ]
  },
  {
    slug: "professionals",
    title: "Working Professionals",
    tag: "Professionals",
    tagline: "Ace your next lateral switch",
    desc: "Structured interview preparation for business and leadership roles.",
    duration: "24 Months",
    nextBatch: "Instant Access",
    seats: 100,
    price: 6999,
    courses: [
      {
        slug: "lateral-interview-essentials",
        title: "Lateral Interview Foundations",
        desc: "Build core skills required across lateral intrviews for top global firms, covering comprehensive modules critical to all business and functional interviews",
        duration: "24 Months",
        lessons: 34,
        hours: 29,
        level: "Intermediate",
        tag: "Foundations",
        instructor: "Punita Shrivastava",
        instructorRole: "Lead Instructor",
        price: 4999,
        originalPrice: 5999,
        enrollHref: "https://dtkhkw.courses.store/869674",
        addons: ["Lifetime Access to EdgeX Corporate Club"],
        inclusions: [
          { category: "Pre-Recorded Modules", access: "24 Months, Instant Access upon enrolment" }
        ],
        callout: "Note that these modules contain powerful interview prep lessons for working professionals looking to get a switch in business roles- consulting, analytics, product, operations etc. Concepts covered will also be highly useful for Core & Tech interviews, however specific technical or specialized topics needed for those job functions is not covered and students should prepare from alternate sources",
        journey: [
          { title: "You Enroll into the course" },
          { title: "Instant Access to Pre-Recorded Modules", timeframe: "instant" },
          { title: "You are added to the EdgeX Corporate Club", timeframe: "within 7 days" }
        ],
        outcomes: [],
        faqs: l1Faqs,
        curriculum: [
          {
            week: "Interview Fundamentals & Preparation Strategy",
            topics: [],
            details: "Build a structured approach to interview preparation by understanding how interviewers evaluate candidates and what differentiates top performers. Learn effective preparation strategies, communication principles, interview-day readiness, professional demeanor and the strategic use of your résumé to guide conversations. The module also explores role-specific expectations across different corporate functions and provides practical frameworks to help you prepare with clarity and confidence for various business roles.",
            lectures: 7,
            assignments: 5,
            moduleHours: 5
          },
          {
            week: "Structured Problem Solving & Functional Applications",
            topics: [],
            details: "Develop a systematic approach to solving varied business and analytical problems using structured thinking frameworks such as MECE, top-down decomposition, issue trees, value chain analysis, hypothesis-driven reasoning, first-principles thinking, and user-centric analysis. Apply these techniques across a range of functional scenarios including product management, user journeys, marketing analytics, customer segmentation, operations, pricing, and business decision-making to communicate clear, logical, and well-structured solutions.",
            lectures: 12,
            assignments: 5,
            moduleHours: 10
          },
          {
            week: "Leadership Principles, General Management, & Behavioral Assessment",
            topics: [],
            details: "Develop a structured approach to behavioral interviews by understanding how interviewers evaluate leadership traits and professional qualities through targeted questions and pressure-testing techniques. Learn how to identify, prepare, and communicate evidence-based stories that demonstrate ownership, professional judgment, bias for action, integrity, growth mindset, customer focus, collaboration, resilience, and learning agility. Master techniques to articulate individual impact and team scenarios, navigate follow-up questions, and consistently present yourself as a high-potential candidate. The principles discussed are representative of the leadership traits assessed by leading organizations across consulting, technology, product, and corporate roles.",
            lectures: 10,
            assignments: 10,
            moduleHours: 10
          },
          {
            week: "Navigating HR & Hiring Manager Interviews",
            topics: [],
            details: "Develop a strategic understanding of HR and hiring manager interviews by learning the distinct objectives, evaluation criteria, and decision-making processes behind each stage. Explore how organizations assess cultural fit, motivation, communication, professionalism, and long-term potential, while identifying common pitfalls and interview \"no-nos\" that can negatively impact hiring outcomes.",
            lectures: 5,
            assignments: 2,
            moduleHours: 4
          }
        ]
      },
      {
        slug: "consulting-advanced-professionals",
        title: "ConsultPro for Lateral Interviews",
        desc: "Everything required to excel in Consulting and Strategy interviews, including advanced Case Prep, Guesstimates, Core Consulting Frameworks and their applications, Structured Thinking & Communication.",
        duration: "24 Months",
        lessons: 39,
        hours: 33,
        level: "Intermediate",
        tag: "Consulting",
        instructor: "Punita Shrivastava",
        instructorRole: "Lead Instructor",
        price: 7599,
        originalPrice: 8999,
        enrollHref: "https://dtkhkw.courses.store/869682",
        addons: ["Lifetime Access to EdgeX Corporate Club"],
        inclusions: [
          { category: "Pre-Recorded Modules", access: "24 Months, Instant Access upon enrolment" }
        ],
        callout: "Advanced Case Prep for Management, Strategy and General Consulting Interviews. Also useful for those looking for structured problem solving practice for non-consulting roles",
        journey: [
          { title: "You Enroll into the course" },
          { title: "Instant Access to Pre-Recorded Modules", timeframe: "instant" },
          { title: "Your TA reaches out to you for LIVE Doubt Clearing sessions booking", timeframe: "within 5 working days" },
          { title: "You are added to the EdgeX Corporate Club", timeframe: "within 7 days" }
        ],
        outcomes: [],
        faqs: l2Faqs,
        curriculum: [
          {
            week: "Structured Problem Solving & Core Business Frameworks",
            topics: [],
            details: "Develop the structured thinking and analytical toolkit used in consulting and strategy roles. Learn MECE principles, issue trees, hypothesis-driven problem solving, benchmarking, income statement analysis, and core business frameworks including Porter's Five Forces, Value Chain, BCG Matrix, the Pareto Principle and more. The module also covers industry value chains and applies these concepts to practical business scenarios. (PESTLE - diff b/w various financial statements)",
            lectures: 10,
            assignments: 2,
            moduleHours: 7
          },
          {
            week: "Case Interview Excellence",
            topics: [],
            details: "Master the structured approach to solving consulting case interviews across profitability, market entry, growth strategy, pricing, operations, M&A, and other common business scenarios. Learn how to ask insightful clarifying questions, develop robust frameworks, synthesize findings, and communicate recommendations with the confidence expected by top consulting firms.",
            lectures: 12,
            assignments: 4,
            moduleHours: 10
          },
          {
            week: "Guesstimates & Quantitative Reasoning",
            topics: [],
            details: "Develop a systematic approach to tackling estimation problems using logical assumptions, structured decomposition, and quantitative reasoning. Learn proven techniques to solve market sizing and guesstimate questions while clearly communicating your thought process under interview conditions.",
            lectures: 8,
            assignments: 6,
            moduleHours: 8
          },
          {
            week: "Consulting Readiness & Executive Presence",
            topics: [],
            details: "Go beyond case solving to develop the professional skills expected of successful consulting candidates. Learn networking strategies, interview etiquette, executive communication, and stakeholder management while understanding how to navigate the consulting recruitment process. The module also includes advanced storytelling techniques to help MBA students effectively present their summer internships, prior work experience, leadership roles, live projects, and business school experiences in interviews.",
            lectures: 4,
            assignments: 1,
            moduleHours: 3
          },
          {
            week: "Consulting Interview Demonstrations through Mock Sessions",
            topics: [],
            details: "Observe consulting interview demonstrations featuring guest IIM/ISB alum interviewers featuring case interviews & guesstimates. Learn correct styles of communication through Case diagnostics and guesstimate solutions. Communication techniques to demonstrate structured thinking, avoid common mistakes, and navigate real interview scenarios with confidence.",
            lectures: 5,
            moduleHours: 5
          }
        ]
      },
      {
        slug: "placement-combo-professionals",
        title: "Interview Essentials + Consulting Pro Combo for Lateral Interviews",
        desc: "Complete preparation for lateral interviews, combining role-agnostic interview foundations with advanced consulting and strategy interview preparation in one comprehensive program.",
        duration: "24 Months",
        lessons: 65,
        hours: 42,
        level: "Intermediate",
        tag: "Combo",
        instructor: "Punita Shrivastava",
        instructorRole: "Lead Instructor",
        price: 9999,
        originalPrice: 14998,
        enrollHref: "https://dtkhkw.courses.store/869696",
        addons: ["Lifetime Access to EdgeX Corporate Club"],
        inclusions: [
          { category: "Pre-Recorded Modules", access: "24 Months, Instant Access upon enrolment" }
        ],
        journey: [
          { title: "You Enroll into the course" },
          { title: "Instant Access to Pre-Recorded Modules", timeframe: "instant" },
          { title: "Your TA reaches out to you for LIVE Doubt Clearing & GD Slots Booking", timeframe: "within 5 working days" },
          { title: "You are added to the EdgeX Corporate Club", timeframe: "within 7 days" }
        ],
        outcomes: [],
        faqs: l3Faqs,
        curriculum: [
          {
            week: "Structured Problem Solving & Core Business Frameworks",
            topics: [],
            details: "Develop the structured thinking and analytical toolkit used in consulting and strategy roles. Learn MECE principles, issue trees, hypothesis-driven problem solving, benchmarking, income statement analysis, and core business frameworks including Porter's Five Forces, Value Chain, BCG Matrix, the Pareto Principle and more. The module also covers industry value chains and applies these concepts to practical business scenarios.",
            lectures: 10,
            moduleHours: 2
          },
          {
            week: "Case Interview Excellence",
            topics: [],
            details: "Master the structured approach to solving consulting case interviews across profitability, market entry, growth strategy, pricing, operations, M&A, and other common business scenarios. Learn how to ask insightful clarifying questions, develop robust frameworks, synthesize findings, and communicate recommendations with the confidence expected by top consulting firms.",
            lectures: 12,
            moduleHours: 4
          },
          {
            week: "Guesstimates & Quantitative Reasoning",
            topics: [],
            details: "Develop a systematic approach to tackling estimation problems using logical assumptions, structured decomposition, and quantitative reasoning. Learn proven techniques to solve market sizing and guesstimate questions while clearly communicating your thought process under interview conditions.",
            lectures: 8,
            moduleHours: 6
          },
          {
            week: "Consulting Readiness & Executive Presence",
            topics: [],
            details: "Go beyond case solving to develop the professional skills expected of successful consulting candidates. Learn networking strategies, interview etiquette, executive communication, and stakeholder management while understanding how to navigate the consulting recruitment process. The module also includes advanced storytelling techniques to help MBA students effectively present their summer internships, prior work experience, leadership roles, live projects, and business school experiences in interviews.",
            lectures: 4,
            moduleHours: 1
          },
          {
            week: "Consulting Interview Demonstrations through Mock Sessions",
            topics: [],
            details: "Observe complete consulting interview demonstrations featuring case interviews, guesstimates, and candidate interactions from start to finish. Learn how high-performing candidates structure their thinking, communicate effectively, avoid common mistakes, and navigate real interview scenarios with confidence.",
            lectures: 5
          },
          {
            week: "Interview Fundamentals & Preparation Strategy",
            topics: [],
            details: "Build a structured approach to interview preparation by understanding how interviewers evaluate candidates and what differentiates top performers. Learn effective preparation strategies, communication principles, interview-day readiness, professional demeanor and the strategic use of your résumé to guide conversations. The module also explores role-specific expectations across different corporate functions and provides practical frameworks to help you prepare with clarity and confidence for various business roles.",
            lectures: 7,
            moduleHours: 5
          },
          {
            week: "Structured Problem Solving & Functional Applications (Optimized for any overlaps with Module 1)",
            topics: [],
            details: "Develop a systematic approach to solving varied business and analytical problems using structured thinking frameworks such as MECE, top-down decomposition, issue trees, value chain analysis, hypothesis-driven reasoning, first-principles thinking, and user-centric analysis. Apply these techniques across a range of functional scenarios including product management, user journeys, marketing analytics, customer segmentation, operations, pricing, and business decision-making to communicate clear, logical, and well-structured solutions.",
            lectures: 4,
            moduleHours: 10
          },
          {
            week: "Leadership Principles, General Management, & Behavioral Assessment",
            topics: [],
            details: "Develop a structured approach to behavioral interviews by understanding how interviewers evaluate leadership traits and professional qualities through targeted questions and pressure-testing techniques. Learn how to identify, prepare, and communicate evidence-based stories that demonstrate ownership, professional judgment, bias for action, integrity, growth mindset, customer focus, collaboration, resilience, and learning agility. Master techniques to articulate individual impact and team scenarios, navigate follow-up questions, and consistently present yourself as a high-potential candidate. The principles discussed are representative of the leadership traits assessed by leading organizations across consulting, technology, product, and corporate roles.",
            lectures: 10,
            moduleHours: 10
          },
          {
            week: "Navigating HR & Hiring Manager Interviews",
            topics: [],
            details: "Develop a strategic understanding of HR and hiring manager interviews by learning the distinct objectives, evaluation criteria, and decision-making processes behind each stage. Explore how organizations assess cultural fit, motivation, communication, professionalism, and long-term potential, while identifying common pitfalls and interview \"no-nos\" that can negatively impact hiring outcomes.",
            lectures: 5,
            moduleHours: 4
          }
        ]
      }
    ]
  }
];

export function getCohortBySlug(slug: string): Cohort | undefined {
  return cohorts.find((c) => c.slug === slug);
}

export function getCourseBySlug(slug: string): { course: Course; cohort: Cohort } | undefined {
  for (const cohort of cohorts) {
    const course = cohort.courses.find((c) => c.slug === slug);
    if (course) return { course, cohort };
  }
  return undefined;
}
