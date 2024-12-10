import React from "react";
import Heros from "../components/Heros";
import OurServices from "../components/OurServices";
import AboutUs from "@/components/AboutUs";
import Projects from "@/components/Preject";

const page = () => {
  return (
    <div>
      <Heros />
      <OurServices />
      <AboutUs />
      <Projects />
    </div>
  );
};

export default page;
