import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import logo from "../../public/logo.png";
import { TbBrandGithubFilled } from "react-icons/tb";
import { IoLogoLinkedin, IoLogoWhatsapp } from "react-icons/io";
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
        <div className="flex justify-center md:justify-start space-x-3">
          {/* GitHub */}
          <a
            href="https://github.com/abuhanifsagor"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 hover:bg-[#d7d7d7] duration-200 cursor-pointer rounded-full bg-gray-200 flex items-center justify-center text-gray-600 text-md"
            aria-label="GitHub"
          >
            <TbBrandGithubFilled size={25} />
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 hover:bg-[#d7d7d7] duration-200 cursor-pointer rounded-full bg-gray-200 flex items-center justify-center text-gray-600 text-md"
            aria-label="LinkedIn"
          >
            <IoLogoLinkedin size={25} />
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/+8801301070806"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 hover:bg-[#d7d7d7] duration-200 cursor-pointer rounded-full bg-gray-200 flex items-center justify-center text-gray-600 text-md"
            aria-label="WhatsApp"
          >
            <IoLogoWhatsapp size={25} />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
