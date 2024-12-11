import Image from "next/image";

const TestimonialCard = ({ rating, title, content, imageSrc, name, role }) => {
  return (
    <div className="bg-white border rounded-lg shadow-md p-6 md:w-full max-w-xs mx-auto transition-transform hover:scale-105 duration-300">
      <div className="flex items-center mb-4">
        <div className="text-1xl">{rating}</div>
      </div>
      <h2 className="text-xl font-bold mb-3">{title}</h2>
      <p className="text-gray-400 text-xs mb-4">{content}</p>
      <div className="flex items-center space-x-3">
        <Image
          src={imageSrc}
          width={50}
          height={50}
          alt={name}
          className="rounded-full"
        />
        <h3 className="text-sm font-bold">{name} - {role}</h3>
      </div>
    </div>
  );
};

export default TestimonialCard;
