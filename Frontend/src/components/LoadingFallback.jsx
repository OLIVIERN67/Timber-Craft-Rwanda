import React from 'react';

const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="flex flex-col items-center gap-4">
      <span className="loading loading-spinner loading-lg text-timbercraft-green"></span>
      <p className="text-sm text-gray-500 font-display">TimberCraft Rwanda</p>
    </div>
  </div>
);

export default LoadingFallback;
