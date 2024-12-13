import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to control sidebar visibility

  // Smooth scrolling function with slower speed
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const targetPosition = section.offsetTop;
      const startPosition = window.scrollY;
      const distance = targetPosition - startPosition;
      let startTime = null;

      const duration = 1000; // Duration in milliseconds (1 second)

      const ease = (t, b, c, d) => {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
      };

      const animation = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      };

      requestAnimationFrame(animation);
    }
    setIsOpen(false); // Close the sidebar after navigation
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Image
          src="/assets/logo.png"
          alt="Logo"
          width={50}
          height={50}
          className="rounded-full"
        />

        {/* HAMBURGER BUTTON */}
        <div className="text-1xl text-[#ffc300]">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger>
              {/* Hamburger icon */}
              <RxHamburgerMenu />
            </SheetTrigger>
            <SheetContent className="flex flex-col justify-between h-full backdrop-blur-sm bg-white transition-all duration-300 ease-in-out">
              <SheetHeader>
                <SheetTitle className="text-black">
                  W<span className="text-[#ffc300]">B</span>S
                </SheetTitle>
              </SheetHeader>

              {/* Navigation Buttons */}
              <div className="flex flex-col space-y-4 py-4">
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-lg text-black hover:text-[#ffc300] hover:scale-105 transition-all duration-300"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-lg text-black hover:text-[#ffc300] hover:scale-105 transition-all duration-300"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection("about-us")}
                  className="text-lg text-black hover:text-[#ffc300] hover:scale-105 transition-all duration-300"
                >
                  About Us
                </button>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="text-lg text-black hover:text-[#ffc300] hover:scale-105 transition-all duration-300"
                >
                  Projects
                </button>
                <button
                  onClick={() => scrollToSection("contact-us")}
                  className="text-lg text-black hover:text-[#ffc300] hover:scale-105 transition-all duration-300"
                >
                  Contact Us
                </button>
              </div>

              {/* Social Media Icons at the bottom */}
              <div className="flex justify-center space-x-6 py-4 mt-auto">
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl text-black hover:text-[#ffc300] hover:scale-105 transition-all duration-300"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl text-black hover:text-[#ffc300] hover:scale-105 transition-all duration-300"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl text-black hover:text-[#ffc300] hover:scale-105 transition-all duration-300"
                >
                  <FaTwitter />
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
