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
  curriculum: { week: string; topics: string[] }[];
  /** Course-level price in INR. Falls back to the cohort price when unset. */
  price?: number;
  /** Access summary, e.g. "24 Months, Mock Virtual GD slots every weekend". */
  access?: string;
  /** Short note on what the course does NOT cover. */
  notCovered?: string;
  /** YouTube id for the course trailer video. */
  trailerId?: string;
  /** YouTube id for the demo class video. */
  demoId?: string;
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
