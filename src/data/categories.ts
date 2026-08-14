import { mbaFaqs, engineeringFaqs, professionalFaqs } from "./faqs";
import { SessionMentor, defaultMentors } from "./sessions";

export interface CourseListing {
  tag: string;
  status?: string;
  code: string;
  title: string;
  desc: string;
  href: string;
}

export interface SessionListing {
  code: string;
  slug?: string;
  title: string;
  desc: string;
  longDesc?: string;
  href: string;
  cta?: string;
  mentors?: SessionMentor[];
  journey?: { title: string; timeframe?: string; desc?: string }[];
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface CategoryData {
  hero: {
    label: string;
    title: string;
    subtitle: string;
    highlight: string;
    features: string[];
  };
  coursesTitle: string;
  coursesSubtitle: string;
  courses: CourseListing[];
  sessionsTitle: string;
  sessions: SessionListing[];
  faqs: FaqItem[];
}

const commonMockInterview = {
  title: "1:1 Mock Interviews with Feedback",
  desc: "Full-length mock interviews with EdgeX mentors, followed by a structured, actionable feedback report.",
  longDesc: "Experience a personalized 60-minute interview simulation designed around your target companies and roles. Before the session, we collect details about your résumé, target firms, interview stage, and specific areas you'd like to improve to design a mock interview that closely reflects the interviews you're preparing for.\n\nThe first 45 minutes are dedicated to a realistic one-on-one interview, where you'll be assessed just as you would be in an actual corporate interview. The final 15 minutes are an intensive feedback and coaching session where your mentor walks you through your strengths, improvement areas, communication style, structuring, problem-solving approach, executive presence, and interview strategy. Together, you'll develop a personalized action plan so you know exactly what to improve before your next interview.",
  mentors: defaultMentors,
  journey: [
    { title: "Book Your Session", desc: "Choose your preferred mentor and a convenient interview slot." },
    { title: "Complete Your Interview Brief", timeframe: "WITHIN 24 HOURS" },
    { title: "45-Minute Personalized Mock Interview", timeframe: "AT YOUR SCHEDULED SLOT", desc: "Participate in a realistic interview simulation tailored to your target roles and companies." },
    { title: "15-Minute Feedback & Action Planning", timeframe: "IMMEDIATELY AFTER THE INTERVIEW", desc: "Review your performance with your mentor, identify priority improvement areas, and leave with a personalized action plan for your upcoming interviews." }
  ]
};

const commonCvReview = {
  title: "1:1 CV Reviews",
  desc: "Line-by-line CV review to make your profile consulting- and placement-ready before applications open.",
  longDesc: "Receive a personalized 20-minute CV review tailored to your placement goals. Before the session, we collect your résumé along with details about your target companies, roles, and career objectives so we can evaluate your profile against the opportunities you're preparing for.\n\nDuring the live session, your mentor reviews your CV line by line, identifying areas to strengthen your impact, clarity, structure, positioning, and overall effectiveness. You'll receive targeted recommendations on how to better showcase your experience, projects, achievements, and leadership, ensuring your CV aligns with the expectations of recruiters for your target roles.",
  mentors: defaultMentors,
  journey: [
    { title: "Book Your Session", desc: "Choose your preferred mentor and a convenient time slot." },
    { title: "Complete Your CV Brief", timeframe: "BOOK AT LEAST 72 HOURS IN ADVANCE", desc: "Upload your résumé and share your target companies, roles, and any specific areas where you'd like feedback." },
    { title: "Personalized 20-Minute CV Review", timeframe: "AT YOUR SCHEDULED SLOT", desc: "Meet with your mentor for a live, line-by-line review of your résumé with practical suggestions and improvements." }
  ]
};

const commonCareerConsultation = {
  title: "1:1 Career Consultation",
  desc: "One-on-one guidance on role targeting, firm selection, and building your placement-season strategy.",
  longDesc: "Receive a comprehensive 60-minute one-to-one career strategy consultation tailored to your professional goals. Before the session, we gather information about your academic background, work experience, career aspirations, target roles, and the specific challenges or decisions you'd like to discuss, allowing your mentor to prepare for a highly personalized discussion.\n\nDuring the session, we'll work together to evaluate your strengths, identify development areas, discuss suitable career paths, assess your readiness for different opportunities, and build a practical strategy for achieving your goals. Whether you're deciding between career options, planning a transition into consulting or other business roles, preparing for placements or lateral interviews, considering higher education, or simply looking for objective guidance from an experienced corporate professional, the session is designed to provide practical, actionable direction tailored to your individual circumstances.",
  mentors: defaultMentors,
  journey: [
    { title: "Book Your Session", desc: "Choose your preferred mentor and a convenient consultation slot." },
    { title: "Complete Your Career Brief", timeframe: "BOOK AT LEAST 72 HOURS IN ADVANCE", desc: "Share your academic or professional background, career goals, target roles, and the topics or questions you'd like to discuss during the session." },
    { title: "60-Minute Career Strategy Consultation", timeframe: "AT YOUR SCHEDULED SLOT", desc: "Participate in a comprehensive one-to-one discussion focused on your career aspirations, opportunities, challenges, and long-term strategy." },
    { title: "Personalized Career Action Plan", desc: "Leave with practical recommendations, clear next steps, and a structured roadmap to help you move confidently towards your career goals." }
  ]
};

export const categoryData: Record<string, CategoryData> = {
  "mba-students": {
    hero: {
      label: "Premier B-School Placements (Tier 1)",
      title: "Learn how Global Corporates actually evaluate MBA candidates.",
      subtitle: "Prepare with experts. Perform with confidence. Ace your placements.",
      highlight: "Courses designed by senior corporate professionals & experienced interviewers.",
      features: ["Structured Curriculum", "Self-Paced Learning", "Live GD & Interview Practice"],
    },
    coursesTitle: "Interview & GD prep for B-School Placements",
    coursesSubtitle: "Explore Courses",
    courses: [
      {
        tag: "Foundations (Role Agnostic)",
        code: "M1",
        title: "Placement Foundations for B-Schools",
        desc: "Core skills required for all MBA placements, focusing on role-agnostic Structured Problem-Solving, Leadership Principles, General Management & Behavioural Interviews, HR rounds, Business Thinking, Structured Communication, Professional Conduct, and Placement prep strategy. Complimentary Mock GDs",
        href: "/mba-students/courses/placement-foundations-2026",
      },
      {
        tag: "Consulting/Strategy/Business Analytics",
        code: "M2",
        title: "ConsultPro for B-Schools",
        desc: "Everything required to excel in Consulting and Strategy interviews, including advanced Case Prep, Guesstimates, Core Consulting Frameworks and their applications, Structured Thinking & Communication. Also includes multiple case interview demonstrations with T1 B-School Alums.",
        href: "/mba-students/courses/consulting-advanced-2026",
      },
      {
        tag: "Combo",
        code: "M3",
        title: "Placement Foundations + ConsultPro Combo for B-Schools",
        desc: "Complete preparation for MBA placements, combining role-agnostic Interview Foundations with Advanced Consulting and Strategy interview prep in one comprehensive program.",
        href: "/mba-students/courses/placement-combo-2026",
      },
      {
        tag: "Practice",
        status: "Ongoing",
        code: "M4",
        title: "EdgeX GD Labs",
        desc: "Practice group discussions through live virtual sessions with targeted feedback, peer learning and realistic placement-style GD simulations.",
        href: "/mba-students/courses/gd-labs",
      },
    ],
    sessionsTitle: "Book a 1:1 Session for personalized mentoring",
    sessions: [
      { code: "M5", slug: "mock-interviews", href: "/mba-students/sessions/mock-interviews", cta: "Book a session", ...commonMockInterview },
      { code: "M6", slug: "cv-reviews", href: "/mba-students/sessions/cv-reviews", cta: "Book a review", ...commonCvReview },
      { code: "M7", slug: "career-consultation", href: "/mba-students/sessions/career-consultation", cta: "Book a call", ...commonCareerConsultation },
    ],
    faqs: mbaFaqs,
  },
  "engineering-students": {
    hero: {
      label: "Top B.Tech/B.E. Placements (Tier 1 & Tier 2)",
      title: "Crack placement interviews with confidence.",
      subtitle: "Curated courses for Engineers aspiring to consulting, analytics, strategy, operations, and other business careers.",
      highlight: "Courses designed by experienced recruiters and senior corporate professionals.",
      features: ["Structured Curriculum", "Self-Paced Learning", "Live GD & Interview Practice"],
    },
    coursesTitle: "Business Roles Interview & GD prep for Engineers",
    coursesSubtitle: "Explore Courses",
    courses: [
      {
        tag: "Foundations (Role Agnostic)",
        status: "Pre-launch Enrolments",
        code: "E1",
        title: "Placement Foundations for Engineers",
        desc: "Core skills required for business-focused campus placements, from role-agnostic structured problem-solving and behavioural interviews to HR rounds, business fundamentals, and professional communication",
        href: "/engineering-students/courses/placement-foundations-engineers", // We need valid slug links here. They were pointing to /contact in old version. Let's assume standard courses exist or point to contact for now. I'll update hrefs to route to dynamic pages if slugs exist, else contact. The user had "/contact" for engineers courses. Let's maintain "/contact" for now to avoid 404s if courses don't exist.
      },
      {
        tag: "Consulting/Strategy/Business Analytics",
        status: "Pre-launch Enrolments",
        code: "E2",
        title: "ConsultPro for Engineers",
        desc: "Everything required to excel in consulting interviews, including advanced case preparation, guesstimates, consulting frameworks, structured thinking & communication, and case interview demonstrations.",
        href: "/engineering-students/courses/consulting-advanced-engineers",
      },
      {
        tag: "Combo",
        status: "Pre-launch Enrolments",
        code: "E3",
        title: "Consulting + Placement Essentials Combo",
        desc: "Complete prep for engineers seeking business roles, combining role-agnostic interview foundations with advanced consulting and strategy interview preparation in one comprehensive program.",
        href: "/engineering-students/courses/placement-combo-engineers",
      },
      {
        tag: "Practice",
        status: "Ongoing",
        code: "E4",
        title: "EdgeX GD Labs",
        desc: "Practice group discussions through live virtual sessions with targeted feedback, peer learning and realistic placement-style GD simulations.",
        href: "/engineering-students/courses/gd-labs-engineers",
      },
    ],
    sessionsTitle: "Book a 1:1 Session for personalized mentoring",
    sessions: [
      { code: "E5", slug: "mock-interviews", href: "/engineering-students/sessions/mock-interviews", ...commonMockInterview },
      { code: "E6", slug: "cv-reviews", href: "/engineering-students/sessions/cv-reviews", ...commonCvReview },
      { code: "E7", slug: "career-consultation", href: "/engineering-students/sessions/career-consultation", ...commonCareerConsultation },
    ],
    faqs: engineeringFaqs,
  },
  "working-professionals": {
    hero: {
      label: "Lateral Job Interviews",
      title: "Ace your next lateral switch with structured interview preparation.",
      subtitle: "Prepare with experts. Perform with confidence. Ace your Interviews.",
      highlight: "Courses designed by experienced recruiters and senior corporate professionals.",
      features: ["Structured Curriculum", "Self-Paced Learning", "Mock Interview Practice"],
    },
    coursesTitle: "Business Roles Interview Prep for working professionals",
    coursesSubtitle: "Explore Courses",
    courses: [
      {
        tag: "Foundations",
        status: "Pre-launch Enrolments",
        code: "L1",
        title: "Lateral Interview Foundations",
        desc: "Core skills required for lateral interviews, focusing on role-agnostic structured problem-solving, behavioural and leadership interviews, business thinking, structured communication, executive presence, stakeholder management, and interview strategy. Includes complimentary mock interview sessions.",
        href: "/working-professionals/courses/lateral-interview-essentials",
      },
      {
        tag: "Consulting/Strategy/Business Analytics",
        status: "Pre-launch Enrolments",
        code: "L2",
        title: "ConsultPro for Lateral Interviews",
        desc: "Everything required to excel in Consulting and Strategy interviews, including advanced Case Prep, Guesstimates, Core Consulting Frameworks and their applications, Structured Thinking & Communication. Also includes multiple case interview demonstrations with T1 B-School Alums.",
        href: "/working-professionals/courses/consulting-advanced-professionals",
      },
      {
        tag: "Combo",
        status: "Pre-launch Enrolments",
        code: "L3",
        title: "Interview Essentials + ConsultPro Combo for Lateral Interviews",
        desc: "Complete preparation for lateral interviews, combining role-agnostic interview foundations with advanced consulting and strategy interview preparation in one comprehensive program.",
        href: "/working-professionals/courses/placement-combo-professionals",
      },
    ],
    sessionsTitle: "Core services & Mentoring",
    sessions: [
      { code: "L4", slug: "mock-interviews", href: "/working-professionals/sessions/mock-interviews", cta: "Book a session", ...commonMockInterview },
      { code: "L5", slug: "cv-reviews", href: "/working-professionals/sessions/cv-reviews", cta: "Book a review", ...commonCvReview },
      { code: "L6", slug: "career-consultation", href: "/working-professionals/sessions/career-consultation", cta: "Book a call", ...commonCareerConsultation },
      /*
      {
        code: "L4",
        slug: "cv-reviews",
        title: "1:1 CV Prep Support & Reviews",
        desc: "Craft a compelling, interview-ready CV with personalized guidance on positioning your experiences for your target roles",
        longDesc: "Get your resume evaluated by industry experts. We'll help you highlight your impact, quantify your achievements, and ensure your profile passes the stringent shortlisting criteria of top firms.",
        href: "/working-professionals/sessions/cv-reviews",
        mentors: defaultMentors,
      },
      {
        code: "L5",
        slug: "mock-interviews",
        title: "1:1 Mock Interview with Feedback",
        desc: "Simulate real interviews and receive actionable feedback to strengthen your communication, confidence, and interview performance.",
        longDesc: "Experience a realistic, high-pressure interview environment tailored to your target role. Receive immediate, actionable feedback on your structuring, communication, and problem-solving skills.",
        href: "/working-professionals/sessions/mock-interviews",
        mentors: defaultMentors,
      },
      {
        code: "L6",
        slug: "essay-writing",
        title: "Essay Writing Support for B-Schools",
        desc: "Develop authentic and impactful application essays with personalized guidance through every stage of the writing process.",
        longDesc: "Work with our mentors to structure, refine, and perfect your B-School essays. Ensure your narrative is authentic, compelling, and aligned with what admissions committees are looking for.",
        href: "/working-professionals/sessions/essay-writing",
        mentors: defaultMentors,
      },
      {
        code: "L7",
        slug: "career-consultation",
        title: "1:1 Career Guidance Consultation",
        desc: "Get personalized guidance on career decisions, job transitions, MBA planning, and interview preparation from experienced industry professionals.",
        longDesc: "Unsure about which roles fit your profile? Discuss your career aspirations with our mentors to build a personalized roadmap for your upcoming placement season.",
        href: "/working-professionals/sessions/career-consultation",
        mentors: defaultMentors,
      },
      */
    ],
    faqs: professionalFaqs,
  },
};
