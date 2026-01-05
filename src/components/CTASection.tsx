import React from 'react';
import TestimonialCard from './TestimonialCard';
import { Zap, Shield } from 'lucide-react';

interface CTASectionProps {
  onQualifyClick: () => void;
}

const CTASection: React.FC<CTASectionProps> = ({ onQualifyClick }) => {
  return (
    <section id="application" className="text-center py-20 lg:py-32 bg-gradient-radial from-yellow-400/10 via-transparent to-transparent">
      <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-100 mb-12">
        Ready to Stop Thinking and Start Shipping?
      </h2>
      
      <div className="bg-green-500/10 border-2 border-green-500 rounded-2xl p-8 my-12 max-w-2xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Shield className="w-6 h-6 text-green-500" />
          <h3 className="text-green-500 text-2xl font-bold">100% Confidence Guarantee</h3>
        </div>
        <p className="text-gray-300 text-lg">
          If after Week 1 you don't feel like this is exactly what you need, I'll refund your full payment. No questions asked.
        </p>
      </div>
      
      <TestimonialCard
        quote="If it weren't for Leo... I don't think I would've been in this hackathon and if I weren't in this hackathon, I don't think I would be doing and building and designing and having the confidence I have now."
        author="Jessyka"
      />
      
      <button
        onClick={onQualifyClick}
        className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-900 px-12 py-6 text-xl font-bold rounded-full hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-400/40 transition-all duration-300 uppercase tracking-wide flex items-center gap-3 mx-auto"
      >
        <Zap className="w-6 h-6" />
        Qualify with Leo →
      </button>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
        <button
          onClick={() => window.open('https://buy.stripe.com/7sY28rdtv2RK8NU4FueZ20C', '_blank')}
          className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-3 rounded-full font-semibold hover:transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
        >
          Skip Survey - Buy Now
        </button>
        <button
          onClick={() => window.open('https://cal.com/build-in-public-university/personal-hackathon', '_blank')}
          className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
        >
          Book a Call First
        </button>
      </div>
      
      <p className="mt-8 italic text-gray-400 text-lg">
        "That little cricket on your shoulders. Like, Hey, just try this. You could do it."
      </p>
    </section>
  );
};

export default CTASection;