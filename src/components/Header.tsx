import React from 'react';
import { Zap } from 'lucide-react';

interface HeaderProps {
  onQualifyClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onQualifyClick }) => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="flex flex-col lg:flex-row justify-between items-center p-6 lg:p-8 relative z-10">
      <div className="flex items-center gap-3 mb-4 lg:mb-0">
        <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-gray-900 font-bold">
          L
        </div>
        <span className="text-lg font-semibold text-gray-100">Your Personal Hackathon</span>
      </div>
      
      <nav className="flex flex-wrap items-center gap-6 lg:gap-10">
        <button 
          onClick={() => scrollToSection('process')}
          className="text-gray-400 hover:text-yellow-400 font-medium transition-colors duration-300"
        >
          The Journey
        </button>
        <button 
          onClick={() => scrollToSection('value')}
          className="text-gray-400 hover:text-yellow-400 font-medium transition-colors duration-300"
        >
          The Value
        </button>
        <button 
          onClick={() => scrollToSection('application')}
          className="text-gray-400 hover:text-yellow-400 font-medium transition-colors duration-300"
        >
          Apply
        </button>
        <button
          onClick={onQualifyClick}
          className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-900 px-6 py-3 rounded-full font-semibold hover:transform hover:-translate-y-1 hover:shadow-lg hover:shadow-yellow-400/30 transition-all duration-300 flex items-center gap-2"
        >
          <Zap className="w-4 h-4" />
          Start Your Hackathon
        </button>
      </nav>
    </header>
  );
};

export default Header;