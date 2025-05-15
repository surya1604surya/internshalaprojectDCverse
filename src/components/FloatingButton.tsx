import React from 'react';
import { Plus } from 'lucide-react';

interface FloatingButtonProps {
  onClick: () => void;
}

const FloatingButton: React.FC<FloatingButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="fixed right-6 bottom-6 w-16 h-16 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-500 hover:scale-110 hover:rotate-180 hover:shadow-xl hover:shadow-purple-500/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 z-10 group"
      aria-label="Create New Avatar"
    >
      <Plus 
        size={28} 
        className="transform transition-transform duration-500 group-hover:scale-110" 
      />
      <div className="absolute inset-0 rounded-full bg-purple-400 blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
    </button>
  );
};

export default FloatingButton;