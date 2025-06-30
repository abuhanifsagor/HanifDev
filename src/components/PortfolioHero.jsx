import React from "react";
import { IoLogoLinkedin, IoLogoWhatsapp } from "react-icons/io";
import { TbBrandGithubFilled } from "react-icons/tb";
import profile from "../assets/pp.jpg";

const PortfolioHero = () => {
  return (
   <section
      data-aos="fade-up"
      id="PortfolioHero"
      className="relative mt-12 min-h-[60vh]  text-gray-800 font-sans flex items-center justify-center py-10 px-4 overflow-hidden"
    >
      <div
        className="absolute top-1/4 left-1/4 w-2 h-2 bg-gray-600 rounded-md animate-pulse hidden md:block"
        style={{ borderRadius: "30% 70% 50% 50%" }}
      ></div>

      <div
        className="absolute top-1/6 right-1/4 w-3 h-3 bg-gray-600 rounded-md animate-pulse animation-delay-200 hidden md:block"
        style={{ borderRadius: "60% 40% 70% 30%" }}
      ></div>

      <div
        className="absolute bottom-1/4 left-1/3 w-2.5 h-2.5 bg-gray-600 rounded-md animate-pulse animation-delay-400 hidden md:block"
        style={{ borderRadius: "80% 20% 60% 40%" }}
      ></div>

      <div
        className="absolute top-1/3 left-1/2 w-2 h-2 bg-gray-600 rounded-md animate-pulse animation-delay-600 hidden md:block"
        style={{ borderRadius: "50% 50% 30% 70%" }}
      ></div>

      <div
        className="absolute bottom-1/3 right-1/2 w-3.5 h-3.5 bg-gray-600 rounded-md animate-pulse animation-delay-800 hidden md:block"
        style={{ borderRadius: "25% 75% 60% 40%" }}
      ></div>

      <div
        className="absolute top-1/4 right-1/3 w-2.5 h-2.5 bg-gray-600 rounded-md animate-pulse animation-delay-1000 hidden md:block"
        style={{ borderRadius: "70% 30% 40% 60%" }}
      ></div>

      <div
        className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-gray-600 rounded-md animate-pulse animation-delay-1200 hidden md:block"
        style={{ borderRadius: "90% 10% 50% 50%" }}
      ></div>

      <div
        className="absolute top-2/3 left-1/4 w-3 h-3 bg-gray-600 rounded-md animate-pulse animation-delay-1400 hidden md:block"
        style={{ borderRadius: "40% 60% 30% 70%" }}
      ></div>

      <div
        className="absolute bottom-1/3 left-3/4 w-2 h-2 bg-gray-600 rounded-md animate-pulse animation-delay-1600 hidden md:block"
        style={{ borderRadius: "50% 50% 80% 20%" }}
      ></div>

      <div
        className="absolute top-1/5 right-1/5 w-2.5 h-2.5 bg-gray-600 rounded-md animate-pulse animation-delay-1800 hidden md:block"
        style={{ borderRadius: "60% 40% 20% 80%" }}
      ></div>
      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center md:gap-12 lg:gap-24">
        {/* Left Section */}
        <div
          data-aos="zoom-out-right"
          className="flex flex-col space-y-8 text-center md:text-left"
        >
          {/* Biography */}
          <div>
            <h2 className="text-sm uppercase font-semibold text-gray-500 mb-2">
              Biography
            </h2>
            <p className="text-lg leading-relaxed">
              Work for money and code for love!
            </p>
            <p className="text-lg leading-relaxed">
              I'm <span className=" text-blue-600 ">Abu Hanif Sagor</span>, a
              creative MERN Stack Developer based in Bangladesh.{" "}
            </p>
          </div>

          {/* Developer Badge Section */}
          <div>
            <h2 className="text-sm uppercase font-semibold text-gray-500 mb-2">
              Aspiring MERN Developer
            </h2>
            <div className="flex justify-center md:justify-start space-x-3">
              {/* Developer-themed icons */}
              <div className="tooltip" data-tip="Coding & Development">
                <div className="p-2.5 hover:bg-[#d7d7d7] duration-200 cursor-pointer rounded-full bg-gray-200 flex items-center justify-center text-gray-600 text-md">
                  💻
                </div>
              </div>

              <div className="tooltip" data-tip="Aspiring to Launch 🚀">
                <div className="p-2.5 hover:bg-[#d7d7d7] duration-200 cursor-pointer rounded-full bg-gray-200 flex items-center justify-center text-gray-600 text-md">
                  🚀
                </div>
              </div>

              <div className="tooltip" data-tip="Learning & Growing 🌱">
                <div className="p-2.5 hover:bg-[#d7d7d7] duration-200 cursor-pointer rounded-full bg-gray-200 flex items-center justify-center text-gray-600 text-md">
                  🌱
                </div>
              </div>
            </div>
          </div>

          {/* Services Section */}
          <div>
            <h2 className="text-sm uppercase font-semibold text-gray-500 mb-2">
              Services
            </h2>
            <ul className="list-none p-0 space-y-1">
              <li className="text-lg hover:underline">
                Full-Stack Web Development
              </li>
              <li className="text-lg hover:underline">
                Responsive UI with React & Tailwind
              </li>
              <li className="text-lg hover:underline">
                Firebase & MongoDB Integration
              </li>
            </ul>
          </div>

          {/* Email */}
          <div>
            <h2 className="text-sm uppercase font-semibold text-gray-500 mb-2">
              Email
            </h2>
            <a
              href="mailto:abuhanifsagor72@gmail.com?subject=👋 Hello Abu Hanif Sagor!&body=Hi Hanif, I saw your portfolio and I'd like to get in touch with you."
              className="text-lg text-blue-600 break-words underline hover:text-blue-800"
            >
              abuhanifsagor72@gmail.com
            </a>
          </div>
        </div>

        {/* Middle Section - Image and Hexagonal Background */}
        <div className="flex flex-col items-center gap-5 max-w-60 md:max-w-full mx-auto justify-center order-first md:order-none relative">
          <div
            id="blob"
            className="relative w-60 h-60 bg-[#1447E6] md:w-80 md:h-80 lg:w-96 lg:h-96 overflow-hidden shadow-lg"
            style={{
              borderRadius: "100% 100% 100% 43% / 100% 100% 77% 100%",
            }}
          >
            <img
              src={profile}
              alt="Profile"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="flex justify-center md:justify-start space-x-3">
            {/* Developer-themed icons */}
            <a
              href="https://github.com/abuhanifsagor"
              target="_blank"
              className=" p-2.5 hover:bg-[#d7d7d7] duration-200 cursor-pointer rounded-full bg-gray-200 flex items-center justify-center text-gray-600 text-md"
            >
              <TbBrandGithubFilled size={25} />
            </a>
            <div className=" p-2.5 hover:bg-[#d7d7d7] duration-200 cursor-pointer rounded-full bg-gray-200 flex items-center justify-center text-gray-600 text-md">
              <IoLogoLinkedin size={25} />
            </div>
            <a
              href="https://wa.me/+8801301070806"
              target="_blank"
              className=" p-2.5 hover:bg-[#d7d7d7] duration-200 cursor-pointer rounded-full bg-gray-200 flex items-center justify-center text-gray-600 text-md"
            >
              <IoLogoWhatsapp size={25} />
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div
          data-aos="zoom-out-left"
          className="flex md:col-span-2  lg:col-span-1 flex-col md:flex-row lg:flex-col lg:gap-0 md:gap-5  space-y-8 text-center md:items-center md:text-left"
        >
          <div className="flex flex-col gap-5">
            {/* Years Experience */}
            <div>
              <h2 className="text-sm uppercase font-semibold text-gray-500 mb-2">
                Years
              </h2>
              <p className="text-6xl md:text-7xl font-bold text-gray-900 leading-none">
                0
              </p>
              <p className="text-sm uppercase font-semibold text-gray-500 mt-1">
                Experience
              </p>
            </div>

            {/* Design Quote */}
            <div
              style={{
                background: "rgba(0, 0, 0, 0.1)",
                borderRadius: "16px",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                backdropFilter: "blur(4.8px)",
                WebkitBackdropFilter: "blur(4.8px)",
              }}
              className=" p-4 rounded-lg shadow-sm"
            >
              <p className="italic text-black text-sm">
                "Eager to Learn, Passionate to Build, Ready to Grow."
              </p>
            </div>
          </div>

  
          <div className="flex flex-col">
            <div className="flex items-center justify-center md:justify-start space-x-4">
              <div
                style={{
                  background: "rgba(0, 0, 0, 0.16)",
                  borderRadius: "16px",
                  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                  backdropFilter: "blur(4.8px)",
                  WebkitBackdropFilter: "blur(4.8px)",
                }}
                className="w-10 h-10 flex items-center justify-center text-xl font-bold hover:-rotate-45 hover:scale-110 transition  duration-300 border border-gray-300 rounded-md"
              >
                🚀
              </div>
              <p className="text-sm text-gray-600 max-w-xs">
                Committed to continuous learning and growth
              </p>
            </div>

            {/* Projects Completed */}
            <div>
              <h2 className="text-sm uppercase font-semibold text-gray-500 mb-2">
                Projects
              </h2>
              <p className="text-6xl md:text-7xl font-bold text-gray-900 leading-none">
                3
              </p>
              <p className="text-sm uppercase font-semibold text-gray-500 mt-1">
                Completed (Personal & Academic)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioHero;
