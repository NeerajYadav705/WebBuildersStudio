'use client'
import Image from 'next/image';

const techLogos = [
  { src: '/assets/js.png', name: 'JavaScript' },
  { src: '/assets/MONGODB.png', name: 'MongoDB' },
  { src: '/assets/GITHUB.png', name: 'GitHub' },
  { src: '/assets/NODE JS.png', name: 'Node.js' },
  { src: '/assets/REACT.png', name: 'React' },
  { src: '/assets/VUE JS.png', name: 'Vue.js' },
  { src: '/assets/GIT.png', name: 'Git' },
  { src: '/assets/STACK OVERFLOW.png', name: 'Stack Overflow' },
  { src: '/assets/HTML5.png', name: 'HTML5' },
  { src: '/assets/PRETTIER.png', name: 'Prettier' },
  { src: '/assets/REDUX.png', name: 'Redux' },
  { src: '/assets/NPM.png', name: 'NPM' },
  { src: '/assets/TYPESCRIPT.png', name: 'TypeScript' },
  { src: '/assets/WORDPRESS.png', name: 'WordPress' },
  { src: '/assets/BOOTSTRAP.png', name: 'Bootstrap' },
];

const TechStack = () => {
  return (
    <div className="relative w-full min-h-screen bg-gray-900 text-gray-100 flex flex-col items-center justify-center py-10">
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-10 text-center text-white px-4">
        Tech <span className="text-[#ffc300]">Keyboard</span>
      </h1>

      {/* Keyboard Layout */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 px-4 sm:px-6 py-6 sm:py-8 bg-gray-800 rounded-lg shadow-lg border border-gray-700">
        <div className="flex justify-center w-full">
          <div className="flex flex-wrap justify-center gap-4 w-5/6 sm:w-4/5">
            {techLogos.slice(0, 5).map((logo, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center bg-gray-700 hover:bg-gray-600 rounded-md p-3 sm:p-4 shadow-md hover:shadow-lg transition-all duration-300 transform hover:translate-y-1 hover:scale-105 text-center"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={40}
                  height={40}
                  className="mb-2 sm:mb-3"
                />
                <span className="text-xs sm:text-sm font-medium text-gray-300">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center w-full">
          <div className="flex flex-wrap justify-center gap-4 w-5/6 sm:w-4/5">
            {techLogos.slice(5, 10).map((logo, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center bg-gray-700 hover:bg-gray-600 rounded-md p-3 sm:p-4 shadow-md hover:shadow-lg transition-all duration-300 transform hover:translate-y-1 hover:scale-105 text-center"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={40}
                  height={40}
                  className="mb-2 sm:mb-3"
                />
                <span className="text-xs sm:text-sm font-medium text-gray-300">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center w-full">
          <div className="flex flex-wrap justify-center gap-4 w-5/6 sm:w-4/5">
            {techLogos.slice(10, 15).map((logo, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center bg-gray-700 hover:bg-gray-600 rounded-md p-3 sm:p-4 shadow-md hover:shadow-lg transition-all duration-300 transform hover:translate-y-1 hover:scale-105 text-center"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={40}
                  height={40}
                  className="mb-2 sm:mb-3"
                />
                <span className="text-xs sm:text-sm font-medium text-gray-300">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
