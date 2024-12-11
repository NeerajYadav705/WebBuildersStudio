import Image from "next/image";
import TestimonialCard from "./TestimonialCard";
import { testimonials } from "@/lib/testomonialsData";


const Testimonials = () => {
  return (
    <div className="p-8 md:p-20">
      {/* Heading Section */}
      <div className="flex items-center justify-center gap-4 md:gap-10 mb-10">
        <Image
          src="/assets/FIREBASE.PNG"
          width={200}
          height={200}
          alt="firebase"
          className="transform rotate-[-30deg] hidden sm:block"
        />
        <h1 className="text-3xl md:text-4xl font-semibold text-center">
          Client Recommendations
        </h1>
      </div>

      {/* Testimonials Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            rating={testimonial.rating}
            title={testimonial.title}
            content={testimonial.content}
            imageSrc={testimonial.imageSrc}
            name={testimonial.name}
            role={testimonial.role}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
