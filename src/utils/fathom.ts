/**
 * Fathom Analytics tracking utilities
 * Tracks survey answers and conversion events
 */

declare global {
  interface Window {
    fathom?: {
      trackEvent: (eventId: string, options?: { value?: number; _value?: number }) => void;
      trackGoal: (goalId: string, value?: number) => void;
    };
  }
}

/**
 * Track a custom event in Fathom
 */
export const trackEvent = (eventId: string, value?: number) => {
  if (typeof window !== 'undefined' && window.fathom) {
    window.fathom.trackEvent(eventId, value !== undefined ? { value } : undefined);
  }
};

/**
 * Track survey completion with all answer data
 */
export const trackSurveyCompletion = (result: {
  totalScore: number;
  outcome: string;
  responses: Array<{
    questionId: number;
    selectedOption: number;
    points: number;
  }>;
}) => {
  // Track the main survey completion event
  trackEvent('SURVEY_COMPLETED', result.totalScore);

  // Track the outcome
  trackEvent(`SURVEY_OUTCOME_${result.outcome.toUpperCase().replace('-', '_')}`, result.totalScore);

  // Track each individual answer
  result.responses.forEach((response, index) => {
    trackEvent(`SURVEY_Q${response.questionId}_ANSWER`, response.points);
  });

  // Store survey result in sessionStorage for later use in conversion tracking
  if (typeof window !== 'undefined') {
    sessionStorage.setItem('surveyResult', JSON.stringify(result));
  }
};

/**
 * Track booking call click with survey context
 */
export const trackBookingCall = (source: string = 'unknown') => {
  // Get survey result from sessionStorage if available
  let surveyContext = null;
  if (typeof window !== 'undefined') {
    const stored = sessionStorage.getItem('surveyResult');
    if (stored) {
      try {
        surveyContext = JSON.parse(stored);
      } catch (e) {
        console.error('Failed to parse survey result from storage', e);
      }
    }
  }

  // Track the booking event
  trackEvent('BOOKING_CALL_CLICKED', surveyContext?.totalScore);

  // Track with source context
  trackEvent(`BOOKING_CALL_${source.toUpperCase().replace(/[^A-Z0-9]/g, '_')}`);

  // Track with survey outcome if available
  if (surveyContext) {
    trackEvent(`BOOKING_CALL_WITH_SURVEY_${surveyContext.outcome.toUpperCase().replace('-', '_')}`);
  }
};

/**
 * Track payment link click with survey context
 */
export const trackPaymentClick = (source: string = 'unknown') => {
  // Get survey result from sessionStorage if available
  let surveyContext = null;
  if (typeof window !== 'undefined') {
    const stored = sessionStorage.getItem('surveyResult');
    if (stored) {
      try {
        surveyContext = JSON.parse(stored);
      } catch (e) {
        console.error('Failed to parse survey result from storage', e);
      }
    }
  }

  // Track the payment event
  trackEvent('PAYMENT_LINK_CLICKED', surveyContext?.totalScore);

  // Track with source context
  trackEvent(`PAYMENT_CLICK_${source.toUpperCase().replace(/[^A-Z0-9]/g, '_')}`);

  // Track with survey outcome if available
  if (surveyContext) {
    trackEvent(`PAYMENT_CLICK_WITH_SURVEY_${surveyContext.outcome.toUpperCase().replace('-', '_')}`);
  }
};

/**
 * Track survey start
 */
export const trackSurveyStart = () => {
  trackEvent('SURVEY_STARTED');
};

