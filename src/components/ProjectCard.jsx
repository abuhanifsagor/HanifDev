import React from "react";
// Import icons for buttons
import {
  FaGithub,
  FaExternalLinkAlt,
  FaInfoCircle,
  FaEye,
} from "react-icons/fa";
import { PiEyeClosedDuotone, PiGithubLogoDuotone, PiInfoDuotone } from "react-icons/pi";

import TiltedCard from "./bits/TiltedCard";

const ProjectCard = ({ project, index }) => {
  const accentBlue = "#3b82f6";

  return (
    <div
      id="card"
      className={`
        flex flex-col
        ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} 
         rounded-lg shadow-xl  mb-12
        border border-gray-200
      `}
    >
      {/* Project Image Section */}
      <div className="md:w-1/2 p-4 hidden md:block w-full flex-shrink-0">
        <TiltedCard
          imageSrc={project.image}
          altText={project.title}
          captionText={project.title}
          containerHeight="100%"
          containerWidth="100%"
          imageHeight="100%"
          imageWidth="100%"
          rotateAmplitude={5}
          scaleOnHover={1.01}
          showMobileWarning={false}
          showTooltip={true}
          displayOverlayContent={true}
        />
      </div>
      <div className="md:w-1/2 md:hidden p-4 w-full flex-shrink-0">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full hover:scale-102 duration-300 object-cover rounded-lg "
        />
      </div>

      {/* Project Content Section */}
      <div className="md:w-1/2 w-full p-6 sm:p-8 flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            {project.title}
          </h3>
          <p className="text-gray-700 text-sm mb-4 leading-relaxed">
            {project.shortDescription}
          </p>

          {/* Key Features */}
          <h4 className="text-base font-semibold text-gray-800 mb-2">
            Key Features:
          </h4>
          <ul className="list-disc text-sm list-inside text-gray-600 mb-4 space-y-1">
            {project.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>

          {/* Tools & Frameworks Badges */}
          <h4 className="text-base font-semibold text-gray-800 mb-2">
            Tech Stack:
          </h4>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.techStack.map((tech, i) => (
              <span
                key={i}
                className={`
                  inline-flex items-center px-3 py-1 rounded-full bg-gray-200   text-sm font-medium
                  }
                `}
              >
                #{tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 mt-auto pt-4 border-t items-center lg:justify-start justify-center border-gray-100">
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn relative flex items-center gap-2 px-5 py-2 rounded-lg text-white font-semibold shadow-md transition-all duration-300 group
              bg-green-600 hover:bg-green-700"

              
            >
              <span className="absolute left-4 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                <PiEyeClosedDuotone />
              </span>

              <span className="absolute left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <FaEye />
              </span>

              <span className="pl-6">Live</span>
            </a>
          )}
          {project.repoLink && (
            <a
              href={project.repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn relative flex items-center gap-2 px-5 py-2 rounded-lg bg-gray-700 text-white font-semibold shadow-md hover:bg-gray-800 transition-colors duration-300 group"
            >
              <span className="absolute left-4 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                <PiGithubLogoDuotone />
              </span>

              <span className="absolute left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <FaGithub />
              </span>

              <span className="pl-6">GitHub</span>
            </a>
          )}
          {project.detailsLink && (
            <a
              href={project.detailsLink}
              className="btn relative flex items-center gap-2 px-5 py-2 rounded-lg bg-gray-200 text-gray-800 font-semibold shadow-md hover:bg-gray-300 transition-colors duration-300 group"
            >
              <span className="absolute left-4 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                <PiInfoDuotone />
              </span>

              <span className="absolute left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <FaInfoCircle />
              </span>

              <span className="pl-6">Details</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
