import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Groupify } from "../Utils/Array";
import ProjectData, { Project } from "../Data/Projects";
import { Link } from "react-router-dom";
// import Logo from "../Assets/Logo.png";

function Landing({
  isVisible,
  setVisibility,
}: {
  isVisible: boolean;
  setVisibility: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.section
          className="text-gray-400 bg-gray-900 body-font px-5 lg:px-20"
          initial={{ opacity: 1 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.5, ease: "easeInOut" },
          }}
          exit={{ opacity: 0 }}
        >
          <div className="container px-5 lg:py-24 py-12 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
                Projects
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                Welcome to my Projects page! Here, you’ll find a curated
                selection of my work that showcases my skills and creativity.
                Each project highlights my process, the challenges I faced, and
                the innovative solutions I implemented. From design to
                development, I invite you to explore the details and see how I
                bring ideas to life. Let’s dive in!
              </p>
            </div>
            <div className="flex flex-wrap -m-4 text-center">
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 border-gray-800 px-4 py-6 rounded-lg">
                  <i
                    className="bi bi-file-earmark-code text-indigo-400 w-12 h-12 mb-3 inline-block"
                    style={{ fontSize: 50 }}
                  ></i>
                  <h2 className="title-font font-medium text-3xl text-white mt-5">
                    10+
                  </h2>
                  <p className="leading-relaxed">Projects</p>
                </div>
              </div>
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 border-gray-800 px-4 py-6 rounded-lg">
                  <i
                    className="bi bi-buildings-fill text-indigo-400 w-12 h-12 mb-3 inline-block"
                    style={{ fontSize: 50 }}
                  ></i>
                  <h2 className="title-font font-medium text-3xl text-white mt-5">
                    4+
                  </h2>
                  <p className="leading-relaxed">Organisations</p>
                </div>
              </div>
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 border-gray-800 px-4 py-6 rounded-lg">
                  <i
                    className="bi bi-terminal-fill text-indigo-400 w-12 h-12 mb-3 inline-block"
                    style={{ fontSize: 50 }}
                  ></i>
                  <h2 className="title-font font-medium text-3xl text-white mt-5">
                    15+
                  </h2>
                  <p className="leading-relaxed">Tech Stack</p>
                </div>
              </div>
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 border-gray-800 px-4 py-6 rounded-lg">
                  <i
                    className="bi bi-gear-wide-connected text-indigo-400 w-12 h-12 mb-3 inline-block"
                    style={{ fontSize: 50 }}
                  ></i>
                  <h2 className="title-font font-medium text-3xl text-white mt-5">
                    20+
                  </h2>
                  <p className="leading-relaxed">Configuration Files</p>
                </div>
              </div>
            </div>
            <div className="py-10 flex flex-row justify-center">
              <button
                className="ml-4 inline-flex text-indigo-400 bg-indigo-800 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-700 hover:text-white rounded lg:text-lg text-md"
                onClick={() => setVisibility(false)}
              >
                Explore{" "}
                <i className="bi bi-arrow-right ml-5 lg:text-lg text-md lg:block hidden"></i>
              </button>
            </div>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}

function ProjectShowCase({ isVisible }: { isVisible: boolean }) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.section
          className="text-gray-400 bg-gray-900 body-font"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.5, ease: "easeInOut" },
          }}
          exit={{ opacity: 0 }}
        >
          <div className="container lg:px-20 px-5 lg:py-15 py-12 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h1 className="flex-grow text-indigo-400 border-b-2 border-indigo-500 py-2 text-2xl px-1 mb-5 w-full">
                Completed Projects
              </h1>
              {Groupify(ProjectData, 3).map(
                (projects: Array<any>, index: number) => {
                  return <ProjectHolder projects={projects} key={index} />;
                }
              )}
            </div>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}

function ProjectHolder({ projects }: { projects: Array<any> }) {
  return (
    <>
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-wrap -m-4">
            {projects.map((item: any, index: number) => {
              const project = item as Project;
              return (
                <motion.div
                  className="p-4 md:w-1/3"
                  key={index}
                  whileHover={{
                    scale: 1.1,
                    transition: {
                      duration: 0.2,
                    },
                  }}
                >
                  <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden lg:mb-5 mb-0">
                    <img
                      className="lg:h-48 md:h-36 w-full object-cover object-center "
                      src={project.image}
                      alt="blog"
                    />

                    <div className="flex flex-col justify-between ">
                      <div className="pt-5 px-10 ">
                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
                          {project.org}
                        </h2>
                        <h1 className="title-font text-lg font-medium text-white mb-3">
                          {project.name}
                        </h1>
                        <p className="leading-relaxed mb-3 text-justify">
                          {project.bio}
                        </p>
                      </div>

                      <div className="pb-5 px-10">
                        <div className="flex items-center flex-wrap">
                          {!project.source ? (
                            <div className="md:mb-2 lg:mb-0 rounded-md bg-red-600 py-0.5 px-2.5 border border-transparent text-sm text-white transition-all shadow-sm">
                              Closed Source
                            </div>
                          ) : (
                            <Link to={project.source} className="text-indigo-400 inline-flex items-center md:mb-2 lg:mb-0">
                              Learn More
                              <svg
                                className="w-4 h-4 ml-2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              >
                                <path d="M5 12h14"></path>
                                <path d="M12 5l7 7-7 7"></path>
                              </svg>
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

function Projects() {
  const [isLanding, setIsLanding] = useState<boolean>(true);
  return (
    <>
      {/* Section for Actual Project Title */}
      <Landing isVisible={isLanding} setVisibility={setIsLanding} />
      <ProjectShowCase isVisible={!isLanding} />
    </>
  );
}

export default Projects;
