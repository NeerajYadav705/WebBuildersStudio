import items from "@/lib/items";
// import Image from "next/image";
import Service from "./Service";
import { RxArrowRight } from "react-icons/rx";
const OurServices = () => {
  return (
    <div className=" flex justify-around items-center mx-4 sm:mx-20 flex-col mt-20">
      <div className="flex justify-center items-center flex-col gap-3 mb-6">
        <h1 className="text-2xl font-semibold">
          Our <span className="text-[#FFC300]">Services</span>
        </h1>
        <p className="font-light text-center">
          At Web Builders Studio, We Provide Comprehensive Web Development
          <br /> Solutions To Help Your Business Thrive Online.
        </p>
      </div>

      {/* Services Grid */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:p-20">
        {/* Map through items */}
        {items.map((item, index) => (
          <Service key={index} imgSrc={item.imgSrc} title={item.title} desc={item.desc} />
        ))}

        <div className="flex justify-center rounded-lg items-center flex-col gap-3 p-10 bg-[#ffc200]">
          <RxArrowRight className="bg-white rounded-full w-16 h-16" />
          <h4 className="text-white">View More</h4>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
