import React from 'react';
import { Clock, Zap, Star } from 'lucide-react';

interface EarlyAccessDealProps {
  onQualifyClick: () => void;
}

const EarlyAccessDeal: React.FC<EarlyAccessDealProps> = ({ onQualifyClick }) => {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-4xl mx-auto text-center">
        {/* Early Access Badge */}
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-full font-bold text-lg mb-8 animate-pulse">
          <Clock className="w-5 h-5" />
          EARLY ACCESS PRICING
        </div>
        
        {/* Deal Container */}
        <div className="bg-gradient-to-br from-yellow-900/30 to-yellow-800/40 border-4 border-yellow-400 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-radial from-yellow-400/5 via-transparent to-transparent"></div>
          
          <div className="relative z-10">
            {/* Discount Badge */}
            <div className="inline-block bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-2xl font-black text-2xl mb-8 transform -rotate-3 shadow-2xl">
              70% OFF
            </div>
            
            {/* Pricing */}
            <div className="mb-8">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl lg:text-5xl text-gray-400 line-through font-bold">
                  $3,297
                </span>
                <span className="text-6xl lg:text-7xl text-yellow-400 font-black">
                  $997
                </span>
              </div>
              <p className="text-gray-300 text-xl">
                Regular price launches next month at $3,297
              </p>
            </div>
            
            {/* Value Props */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm border border-yellow-400/30 rounded-xl p-6">
                <Star className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-yellow-400 mb-2">4 Weeks of Intensive Coaching</h3>
                <p className="text-gray-300 text-sm">Personal guidance every step of the way</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm border border-yellow-400/30 rounded-xl p-6">
                <Zap className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-yellow-400 mb-2">Ship Your First Product</h3>
                <p className="text-gray-300 text-sm">Go from idea to launched product in 4 weeks</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm border border-yellow-400/30 rounded-xl p-6">
                <Clock className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-yellow-400 mb-2">Build Your Community</h3>
                <p className="text-gray-300 text-sm">Attract your first 10 engaged community members</p>
              </div>
            </div>
            
            {/* CTA */}
            <button
              onClick={onQualifyClick}
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-900 px-12 py-6 text-2xl font-black rounded-full hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-400/40 transition-all duration-300 uppercase tracking-wide flex items-center gap-3 mx-auto mb-4"
            >
              <Zap className="w-6 h-6" />
              Secure Early Access - $997
            </button>
            
            <p className="text-gray-400 text-sm">
              Save $2,300 with early access pricing
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarlyAccessDeal;