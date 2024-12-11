// components/TechStack.js
'use client'
import Image from 'next/image';
import { useEffect, useState } from 'react';

const techLogos = [
  '/assets/js.png',
  '/assets/MONGODB.png',
  '/assets/GITHUB.png',
  '/assets/NODE JS.png',
  '/assets/REACT.png',
  '/assets/VUE JS.png',
  '/assets/GIT.png',
  '/assets/STACK OVERFLOW.png',
  '/assets/HTML5.png',
  '/assets/PRETTIER.png',
  '/assets/REDUX.png',
  '/assets/NPM.png',
  '/assets/TYPESCRIPT.png',
  '/assets/WORDPRESS.png',
  '/assets/BOOTSTRAP.png',
  // Add more technology logos here
];

const getRandomPosition = () => {
    const x = Math.random() * 100; // Random horizontal position
    const y = Math.random() * 100; // Random vertical position
    return { x, y };
  };
  
  const TechStack = () => {
    const [positions, setPositions] = useState([]);
  
    useEffect(() => {
      const randomPositions = techLogos.map(() => getRandomPosition());
      setPositions(randomPositions);
    }, []);
  
    return (
        <div className="relative w-full h-96 overflow-hidden flex justify-center items-center bg-white">
      {/* Heading with cool background effect */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-200 via-pink-200 to-purple-300 blur-sm z-0 animate-slideIn"></div>
      
      <div className="relative z-10 text-4xl md:text-6xl font-bold text-center text-[#ffc300] uppercase tracking-wider p-6 animate-slideIn">
        Technologies We Used in <br/> Web <span className='text-[#ffc300]'>Builders</span> Studio
      </div>
  
        {/* Floating tech stack logos */}
        {techLogos.map((logo, index) => {
          const position = positions[index] || { x: 0, y: 0 };
          const style = {
            position: 'absolute',
            left: `${position.x}%`,
            top: `${position.y}%`,
            transform: `translate(-50%, -50%)`, // Center the logos based on their position
          };
  
          return (
            <div
              key={index}
              className="floating-logo animate-pulse"
              style={style}
            >
              <Image src={logo} alt={`Tech ${index}`} width={80} height={80} />
            </div>
          );
        })}
      </div>
    );
  };
  
  export default TechStack;