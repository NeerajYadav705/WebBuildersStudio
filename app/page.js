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

    if (scrollContainerRef.current) {
      locomotiveScroll = new LocomotiveScroll({
        el: scrollContainerRef.current, // The element to apply scrolling
        smooth: true, // Enables smooth scrolling
        multiplier:1 , // Adjust scrolling speed
      });
    }

    return () => {
      // Cleanup Locomotive Scroll on unmount
      if (locomotiveScroll) locomotiveScroll.destroy();
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
