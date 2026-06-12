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
