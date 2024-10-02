import { Link } from "react-router-dom";
import Logo from "../Assets/Logo.png";

function Navbar() {
  return (
    <header className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <img src={Logo} className="w-10 h-10 text-white rounded-full" />

          <span className="ml-3 text-xl">Vivek Raj</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link to="/" className="mr-5 hover:text-white">
            Home
          </Link>
          <Link to="/projects" className="mr-5 hover:text-white">
            Projects
          </Link>
          <Link to="/" className="mr-5 hover:text-white">
            Experiance
          </Link>
          <Link to="/" className="mr-5 hover:text-white">
            About & Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
