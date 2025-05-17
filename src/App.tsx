import React from 'react';
import ChatContainer from './components/ChatContainer';
import { ChatProvider } from './context/ChatContext';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <header className="bg-white shadow-sm py-4 px-6">
        <div className="max-w-4xl mx-auto w-full flex items-center justify-between">
          <h1 className="text-xl font-bold text-slate-800 flex items-center gap-2">
            <span className="text-blue-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
                <path d="M12 17h.01"/>
              </svg>
            </span>
            Gemini Chat
          </h1>
          <div className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full font-medium">
            Powered by Gemini AI
          </div>
        </div>
      </header>
      
      <main className="flex-1 flex flex-col max-w-4xl mx-auto w-full">
        <ChatProvider>
          <ChatContainer />
        </ChatProvider>
      </main>
      
      <footer className="py-4 text-center text-sm text-slate-500 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-6">
          Gemini Chatbot &copy; {new Date().getFullYear()}
        </div>
      </footer>
    </div>
  );
}

export default App;