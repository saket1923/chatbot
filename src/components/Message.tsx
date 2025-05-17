import React from 'react';
import { Message as MessageType } from '../types';

interface MessageProps {
  message: MessageType;
}

const Message: React.FC<MessageProps> = ({ message }) => {
  const isUser = message.role === 'user';
  
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div 
        className={`
          max-w-[85%] sm:max-w-[70%] rounded-2xl px-4 py-3 
          ${isUser 
            ? 'bg-blue-600 text-white rounded-tr-none' 
            : 'bg-white text-slate-800 border border-slate-200 rounded-tl-none shadow-sm'
          }
        `}
      >
        {!isUser && (
          <div className="flex items-center mb-1">
            <div className="bg-emerald-100 rounded-full p-1.5 mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-600">
                <circle cx="12" cy="12" r="10"/>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
                <path d="M12 17h.01"/>
              </svg>
            </div>
            <span className="text-xs font-semibold text-slate-500">Gemini AI</span>
          </div>
        )}
        <div className="whitespace-pre-wrap">{message.content}</div>
      </div>
    </div>
  );
};

export default Message;