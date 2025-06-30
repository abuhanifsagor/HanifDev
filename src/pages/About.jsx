import React from "react";
import { FaMobileAlt, FaCode, FaPaintBrush, FaServer } from "react-icons/fa"; // Importing icons
import Particles from "../components/bits/Particles";

const About = () => {
  return (
    <div className="min-h-screen relative  text-gray-800 py-16 px-4 md:px-8">
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
      <div className="max-w-6xl  mx-auto">
        {/* About Me Introduction */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
          About Me
        </h1>

        <div className="text-lg leading-relaxed space-y-6 mb-16">
          <p>
            Hi, I'm{" "}
            <span className="text-blue-600 font-semibold">Abu Hanif Sagor</span>
            . I'll be honest, I'm a bit of a slacker. You know, the kind of
            person who’s great at finishing tasks… right before the deadline.
            There’s something about that rush, the pressure – it’s kind of
            exciting.
          </p>
          <p>
            My programming journey kicked off with a fascination for how things
            work under the hood, quickly evolving into a passion for building.
            As a full-stack developer, I particularly love playing with design
            elements on the frontend. It's like having a creative playground
            where I can experiment with animations, hover effects, and smooth
            transitions – bringing designs to life is incredibly satisfying.
          </p>
          <p>
            And while working on the backend can sometimes feel like a horror
            movie, with bugs popping up like ghosts in the system, there’s
            nothing quite like the immense satisfaction when everything finally
            clicks and works seamlessly. I thrive on challenges and the
            continuous learning curve that comes with mastering new technologies
            and solving complex problems.
          </p>
          <p>
            Beyond the keyboard, you'll often find me on the cricket field,
            trying to perfect my spin bowling (mostly failing, but always having
            fun!). I also have a knack for painting, which allows me to explore
            creativity in a different dimension – much like coding, it’s about
            starting with a blank canvas and bringing a vision to life, stroke
            by stroke. These hobbies help me unwind, keep my mind fresh, and
            often spark new ways of thinking that I bring back to my development
            work.
          </p>
          <p>
            If you're seeking a dedicated and adaptable full-stack developer who
            enjoys transforming ideas into robust and engaging applications,
            let's connect and build something remarkable together!
          </p>
        </div>

        {/* What I'm Doing Section */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
          What I'm Doing
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Service Card 1: Mobile Apps */}
          <div className="bg-gray-100 p-8 rounded-lg shadow-md border border-gray-200 education hover:border-blue-600 transition-colors duration-300">
            <div className="flex items-center mb-4">
              <FaMobileAlt className="text-blue-600 text-3xl mr-4" />
              <h3 className="text-2xl font-semibold text-gray-900">Web Apps</h3>
            </div>
            <p className="text-gray-600">
              Professional development of high-performance applications for both
              Android and iOS platforms.
            </p>
          </div>

          {/* Service Card 2: Web Development */}
          <div className="bg-gray-100 p-8 rounded-lg shadow-md education border border-gray-200 hover:border-blue-600 transition-colors duration-300">
            <div className="flex items-center mb-4">
              <FaCode className="text-blue-600 text-3xl mr-4" />
              <h3 className="text-2xl font-semibold text-gray-900">
                Web Development
              </h3>
            </div>
            <p className="text-gray-600">
              Crafting high-quality, responsive, and visually appealing websites
              with modern technologies.
            </p>
          </div>

          {/* Service Card 3: Creative Design */}
          <div className="bg-gray-100 education p-8 rounded-lg shadow-md border border-gray-200 hover:border-blue-600 transition-colors duration-300">
            <div className="flex items-center mb-4">
              <FaPaintBrush className="text-blue-600 text-3xl mr-4" />
              <h3 className="text-2xl font-semibold text-gray-900">
                Creative Design
              </h3>
            </div>
            <p className="text-gray-600">
              Bringing visions to life with captivating and user-centric designs
              that enhance user experience.
            </p>
          </div>

          {/* Service Card 4: Backend Solutions */}
          <div className="bg-gray-100 p-8 rounded-lg shadow-md border border-gray-200 education hover:border-blue-600 transition-colors duration-300">
            <div className="flex items-center mb-4">
              <FaServer className="text-blue-600 text-3xl mr-4" />
              <h3 className="text-2xl font-semibold text-gray-900">
                Backend Solutions
              </h3>
            </div>
            <p className="text-gray-600">
              Developing robust and scalable backend services to power dynamic
              and efficient applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
