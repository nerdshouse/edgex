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
      bio: "Ex-Management Consultant and now a Placement & Interview Coach. EdgeX courses are designed and created by Punita, drawing from her experience cracking several interviews and interviewing hundreds of candidates. She incorporates inputs from her network of IIM, IIT, and NIT alumni.",
      initials: "PS",
      image: "/media/team/punita.png",
      tags: ["ISB Co'20", "Ex-Management Consultant", "Placement & Interview Coach"],
    },
    {
      name: "Anshul Kothari",
      role: "Co-Founder",
      bio: "Operations & supply chain professional. Former member of the Indian Swimming Team (Asian Games and Commonwealth Games Finalist), Anshul brings the discipline of elite sport and years of industry experience to how EdgeX programs are built and run.",
      initials: "AK",
      image: "/media/team/anshul.png",
      tags: ["ISB Co'18", "Indian Swimming Team", "Operations & Supply Chain"],
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
      image: "/media/team/advisors/satyam-mudaliar.png",
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
      image: "/media/team/advisors/ujjwal-tamang.png",
      initials: "UT",
    },
    {
      name: "Vijeta Shrivastava",
      credential: "IIM Kozhikode Co'13",
      image: "/media/team/advisors/vijeta-shrivastava.png",
      initials: "VS",
    },
    {
      name: "Srawesh",
      credential: "IIM Lucknow Co'20",
      image: "/media/team/advisors/srawesh.jpeg",
      initials: "SR",
    },
    {
      name: "Ajita Bisht",
      credential: "McCombs School of Business",
      image: "/media/team/advisors/ajita-bisht.png",
      initials: "AB",
    },
    {
      name: "Satyam Mudaliar",
      credential: "IIT Bombay Co'15",
      image: "/media/team/advisors/satyam-mudaliar.png",
      initials: "SM",
    },
    {
      name: "Palak Jain",
      credential: "IIT Kharagpur Co'16",
      image: "/media/team/advisors/palak-jain.png",
      initials: "PJ",
    },
  ] satisfies readonly ExternalAdvisor[],
} as const;

export type CoreTeamMember = {
  name: string;
  role: string;
  image: string;
  initials: string;
};

export const coreTeamSection = {
  title: "Core Team",
  members: [
    {
      name: "Sathvik Aradhya",
      role: "Program Manager",
      image: "/media/team/core/sathvik-aradhya.png",
      initials: "SA",
    },
    {
      name: "Esha Kumari",
      role: "Program Manager",
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
