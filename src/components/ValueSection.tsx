import React from 'react';

const ValueSection: React.FC = () => {
  return (
    <section id="value" className="bg-white/5 backdrop-blur-sm border-2 border-yellow-400 rounded-3xl p-12 lg:p-16 my-20 text-center relative">
      <h2 className="text-3xl lg:text-4xl font-bold text-yellow-400 mb-12 uppercase tracking-widest">
        The Value Spell
      </h2>
      
      <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-12">
        <div className="text-center">
          <div className="text-4xl lg:text-5xl font-black text-yellow-400 mb-3">
            $997
          </div>
          <div className="text-gray-400 text-lg font-medium">
            4-Week Investment
          </div>
        </div>
        
        <div className="text-center">
          <div className="text-4xl lg:text-5xl font-black text-purple-400 mb-3">
            $10K+
          </div>
          <div className="text-gray-400 text-lg font-medium">
            Typical Value Delivered
          </div>
        </div>
        
        <div className="text-center">
          <div className="text-4xl lg:text-5xl font-black text-green-400 mb-3">
            10x
          </div>
          <div className="text-gray-400 text-lg font-medium">
            Return on Investment
          </div>
        </div>
      </div>
      
      <p className="text-gray-300 text-xl mt-12">
        Skip months of research, avoid costly mistakes, get proven solutions from day one.
      </p>
    </section>
  );
};

export default ValueSection;