import React, { useEffect, useState } from "react";
import { FaEye, FaGithub, FaInfoCircle } from "react-icons/fa";
import { IoReturnUpBack } from "react-icons/io5";
import {
  PiEyeClosedDuotone,
  PiGithubLogoDuotone,
  PiInfoDuotone,
} from "react-icons/pi";
import { Link, useParams } from "react-router-dom";

const ProjectDeatils = () => {
  const { id } = useParams(); // id comes as string
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  const PROJECTS_DATA_URL = "/data/projects.json";

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await fetch(PROJECTS_DATA_URL);
        const data = await response.json();

        // Convert id to number before matching:
        const projectId = Number(id);
        const foundProject = data.find((item) => item.id === projectId);
        setProject(foundProject);
      } catch (error) {
        console.error("Failed to load project data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  if (loading) return <div className="text-center py-10">Loading...</div>;
  if (!project)
    return (
      <div className="text-center py-10 text-red-600">Project not found</div>
    );

  return (
    <div className="max-w-4xl mx-auto p-6 py-10">
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <img
        src={project.image}
        alt={project.title}
        className="w-full rounded-md mb-6"
      />

      <p className="mb-4 text-gray-700">{project.shortDescription}</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Key Features</h2>
      <ul className="list-disc list-inside text-gray-600 space-y-1">
        {project.features.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">Tech Stack</h2>
      <div className="flex flex-wrap gap-2">
        {project.techStack.map((tech, i) => (
          <span key={i} className="bg-gray-200 px-3 py-1 rounded-full text-sm">
            #{tech}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-3 mt-auto pt-4 border-t items-center lg:justify-start justify-center border-gray-100">
        {project.liveLink && (
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn relative flex items-center gap-2 px-5 py-2 rounded-lg text-white font-semibold shadow-md transition-all duration-300 group bg-green-600 hover:bg-green-700"
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

        <Link
          to={`/`}
          className="btn relative flex items-center gap-2 px-5 py-2 rounded-lg bg-gray-200 text-gray-800 font-semibold shadow-md hover:bg-gray-300 transition-colors duration-300 group"
        >
          <IoReturnUpBack />
        </Link>
      </div>
    </div>
  );
};

export default ProjectDeatils;
