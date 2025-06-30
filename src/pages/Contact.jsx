import React from "react";
import { FaPaperPlane } from "react-icons/fa"; // Importing an icon for the send button
import Particles from "../components/bits/Particles";

const Contact = () => {
  return (
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
      <div className="min-h-screen  flex items-center justify-center py-5 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg z-10 min-w-sm w-full space-y-8 bg-gray-800 p-10 rounded-lg shadow-xl">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
            Contact Form
          </h2>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="full-name" className="sr-only">
                  Full name
                </label>
                <input
                  id="full-name"
                  name="full-name"
                  type="text"
                  autoComplete="name"
                  required
                  className="appearance-none relative block w-full px-3 py-3 border border-gray-700 placeholder-gray-500 text-white rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 bg-gray-700 text-sm"
                  placeholder="Full name"
                />
              </div>
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none relative block w-full px-3 py-3 border border-gray-700 placeholder-gray-500 text-white rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 bg-gray-700 text-sm"
                  placeholder="Email address"
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="subject" className="sr-only">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                required
                className="appearance-none relative block w-full px-3 py-3 border border-gray-700 placeholder-gray-500 text-white rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 bg-gray-700 text-sm"
                placeholder="Subject"
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                className="appearance-none relative block w-full px-3 py-3 border border-gray-700 placeholder-gray-500 text-white rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 bg-gray-700 text-sm resize-none"
                placeholder="Your Message"
              ></textarea>
            </div>
          </div>

          <div className="flex justify-end"> {/* Aligns the button to the right */}
            <button
              type="submit"
              className="group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
            >
              <FaPaperPlane className="h-5 w-5 mr-2" /> {/* Icon */}
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Contact;
