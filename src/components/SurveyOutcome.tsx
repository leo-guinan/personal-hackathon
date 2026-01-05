import React from 'react';
import { ArrowLeft, Calendar, Gift, Shield, Zap, CheckCircle, Clock, Users } from 'lucide-react';
import { SurveyResult } from '../types/survey';

interface SurveyOutcomeProps {
  result: SurveyResult;
  onBackToLanding?: () => void;
}

const SurveyOutcome: React.FC<SurveyOutcomeProps> = ({ result, onBackToLanding }) => {
  const renderRejectionOutcome = () => (
    <div className="max-w-3xl mx-auto text-center">
      <div className="bg-white/5 backdrop-blur-sm border-2 border-red-400/30 rounded-3xl p-12 mb-8">
        <div className="w-20 h-20 bg-red-400/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <Clock className="w-10 h-10 text-red-400" />
        </div>
        
        <h1 className="text-4xl font-bold text-gray-100 mb-6">
          Not the Right Fit Right Now
        </h1>
        
        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
          Thanks for your interest! Based on your responses, it looks like you might benefit from some foundational work before jumping into a personal hackathon.
        </p>
        
        <div className="bg-blue-500/10 border border-blue-400/30 rounded-xl p-6 mb-8">
          <h3 className="text-xl font-semibold text-blue-400 mb-4">Here are some resources to help you get started:</h3>
          <div className="space-y-3 text-left">
            <div className="flex items-center gap-3">
              <Gift className="w-5 h-5 text-blue-400" />
              <span className="text-gray-300">Free guide: "Finding Your First Idea"</span>
            </div>
            <div className="flex items-center gap-3">
              <Gift className="w-5 h-5 text-blue-400" />
              <span className="text-gray-300">Newsletter: Weekly tips for aspiring builders</span>
            </div>
            <div className="flex items-center gap-3">
              <Users className="w-5 h-5 text-blue-400" />
              <span className="text-gray-300">Community: Join our free Discord for beginners</span>
            </div>
          </div>
        </div>
        
        <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300 mb-4">
          Get Free Resources Instead
        </button>
        
        <p className="text-gray-400 text-sm">
          Feel free to come back when you've got a bit more experience under your belt!
        </p>
      </div>
    </div>
  );

  const renderNotReadyOutcome = () => (
    <div className="max-w-3xl mx-auto text-center">
      <div className="bg-white/5 backdrop-blur-sm border-2 border-orange-400/30 rounded-3xl p-12 mb-8">
        <div className="w-20 h-20 bg-orange-400/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <Gift className="w-10 h-10 text-orange-400" />
        </div>
        
        <h1 className="text-4xl font-bold text-gray-100 mb-6">
          Almost There - Let's Get You Ready
        </h1>
        
        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
          You're on the right track, but it sounds like you could use some preparation before diving into the full Personal Hackathon program.
        </p>
        
        <p className="text-lg text-yellow-400 font-semibold mb-8">
          The good news? I've created a free resource specifically for people in your situation.
        </p>
        
        <div className="bg-green-500/10 border border-green-400/30 rounded-xl p-6 mb-8">
          <h3 className="text-xl font-semibold text-green-400 mb-4">What You Get:</h3>
          <div className="space-y-3 text-left">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span className="text-gray-300">Weekly email series: "From Idea to Action" (5 parts)</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span className="text-gray-300">Free 30-minute clarity session (limited availability)</span>
            </div>          
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span className="text-gray-300">Community access to connect with other aspiring builders</span>
            </div>
          </div>
        </div>
        
        <div className="bg-white/5 border border-yellow-400/30 rounded-xl p-6 mb-8">
          <p className="text-gray-300 italic text-lg">
            "You're not ready for the full program yet, but you're definitely on the path. Let me help you get there." - Leo
          </p>
        </div>
        
        <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
          Get the Free Preparation Series
        </button>
        
        <p className="text-gray-400 text-sm mt-4">
          Want to discuss your situation first?{' '}
          <a 
            href="https://cal.com/build-in-public-university/personal-hackathon" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-orange-400 hover:text-orange-300 underline"
          >
            Book a free call
          </a>
        </p>
      </div>
    </div>
  );

  const renderMaybeReadyOutcome = () => (
    <div className="max-w-3xl mx-auto text-center">
      <div className="bg-white/5 backdrop-blur-sm border-2 border-purple-400/30 rounded-3xl p-12 mb-8">
        <div className="w-20 h-20 bg-purple-400/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <Calendar className="w-10 h-10 text-purple-400" />
        </div>
        
        <h1 className="text-4xl font-bold text-gray-100 mb-6">
          You Might Be Perfect For This
        </h1>
        
        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
          Based on your responses, you sound like exactly the type of person who could benefit from the Personal Hackathon program. But I want to make sure it's the right fit before you invest.
        </p>
        
        <div className="bg-blue-500/10 border border-blue-400/30 rounded-xl p-6 mb-8">
          <h3 className="text-xl font-semibold text-blue-400 mb-4">Let's hop on a quick call to discuss:</h3>
          <div className="space-y-3 text-left">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-blue-400" />
              <span className="text-gray-300">Your specific situation and goals</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-blue-400" />
              <span className="text-gray-300">Whether this program matches what you need</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-blue-400" />
              <span className="text-gray-300">How to maximize your success if you join</span>
            </div>
          </div>
        </div>
        
        <p className="text-gray-400 mb-8">
          No pressure, no sales pitch - just an honest conversation about whether this makes sense for you.
        </p>
        
        <div className="bg-white/5 border border-yellow-400/30 rounded-xl p-6 mb-8">
          <p className="text-gray-300 italic text-lg">
            "The people who hold your hand and stop you from being scared when you need somebody to stop you from being scared." - Justin (past participant)
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
            onClick={() => window.open('https://cal.com/build-in-public-university/personal-hackathon', '_blank')}
            <Calendar className="w-5 h-5 inline mr-2" />
            Book a Call
          </button>
          <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-900 px-6 py-4 rounded-full font-semibold hover:transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
            onClick={() => window.open('https://buy.stripe.com/7sY28rdtv2RK8NU4FueZ20C', '_blank')}
            I'm Ready - Buy Now
          </button>
        </div>
      </div>
    </div>
  );

  const renderDefinitelyReadyOutcome = () => (
    <div className="max-w-3xl mx-auto text-center">
      <div className="bg-white/5 backdrop-blur-sm border-2 border-green-400/30 rounded-3xl p-12 mb-8">
        <div className="w-20 h-20 bg-green-400/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <Zap className="w-10 h-10 text-green-400" />
        </div>
        
        <h1 className="text-4xl font-bold text-gray-100 mb-6">
          Welcome to Your Transformation
        </h1>
        
        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
          Based on your responses, you're exactly who this program was designed for. You have the experience, the commitment, and the right mindset to get incredible results.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-green-500/10 border border-green-400/30 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-2">
              <CheckCircle className="w-6 h-6 text-green-400" />
              <span className="text-green-400 font-semibold">You're ready to ship something real</span>
            </div>
          </div>
          <div className="bg-green-500/10 border border-green-400/30 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-2">
              <CheckCircle className="w-6 h-6 text-green-400" />
              <span className="text-green-400 font-semibold">You can commit the time needed</span>
            </div>
          </div>
          <div className="bg-green-500/10 border border-green-400/30 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-2">
              <CheckCircle className="w-6 h-6 text-green-400" />
              <span className="text-green-400 font-semibold">You have the right motivation</span>
            </div>
          </div>
          <div className="bg-green-500/10 border border-green-400/30 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-2">
              <CheckCircle className="w-6 h-6 text-green-400" />
              <span className="text-green-400 font-semibold">You're prepared to invest in yourself</span>
            </div>
          </div>
        </div>
        
        <p className="text-2xl text-yellow-400 font-bold mb-8">
          The only question now is: Are you ready to stop thinking and start shipping?
        </p>
        
        <div className="bg-green-500/10 border-2 border-green-500 rounded-2xl p-8 mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Shield className="w-6 h-6 text-green-500" />
            <h3 className="text-green-500 text-2xl font-bold">100% Confidence Guarantee</h3>
          </div>
          <p className="text-gray-300 text-lg">
            If after Week 1 you don't feel like this is exactly what you need, I'll refund your full payment. No questions asked.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-900 px-12 py-6 text-xl font-bold rounded-full hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-400/40 transition-all duration-300 uppercase tracking-wide flex items-center gap-3 justify-center">
            onClick={() => window.open('https://buy.stripe.com/7sY28rdtv2RK8NU4FueZ20C', '_blank')}
            <Zap className="w-6 h-6" />
            Secure Your Spot - $997
          </button>
        </div>
        
        <button className="text-gray-400 hover:text-yellow-400 font-medium transition-colors duration-300 mb-8">
          onClick={() => window.open('https://cal.com/build-in-public-university/personal-hackathon', '_blank')}
          Still Have Questions? Book a Quick Call
        </button>
                
      </div>
    </div>
  );

  const renderOutcome = () => {
    switch (result.outcome) {
      case 'rejection':
        return renderRejectionOutcome();
      case 'not-ready':
        return renderNotReadyOutcome();
      case 'maybe-ready':
        return renderMaybeReadyOutcome();
      case 'definitely-ready':
        return renderDefinitelyReadyOutcome();
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 py-12 px-6">
      {/* Score Display */}
      <div className="max-w-3xl mx-auto mb-8">
        <div className="text-center mb-8">
          <div className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-900 px-6 py-3 rounded-full font-bold text-lg mb-4">
            Your Score: {result.totalScore}/100
          </div>
          {onBackToLanding && (
            <button
              onClick={onBackToLanding}
              className="flex items-center gap-2 text-gray-400 hover:text-yellow-400 transition-colors duration-300 mx-auto"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Landing Page
            </button>
          )}
        </div>
      </div>

      {renderOutcome()}
    </div>
  );
};

export default SurveyOutcome;