import React from "react";
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
          <Sheet>
            <SheetTrigger>
              {/* Hamburger icon */}
              <RxHamburgerMenu />
            </SheetTrigger>
            <SheetContent className="flex flex-col justify-between h-full backdrop-blur-sm bg-white/20 transition-all duration-300 ease-in-out">
              <SheetHeader>
                <SheetTitle className="text-white">W<span className="text-[#ffc300]">B</span>S</SheetTitle>
              </SheetHeader>

              {/* Navigation Buttons */}
              <div className="flex flex-col space-y-4 py-4">
                <button className="text-lg text-white hover:text-[#ffc300] hover:scale-105 transition-all duration-300">
                  Home
                </button>
                <button className="text-lg text-white hover:text-[#ffc300] hover:scale-105 transition-all duration-300">
                  Services
                </button>
                <button className="text-lg text-white hover:text-[#ffc300] hover:scale-105 transition-all duration-300">
                  About Us
                </button>
                <button className="text-lg text-white hover:text-[#ffc300] hover:scale-105 transition-all duration-300">
                  Projects
                </button>
                <button className="text-lg text-white hover:text-[#ffc300] hover:scale-105 transition-all duration-300">
                  Contact Us
                </button>
              </div>

              {/* Social Media Icons at the bottom */}
              <div className="flex justify-center space-x-6 py-4 mt-auto">
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl text-white hover:text-[#ffc300]"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl text-white hover:text-[#ffc300]"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl text-white hover:text-[#ffc300]"
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
