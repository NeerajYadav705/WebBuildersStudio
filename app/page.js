import React from "react";
import Heros from "../components/Heros";
import OurServices from "../components/OurServices";
import AboutUs from "@/components/AboutUs";
import Projects from "@/components/Preject";
import Testimonials from "@/components/Testimonials";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <div className="h-screen overflow-y-scroll scrollbar-thin scrollbar-thumb-[#ffc300] scrollbar-track-gray-200">
      <Heros />
      <OurServices />
      <AboutUs />
      <Projects />
      <Testimonials />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default page;
