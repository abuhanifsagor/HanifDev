import React, { useEffect, useState } from "react"; // Import useState
import ProjectCard from "./ProjectCard";

const LatestProjects = () => {
  const [projects, setProjects] = useState([]); // State to hold fetched projects
  const [loading, setLoading] = useState(true); // State for loading status
  const [error, setError] = useState(null); // State for error messages

  // Define the URL for your projects.json file.
  // Assuming projects.json is in your 'public' folder.
  const PROJECTS_DATA_URL = "data/projects.json";

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(PROJECTS_DATA_URL);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setProjects(data);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching projects:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []); 

  return (
    <div className="pt-15 relative min-h-[60vh]">
      <div>
        
        <h1  id="title" className="text-2xl sticky top-18 pt-2 shadow-base-300 z-10  pb-12 font-bold md:text-3xl md:font-semibold md:leading-tight text-center space-y-3">
         <span data-aos="fade-up">Latest Projects</span>
        </h1>

        {loading && (
          <div className="text-center text-xl text-gray-700 mt-10">
            Loading projects...
            <div className="mt-4 animate-spin rounded-full h-8 w-8 border-b-2 border-accent-blue mx-auto"></div>
          </div>
        )}

        {error && (
          <div className="text-center text-xl text-red-600 mt-10">
            Error loading projects: {error}
            <p className="text-gray-500 text-base mt-2">
              Please try again later.
            </p>
          </div>
        )}

        {!loading && !error && projects.length > 0 && (
          <div className="grid grid-cols-1 gap-4">
            {" "}
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        )}

        {!loading && !error && projects.length === 0 && (
          <div className="text-center text-xl text-gray-700 mt-10">
            No projects found.
          </div>
        )}
      </div>
    </div>
  );
};

export default LatestProjects;
