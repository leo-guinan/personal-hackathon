import React from 'react';
import { AlertCircle, Clock, Users, Zap } from 'lucide-react';

const IdeaPurgatorySection: React.FC = () => {
  const problems = [
    {
      icon: <AlertCircle className="w-6 h-6" />,
      text: "You have brilliant ideas but they never see daylight"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      text: "You start projects but abandon them when they get hard"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      text: "You wait for the \"perfect\" moment that never comes"
    },
    {
      icon: <Users className="w-6 h-6" />,
      text: "You build alone and wonder why no one cares"
    },
    {
      icon: <AlertCircle className="w-6 h-6" />,
      text: "You know you're capable of more but can't seem to ship"
    }
  ];

  return (
    <section className="py-16 lg:py-24" data-animate>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-yellow-400 mb-12">
          Perfect if you're stuck in "Idea Purgatory"
        </h2>
        
        <div className="bg-white/5 backdrop-blur-sm border-2 border-red-400/30 rounded-3xl p-8 lg:p-12 mb-12">
          <div className="space-y-6">
            {problems.map((problem, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 text-left p-4 rounded-xl bg-red-400/5 border border-red-400/20"
              >
                <div className="text-red-400 mt-1 flex-shrink-0">
                  {problem.icon}
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {problem.text}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-yellow-400/10 to-purple-400/10 border-2 border-yellow-400 rounded-2xl p-8">
          <h3 className="text-2xl lg:text-3xl font-bold text-yellow-400 mb-4">
            What if you could go from idea to community in just 4 weeks?
          </h3>
          <p className="text-gray-300 text-lg">
            Stop living in the endless cycle of starting and stopping. 
            It's time to break free from idea purgatory forever.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IdeaPurgatorySection;