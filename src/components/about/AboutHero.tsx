
import { FC } from 'react';

const AboutHero: FC = () => {
  return (
    <div className="relative h-[60vh] bg-[#FFDC00] flex items-center justify-center overflow-hidden">
      <div className="text-center text-[#000000e6] px-6 md:px-4 flex flex-col relative z-10">
        <h1 className="text-5xl font-cabinet font-bold">Om Trail Squad</h1>
        <p className="text-xl max-w-2xl mx-auto mt-2">Trail Squad er et rejseselskab fokuseret på at løbe episke trail-løb over hele kloden.</p>
      </div>
      
      {/* Mountain Range Sketch */}
      <svg 
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1200 200" 
        xmlns="http://www.w3.org/2000/svg"
        style={{ filter: 'brightness(1.2)' }}
      >
        <path
          d="M0 200 C50 180 150 100 300 80 C350 70 380 120 400 140 C450 100 480 70 500 60 C550 90 580 140 600 160 C650 120 750 60 800 40 C900 70 950 100 1000 120 C1100 90 1150 85 1200 80 L1200 200 L0 200 Z"
          fill="none"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ 
            strokeDasharray: '8,8',
            opacity: 0.8 
          }}
        />
        <path
          d="M100 200 C200 150 300 120 400 100 C500 140 550 160 600 180 C700 120 800 80 900 60 C1000 100 1050 120 1100 140 C1150 120 1180 110 1200 100 L1200 200 L100 200 Z"
          fill="none"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ opacity: 0.6 }}
        />
      </svg>
    </div>
  );
};

export default AboutHero;
