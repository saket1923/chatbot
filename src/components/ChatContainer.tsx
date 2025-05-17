import React, { useEffect, useRef } from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import { useChat } from '../context/ChatContext';
import WelcomeMessage from './WelcomeMessage';

const ChatContainer: React.FC = () => {
  const { messages, isLoading } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="flex-1 flex flex-col p-4 sm:p-6 overflow-hidden">
      <div className="flex-1 overflow-y-auto mb-4 pr-2 scroll-smooth">
        {messages.length === 0 ? (
          <WelcomeMessage />
        ) : (
          <MessageList messages={messages} />
        )}
        <div ref={messagesEndRef} />
      </div>
      
      <div className="relative">
        {isLoading && (
          <div className="absolute -top-10 left-0 right-0 flex justify-center">
            <div className="bg-blue-50 text-blue-700 text-sm px-4 py-2 rounded-full shadow-sm border border-blue-100 animate-pulse flex items-center gap-2">
              <svg className="animate-spin h-4 w-4 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Gemini is thinking...
            </div>
          </div>
        )}
        <MessageInput />
      </div>
    </div>
  );
};

export default ChatContainer;