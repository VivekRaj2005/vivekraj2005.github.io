import NomPortal from "../Assets/EC, Nomination Portal.jpg";
import VotePortal from "../Assets/EC, Vote Portal.jpg";
import SACPage from "../Assets/SACPage.jpg";
import SACCMS from "../Assets/SAC-CMS.jpg";
import AML from "../Assets/Amalthea '23.jpg";
import EGate from "../Assets/E Gate.jpg";
import EGateSystem from "../Pages/Projects/EGateSystem";

export interface Project {
  name: string;
  org: string;
  image: string;
  bio: string;
  source?: string;
  page?: () => JSX.Element;
  stacks: Array<string>;
}

const Data: Array<Project> = [
  {
    org: "HackRush '24",
    name: "E Gate Management",
    image: EGate,
    bio: "Maintaining the Academic Council page for IIT Gandhinagar is crucial for ensuring that students and faculty have access to essential information about academic policies, initiatives, and discussions. This page serves as a central hub for updates on council meetings, agendas, and outcomes, fostering transparency and engagement within the academic community.",
    stacks: [
      "https://img.shields.io/badge/Tech_Stack-MERN-blue?style=for-the-badge",
    ],
    source: "/project/EGate",
    page: EGateSystem,
  },
  {
    org: "Election Commission, IITGN",
    name: "Nomination Portal",
    image: NomPortal,
    bio: "The Election Commission Nomination Portal for IIT Gandhinagar serves as a streamlined platform for students to participate in the democratic process of student elections. It allows candidates to submit their nominations, access necessary forms.",
    stacks: [
      "https://img.shields.io/badge/Tech_Stack-MERN-blue?style=for-the-badge",
    ],
  },
  {
    org: "Election Commission, IITGN",
    name: "Voting Portal",
    image: VotePortal,
    bio: "The Election Commission Voting Portal for IIT Gandhinagar is designed to facilitate a smooth and secure voting experience for students during elections. With a user-friendly interface, it ensures that eligible voters can easily cast their ballots online, access candidate information, and track election updates.",
    stacks: [
      "https://img.shields.io/badge/Tech_Stack-MERN-blue?style=for-the-badge",
    ],
  },
  {
    org: "Student Academic Council",
    name: "Academic Council Page",
    image: SACPage,
    bio: "Maintaining the Academic Council page for IIT Gandhinagar is crucial for ensuring that students and faculty have access to essential information about academic policies, initiatives, and discussions. This page serves as a central hub for updates on council meetings, agendas, and outcomes, fostering transparency and engagement within the academic community.",
    stacks: [
      "https://img.shields.io/badge/Tech_Stack-MERN-blue?style=for-the-badge",
    ],
  },
  {
    org: "Student Academic Council",
    name: "Content Management Service",
    image: SACCMS,
    bio: "Maintaining the Academic Council page for IIT Gandhinagar is crucial for ensuring that students and faculty have access to essential information about academic policies, initiatives, and discussions. This page serves as a central hub for updates on council meetings, agendas, and outcomes, fostering transparency and engagement within the academic community.",
    stacks: [
      "https://img.shields.io/badge/Tech_Stack-MERN-blue?style=for-the-badge",
    ],
  },
  {
    org: "Amalthea '23",
    name: "AML '23 Website",
    image: AML,
    bio: "Maintaining the Academic Council page for IIT Gandhinagar is crucial for ensuring that students and faculty have access to essential information about academic policies, initiatives, and discussions. This page serves as a central hub for updates on council meetings, agendas, and outcomes, fostering transparency and engagement within the academic community.",
    stacks: [
      "https://img.shields.io/badge/Tech_Stack-MERN-blue?style=for-the-badge",
    ],
  },
  {
    org: "Blithcron '24",
    name: "Blith '24 Website",
    image: AML,
    bio: "Maintaining the Academic Council page for IIT Gandhinagar is crucial for ensuring that students and faculty have access to essential information about academic policies, initiatives, and discussions. This page serves as a central hub for updates on council meetings, agendas, and outcomes, fostering transparency and engagement within the academic community.",
    stacks: [
      "https://img.shields.io/badge/Tech_Stack-MERN-blue?style=for-the-badge",
    ],
  },
];

export default Data;
