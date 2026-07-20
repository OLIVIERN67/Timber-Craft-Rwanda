import React from 'react';

const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-theme-bg">
    <div className="flex flex-col items-center gap-4">
      <span className="loading loading-spinner loading-lg text-theme-primary"></span>
      <p className="text-sm text-theme-text-secondary font-display">TimberCraft Rwanda</p>
    </div>
  </div>
);

export default LoadingFallback;
