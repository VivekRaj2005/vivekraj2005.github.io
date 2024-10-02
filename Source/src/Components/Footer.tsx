import Logo from "../Assets/Logo.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-4 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
          <img src={Logo} className="w-10 h-10 text-white rounded-full" />
          <span className="ml-3 text-xl">Vivek Raj</span>
        </a>
        <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">
          All Rights Reserved © {new Date().getFullYear()}{" "}
          <Link
            className="text-gray-500 ml-1"
            target="_blank"
            rel="noopener noreferrer"
            to="https://github.com/VivekRaj2005"
          >
            @VivekRaj2005
          </Link>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <Link to="mailto:23110362@iitgn.ac.in" className="text-gray-400">
            <i className="bi bi-envelope-at"></i>
          </Link>
          <Link
            to="https://github.com/VivekRaj2005/"
            className="ml-3 text-gray-400 text-17"
          >
            <i className="bi bi-github w-5 h-5"></i>
          </Link>
          <Link
            to="https://www.instagram.com/vivek_hi_bro/"
            className="ml-3 text-gray-400"
          >
            <i className="bi bi-instagram w-5 h-5"></i>
          </Link>
          <Link
            to="https://in.linkedin.com/in/vivek-raj-1080aa28a"
            className="ml-3 text-gray-400"
          >
            <i className="bi bi-linkedin w-5 h-5"></i>
          </Link>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
