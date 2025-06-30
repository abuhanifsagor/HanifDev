import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  useEffect(() => {
    AOS.refresh(); // Refresh AOS animations on route change
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen relative">
      <Navbar />

      {/* Hire Me Text - Fixed to right center */}
      <div className=" md:flex fixed right-5 top-1/2 -translate-y-1/2 z-50 rotate-90 origin-right bg-black text-white px-3 py-1 text-sm font-semibold rounded-l shadow-lg">
        Hire Me
      </div>

      <main className="flex-grow max-w-7xl mx-auto mt-16 px-4">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
