import React from 'react';

interface TestimonialCardProps {
  quote: string;
  author: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author }) => {
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-yellow-400/20 rounded-2xl p-6 my-8 relative">
      <div className="absolute -top-2 left-4 text-5xl text-yellow-400 font-serif">"</div>
      <p className="text-gray-300 italic text-sm leading-relaxed pt-4">
        {quote}
      </p>
      <div className="text-right mt-4 font-semibold text-yellow-400">
        — {author}
      </div>
    </div>
  );
};

export default TestimonialCard;