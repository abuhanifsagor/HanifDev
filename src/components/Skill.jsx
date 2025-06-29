import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiFirebase,
  SiExpress,
  SiMongodb,
  SiVercel,
  SiNetlify,
  SiFigma,
} from "react-icons/si";

// General category icons
import { FaLaptopCode, FaDatabase, FaCloud, FaPalette } from "react-icons/fa";

const Skill = () => {
  const accentBlue = "#3b82f6"; // Your accent blue color

  const categories = [
    {
      name: "Frontend",
      icon: <FaLaptopCode style={{ color: accentBlue }} />,
      skills: [
        { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
        { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
        { name: "React", icon: <FaReact style={{ color: accentBlue }} /> },
        { name: "Node.js (for Next.js)", icon: <FaNodeJs className="text-green-500" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500" /> },
        { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" /> },
      ],
    },
    {
      name: "Backend & Database",
      icon: <FaDatabase style={{ color: accentBlue }} />,
      skills: [
        { name: "Express.js", icon: <SiExpress className="text-gray-800" /> },
        { name: "Firebase", icon: <SiFirebase className="text-orange-400" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
      ],
    },
    {
      name: "Deployment & Hosting",
      icon: <FaCloud style={{ color: accentBlue }} />,
      skills: [
        { name: "Vercel", icon: <SiVercel className="text-gray-800" /> },
        { name: "Netlify", icon: <SiNetlify className="text-teal-500" /> },
      ],
    },
    {
      name: "UI/UX & Tools",
      icon: <FaPalette style={{ color: accentBlue }} />,
      skills: [
        { name: "Figma", icon: <SiFigma className="text-purple-500" /> },
      ],
    },
  ];

  return (
    <section className="py-16 bg-f5f5f5 text-gray-800 min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Main Heading - Responsive Font Size */}
        <h2 className="text-3xl md:text-4xl  font-bold text-center mb-12 text-gray-900">
          Behind My Crafting Code
        </h2>

        <div className="space-y-10">
          {categories.map((category) => (
            <div key={category.name}>
              {/* Category Heading - Responsive Font Size and Icon Size */}
              <h3 className="flex items-center text-2xl md:text-3xl  font-semibold mb-6 text-gray-800">
                <span className="mr-3 text-3xl sm:text-4xl " style={{ color: accentBlue }}>
                  {category.icon}
                </span>
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-4 sm:gap-6 pl-8 sm:pl-12 lg:pl-16">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="tooltip tooltip-bottom"
                    data-tip={skill.name}
                  >
                    <div id="skills"
                      className="flex  flex-col items-center justify-center p-3 sm:p-4 bg-white rounded-lg  transform hover:scale-105 transition-transform duration-200"
                    >
                      {/* Individual Skill Icon - Adjusted to original 'sm' size */}
                      <div className="text-5xl sm:text-6xl text-center">
                        {skill.icon}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;