import Image from "next/image";

const Service = ({ imgSrc, title, desc }) => {
  return (
    <div className="bg-gray-950 p-10 rounded-lg flex justify-center items-center flex-col transform transition-transform hover:scale-105 hover:bg-gray-900 hover:shadow-lg">
      <Image
        src={imgSrc}
        width={75}
        height={75}
        alt="coding"
        className="transition-transform duration-300 hover:scale-110"
      />
      <h5 className="text-white text-center mt-4">{title}</h5>
      <p className="font-light text-sm text-slate-400 text-center mt-2">
        {desc}
      </p>
    </div>
  );
};

export default Service;
