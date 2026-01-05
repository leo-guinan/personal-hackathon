import React, { useEffect } from 'react';
import { useState } from 'react';
import FloatingCircles from './components/FloatingCircles';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import IdeaPurgatorySection from './components/IdeaPurgatorySection';
import EarlyAccessDeal from './components/EarlyAccessDeal';
import ProcessSection from './components/ProcessSection';
import ValueSection from './components/ValueSection';
import CTASection from './components/CTASection';
import QualificationSurvey from './components/QualificationSurvey';

function App() {
  const [showSurvey, setShowSurvey] = useState(false);

  const handleQualifyClick = () => {
    setShowSurvey(true);
  };

  const scrollToApplication = () => {
    document.getElementById('application')?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    // Add scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    });

    // Observe elements for animation
    document.querySelectorAll('[data-animate]').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  if (showSurvey) {
    return <QualificationSurvey />;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 overflow-x-hidden">
      <FloatingCircles />
      
      <div className="relative z-10">
        <Header onQualifyClick={handleQualifyClick} />
        
        <main className="max-w-7xl mx-auto px-6 lg:px-12">
          <HeroSection onQualifyClick={handleQualifyClick} />
          <IdeaPurgatorySection />
          <EarlyAccessDeal onQualifyClick={handleQualifyClick} />
          <ProcessSection />
          <ValueSection />
          <CTASection onQualifyClick={handleQualifyClick} />
        </main>
      </div>
    </div>
  );
}

export default App;