import React from 'react';

const FloatingCircles: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div className="absolute w-20 h-20 bg-yellow-500 rounded-full opacity-10 top-[20%] left-[10%] animate-pulse" 
           style={{ animation: 'float 20s infinite ease-in-out' }} />
      <div className="absolute w-15 h-15 bg-purple-400 rounded-full opacity-10 top-[60%] right-[15%] animate-pulse" 
           style={{ animation: 'float 20s infinite ease-in-out', animationDelay: '-7s' }} />
      <div className="absolute w-25 h-25 bg-green-400 rounded-full opacity-10 bottom-[30%] left-[20%] animate-pulse" 
           style={{ animation: 'float 20s infinite ease-in-out', animationDelay: '-14s' }} />
      <div className="absolute w-10 h-10 bg-yellow-500 rounded-full opacity-10 top-[80%] right-[30%] animate-pulse" 
           style={{ animation: 'float 20s infinite ease-in-out', animationDelay: '-3s' }} />
    </div>
  );
};

export default FloatingCircles;