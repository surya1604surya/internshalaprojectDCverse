import React from 'react';
import { Avatar } from '../types';
import AvatarCard from './AvatarCard';

interface AvatarGridProps {
  avatars: Avatar[];
  onEdit: (id: number) => void;
}

const AvatarGrid: React.FC<AvatarGridProps> = ({ avatars, onEdit }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {avatars.map((avatar) => (
        <AvatarCard key={avatar.id} avatar={avatar} onEdit={onEdit} />
      ))}
    </div>
  );
};

export default AvatarGrid;