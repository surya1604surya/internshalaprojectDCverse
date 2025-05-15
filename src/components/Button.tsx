import React from 'react';
import { Divide } from 'lucide-react';
import type { LucideIcon } from 'lucide-react'; // correct type import

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  className?: string;
  icon?: LucideIcon; // correctly typed icon
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  className = '',
  icon: Icon,
  fullWidth = false,
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium rounded-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variantStyles = {
    primary: 'bg-purple-700 hover:bg-purple-800 text-white focus:ring-purple-500',
    secondary: 'bg-teal-600 hover:bg-teal-700 text-white focus:ring-teal-500',
    outline: 'border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 focus:ring-purple-500',
  };

  const sizeStyles = {
    sm: 'text-sm py-1.5 px-3',
    md: 'text-base py-2 px-4',
    lg: 'text-lg py-2.5 px-5',
  };

  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthClass} ${className}`}
      onClick={onClick}
    >
      {Icon && <Icon className="mr-2 -ml-1 h-5 w-5" />}
      {children}
    </button>
  );
};

export default Button;
