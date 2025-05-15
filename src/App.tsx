import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import AvatarGrid from './components/AvatarGrid';
import FloatingButton from './components/FloatingButton';
import CreateAvatarModal from './components/CreateAvatarModal';
import { fetchAvatars } from './services/api';
import { Avatar } from './types';

function App() {
  const [avatars, setAvatars] = useState<Avatar[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadAvatars = async () => {
      const data = await fetchAvatars();
      setAvatars(data);
      setLoading(false);
    };

    loadAvatars();
  }, []);

  const handleEditAvatar = (id: number) => {
    console.log('Editing avatar with id:', id);
    // Implementation for editing would go here
  };

  const mockUser = {
    name: 'Sarah Chen'
  };

  return (
    <div className="min-h-screen relative">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
      >
        <source src="/bg1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Header user={mockUser} />

          {loading ? (
            <div className="flex items-center justify-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-700"></div>
            </div>
          ) : (
            <AvatarGrid avatars={avatars} onEdit={handleEditAvatar} />
          )}

          <FloatingButton onClick={() => setIsModalOpen(true)} />
          <CreateAvatarModal 
            isOpen={isModalOpen} 
            onClose={() => setIsModalOpen(false)} 
          />
        </div>
        <footer className="bg-[#2B2B2B] text-white py-8 mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-purple-200 hover:text-white transition-colors duration-300">
              AI Avatar Dashboard © 2025
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
