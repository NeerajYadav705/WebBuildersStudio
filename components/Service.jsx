import Image from "next/image";

const Service = ({ imgSrc, title, desc }) => {
  return (
    <div className="bg-gray-950 p-10 rounded-lg flex justify-center items-center flex-col">
      <Image src={imgSrc} width={75} height={75} alt="coding" />
      <h5 className="text-white">{title}</h5>
      <p className="font-light text-sm text-gray-50">{desc}</p>
    </div>
  );
};
export default Service;
