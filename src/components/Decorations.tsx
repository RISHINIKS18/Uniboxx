import React from 'react';

export const CartoonWavyDivider: React.FC<{ flip?: boolean; className?: string }> = ({ flip = false, className = '' }) => (
  <div className={`w-full overflow-hidden ${flip ? 'rotate-180' : ''} ${className}`} style={{ lineHeight: 0 }}>
    <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-6 md:h-10">
      <path
        d="M0 20 Q60 5 120 20 Q180 35 240 20 Q300 5 360 20 Q420 35 480 20 Q540 5 600 20 Q660 35 720 20 Q780 5 840 20 Q900 35 960 20 Q1020 5 1080 20 Q1140 35 1200 20 Q1260 5 1320 20 Q1380 35 1440 20"
        stroke="#d4c5a9"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
        opacity="0.5"
      />
      <path
        d="M0 20 Q60 5 120 20 Q180 35 240 20 Q300 5 360 20 Q420 35 480 20 Q540 5 600 20 Q660 35 720 20 Q780 5 840 20 Q900 35 960 20 Q1020 5 1080 20 Q1140 35 1200 20 Q1260 5 1320 20 Q1380 35 1440 20"
        stroke="#d4c5a9"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
        opacity="0.3"
        transform="translate(0, 6)"
      />
    </svg>
  </div>
);

export const StoneDivider: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`flex items-center justify-center gap-3 py-4 ${className}`}>
    <div className="w-8 h-8 rounded-full bg-stone-200 border-2 border-stone-300" />
    <div className="w-4 h-4 rounded-full bg-accent border-2 border-accent-dark" />
    <div className="w-8 h-8 rounded-full bg-stone-200 border-2 border-stone-300" />
  </div>
);

export const CartoonStar: React.FC<{ className?: string; delay?: string }> = ({ className = '', delay = '0s' }) => (
  <svg
    viewBox="0 0 24 24"
    className={`bounce-subtle ${className}`}
    style={{ animationDelay: delay }}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2 L14 9 L21 9 L15 14 L17 21 L12 17 L7 21 L9 14 L3 9 L10 9 Z"
      fill="#FFD93D"
      stroke="#1a1a1a"
      strokeWidth="1.5"
    />
  </svg>
);

export const CartoonDotPattern: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg viewBox="0 0 40 40" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="5" cy="5" r="2" fill="#d4c5a9" opacity="0.3" />
    <circle cx="20" cy="5" r="2" fill="#d4c5a9" opacity="0.3" />
    <circle cx="35" cy="5" r="2" fill="#d4c5a9" opacity="0.3" />
    <circle cx="5" cy="20" r="2" fill="#d4c5a9" opacity="0.3" />
    <circle cx="20" cy="20" r="2" fill="#d4c5a9" opacity="0.3" />
    <circle cx="35" cy="20" r="2" fill="#d4c5a9" opacity="0.3" />
    <circle cx="5" cy="35" r="2" fill="#d4c5a9" opacity="0.3" />
    <circle cx="20" cy="35" r="2" fill="#d4c5a9" opacity="0.3" />
    <circle cx="35" cy="35" r="2" fill="#d4c5a9" opacity="0.3" />
  </svg>
);
