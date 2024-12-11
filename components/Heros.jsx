import React from "react";
import Navbar from "./Navbar";
import { IoIosArrowDown } from "react-icons/io";

const Heros = () => {
  return (
    <>
      <Navbar />

      {/* Hero section */}
      <div
        className="relative h-[100vh]"
        style={{
          backgroundImage: "url('/assets/bg2.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="relative text-white text-4xl sm:text-6xl lg:text-7xl font-bold">
            <span className="absolute top-[-2rem] sm:top-[-3rem] right-[84.5%] sm:right-[84.5%] transform -translate-x-1/2 text-white font-light text-xl sm:text-3xl lg:text-5xl">
              WEB
            </span>
            <span className="text-[#FFC300] text-6xl sm:text-9xl font-normal">
              BUILDERS
            </span>
            <span className="absolute bottom-[-2rem] sm:bottom-[-3rem] left-[65%] sm:left-[65%] transform translate-x-1/2 text-white font-light text-xl sm:text-3xl lg:text-5xl">
              STUDIOS
            </span>
          </h1>
        </div>

        {/* Paragraph */}
        <div className="absolute bottom-10 left-8 sm:left-6 text-gray-200 max-w-xs sm:max-w-md">
          <p className="text-sm sm:text-base lg:text-lg">
            Web Builders Studio designs custom websites that combine modern
            aesthetics and functionality, helping businesses strengthen their
            online presence.
          </p>
        </div>

        {/* Scroll down text */}
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-center">
        {/* line */}
          {/* <div className="w-px h-16 sm:h-20 bg-[#ffc300] mb-5 mx-auto hidden sm:block"></div> */}
          <div className="text-[#FFC300] text-xs sm:text-sm animate-bounce">
            <p className="cursor-pointer">
              <IoIosArrowDown />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Heros;
