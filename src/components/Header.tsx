import React from 'react';
import { User } from '../types';

interface HeaderProps {
  user: User;
}

const Header: React.FC<HeaderProps> = ({ user }) => {
  const currentTime = new Date();
  const hour = currentTime.getHours();
  
  let greeting = 'Good morning';
  if (hour >= 12 && hour < 17) {
    greeting = 'Good afternoon';
  } else if (hour >= 17) {
    greeting = 'Good evening';
  }

  return (
    <header className="group mb-12 hover:bg-[#39FF14]  to-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 relative overflow-hidden bg-black">
  <div className="absolute inset-0 bg-gradient-to-r from-purple-200/50 to-purple-100/30 opacity-0  transition-opacity duration-500 pointer-events-none" />
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(168,85,247,0.1),rgba(168,85,247,0))]  transition-opacity duration-500 pointer-events-none" />
  <h1 className="text-4xl font-bold bg-white bg-clip-text text-transparent mb-3 relative transition-transform duration-500">
    AI Avatar Dashboard
  </h1>
  <p className="text-lg text-gray-600 inline-block group-hover:translate-x-2 transition-transform duration-500">
    {greeting},{' '}
    <span className="font-medium text-purple-700 group-hover:text-[#bdddfc] transition-colors duration-300">
      {user.name}
    </span>. Welcome to your AI avatar workspace.
  </p>
</header>

  );
};

export default Header;