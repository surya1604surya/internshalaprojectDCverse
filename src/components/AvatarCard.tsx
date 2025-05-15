import React from 'react';
import { Avatar } from '../types';
import Button from './Button';
import { Edit2 } from 'lucide-react';

interface AvatarCardProps {
  avatar: Avatar;
  onEdit: (id: number) => void;
}

const AvatarCard: React.FC<AvatarCardProps> = ({ avatar, onEdit }) => {
  return (
    <div className="group bg-[#d4d4d4] rounded-xl shadow-sm overflow-hidden hover:bg-[#384959] transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] relative">
      <div className="relative pb-[100%] overflow-hidden">
        <img 
          src={avatar.image} 
          alt={`${avatar.firstName} ${avatar.lastName}`}
          className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/70 via-purple-700/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-purple-900/90 to-purple-900/0">
          <p className="text-white text-sm font-medium drop-shadow-lg">Click to edit profile</p>
        </div>
      </div>
      <div className="p-6 relative z-10 bg-gradient-to-br from-white to-purple-50/30 bg-[#384959]  transition-colors duration-300 group-hover:from-purple-50 group-hover:to-purple-100/50">
        <h3 className="font-semibold text-lg text-blue mb-1 group-hover:text-[#057ef7] hover:bg-[#384959] transition-colors duration-300">
          {avatar.firstName} {avatar.lastName}
        </h3>
        {avatar.email && (
          <p className="text-sm text-gray-500 mb-4 truncate group-hover:text-purple-600/80 transition-colors duration-300">
            {avatar.email}
          </p>
        )}
        <Button 
          variant="outline" 
          size="sm" 
          onClick={() => onEdit(avatar.id)}
          icon={Edit2}
          fullWidth
          className="group-hover:bg-purple-700 group-hover:text-white group-hover:border-purple-700 transition-all duration-300 hover:shadow-lg"
        >
          Edit Avatar
        </Button>
      </div>
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-200 rounded-xl transition-colors duration-300" />
    </div>
  );
};

export default AvatarCard;