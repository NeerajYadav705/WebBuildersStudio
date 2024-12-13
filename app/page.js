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
    
    // Detect the device refresh rate
    const getRefreshRate = () => {
      const maxFrameRate = window.screen && window.screen.refreshRate || 60; // Default to 60 if not available
      return maxFrameRate;
    };

    // Set the multiplier based on refresh rate
    const getScrollMultiplier = (refreshRate) => {
      if (refreshRate >= 120) {
        return 1.0; // Higher multiplier for 120Hz
      } else if (refreshRate >= 90) {
        return 0.9; // Medium multiplier for 90Hz
      } else {
        return 0.8; // Lower multiplier for 60Hz
      }
    };

    const initializeLocomotiveScroll = () => {
      if (scrollContainerRef.current) {
        const refreshRate = getRefreshRate();
        const multiplier = getScrollMultiplier(refreshRate); // Set multiplier based on refresh rate

        locomotiveScroll = new LocomotiveScroll({
          el: scrollContainerRef.current,
          smooth: true,
          multiplier: multiplier, // Dynamically set multiplier
        });
      }
    };

    // Throttle resize event for better performance
    const handleResize = () => {
      if (locomotiveScroll) locomotiveScroll.update();
    };

    initializeLocomotiveScroll();

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
