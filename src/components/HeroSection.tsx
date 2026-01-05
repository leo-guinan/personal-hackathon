import React from 'react';
import TestimonialCard from './TestimonialCard';
import { Zap } from 'lucide-react';

interface HeroSectionProps {
  onQualifyClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onQualifyClick }) => {
  return (
    <section className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center py-10 lg:py-20 min-h-[70vh]">
      <div className="space-y-6">
        <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight">
          <span className="text-gray-100">Stuck?</span>{' '}
          <span className="text-yellow-400">Paralyzed?</span>
          <br />
          <span className="text-purple-400">Overthinking?</span>
          <br />
          <span className="text-purple-400 block mt-2">Let's Ship Together.</span>
        </h1>
        
        <p className="text-xl text-gray-400 font-light">
          4 Weeks. Your Idea. Real Community. No More Excuses.
        </p>
        
        <div className="bg-white/5 backdrop-blur-sm border border-yellow-400/20 rounded-2xl p-6 my-8 relative">
          <p className="text-gray-300 text-lg leading-relaxed">
            I have ideas but struggle to execute them. I start projects but never finish them. Sound familiar? In 4 weeks, we're going to change that forever.
          </p>
          <div className="text-right mt-4 font-semibold text-yellow-400 text-lg">
            — Your Journey Starts Here
          </div>
        </div>
        
        <button
          onClick={onQualifyClick}
          className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-900 px-8 py-4 rounded-full text-lg font-bold hover:transform hover:-translate-y-1 hover:shadow-xl hover:shadow-yellow-400/30 transition-all duration-300 flex items-center gap-2"
        >
          <Zap className="w-5 h-5" />
          Qualify with Leo
        </button>
      </div>
      
      <div className="bg-gradient-to-br from-yellow-900/20 to-yellow-800/30 border-2 border-yellow-400 rounded-3xl p-8 lg:p-12 text-center shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-yellow-400/10 via-transparent to-transparent"></div>
        <div className="relative z-10">
          <h2 className="text-2xl font-bold text-yellow-400 mb-6 uppercase tracking-wider">
            Your Personal Hackathon
          </h2>
          <div className="w-32 h-32 mx-auto mb-6 rounded-full border-2 border-yellow-400 bg-gradient-to-br from-yellow-200 to-yellow-400 flex items-center justify-center text-6xl">
            🧙‍♂️
          </div>
          <p className="text-gray-300 text-lg leading-relaxed">
            Transform your stuck idea into a thriving community in just 4 weeks. 
            No more endless planning. No more fear of shipping. 
            Just results.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;