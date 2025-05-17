import React, { useState, useRef, useEffect } from 'react';
import { useChat } from '../context/ChatContext';

const MessageInput: React.FC = () => {
  const [input, setInput] = useState('');
  const { sendMessage, isLoading } = useChat();
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() && !isLoading) {
      sendMessage(input);
      setInput('');
    }
  };

  // Auto resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [input]);

  // Focus textarea on mount
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  }, []);

  return (
    <form 
      onSubmit={handleSubmit} 
      className="bg-white rounded-xl shadow-md border border-slate-200 transition-all focus-within:border-blue-300 focus-within:ring-2 focus-within:ring-blue-100"
    >
      <div className="flex items-end">
        <textarea
          ref={textareaRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              handleSubmit(e);
            }
          }}
          placeholder="Type your message..."
          className="flex-1 resize-none max-h-32 overflow-y-auto bg-transparent py-3 px-4 outline-none text-slate-800"
          disabled={isLoading}
          rows={1}
        />
        <button
          type="submit"
          disabled={!input.trim() || isLoading}
          className={`p-3 mr-2 mb-2 rounded-full ${
            !input.trim() || isLoading
              ? 'text-slate-400 cursor-not-allowed'
              : 'text-blue-600 hover:bg-blue-50 active:bg-blue-100'
          } transition-colors`}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="m22 2-7 20-4-9-9-4Z"/>
            <path d="M22 2 11 13"/>
          </svg>
        </button>
      </div>
    </form>
  );
};

export default MessageInput;