"use client";
import React, { useEffect, useRef } from "react";
import Heros from "../components/Heros";
import OurServices from "../components/OurServices";
import AboutUs from "@/components/AboutUs";
import Projects from "@/components/Preject";
import Testimonials from "@/components/Testimonials";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

const Page = () => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    let locomotiveScroll;

    const initializeLocomotiveScroll = () => {
      if (scrollContainerRef.current) {
        locomotiveScroll = new LocomotiveScroll({
          el: scrollContainerRef.current,
          smooth: true, // Enable smooth scrolling
          multiplier: 0.9, // Adjust speed (reduce multiplier if it's too fast)
          class: "is-reveal", // Optional: reveal on scroll
        });
      }
    };

    const handleResize = () => {
      // Initialize Locomotive Scroll only after window resize
      if (locomotiveScroll) locomotiveScroll.update();
    };

    initializeLocomotiveScroll();

    // Throttled resize handler for better performance
    window.addEventListener("resize", handleResize);

    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      ref={scrollContainerRef}
      data-scroll-container
      className="overflow-hidden"
    >
      <Heros />
      <OurServices />
      <AboutUs />
      {/* <TechStack /> */}
      <Projects />
      <Testimonials />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Page;
