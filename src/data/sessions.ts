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
    calendlyLink: "#", // To be updated
  },
  {
    name: "Anshul Kothari",
    credential: "Co-Founder",
    image: "/media/team/anshul.png",
    calendlyLink: "#", // To be updated
  },
];
