import HealthW from "../../Assets/HealthWarriors.jpg";
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

function HealthWarriors() {
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
            src={HealthW}
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              HealthWarriors: Bridging Rural & Urban Healthcare
            </h1>
            <p className="leading-relaxed mb-8">
              Our project, **HealthWarriors**, was a strong contender at
              HackRush '24. While we didn't win, we put in a tremendous effort
              to create an impactful healthcare solution. This platform
              seamlessly connects rural patients with urban doctors using
              Aadhaar, offering an AI-powered chatbot, appointment system, and
              an intuitive dashboard for both patients and doctors.
            </p>
            <div className="flex justify-center">
              <Link
                to="https://github.com/VivekRaj2005/VivekRaj_HealthWarriors"
                target="_blank"
                className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                <i className="bi bi-github mr-5 lg:block hidden"></i> View
                Source
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
                HealthWarriors is built on a robust and scalable tech stack to
                ensure seamless functionality, security, and user-friendliness.
                The system integrates modern technologies to enable real-time
                interactions and secure data handling.
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
        <section className="text-gray-400 bg-gray-900 body-font lg:px-20 px-0 pb-10">
          <div className="container px-5 pt-10 pb-10 mx-auto">
            <div className="text-center mb-20">
              <h1 className="sm:text-3xl text-2xl font-medium title-font text-white mb-4">
                Features
              </h1>
              <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-400 text-opacity-80">
                HealthWarriors introduces a set of essential features designed
                to streamline rural healthcare access, making medical
                consultations, appointments, and records easily manageable.
              </p>
              <div className="flex mt-6 justify-center">
                <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
              </div>
            </div>
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
              <Feature
                icon="bi-calendar-check"
                title="Appointment System"
                desc="Users can book doctor appointments with email confirmations, ensuring a smooth scheduling process."
              />
              <Feature
                icon="bi-envelope"
                title="Email System"
                desc="Automated email notifications keep patients and doctors updated about appointments and medical updates."
              />
              <Feature
                icon="bi-database-fill"
                title="Database Management"
                desc="Secure storage of patient records allows for seamless access by authorized doctors, improving continuity of care."
              />
              <Feature
                icon="bi-person-check"
                title="Doctor & Patient Dashboards"
                desc="User-friendly dashboards provide doctors and patients with personalized access to appointments, records, and medical history."
              />
              <Feature
                icon="bi-robot"
                title="AI Chatbot"
                desc="An AI-powered chatbot assists users with symptom checking, appointment booking, and general healthcare guidance."
              />
              <Feature
                icon="bi-ui-checks"
                title="Easy-to-Use Software"
                desc="A simple and intuitive interface ensures that users of all backgrounds can navigate and use the platform effortlessly."
              />
            </div>
          </div>
        </section>
      </Box>
    </>
  );
}

export default HealthWarriors;
