export interface POR {
    name: string;
    org: string;
    duration: string;
};

interface Skill {
    name: string;
    icon: string;
    ratiing ?: number;
}

export const PORs: Array<POR> = [
    { name: "Web Developer", org: "Amalthea '23", duration: "1 year" },
    { name: "Web Developer", org: "Blithcron '24", duration: "1 year" },
    { name: "Wed Development Lead", org: "Amalthea '24", duration: "1 year" },
    { name: "Technical Officer", org: "Election Commission, IIT Gandhinagar", duration: "1 year" },
    { name: "Election Commissioner", org: "Election Commission, IIT Gandhinagar", duration: "1 year" },
    { name: "Web Master", org: "Student Academic Coincil", duration: "1 year" },
    { name: "HackRush Stakeholder", org: "HackRush '25", duration: "1 year" },
];
export const Skills: Array<Skill> = []