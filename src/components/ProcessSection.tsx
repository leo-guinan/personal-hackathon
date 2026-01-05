import React from 'react';
import ProcessCard from './ProcessCard';

const ProcessSection: React.FC = () => {
  const processSteps = [
    {
      weekNumber: '1',
      title: 'The Discovery',
      description: 'Deep dive into what you\'re genuinely excited about. Choose THE idea for your hackathon and create your personalized sprint plan.',
      outcome: 'Your clear direction forward'
    },
    {
      weekNumber: '2',
      title: 'The Manifesto',
      description: 'Crystallize the problem you\'re solving. Craft your "This is why this matters" statement and define your first 10 community members.',
      outcome: 'Your compelling mission statement'
    },
    {
      weekNumber: '3',
      title: 'The Build',
      description: 'Turn your manifesto into something tangible using vibecoding/no-code tools. Ship your first version, even if it feels imperfect.',
      outcome: 'Your shipped creation'
    },
    {
      weekNumber: '4',
      title: 'The Community',
      description: 'Launch your build to attract your first 10 community members. Create systems for ongoing engagement and celebrate your achievement.',
      outcome: 'Your thriving community'
    }
  ];

  return (
    <section id="process" className="py-20 lg:py-32 text-center">
      <div className="inline-block bg-gradient-to-r from-yellow-400 to-purple-400 text-gray-900 px-8 py-4 rounded-full text-xl font-bold mb-16">
        ✨ $997 for 4 Weeks ✨
      </div>
      
      <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-100 mb-16">
        Your 4-Week Journey
      </h2>
      
      <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-10 mb-20">
        {processSteps.map((step, index) => (
          <ProcessCard
            key={index}
            weekNumber={step.weekNumber}
            title={step.title}
            description={step.description}
            outcome={step.outcome}
          />
        ))}
      </div>
    </section>
  );
};

export default ProcessSection;