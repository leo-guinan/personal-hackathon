export interface SurveyQuestion {
  id: number;
  question: string;
  maxPoints: number;
  options: SurveyOption[];
}

export interface SurveyOption {
  text: string;
  points: number;
}

export interface SurveyResponse {
  questionId: number;
  selectedOption: number;
  points: number;
}

export interface SurveyResult {
  totalScore: number;
  outcome: 'rejection' | 'not-ready' | 'maybe-ready' | 'definitely-ready';
  responses: SurveyResponse[];
}

export const SURVEY_QUESTIONS: SurveyQuestion[] = [
  {
    id: 1,
    question: "What best describes your current situation?",
    maxPoints: 15,
    options: [
      { text: "I'm overwhelmed and don't know where to start", points: 3 },
      { text: "I have ideas but struggle to execute them", points: 8 },
      { text: "I start projects but never finish them", points: 12 },
      { text: "I've shipped things before but want to build community around them", points: 15 },
      { text: "I'm just browsing and not serious about building anything", points: 0 }
    ]
  },
  {
    id: 2,
    question: "How much time can you realistically commit per week for 4 weeks?",
    maxPoints: 20,
    options: [
      { text: "Less than 2 hours", points: 0 },
      { text: "2-4 hours", points: 5 },
      { text: "5-7 hours", points: 20 },
      { text: "8-10 hours", points: 15 },
      { text: "More than 10 hours", points: 10 }
    ]
  },
  {
    id: 3,
    question: "What's your experience with building/shipping things?",
    maxPoints: 15,
    options: [
      { text: "Complete beginner, never built anything", points: 5 },
      { text: "I've built personal projects but never shared them", points: 10 },
      { text: "I've shipped a few things but didn't get traction", points: 15 },
      { text: "I've had some success but want to do more", points: 12 },
      { text: "I'm very experienced and successful", points: 8 }
    ]
  },
  {
    id: 4,
    question: "Which statement resonates most with you?",
    maxPoints: 20,
    options: [
      { text: "I have so many ideas I don't know which one to pick", points: 15 },
      { text: "I know what I want to build but don't know how", points: 20 },
      { text: "I've built things but no one seems to care", points: 18 },
      { text: "I want to help people but don't know how to reach them", points: 16 },
      { text: "I just want to make money online quickly", points: 2 }
    ]
  },
  {
    id: 5,
    question: "What's your budget situation?",
    maxPoints: 10,
    options: [
      { text: "$997 would be a stretch but I could make it work if it's worth it", points: 10 },
      { text: "$997 is a reasonable investment for the right opportunity", points: 8 },
      { text: "Money is tight right now, looking for cheaper options", points: 3 },
      { text: "I have plenty of budget and want premium service", points: 6 },
      { text: "I'm not ready to invest anything yet", points: 0 }
    ]
  },
  {
    id: 6,
    question: "How do you prefer to work?",
    maxPoints: 10,
    options: [
      { text: "I need lots of hand-holding and support", points: 8 },
      { text: "I want guidance but can execute independently", points: 10 },
      { text: "I prefer to figure things out myself", points: 4 },
      { text: "I need someone to do it for me", points: 2 }
    ]
  },
  {
    id: 7,
    question: "What's your biggest frustration right now?",
    maxPoints: 10,
    options: [
      { text: "I can't get myself to ship imperfect work", points: 10 },
      { text: "I don't know what people actually want", points: 8 },
      { text: "I'm stuck in planning mode and can't execute", points: 9 },
      { text: "I don't have the technical skills", points: 6 },
      { text: "I don't have any good ideas", points: 3 }
    ]
  }
];

export const calculateOutcome = (totalScore: number): SurveyResult['outcome'] => {
  if (totalScore <= 35) return 'rejection';
  if (totalScore <= 55) return 'not-ready';
  if (totalScore <= 75) return 'maybe-ready';
  return 'definitely-ready';
};