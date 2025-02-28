import { POR, PORs, Skill } from "../Data/Experiances";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ReactNode } from "react";
import { Skills } from "../Data/Experiances";

type Props = {
  children: ReactNode;
  style?: string;
};

const Box = ({ children, style }: Props) => {
  return <div className={`box ${style || ""}`}>{children}</div>;
};

// Skill Heading that resets when out of view
const SkillHeading = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 });

  return (
    <motion.h1
      ref={ref}
      className="text-4xl font-semibold text-white text-center mt-10 mb-6"
      initial={{ opacity: 0, y: -20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      Skill Ratings
    </motion.h1>
  );
};

// Skill Bar that resets when out of view
const SkillBar = ({ skill }: { skill: Skill }) => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 });

  return (
    <motion.div
      ref={ref}
      className="w-full"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <p className="text-lg font-medium mb-2 text-white">{skill.name}</p>
      <div className="w-full bg-gray-700 rounded-full h-4">
        <motion.div
          className="bg-yellow-500 h-4 rounded-full"
          initial={{ width: "0%" }}
          animate={inView ? { width: `${skill.ratiing}%` } : { width: "0%" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
};

const ResponsibilitiesSkills = () => {
  return (
    <div className="min-h-screen text-gray-400 flex flex-col items-center justify-center p-6">
      <div className="container mx-auto p-10 rounded-lg shadow-lg">
        <h1 className="text-4xl font-semibold text-white text-center mb-6">
          Positions of Responsibility
        </h1>
        <div className="overflow-x-auto w-full border border-gray-700 rounded-lg">
          <table className="w-full text-left text-gray-300 border-collapse">
            <thead>
              <tr className="bg-purple-800 text-white">
                <th className="p-4 border border-gray-700">Title</th>
                <th className="p-4 border border-gray-700 hidden md:table-cell">
                  Organisation
                </th>
                <th className="p-4 border border-gray-700 hidden md:table-cell">
                  Duration
                </th>
              </tr>
            </thead>
            <tbody>
              {PORs.map((por: POR, index: number) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-gray-800" : "bg-gray-700"
                  } hover:bg-gray-600`}
                >
                  <td className="p-4 border border-gray-700">{por.name}</td>
                  <td className="p-4 border border-gray-700 hidden md:table-cell">
                    {por.org}
                  </td>
                  <td className="p-4 border border-gray-700 hidden md:table-cell">
                    {por.duration}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-0 md:p-[20px]"></div>
        <Box>
          {/* Animated Skill Ratings Title (Resets when out of view) */}
          <SkillHeading />

          {/* Skill bars appear only after heading is visible, and reset when out of view */}
          <div className="w-full space-y-6">
            {Skills.map((skill: Skill, index: number) => (
              <SkillBar key={index} skill={skill} />
            ))}
          </div>
        </Box>
      </div>
    </div>
  );
};

export default ResponsibilitiesSkills;
