import React from 'react';

interface ProcessCardProps {
  weekNumber: string;
  title: string;
  description: string;
  outcome: string;
}

const ProcessCard: React.FC<ProcessCardProps> = ({ weekNumber, title, description, outcome }) => {
  return (
    <div className="bg-white/5 backdrop-blur-sm border-2 border-yellow-400/30 rounded-3xl p-8 text-center hover:transform hover:-translate-y-3 hover:border-yellow-400 hover:shadow-xl hover:shadow-yellow-400/20 transition-all duration-300 group">
      <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 text-gray-900 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-8">
        {weekNumber}
      </div>
      
      <h3 className="text-2xl font-bold text-gray-100 mb-6">
        {title}
      </h3>
      
      <p className="text-gray-400 leading-relaxed mb-6">
        {description}
      </p>
      
      <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-xl p-4 text-sm text-yellow-400 font-semibold">
        {outcome}
      </div>
    </div>
  );
};

export default ProcessCard;