import Me from "../Assets/Me.jpg";
import { Link } from "react-router-dom";
import CV from "../Assets/CV.pdf";

function Home() {
  return (
    <section className="text-gray-400 bg-gray-900 body-font lg:px-20 px-5">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
          <img
            className="object-cover object-center rounded-full"
            alt="Vivek Raj"
            src={Me}
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Vivek Raj
          </h1>
          <p className="flex-grow text-indigo-400 border-b-2 border-indigo-500 py-2 text-lg px-1 mb-5 w-full">
            Breif Introduction
          </p>
          <p className="mb-8 leading-relaxed">
            Vivek Raj is a second-year BTech student at IIT Gandhinagar,
            currently holding the position of Election Commissioner for the
            Student Election Commission. He has held the title as the winner of
            Software Development in HackRush ‘24. He has an excellent aptitude
            for software development and maintenance. He is also interested in
            Open Source Initiative and has been an Arch Linux user since 2019.
            He has also worked on hands-on projects with organisations like
            Amalthea and Blithcron. His area of expertise in Web Development
            spans ReactJS, Vite Bundle, Typescript, NodeJS, Sockets, MongoDB and
            Firebase.
          </p>
          <div className="flex justify-center">
            <Link
              to="/projects"
              className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded lg:text-lg text-md"
            >
              Projects{" "}
              <i className="bi bi-box-arrow-up-right ml-5 lg:text-lg text-md lg:block hidden"></i>
            </Link>
            <Link
              to={CV}
              download={"VivekRajCV.pdf"}
              target="_blank"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded lg:text-lg text-md"
            >
              Download CV{" "}
              <i className="bi bi-cloud-arrow-down-fill ml-5 lg:text-lg text-md lg:block hidden"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
