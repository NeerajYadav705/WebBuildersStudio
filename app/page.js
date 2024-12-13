'use client'
import Heros from "../components/Heros";
import OurServices from "../components/OurServices";
import AboutUs from "@/components/AboutUs";
import Projects from "@/components/Preject";
import Testimonials from "@/components/Testimonials";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";

const Page = () => {
  return (
    <div>
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
