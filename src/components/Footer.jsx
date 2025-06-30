import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import logo from "../../public/logo.png";
const Footer = () => {
  return (
    <footer className="footer   z-20 sm:footer-horizontal flex justify-around bg-neutral items-center text-neutral-content p-10">
      <aside>
        <img src={logo} alt="" className="w-15 h-15" />
        <p>
          Hanif Dev
          <br />
          Building modern web apps
        </p>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by{" "}
          <span className="font-bold">Hanif Dev</span>
        </p>
      </aside>

      
      <nav>
        <h6 className="footer-title">Social</h6>
        <div className="grid grid-flow-col gap-4 text-2xl">
          <a
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-blue-500 transition-colors duration-200"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-gray-700 transition-colors duration-200"
          >
            <FaGithub />
          </a>

          <a
            href="mailto:youremail@example.com"
            aria-label="Email"
            className="hover:text-red-500 transition-colors duration-200"
          >
            <FaEnvelope />
          </a>
        </div>
      </nav>
      
    </footer>
  );
};

export default Footer;
