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
      name: "Advisor Name",
      role: "Consulting SME",
      bio: "Ex-management consultant guiding the case interview and guesstimate curriculum.",
      initials: "CS",
      image: "/media/team/advisor-consulting.png",
      tags: ["IIM Alum"],
    },
    {
      name: "Advisor Name",
      role: "Finance SME",
      bio: "Investment banking and corporate finance interview specialist shaping the finance track.",
      initials: "FS",
      image: "/media/team/advisor-finance.png",
      tags: ["IIM Alum"],
    },
    {
      name: "Advisor Name",
      role: "Product & Analytics SME",
      bio: "Product manager advising on product sense, analytics, and structured problem solving rounds.",
      initials: "PA",
      image: "/media/team/advisor-product.png",
      tags: ["IIT Alum"],
    },
    {
      name: "Advisor Name",
      role: "HR & Behavioral SME",
      bio: "Senior HR leader reviewing the behavioral, HR round, and CV modules.",
      initials: "HB",
      image: "/media/team/advisor-hr.png",
      tags: ["NIT Alum"],
    },
  ],
  coreTeam: [
    {
      name: "Team Member",
      role: "Program Manager",
      bio: "Runs live batch schedules, GD slot bookings, and student communications end to end.",
      initials: "PM",
      image: "/media/team/core-program-manager.png",
    },
    {
      name: "Team Member",
      role: "Teaching Assistant",
      bio: "Moderates weekly GDs and coordinates recorded feedback from EdgeX faculty.",
      initials: "TA",
      image: "/media/team/core-teaching-assistant.png",
    },
    {
      name: "Team Member",
      role: "Student Success",
      bio: "First point of contact for enrolled students - portal access, doubts, and support.",
      initials: "SS",
      image: "/media/team/core-student-success.png",
    },
  ],
} as const;
