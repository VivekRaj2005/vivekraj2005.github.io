export interface POR {
  name: string;
  org: string;
  duration: string;
  desc: string;
}

export interface Skill {
  name: string;
  ratiing: number;
}

export const PORs: Array<POR> = [
  {
    name: "Web Developer",
    org: "Amalthea '23",
    duration: "1 year",
    desc: "Designed, developed, and maintained the official website for Amalthea '23, ensuring a smooth user experience for registrations, event listings, and live updates. Optimized website performance and implemented security measures to handle high traffic during the event.",
  },
  {
    name: "Web Developer",
    org: "Blithcron '24",
    duration: "1 year",
    desc: "Led the development of the Blithcron '24 website, incorporating an interactive UI/UX design, artist lineup details, and an efficient ticketing system. Worked on front-end and back-end integration to ensure seamless user interactions and optimized loading speeds.",
  },
  {
    name: "Web Development Lead",
    org: "Amalthea '24",
    duration: "1 year",
    desc: "Spearheaded the web development team to create a robust, scalable, and mobile-responsive website for Amalthea '24. Managed a team of developers, assigned tasks, conducted code reviews, and ensured the implementation of best coding practices to maintain high performance and security.",
  },
  {
    name: "Technical Officer",
    org: "Election Commission, IIT Gandhinagar",
    duration: "1 year",
    desc: "Oversaw the technical operations of the Election Commission, ensuring secure and efficient online voting and nomination systems. Developed and maintained the backend infrastructure to support electoral processes, guaranteeing data integrity and transparency throughout the elections.",
  },
  {
    name: "Election Commissioner",
    org: "Election Commission, IIT Gandhinagar",
    duration: "1 year",
    desc: "Led the execution of student body elections, ensuring fair, transparent, and unbiased processes. Conducted election planning, coordinated with various stakeholders, managed nomination and voting portals, and facilitated post-election reports and audits.",
  },
  {
    name: "Web Master",
    org: "Student Academic Council",
    duration: "1 year",
    desc: "Developed and maintained the Student Academic Council's online platforms, ensuring accessibility and up-to-date content. Implemented new features to improve student engagement, automated administrative tasks, and optimized the website for performance and security.",
  },
  {
    name: "HackRush Stakeholder",
    org: "HackRush '25",
    duration: "1 year",
    desc: "Played a key role in organizing and managing HackRush '25, contributing to the technical, logistical, and operational aspects of the hackathon. Worked on platform development, participant engagement strategies, and ensured smooth execution of hackathon activities.",
  },
];

export const Skills: Array<Skill> = [
  {
    name: "HTML+CSS",
    ratiing: 100,
  },
  {
    name: "Linux System Administration",
    ratiing: 95,
  },
  {
    name: "JavaScript",
    ratiing: 90,
  },
  {
    name: "MERN Stack",
    ratiing: 90,
  },
  {
    name: "Google Cloud Platform",
    ratiing: 90,
  },
  {
    name: "Macine Learning",
    ratiing: 65,
  }

];
