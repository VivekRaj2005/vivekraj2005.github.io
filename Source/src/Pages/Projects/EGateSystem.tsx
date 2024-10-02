import EGateImage from "../../Assets/E Gate.jpg";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, ReactNode } from "react";
import { Link } from "react-router-dom";
import {
  FirebaseStack,
  Gmail,
  MUIStack,
  ReactRouterStack,
  ReactStack,
} from "../../Components/TechStack";
import Feature from "../../Components/Feature";

type Props = {
  children: ReactNode;
  style?: string;
};

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
};

const Box = ({ children, style }: Props) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div
      className={"box " + style}
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
    >
      {children}
    </motion.div>
  );
};

function EGateSystem() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  return (
    <>
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex px-5 pt-10 pb-10 items-center justify-center flex-col">
          <img
            className="lg:w-3/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src={EGateImage}
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Electonic Gate Management Software
            </h1>
            <p className="leading-relaxed mb-8">
              As the winning entry at HackRush '24, my Electronic Gate
              Management Software for IIT Gandhinagar revolutionizes campus
              security and access control. This innovative system utilizes
              real-time data analytics and a user-friendly interface to
              streamline entry processes, enhance safety, and improve visitor
              management.
            </p>
            <div className="flex justify-center">
              <Link
                to="https://github.com/VivekRaj2005/E-Gate-System"
                target="_blank"
                className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                <i className="bi bi-github mr-5 lg:block hidden"></i> View
                Source
              </Link>
              <Link
                to="https://hackrush-39cba.web.app/"
                target="_blank"
                className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
              >
                <i className="bi bi-globe-americas mr-5 lg:block hidden"></i>{" "}
                Visit Deployment
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-400 body-font bg-gray-900 lg:px-20 p-0">
        <div className="container px-5 py-24 mx-auto">
          <Box>
            <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
                Tech Stack
              </h1>
              <p className="lg:w-2/3 w-full leading-relaxed text-opacity-80">
                In the context of the E-Gate System, the tech stack is crucial
                as it directly influences the system's performance, scalability,
                and user experience. By carefully selecting the right
                components, we ensure that the E-Gate System is not only
                efficient and secure but also adaptable to future enhancements.
              </p>
            </div>
          </Box>

          <Box>
            <div className="flex flex-wrap -m-4">
              <ReactStack />

              <FirebaseStack />

              <ReactRouterStack />

              <MUIStack />

              <Gmail />
            </div>
          </Box>
        </div>
      </section>

      <Box>
        {" "}
        <section className="text-gray-400 bg-gray-900 body-font lg:px-20 px-0 pb-10">
          <div className="container px-5 pt-10 pb-10 mx-auto">
            <div className="text-center mb-20">
              <h1 className="sm:text-3xl text-2xl font-medium title-font text-white mb-4">
                Features
              </h1>
              <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-400 text-opacity-80">
                The E-Gate System is designed to revolutionize access control
                through a range of innovative features that prioritize security
                and user convenience. Key functionalities include QR code
                scanning for quick, contactless entry, ensuring a smooth and
                efficient check-in process.
              </p>
              <div className="flex mt-6 justify-center">
                <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
              </div>
            </div>
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
              <Feature
                icon="bi-qr-code-scan"
                title="QR Code Scanning"
                desc="QR codes enable rapid scanning, significantly reducing wait times at entry points. Users can simply present their unique QR code—generated through a mobile app or email—allowing for immediate access without the need for manual checks."
              />
              <Feature
                icon="bi-database-fill-check"
                title="Database for Permananat Storage"
                desc="The database plays a crucial role in user authentication by securely storing credentials. It also maintains a history of user access, which can be invaluable for audits, security reviews, and improving overall system efficiency."
              />
              <Feature
                icon="bi-shield-lock"
                title="Admin Dashboard"
                desc="The Admin Control System allows administrators to efficiently manage user accounts, including the ability to add, edit, or deactivate user profiles. he Admin Control System generates comprehensive reports on access trends, user activity, and system performance."
              />

              <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-5 flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-10 h-10"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="6" cy="6" r="3"></circle>
                    <circle cx="6" cy="18" r="3"></circle>
                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                  </svg>
                </div>
                <div className="flex-grow">
                  <h2 className="text-white text-lg title-font font-medium mb-3">
                    The Catalyzer
                  </h2>
                  <p className="leading-relaxed text-base">
                    Blue bottle crucifix vinyl post-ironic four dollar toast
                    vegan taxidermy. Gastropub indxgo juice poutine, ramps
                    microdosing banh mi pug VHS try-hard.
                  </p>
                  <a className="mt-3 text-indigo-400 inline-flex items-center">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-5 flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-10 h-10"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div className="flex-grow">
                  <h2 className="text-white text-lg title-font font-medium mb-3">
                    Neptune
                  </h2>
                  <p className="leading-relaxed text-base">
                    Blue bottle crucifix vinyl post-ironic four dollar toast
                    vegan taxidermy. Gastropub indxgo juice poutine, ramps
                    microdosing banh mi pug VHS try-hard.
                  </p>
                  <a className="mt-3 text-indigo-400 inline-flex items-center">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Box>
    </>
  );
}

export default EGateSystem;
