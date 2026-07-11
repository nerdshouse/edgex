export interface SessionMentor {
  name: string;
  credential: string;
  image: string;
  calendlyLink: string;
}

export const defaultMentors: SessionMentor[] = [
  {
    name: "Punita Shrivastava",
    credential: "Co-Founder & Lead Instructor",
    image: "/media/team/punita.png",
    calendlyLink: "https://meetpro.club/PunitaShrivastava",
  },
  {
    name: "Anshul Kothari",
    credential: "Co-Founder",
    image: "/media/team/anshul.png",
    calendlyLink: "https://meetpro.club/Anshulkothari",
  },
];
