// components/Footer.js
import React from "react";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
        {/* Logo Section */}
        <div className="flex flex-col items-center">
          <div className="mb-3">
            <img
              src="assets/logo.png"
              alt="Web Builders Studio Logo"
              className="h-28"
            />
          </div>
          <p className="text-gray-400">We Build Websites, You Build Business</p>
        </div>

        {/* Contact Section */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold text-[#ffc300] mb-3">
            Reach Us
          </h3>
          <p>📞 +91 9719 351 076, +91 7906 293 268</p>
          <p>📧 webbuildersstudio9@gmail.com</p>
          <p>🏢 Dehradun, Uttarakhand (248001)</p>
        </div>

        {/* Social Links */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-[#fcc300] mb-3">
            Follow Us
          </h3>
          <div className="flex justify-center space-x-6">
            <a
              href="https://www.instagram.com/webbuilders.studio/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-400 text-2xl transform hover:scale-110 transition duration-300"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/web-builders-studio-409187341/"
              className="text-blue-500 hover:text-blue-400 text-2xl transform hover:scale-110 transition duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="#"
              className="text-sky-400 hover:text-sky-300 text-2xl transform hover:scale-110 transition duration-300"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400">
        <p>
          &copy; {new Date().getFullYear()} Web Builders Studio. All rights
          reserved.
        </p>
        <p>
          Designed by{" "}
          <a
            href="https://www.linkedin.com/in/anubhav-yadav-00b9981a3/" // Replace with actual link
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#ffc300] font-medium hover:underline"
          >
            Anubhav
          </a>{" "}
          and{" "}
          <a
            href="https://www.linkedin.com/in/neeraj-yadav-017a571b4/" // Replace with actual link
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#ffc300] font-medium hover:underline"
          >
            Neeraj
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
