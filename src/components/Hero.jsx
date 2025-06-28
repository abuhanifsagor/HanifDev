import React from "react";
import { FaReact, FaHeart, FaGlobe } from "react-icons/fa";
import { TbSparkles } from "react-icons/tb"; // sparkles effect icon
import PortfolioHero from "./PortfolioHero";

const Hero = () => {
  return (
    <div className="pt-12 text-center font-semibold text-gray-800">
      <h1 data-aos="zoom-in" className="text-lg font-bold md:text-3xl md:font-semibold md:leading-tight text-center space-y-3">
        {/* Line 1 */}
        <p className="flex items-center justify-center gap-2">
          <TbSparkles className="text-purple-500 animate-pulse" size={28} />
          Crafting Code
          <FaReact
            className="text-blue-500 animate-[spin_3s_linear_infinite]"
            size={28}
          />
        </p>

        {/* Line 2 */}
        <p className="flex items-center justify-center gap-2">
          with Your Purpose
          <FaHeart className="text-red-500 animate-pulse" size={30} />
          Given new Life
        </p>

        {/* Line 3 */}
        <p className="flex items-center justify-center  gap-2">
          That Thrives Online
          <FaGlobe className="text-green-600 animate-bounce" size={20} />
        </p>
      </h1>
      <PortfolioHero></PortfolioHero>
    </div>
  );
};

export default Hero;
