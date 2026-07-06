export interface Course {
  slug: string;
  title: string;
  desc: string;
  duration: string;
  lessons: number;
  hours: number;
  level: "Beginner" | "Intermediate" | "Advanced";
  tag: string;
  instructor: string;
  instructorRole: string;
  outcomes: string[];
  curriculum: { 
    week: string; 
    topics: string[];
    details?: string;
    lectures?: number;
    assignments?: number;
    moduleHours?: number;
  }[];
  /** Course-level price in INR. Falls back to the cohort price when unset. */
  price?: number;
  /** Access summary, e.g. "24 Months, Mock Virtual GD slots every weekend". */
  access?: string;
  /** Detailed inclusions for RHS panel */
  inclusions?: { category: string; access: string }[];
  /** Add-ons provided with the course */
  addons?: string[];
  /** Short note on what the course does NOT cover. */
  notCovered?: string;
  /** General callout or note text */
  callout?: string;
  /** YouTube id for the course trailer video. */
  trailerId?: string;
  /** YouTube id for the demo class video. */
  demoId?: string;
  /** Timeline/journey of what happens when a user joins the course. */
  journey?: { title: string; timeframe?: string }[];
  /** Course-specific FAQs */
  faqs?: { q: string; a: string }[];
  /** Custom checkout link (e.g. Classplus) */
  enrollHref?: string;
}

export interface Cohort {
  slug: string;
  title: string;
  tag: string;
  tagline: string;
  desc: string;
  duration: string;
  nextBatch: string;
  seats: number;
  price?: number;
  originalPrice?: number;
  courses: Course[];
}
