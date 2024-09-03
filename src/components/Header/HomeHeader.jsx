import React, { useEffect } from "react";
import MobileImage from "../../assets/images/MobileIcon.png";
import OrangeLinear from "../../assets/images/OrangeLinear.png";
import PinkLinear from "../../assets/images/PinkLinear.png";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const HomeHeader = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // You can set a default duration for animations
  }, []);
  return (
    <div className="h-[80vh] md:h-screen overflow-hidden w-full bg-black text-white flex justify-center flex-col items-center gap-y-14 md:gap-y-7 md:pt-6 xsm:pt-6 sm:pt-0">
      {/* <Navbar /> */}
      <div className="flex justify-center flex-col items-center gap-y-3 w-full fade-in">
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(255,95,109,1) 0%, rgba(255,195,113,1) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          className="text-4xl lg:text-6xl xl:text-8xl md:text-7xl sm:text-5xl font-bold font-spartan md:pt-12"
          data-aos="fade-down"
        >
          WHERE IDEAS
        </div>
        <div
          className="text-2xl lg:text-4xl xl:text-7xl md:text-5xl sm:text-3xl  font-bold font-spartan"
          data-aos="flip-up"
        >
          CODE TO LIFE!
        </div>
        <div
          className="max-w-[500px] text-center text-lg font-spartan"
          data-aos="zoom-in"
        >
          At AppSpot, we are a team of passionate software developers who are
          committed to delivering exceptional results.
        </div>
      </div>
      <div className="flex gap-2 px-1 text-xs sm:text-base md:text-lg">
        <a href="#contact" data-aos="fade-right">
          <button className=" inline-block  px-3 py-3  sm:px-6 sm:py-3 font-semibold text-white  bg-main hover:bg-black hover:text-main border rounded-full border-main transition-all ease-in-out duration-500 cursor-pointer ">
            Schedule Free Strategy Call
          </button>
        </a>
        <Link to="/portfolio" data-aos="fade-left">
          <button className=" inline-block px-3 py-3 sm:px-6 sm:py-3 font-semibold  text-main  border rounded-full border-main transition-all ease-in-out duration-500 cursor-pointer hover:bg-main hover:text-white">
            See our Work
          </button>
        </Link>
      </div>
      <img
        data-aos="fade-up"
        src={MobileImage}
        alt="Image not found"
        className="z-10 w-[50vw] sm:w-[30vw] max-w-full h-auto"
      />
      <img
        src={OrangeLinear}
        alt="Image not found"
        className="w-[600px] absolute left-0 top-1/2 transform -translate-y-1/2 -z-10"
      />
      <img
        src={PinkLinear}
        alt="Image not found"
        className="w-[600px] absolute right-0 top-1/2 transform -translate-y-1/2 -z-10"
      />
    </div>
  );
};

export default HomeHeader;
