import type { Course, Cohort } from "./cohorts.types";

export type { Course, Cohort } from "./cohorts.types";

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
