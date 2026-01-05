import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react';
import { SURVEY_QUESTIONS, calculateOutcome, SurveyResponse, SurveyResult } from '../types/survey';
import SurveyOutcome from './SurveyOutcome';

const QualificationSurvey: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [responses, setResponses] = useState<SurveyResponse[]>([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isComplete, setIsComplete] = useState(false);
  const [result, setResult] = useState<SurveyResult | null>(null);

  const handleOptionSelect = (optionIndex: number) => {
    setSelectedOption(optionIndex);
  };

  const handleNext = () => {
    if (selectedOption === null) return;

    const question = SURVEY_QUESTIONS[currentQuestion];
    const points = question.options[selectedOption].points;
    
    const newResponse: SurveyResponse = {
      questionId: question.id,
      selectedOption,
      points
    };

    const updatedResponses = [...responses.filter(r => r.questionId !== question.id), newResponse];
    setResponses(updatedResponses);

    if (currentQuestion < SURVEY_QUESTIONS.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      // Check if we already have a response for the next question
      const nextQuestionResponse = updatedResponses.find(r => r.questionId === SURVEY_QUESTIONS[currentQuestion + 1].id);
      setSelectedOption(nextQuestionResponse?.selectedOption ?? null);
    } else {
      // Survey complete
      const totalScore = updatedResponses.reduce((sum, response) => sum + response.points, 0);
      const outcome = calculateOutcome(totalScore);
      
      const finalResult: SurveyResult = {
        totalScore,
        outcome,
        responses: updatedResponses
      };
      
      setResult(finalResult);
      setIsComplete(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      // Load the previous response
      const prevQuestionResponse = responses.find(r => r.questionId === SURVEY_QUESTIONS[currentQuestion - 1].id);
      setSelectedOption(prevQuestionResponse?.selectedOption ?? null);
    }
  };

  const progress = ((currentQuestion + 1) / SURVEY_QUESTIONS.length) * 100;
  const question = SURVEY_QUESTIONS[currentQuestion];

  if (isComplete && result) {
    return <SurveyOutcome result={result} />;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 py-12 px-6">
      <div className="max-w-2xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-400">Question {currentQuestion + 1} of {SURVEY_QUESTIONS.length}</span>
            <span className="text-sm text-yellow-400 font-semibold">{Math.round(progress)}% Complete</span>
          </div>
          <div className="w-full bg-gray-800 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 h-2 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white/5 backdrop-blur-sm border-2 border-yellow-400/30 rounded-3xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-100 mb-8 leading-relaxed">
            {question.question}
          </h2>

          <div className="space-y-4">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionSelect(index)}
                className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 ${
                  selectedOption === index
                    ? 'border-yellow-400 bg-yellow-400/10 text-yellow-400'
                    : 'border-gray-600 bg-gray-800/50 text-gray-300 hover:border-yellow-400/50 hover:bg-yellow-400/5'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-base leading-relaxed">{option.text}</span>
                  {selectedOption === index && (
                    <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 ml-3" />
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <button
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
              currentQuestion === 0
                ? 'text-gray-500 cursor-not-allowed'
                : 'text-gray-300 hover:text-yellow-400 hover:bg-yellow-400/10'
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
            Previous
          </button>

          <button
            onClick={handleNext}
            disabled={selectedOption === null}
            className={`flex items-center gap-2 px-8 py-3 rounded-full font-semibold transition-all duration-200 ${
              selectedOption === null
                ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                : 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-900 hover:transform hover:-translate-y-1 hover:shadow-lg hover:shadow-yellow-400/30'
            }`}
          >
            {currentQuestion === SURVEY_QUESTIONS.length - 1 ? 'Get My Results' : 'Next'}
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Help Text */}
        <div className="text-center mt-8">
          <p className="text-gray-400 text-sm">
            This survey takes about 2 minutes to complete and helps us determine if the Personal Hackathon is right for you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default QualificationSurvey;