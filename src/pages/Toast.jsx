// components/Toast.js
import React, { useEffect } from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';

const Toast = ({ message, type = 'success', isVisible, onClose, duration = 3000 }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose, duration]);

  if (!isVisible) return null;

  const bgColor = type === 'success' ? 'bg-green-500' : type === 'error' ? 'bg-red-500' : 'bg-blue-500';
  const Icon = type === 'success' ? FaCheck : FaTimes;

  return (
    <div className="fixed top-4 right-4 z-50 animate-slide-in">
      <div className={`${bgColor} text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-3 min-w-[300px]`}>
        <Icon className="text-lg flex-shrink-0" />
        <span className="text-sm font-medium">{message}</span>
        <button
          onClick={onClose}
          className="ml-auto text-white hover:text-gray-200 transition-colors"
        >
          <FaTimes className="text-sm" />
        </button>
      </div>
    </div>
  );
};

export default Toast;