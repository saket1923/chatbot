import React from 'react';

const WelcomeMessage: React.FC = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center text-center px-4 pb-20">
      <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="32" 
          height="32" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="text-blue-600"
        >
          <circle cx="12" cy="12" r="10"/>
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
          <path d="M12 17h.01"/>
        </svg>
      </div>
      <h2 className="text-2xl font-bold text-slate-800 mb-3">Welcome to Gemini Chat</h2>
      <p className="text-slate-600 max-w-md mx-auto mb-8">
        Ask me anything! I'm powered by Google's Gemini AI and I'm here to help answer your questions.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-lg w-full">
        {suggestions.map((suggestion, index) => (
          <button
            key={index}
            className="text-left p-3 border border-slate-200 rounded-lg hover:bg-blue-50 hover:border-blue-200 transition-colors text-slate-700"
          >
            {suggestion}
          </button>
        ))}
      </div>
    </div>
  );
};

const suggestions = [
  "Explain how AI works",
  "Tell me about climate change",
  "Write a short poem about nature",
  "What are the best programming languages to learn?"
];

export default WelcomeMessage;