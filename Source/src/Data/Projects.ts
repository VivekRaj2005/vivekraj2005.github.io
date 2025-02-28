import NomPortal from "../Assets/EC, Nomination Portal.jpg";
import VotePortal from "../Assets/EC, Vote Portal.jpg";
import SACPage from "../Assets/SACPage.jpg";
import SACCMS from "../Assets/SAC-CMS.jpg";
import AML from "../Assets/Amalthea '23.jpg";
import EGate from "../Assets/E Gate.jpg";
import AML24 from "../Assets/AML 24.png";
import HealthW from "../Assets/HealthWarriors.jpg";
import Blith24 from "../Assets/Blith24.jpg";
import VertiClean from "../Assets/VertiClean.jpg";

import EGateSystem from "../Pages/Projects/EGateSystem";
import HealthWarriors from "../Pages/Projects/Health Warrior";

export interface Project {
  name: string;
  org: string;
  image: string;
  bio: string;
  source?: string;
  page?: () => JSX.Element;
  stacks: Array<string>;
}

export const WebProjects: Array<Project> = [
  {
    org: "Odoo Hackathon",
    name: "Health Warriors",
    image: HealthW,
    bio: "HealthWarriors can revolutionize rural healthcare by making quality medical advice, diagnostics, and government benefits accessible to all—with just an Aadhaar number. Its chatbot and urban doctor network can save lives, reduce healthcare disparities, and improve overall public health",
    stacks: [
      "https://img.shields.io/badge/Tech_Stack-MERN-blue?style=for-the-badge",
    ],
    source: "/project/HealthWarriors",
    page: HealthWarriors,
  },
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
    name: "Amalthea '23 Website",
    image: AML,
    bio: "A dedicated platform for AML 24, providing event details, registration, and updates for a seamless tech summit experience.",
    stacks: [
      "https://img.shields.io/badge/Tech_Stack-MERN-blue?style=for-the-badge",
    ],
  },
  {
    org: "Amalthea '24",
    name: "Amalthea '24 Website",
    image: AML24,
    bio: "A dedicated platform for AML 24, providing event details, registration, and updates for a seamless tech summit experience.",
    stacks: [
      "https://img.shields.io/badge/Tech_Stack-MERN-blue?style=for-the-badge",
    ],
  },
  {
    org: "Blithcron '24",
    name: "Blithcron '24 Website",
    image: Blith24,
    bio: "Blithchron's official website—your one-stop destination for registrations, event details, schedules, and updates! ",
    stacks: [
      "https://img.shields.io/badge/Tech_Stack-MERN-blue?style=for-the-badge",
    ],
  },
];

export const AcadProjects: Array<Project> = [
  {
    org: "ES 112: World Of Engineering",
    name: "VertiClean",
    image: VertiClean,
    bio: "SkyClean is an advanced robotic window cleaner designed to safely and efficiently clean windows of high-rise buildings without human intervention. Equipped withstate of the art control software, high-suction adhesion, and smart sensors, this robot ensures spotless glass surfaces while eliminating the risks associated with manual window cleaning at extreme heights.",
    stacks: [
      "https://img.shields.io/badge/Tech_Stack-MERN-blue?style=for-the-badge",
    ],
  },
];
