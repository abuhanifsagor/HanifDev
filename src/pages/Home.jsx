import React from "react";
import Particles from "../components/bits/Particles";
import Hero from "../components/Hero";
import LatestProjects from "../components/LatestProjects";
import Skill from "../components/skill";
import Education from "../components/Education";

const Home = () => (
  <div className="relative">
    <div className="fixed inset-0 z-0 ">
      <Particles
        particleColors={["#3b82f6", "#3b82f6"]}
        particleCount={350}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
      />
    </div>

    {/* Main Content */}
    <div className="container mx-auto z-20 md:px-4">
      <Hero />
      <Skill />
      <LatestProjects />
      <Education></Education>
    </div>
  </div>
);

export default Home;
