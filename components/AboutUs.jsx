import Image from "next/image";
import React from "react";

const AboutUs = () => {
    return (
      <div className="p-6 sm:p-12 md:p-16">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mb-8">
          <div className="w-full sm:w-auto">
            {/* Section Header */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 mb-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center sm:text-left">
                OUR <span className="text-[#ffc300]">DNA</span>
              </h1>
              <div className="w-24 h-px hidden lg:block md:block bg-[#ffc300]"></div>
            </div>
  
            {/* Paragraph Section */}
            <p className="text-gray-500 max-w-4xl text-center lg:text-left">
              At{" "}
              <span className="text-[#ffc300] font-semibold">
                Web Builders Studio
              </span>
              , we are dedicated to crafting exceptional websites that not only
              look stunning but also deliver seamless functionality. Our
              passionate team combines innovative design and cutting-edge
              technology to create digital solutions that elevate your brand.
              Whether you&apos;re a startup or an established business, we help you
              stand out online and achieve unmatched growth. Let&apos;s build something
              extraordinary together!
            </p>
          </div>
  
          <Image
            src="/assets/js.png"
            alt="javascript"
            width={200}
            height={200}
            style={{ transform: "rotate(15deg)" }}
            className="hidden sm:block mt-6 sm:mt-0"
          />
        </div>
  
        {/* Subheading */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-12 mb-8 text-center sm:text-left">
          What We Do!
        </h2>
  
        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Box 1 */}
          <div className="bg-black  text-white p-8 md:p-16 flex flex-col justify-center items-center rounded-lg shadow-md">
            <h3 className="text-lg md:text-xl font-bold text-center">
              Custom Website Design
            </h3>
            <p className="mt-4 text-sm md:text-base text-gray-300 text-center">
              We create unique, visually appealing website designs that reflect
              your brand identity and capture your audience&apos;s attention. Our
              design process focuses on understanding your goals and translating
              them into a captivating digital experience that sets you apart from
              the competition.
            </p>
          </div>
  
          {/* Box 2 */}
          <div className="bg-black text-white p-8 md:p-16 flex flex-col justify-center items-center rounded-lg shadow-md">
            <h3 className="text-lg md:text-xl font-bold text-center">
              Responsive Development
            </h3>
            <p className="mt-4 text-sm md:text-base text-gray-300 text-center">
              Our websites are optimized to provide a seamless user experience on
              any device, whether it&apos;s a smartphone, tablet, or desktop. We ensure
              your website is fast, functional, and adaptable to changing screen
              sizes, helping you reach your audience wherever they are.
            </p>
          </div>
  
          {/* Box 3 */}
          <div className="bg-[#ffc300] text-black p-8 md:p-16 flex flex-col justify-center items-center rounded-lg shadow-md">
            <h3 className="text-lg md:text-xl font-bold text-center">
              E-Commerce Solutions
            </h3>
            <p className="mt-4 text-sm md:text-base text-center">
              Boost your online sales with our secure, feature-rich e-commerce
              websites. From intuitive user interfaces to smooth payment
              integration, we provide everything you need to create a reliable and
              efficient online store for your business.
            </p>
          </div>
  
          {/* Box 4 */}
          <div className="bg-black text-white p-8 md:p-16 flex flex-col justify-center items-center rounded-lg shadow-md">
            <h3 className="text-lg md:text-xl font-bold text-center">
              Maintenance &amp; Support
            </h3>
            <p className="mt-4 text-sm md:text-base text-gray-300 text-center">
              We offer ongoing support to keep your website updated, secure, and
              running smoothly. Our team is always ready to assist with
              troubleshooting, updates, or enhancements, ensuring your digital
              presence remains strong and effective over time.
            </p>
          </div>
        </div>
      </div>
    );
};

export default AboutUs;
