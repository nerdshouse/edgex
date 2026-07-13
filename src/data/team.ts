export type TeamMember = {
  name: string;
  role: string;
  bio?: string;
  initials: string;
  /** Path under /public, e.g. "/media/team/punita.png". Falls back to initials avatar when omitted. */
  image?: string;
  tags?: readonly string[];
};

// TODO: Replace placeholder names/bios with real people and drop photos into /public/media/team/.
export const team = {
  founders: [
    {
      name: "Punita Shrivastava",
      role: "Co-Founder & Lead Instructor",
      bio: "Former Management Consultant with over a decade of corporate experience. Punita has prepared for, cracked, and conducted interviews across leading organizations, bringing real interviewer perspectives into every EdgeX program.\nEvery course is personally designed by her and continuously refined with inputs from experienced recruiters, industry professionals, and alumni from leading institutions.",
      initials: "PS",
      image: "/media/team/punita.png",
      tags: ["ISB Co'20", "Ex-Management Consultant", "Placement & Interview Coach"],
    },
    {
      name: "Anshul Kothari",
      role: "Co-Founder",
      bio: "Operations & Supply Chain leader. ISB interview panelist and B-school admissions mentor with extensive experience supporting MBA applicants through interviews and application essays.\nA former member of the Indian Swimming Team and an accomplished public speaker, Anshul brings the discipline of elite sport, leadership under pressure, and the standards of professional communication and executive presence that are integral to every EdgeX program.",
      initials: "AK",
      image: "/media/team/anshul.png",
      tags: ["ISB Co'18", "Operations & Supply Chain", "Indian Swimming Team"],
    },
  ],
  advisors: [
    {
      name: "Ujjwal Tamang",
      role: "External Advisor",
      initials: "UT",
      image: "/media/team/advisors/ujjwal-tamang.png",
      tags: ["IIM Bangalore Co'18"],
    },
    {
      name: "Vijeta Shrivastava",
      role: "External Advisor",
      initials: "VS",
      image: "/media/team/advisors/vijeta-shrivastava.png",
      tags: ["IIM Kozhikode Co'13"],
    },
    {
      name: "Srawesh",
      role: "External Advisor",
      initials: "SR",
      image: "/media/team/advisors/srawesh.jpeg",
      tags: ["IIM Lucknow Co'20"],
    },
    {
      name: "Ajita Bisht",
      role: "External Advisor",
      initials: "AB",
      image: "/media/team/advisors/ajita-bisht.png",
      tags: ["McCombs School of Business"],
    },
    {
      name: "Satyam Mudaliar",
      role: "External Advisor",
      initials: "SM",
      image: "/media/team/advisors/satyam-mudaliar2.png",
      tags: ["IIT Bombay Co'15"],
    },
    {
      name: "Palak Jain",
      role: "External Advisor",
      initials: "PJ",
      image: "/media/team/advisors/palak-jain.png",
      tags: ["IIT Kharagpur Co'16"],
    },
  ],
  coreTeam: [
    {
      name: "Sathvik Aradhya",
      role: "Program Manager",
      bio: "Runs live batch schedules, GD slot bookings, and student communications end to end.",
      initials: "SA",
      image: "/media/team/core/sathvik-aradhya.png",
    },
    {
      name: "Esha Kumari",
      role: "Program Manager",
      bio: "Coordinates program operations, student onboarding, and day-to-day cohort support.",
      initials: "EK",
      image: "/media/team/core/esha-kumari.png",
    },
  ],
} as const;

export type ExternalAdvisor = {
  name: string;
  credential: string;
  focus?: string;
  image: string;
  initials: string;
  linkedin?: string;
};

export const externalAdvisorsSection = {
  title: "Team of External Advisors & SMEs",
  linkedinLabel: "LinkedIn",
  advisors: [
    {
      name: "Ujjwal Tamang",
      credential: "IIM Bangalore Co'18",
      focus: "Finance",
      image: "/media/team/advisors/ujjwal-tamang.png",
      initials: "UT",
    },
    {
      name: "Vijeta Shrivastava",
      credential: "IIM Kozhikode Co'13",
      focus: "IT & Consulting",
      image: "/media/team/advisors/vijeta-shrivastava.png",
      initials: "VS",
    },
    {
      name: "Srawesh",
      credential: "IIM Lucknow Co'20",
      focus: "Research & Consulting",
      image: "/media/team/advisors/srawesh.jpeg",
      initials: "SR",
    },
    {
      name: "Ajita Bisht",
      credential: "McCombs School of Business",
      focus: "Analytics",
      image: "/media/team/advisors/ajita-bisht.png",
      initials: "AB",
    },
    {
      name: "Satyam Mudaliar",
      credential: "IIT Bombay Co'15",
      focus: "Corporate Strategy",
      image: "/media/team/advisors/satyam-mudaliar2.png",
      initials: "SM",
    },
    {
      name: "Palak Jain",
      credential: "IIT Kharagpur Co'16",
      focus: "Product Management",
      image: "/media/team/advisors/palak-jain.png",
      initials: "PJ",
    },
  ] satisfies readonly ExternalAdvisor[],
} as const;

export type CoreTeamMember = {
  name: string;
  role: string;
  focus?: string;
  image: string;
  initials: string;
};

export const coreTeamSection = {
  title: "Core Team",
  members: [
    {
      name: "Sathvik Aradhya",
      role: "Program Manager",
      focus: "Marketing & Design",
      image: "/media/team/core/sathvik-aradhya.png",
      initials: "SA",
    },
    {
      name: "Esha Kumari",
      role: "Program Manager",
      focus: "Program Management",
      image: "/media/team/core/esha-kumari.png",
      initials: "EK",
    },
  ] satisfies readonly CoreTeamMember[],
} as const;

export type FounderHighlight = {
  name: string;
  image: string;
  credentials: readonly string[];
  highlights: readonly string[];
};

export const founderHighlight = {
  label: "Co-founder",
  title: "Meet Our Founders",
  founder: {
    name: "Anshul Kothari",
    image: "/media/team/anshul.png",
    credentials: [
      "ISB Co'18, Indian Swimming Team",
      "Operations & Supply Chain Professional",
    ],
    highlights: [
      "ISB Interview Panelist",
      "Expertise in MBA Applications, Essays, and profile building",
      "Interviewed 50+ Candidates",
    ],
  },
} as const;
