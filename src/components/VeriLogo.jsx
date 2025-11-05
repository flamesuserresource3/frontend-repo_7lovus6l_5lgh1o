import React from 'react';

const VeriLogo = () => {
  return (
    <div className="relative mx-auto flex items-center justify-center" style={{ filter: 'drop-shadow(0 10px 30px rgba(108,108,229,0.35)) drop-shadow(0 4px 20px rgba(0,212,255,0.2))' }}>
      <svg
        width="160"
        height="160"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Veri logo"
        className="select-none"
      >
        <defs>
          <linearGradient id="veriGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6C6CE5" />
            <stop offset="60%" stopColor="#5B5BE5" />
            <stop offset="100%" stopColor="#00D4FF" />
          </linearGradient>
          <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {/* Shield */}
        <path
          d="M100 20c20 14 40 14 60 0 0 42-8 74-24 96-10 14-22 24-36 32-14-8-26-18-36-32C48 94 40 62 40 20c20 14 40 14 60 0z"
          fill="url(#veriGrad)"
          filter="url(#softGlow)"
        />
        {/* Checkmark */}
        <path
          d="M84 104l-18-18a6 6 0 10-8.5 8.5l22 22a6 6 0 008.5 0l46-46a6 6 0 10-8.5-8.5L84 104z"
          fill="#E6F7FF"
          opacity="0.95"
        />
        {/* Inner shine */}
        <ellipse cx="100" cy="70" rx="56" ry="26" fill="#FFFFFF" opacity="0.06" />
      </svg>
    </div>
  );
};

export default VeriLogo;
