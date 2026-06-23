import React from 'react';

// ============================================================
// Flintstones-Inspired Cartoon SVG Illustrations
// 90% Premium SaaS + 10% Cartoon Personality
// ============================================================

// --- HERO ILLUSTRATION ---
export const HeroCaveman: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg viewBox="0 0 400 380" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Ground / Stone platform */}
    <ellipse cx="200" cy="350" rx="150" ry="18" fill="#d4c5a9" stroke="#1a1a1a" strokeWidth="3" />
    <path d="M80 340 Q140 325 200 335 Q260 325 320 340" stroke="#b8a88a" strokeWidth="2" fill="none" />
    
    {/* Stone Age Computer / Tablet */}
    <g transform="translate(250, 160)">
      {/* Stone tablet base */}
      <rect x="0" y="0" width="100" height="75" rx="10" fill="#d4c5a9" stroke="#1a1a1a" strokeWidth="3" />
      {/* Screen */}
      <rect x="8" y="8" width="84" height="50" rx="5" fill="#faf9f7" stroke="#1a1a1a" strokeWidth="2" />
      {/* Chart on screen */}
      <polyline points="15,45 30,38 45,40 60,25 75,18" stroke="#FF6B35" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="75" cy="18" r="3" fill="#FF6B35" stroke="#1a1a1a" strokeWidth="1.5" />
      {/* Grid lines on screen */}
      <line x1="8" y1="20" x2="92" y2="20" stroke="#e8e4de" strokeWidth="1" />
      <line x1="8" y1="30" x2="92" y2="30" stroke="#e8e4de" strokeWidth="1" />
      <line x1="8" y1="40" x2="92" y2="40" stroke="#e8e4de" strokeWidth="1" />
      {/* Stand */}
      <rect x="40" y="75" width="20" height="12" fill="#8c7a5e" stroke="#1a1a1a" strokeWidth="2" />
      <rect x="30" y="87" width="40" height="6" rx="3" fill="#8c7a5e" stroke="#1a1a1a" strokeWidth="2" />
    </g>

    {/* Body - leopard print tunic */}
    <rect x="145" y="170" width="85" height="110" rx="14" fill="#FF6B35" stroke="#1a1a1a" strokeWidth="3" />
    {/* Leopard spots */}
    <circle cx="162" cy="198" r="6" fill="#1a1a1a" opacity="0.15" />
    <circle cx="190" cy="188" r="5" fill="#1a1a1a" opacity="0.15" />
    <circle cx="218" cy="203" r="6" fill="#1a1a1a" opacity="0.15" />
    <circle cx="172" cy="225" r="5" fill="#1a1a1a" opacity="0.15" />
    <circle cx="205" cy="220" r="6" fill="#1a1a1a" opacity="0.15" />
    <circle cx="185" cy="250" r="5" fill="#1a1a1a" opacity="0.15" />
    <circle cx="215" cy="245" r="4" fill="#1a1a1a" opacity="0.15" />
    
    {/* Belt */}
    <rect x="148" y="240" width="80" height="8" rx="4" fill="#8c7a5e" stroke="#1a1a1a" strokeWidth="2" />
    <circle cx="188" cy="244" r="6" fill="#FFD93D" stroke="#1a1a1a" strokeWidth="2" />
    
    {/* Legs */}
    <rect x="155" y="275" width="24" height="55" rx="11" fill="#E8B87E" stroke="#1a1a1a" strokeWidth="3" />
    <rect x="198" y="275" width="24" height="55" rx="11" fill="#E8B87E" stroke="#1a1a1a" strokeWidth="3" />
    {/* Feet - barefoot cartoon style */}
    <ellipse cx="167" cy="332" rx="18" ry="9" fill="#D4A56A" stroke="#1a1a1a" strokeWidth="3" />
    <ellipse cx="210" cy="332" rx="18" ry="9" fill="#D4A56A" stroke="#1a1a1a" strokeWidth="3" />
    {/* Toes */}
    <circle cx="177" cy="330" r="2.5" fill="#E8B87E" stroke="#1a1a1a" strokeWidth="1" />
    <circle cx="184" cy="329" r="2.5" fill="#E8B87E" stroke="#1a1a1a" strokeWidth="1" />
    <circle cx="220" cy="330" r="2.5" fill="#E8B87E" stroke="#1a1a1a" strokeWidth="1" />
    <circle cx="227" cy="329" r="2.5" fill="#E8B87E" stroke="#1a1a1a" strokeWidth="1" />
    
    {/* Left Arm - resting */}
    <rect x="118" y="185" width="24" height="70" rx="12" fill="#E8B87E" stroke="#1a1a1a" strokeWidth="3" transform="rotate(-10, 130, 220)" />
    <circle cx="108" cy="255" r="12" fill="#E8B87E" stroke="#1a1a1a" strokeWidth="3" />
    
    {/* Right Arm - pointing at screen */}
    <rect x="232" y="185" width="24" height="50" rx="12" fill="#E8B87E" stroke="#1a1a1a" strokeWidth="3" transform="rotate(20, 244, 210)" />
    <circle cx="262" cy="230" r="12" fill="#E8B87E" stroke="#1a1a1a" strokeWidth="3" />
    {/* Pointing finger */}
    <line x1="262" y1="230" x2="275" y2="215" stroke="#1a1a1a" strokeWidth="3" strokeLinecap="round" />
    
    {/* Head */}
    <circle cx="187" cy="130" r="50" fill="#E8B87E" stroke="#1a1a1a" strokeWidth="3" />
    
    {/* Hair - messy caveman style */}
    <path d="M142 110 Q135 70 160 62 Q180 55 195 62 Q210 55 225 62 Q245 70 242 110" fill="#4a4030" stroke="#1a1a1a" strokeWidth="3" />
    <path d="M140 105 Q130 90 138 75 Q142 68 150 72" fill="#4a4030" stroke="#1a1a1a" strokeWidth="2" />
    <path d="M244 105 Q254 90 246 75 Q242 68 234 72" fill="#4a4030" stroke="#1a1a1a" strokeWidth="2" />
    {/* Unibrow! */}
    <path d="M160 112 Q187 105 214 112" fill="#4a4030" stroke="#1a1a1a" strokeWidth="3" />
    
    {/* Eyes - big cartoon eyes */}
    <ellipse cx="173" cy="125" rx="12" ry="13" fill="white" stroke="#1a1a1a" strokeWidth="2.5" />
    <ellipse cx="201" cy="125" rx="12" ry="13" fill="white" stroke="#1a1a1a" strokeWidth="2.5" />
    <circle cx="176" cy="123" r="6" fill="#1a1a1a" />
    <circle cx="204" cy="123" r="6" fill="#1a1a1a" />
    <circle cx="178" cy="120" r="2.5" fill="white" />
    <circle cx="206" cy="120" r="2.5" fill="white" />
    
    {/* Nose - big cartoon nose */}
    <ellipse cx="187" cy="140" rx="8" ry="6" fill="#D4A56A" stroke="#1a1a1a" strokeWidth="2.5" />
    
    {/* Big Smile */}
    <path d="M172 152 Q187 165 202 152" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    <path d="M176 153 Q187 162 198 153" fill="#FF6B35" opacity="0.3" />
    
    {/* Growth arrow floating above */}
    <g className="float-gentle" style={{ animationDelay: '0.5s' }}>
      <path d="M100 50 L118 30 L130 38 L155 10" stroke="#4A6741" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M145 10 L155 10 L155 20" stroke="#4A6741" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </g>
    
    {/* Stars / sparkles */}
    <g className="bounce-subtle" style={{ animationDelay: '0s' }}>
      <path d="M70 80 L73 72 L76 80 L84 77 L76 74 L73 66 L70 74 L62 77 Z" fill="#FFD93D" stroke="#1a1a1a" strokeWidth="1.5" />
    </g>
    <g className="bounce-subtle" style={{ animationDelay: '1s' }}>
      <path d="M330 100 L333 92 L336 100 L344 97 L336 94 L333 86 L330 94 L322 97 Z" fill="#FFD93D" stroke="#1a1a1a" strokeWidth="1.5" />
    </g>
    <g className="bounce-subtle" style={{ animationDelay: '0.5s' }}>
      <path d="M310 250 L312 245 L314 250 L319 248 L314 246 L312 241 L310 246 L305 248 Z" fill="#FF6B35" stroke="#1a1a1a" strokeWidth="1" />
    </g>
  </svg>
);

// --- SERVICE CARDS ILLUSTRATIONS ---
export const MarketingIllustration: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg viewBox="0 0 120 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Megaphone - Flintstones style */}
    <path d="M25 45 L85 32 L85 88 L25 75 Z" fill="#FF6B35" stroke="#1a1a1a" strokeWidth="3.5" strokeLinejoin="round" />
    <rect x="10" y="53" width="20" height="14" rx="5" fill="#FF6B35" stroke="#1a1a1a" strokeWidth="3.5" />
    <path d="M10 57 Q2 57 2 60 Q2 63 10 63" stroke="#1a1a1a" strokeWidth="3.5" fill="none" />
    {/* Sound waves - thick cartoon style */}
    <path d="M95 42 Q102 60 95 78" stroke="#FF6B35" strokeWidth="4" strokeLinecap="round" fill="none" />
    <path d="M105 36 Q114 60 105 84" stroke="#FF6B35" strokeWidth="3" strokeLinecap="round" fill="none" />
    {/* Stars */}
    <circle cx="60" cy="22" r="4" fill="#FFD93D" stroke="#1a1a1a" strokeWidth="2" />
    <circle cx="80" cy="18" r="3" fill="#FFD93D" stroke="#1a1a1a" strokeWidth="1.5" />
  </svg>
);

export const WebsiteIllustration: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg viewBox="0 0 120 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Monitor - cartoon style */}
    <rect x="12" y="12" width="96" height="68" rx="8" fill="white" stroke="#1a1a1a" strokeWidth="3.5" />
    {/* Screen */}
    <rect x="18" y="18" width="84" height="52" rx="4" fill="#faf9f7" stroke="#1a1a1a" strokeWidth="2" />
    {/* Website header */}
    <rect x="22" y="22" width="76" height="8" rx="2" fill="#FF6B35" />
    {/* Website content */}
    <rect x="22" y="36" width="36" height="14" rx="3" fill="#5B8FB9" opacity="0.3" stroke="#1a1a1a" strokeWidth="1.5" />
    <rect x="64" y="36" width="34" height="5" rx="2" fill="#d4c5a9" />
    <rect x="64" y="45" width="34" height="5" rx="2" fill="#d4c5a9" />
    <rect x="22" y="56" width="76" height="10" rx="3" fill="#d4c5a9" />
    {/* Stand */}
    <rect x="48" y="80" width="24" height="16" rx="3" fill="#E8B87E" stroke="#1a1a1a" strokeWidth="3" />
    <rect x="38" y="96" width="44" height="6" rx="3" fill="#E8B87E" stroke="#1a1a1a" strokeWidth="3" />
    {/* Cartoon cursor */}
    <path d="M65 48 L65 62 L70 57 L75 65 L78 63 L73 55 L79 55 Z" fill="#1a1a1a" />
  </svg>
);

export const ContentIllustration: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg viewBox="0 0 120 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Palette */}
    <ellipse cx="60" cy="65" rx="48" ry="40" fill="#E8B87E" stroke="#1a1a1a" strokeWidth="3.5" />
    {/* Paint blobs - cartoon style */}
    <circle cx="32" cy="50" r="10" fill="#FF6B35" stroke="#1a1a1a" strokeWidth="2.5" />
    <circle cx="55" cy="38" r="10" fill="#5B8FB9" stroke="#1a1a1a" strokeWidth="2.5" />
    <circle cx="80" cy="44" r="10" fill="#4A6741" stroke="#1a1a1a" strokeWidth="2.5" />
    <circle cx="88" cy="68" r="10" fill="#FFD93D" stroke="#1a1a1a" strokeWidth="2.5" />
    <circle cx="38" cy="78" r="10" fill="#E5552A" stroke="#1a1a1a" strokeWidth="2.5" />
    {/* Thumb hole */}
    <circle cx="22" cy="80" r="12" fill="#faf9f7" stroke="#1a1a1a" strokeWidth="3" />
    {/* Paintbrush */}
    <g transform="translate(90, 10) rotate(30)">
      <rect x="0" y="0" width="8" height="50" rx="4" fill="#8c7a5e" stroke="#1a1a1a" strokeWidth="2.5" />
      <path d="M-2 -5 Q4 -15 10 -5 Z" fill="#FF6B35" stroke="#1a1a1a" strokeWidth="2" />
    </g>
  </svg>
);

export const TechnologyIllustration: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg viewBox="0 0 120 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Gear 1 - Flintstones stone gear */}
    <g transform="translate(38, 45)">
      <circle cx="0" cy="0" r="24" fill="#5B8FB9" stroke="#1a1a1a" strokeWidth="3.5" />
      <circle cx="0" cy="0" r="9" fill="white" stroke="#1a1a1a" strokeWidth="3" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
        <rect key={i} x="-5" y="-30" width="10" height="10" rx="3" fill="#5B8FB9" stroke="#1a1a1a" strokeWidth="2.5" transform={`rotate(${angle})`} />
      ))}
    </g>
    {/* Gear 2 */}
    <g transform="translate(80, 65)">
      <circle cx="0" cy="0" r="18" fill="#FF6B35" stroke="#1a1a1a" strokeWidth="3.5" />
      <circle cx="0" cy="0" r="7" fill="white" stroke="#1a1a1a" strokeWidth="3" />
      {[0, 60, 120, 180, 240, 300].map((angle, i) => (
        <rect key={i} x="-4" y="-23" width="8" height="8" rx="3" fill="#FF6B35" stroke="#1a1a1a" strokeWidth="2.5" transform={`rotate(${angle})`} />
      ))}
    </g>
    {/* Stone wrench */}
    <g transform="translate(20, 78) rotate(-35)">
      <rect x="0" y="0" width="35" height="10" rx="5" fill="#8c7a5e" stroke="#1a1a1a" strokeWidth="2.5" />
      <path d="M-8 -5 Q-14 5 -8 15 L0 15 L0 -5 Z" fill="#8c7a5e" stroke="#1a1a1a" strokeWidth="2.5" />
    </g>
  </svg>
);

export const AIIllustration: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg viewBox="0 0 120 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Robot head - cartoon style */}
    <rect x="22" y="22" width="76" height="58" rx="14" fill="#E8B87E" stroke="#1a1a1a" strokeWidth="3.5" />
    {/* Antenna */}
    <line x1="60" y1="22" x2="60" y2="8" stroke="#1a1a1a" strokeWidth="3.5" />
    <circle cx="60" cy="6" r="6" fill="#FF6B35" stroke="#1a1a1a" strokeWidth="2.5" />
    <circle cx="60" cy="6" r="2.5" fill="#FFD93D" />
    {/* Eyes - glowing cartoon eyes */}
    <circle cx="44" cy="44" r="10" fill="white" stroke="#1a1a1a" strokeWidth="3" />
    <circle cx="44" cy="44" r="5" fill="#4A6741" />
    <circle cx="42" cy="42" r="2" fill="white" />
    <circle cx="76" cy="44" r="10" fill="white" stroke="#1a1a1a" strokeWidth="3" />
    <circle cx="76" cy="44" r="5" fill="#4A6741" />
    <circle cx="74" cy="42" r="2" fill="white" />
    {/* Robot mouth */}
    <rect x="40" y="60" width="40" height="8" rx="4" fill="#1a1a1a" />
    <line x1="48" y1="60" x2="48" y2="68" stroke="#E8B87E" strokeWidth="1.5" />
    <line x1="56" y1="60" x2="56" y2="68" stroke="#E8B87E" strokeWidth="1.5" />
    <line x1="64" y1="60" x2="64" y2="68" stroke="#E8B87E" strokeWidth="1.5" />
    <line x1="72" y1="60" x2="72" y2="68" stroke="#E8B87E" strokeWidth="1.5" />
    {/* Body */}
    <rect x="32" y="86" width="56" height="28" rx="10" fill="#E8B87E" stroke="#1a1a1a" strokeWidth="3.5" />
    {/* Chest light */}
    <circle cx="60" cy="100" r="7" fill="#4A6741" stroke="#1a1a1a" strokeWidth="2.5" />
    <circle cx="60" cy="100" r="3.5" fill="#6B8A62" />
    {/* Arms */}
    <rect x="12" y="88" width="18" height="24" rx="9" fill="#E8B87E" stroke="#1a1a1a" strokeWidth="3" />
    <rect x="90" y="88" width="18" height="24" rx="9" fill="#E8B87E" stroke="#1a1a1a" strokeWidth="3" />
    {/* Sparkles */}
    <path d="M105 28 L107 22 L109 28 L115 26 L109 24 L107 18 L105 24 L99 26 Z" fill="#FFD93D" stroke="#1a1a1a" strokeWidth="1.5" />
    <path d="M12 32 L14 26 L16 32 L22 30 L16 28 L14 22 L12 28 L6 30 Z" fill="#FFD93D" stroke="#1a1a1a" strokeWidth="1.5" />
  </svg>
);

// --- AI SECTION - Stone Tablet with Chatbot ---
export const StoneTabletAI: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg viewBox="0 0 500 400" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Stone tablet */}
    <rect x="80" y="30" width="340" height="340" rx="24" fill="#d4c5a9" stroke="#1a1a1a" strokeWidth="4" />
    <rect x="92" y="42" width="316" height="316" rx="18" fill="#e8e4de" stroke="#1a1a1a" strokeWidth="2.5" />
    
    {/* Stone texture details */}
    <circle cx="115" cy="65" r="4" fill="#c4b599" />
    <circle cx="375" cy="75" r="3" fill="#c4b599" />
    <circle cx="110" cy="340" r="3" fill="#c4b599" />
    <circle cx="385" cy="320" r="4" fill="#c4b599" />
    <circle cx="250" cy="55" r="2" fill="#c4b599" />
    
    {/* Header area */}
    <rect x="110" y="55" width="280" height="20" rx="6" fill="#FF6B35" stroke="#1a1a1a" strokeWidth="2" />
    <circle cx="125" cy="65" r="5" fill="white" opacity="0.8" />
    <rect x="138" y="62" width="80" height="6" rx="3" fill="white" opacity="0.8" />
    <rect x="360" y="60" width="14" height="10" rx="3" fill="white" opacity="0.6" />
    <rect x="342" y="60" width="14" height="10" rx="3" fill="white" opacity="0.6" />
    <rect x="324" y="60" width="14" height="10" rx="3" fill="white" opacity="0.6" />
    
    {/* Chat area */}
    {/* Bot message */}
    <rect x="110" y="90" width="210" height="55" rx="18" fill="#FF6B35" stroke="#1a1a1a" strokeWidth="2.5" />
    <path d="M122 145 L118 158 L132 145" fill="#FF6B35" stroke="#1a1a1a" strokeWidth="2" />
    {/* Bot avatar */}
    <circle cx="135" cy="117" r="16" fill="#E8B87E" stroke="#1a1a1a" strokeWidth="2.5" />
    <circle cx="130" cy="114" r="2.5" fill="#1a1a1a" />
    <circle cx="140" cy="114" r="2.5" fill="#1a1a1a" />
    <path d="M130 123 Q135 128 140 123" stroke="#1a1a1a" strokeWidth="1.5" fill="none" />
    {/* Text lines */}
    <rect x="160" y="106" width="130" height="5" rx="2.5" fill="white" opacity="0.8" />
    <rect x="160" y="118" width="100" height="5" rx="2.5" fill="white" opacity="0.6" />
    
    {/* User message */}
    <rect x="200" y="160" width="190" height="55" rx="18" fill="white" stroke="#1a1a1a" strokeWidth="2.5" />
    <path d="M380 215 L384 228 L370 215" fill="white" stroke="#1a1a1a" strokeWidth="2" />
    {/* User avatar */}
    <circle cx="360" cy="187" r="16" fill="#5B8FB9" stroke="#1a1a1a" strokeWidth="2.5" />
    <circle cx="355" cy="184" r="2.5" fill="#1a1a1a" />
    <circle cx="365" cy="184" r="2.5" fill="#1a1a1a" />
    <path d="M355 193 Q360 198 365 193" stroke="#1a1a1a" strokeWidth="1.5" fill="none" />
    {/* Text lines */}
    <rect x="215" y="176" width="120" height="5" rx="2.5" fill="#d4c5a9" />
    <rect x="215" y="188" width="90" height="5" rx="2.5" fill="#d4c5a9" />
    
    {/* Bot message 2 */}
    <rect x="110" y="235" width="230" height="55" rx="18" fill="#FF6B35" stroke="#1a1a1a" strokeWidth="2.5" />
    <path d="M122 290 L118 303 L132 290" fill="#FF6B35" stroke="#1a1a1a" strokeWidth="2" />
    {/* Bot avatar */}
    <circle cx="135" cy="262" r="16" fill="#E8B87E" stroke="#1a1a1a" strokeWidth="2.5" />
    <circle cx="130" cy="259" r="2.5" fill="#1a1a1a" />
    <circle cx="140" cy="259" r="2.5" fill="#1a1a1a" />
    <path d="M130 268 Q135 273 140 268" stroke="#1a1a1a" strokeWidth="1.5" fill="none" />
    {/* Text lines */}
    <rect x="160" y="250" width="150" height="5" rx="2.5" fill="white" opacity="0.8" />
    <rect x="160" y="262" width="110" height="5" rx="2.5" fill="white" opacity="0.6" />
    <rect x="160" y="274" width="70" height="5" rx="2.5" fill="white" opacity="0.4" />
    
    {/* Typing indicator */}
    <rect x="200" y="310" width="100" height="32" rx="16" fill="white" stroke="#1a1a1a" strokeWidth="2" />
    <circle cx="225" cy="326" r="4" fill="#d4c5a9">
      <animate attributeName="opacity" values="0.3;1;0.3" dur="1.5s" repeatCount="indefinite" />
    </circle>
    <circle cx="250" cy="326" r="4" fill="#d4c5a9">
      <animate attributeName="opacity" values="0.3;1;0.3" dur="1.5s" begin="0.3s" repeatCount="indefinite" />
    </circle>
    <circle cx="275" cy="326" r="4" fill="#d4c5a9">
      <animate attributeName="opacity" values="0.3;1;0.3" dur="1.5s" begin="0.6s" repeatCount="indefinite" />
    </circle>
    
    {/* Floating sparkles */}
    <path d="M440 90 L443 82 L446 90 L454 87 L446 84 L443 76 L440 84 L432 87 Z" fill="#FFD93D" stroke="#1a1a1a" strokeWidth="1.5">
      <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
    </path>
    <path d="M55 140 L58 132 L61 140 L69 137 L61 134 L58 126 L55 134 L47 137 Z" fill="#FFD93D" stroke="#1a1a1a" strokeWidth="1.5">
      <animate attributeName="opacity" values="0.5;1;0.5" dur="2.5s" repeatCount="indefinite" />
    </path>
  </svg>
);

// --- HOW IT WORKS STEP ILLUSTRATIONS ---
export const StepIllustration: React.FC<{ className?: string; step: number }> = ({ className = '', step }) => {
  switch (step) {
    case 1: // Tell us your goal - person talking with speech bubble
      return (
        <svg viewBox="0 0 120 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Person */}
          <circle cx="55" cy="35" r="20" fill="#E8B87E" stroke="#1a1a1a" strokeWidth="3" />
          <circle cx="48" cy="32" r="2.5" fill="#1a1a1a" />
          <circle cx="62" cy="32" r="2.5" fill="#1a1a1a" />
          <path d="M48 42 Q55 48 62 42" stroke="#1a1a1a" strokeWidth="2.5" fill="none" />
          {/* Body */}
          <rect x="42" y="55" width="26" height="30" rx="8" fill="#FF6B35" stroke="#1a1a1a" strokeWidth="2.5" />
          {/* Speech bubble */}
          <rect x="15" y="75" width="85" height="35" rx="12" fill="white" stroke="#1a1a1a" strokeWidth="3" />
          <path d="M50 110 L55 120 L60 110" fill="white" stroke="#1a1a1a" strokeWidth="3" />
          <rect x="25" y="85" width="65" height="5" rx="2.5" fill="#FF6B35" opacity="0.3" />
          <rect x="30" y="95" width="45" height="5" rx="2.5" fill="#FF6B35" opacity="0.2" />
        </svg>
      );
    case 2: // We create strategy - blueprint with pencil
      return (
        <svg viewBox="0 0 120 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Blueprint */}
          <rect x="12" y="12" width="96" height="72" rx="8" fill="white" stroke="#1a1a1a" strokeWidth="3" />
          <line x1="12" y1="28" x2="108" y2="28" stroke="#5B8FB9" strokeWidth="1.5" />
          {/* Content blocks */}
          <rect x="20" y="36" width="28" height="22" rx="4" fill="#5B8FB9" opacity="0.3" stroke="#1a1a1a" strokeWidth="2" />
          <rect x="55" y="36" width="28" height="22" rx="4" fill="#5B8FB9" opacity="0.3" stroke="#1a1a1a" strokeWidth="2" />
          <rect x="90" y="36" width="12" height="22" rx="3" fill="#5B8FB9" opacity="0.3" stroke="#1a1a1a" strokeWidth="2" />
          <rect x="20" y="65" width="82" height="10" rx="3" fill="#d4c5a9" />
          {/* Pencil */}
          <g transform="translate(85, 5) rotate(35)">
            <rect x="0" y="0" width="10" height="35" rx="3" fill="#FFD93D" stroke="#1a1a1a" strokeWidth="2.5" />
            <path d="M0 35 Q5 45 10 35" fill="#E8B87E" stroke="#1a1a1a" strokeWidth="2" />
            <rect x="0" y="0" width="10" height="8" rx="3" fill="#FF6B35" stroke="#1a1a1a" strokeWidth="2" />
          </g>
        </svg>
      );
    case 3: // We execute - gears working
      return (
        <svg viewBox="0 0 120 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(38, 42)">
            <circle cx="0" cy="0" r="22" fill="#4A6741" stroke="#1a1a1a" strokeWidth="3" />
            <circle cx="0" cy="0" r="8" fill="white" stroke="#1a1a1a" strokeWidth="3" />
            {[0, 60, 120, 180, 240, 300].map((a, i) => (
              <rect key={i} x="-3.5" y="-27" width="7" height="9" rx="2.5" fill="#4A6741" stroke="#1a1a1a" strokeWidth="2" transform={`rotate(${a})`} />
            ))}
          </g>
          <g transform="translate(78, 60)">
            <circle cx="0" cy="0" r="16" fill="#FF6B35" stroke="#1a1a1a" strokeWidth="3" />
            <circle cx="0" cy="0" r="6" fill="white" stroke="#1a1a1a" strokeWidth="3" />
            {[0, 90, 180, 270].map((a, i) => (
              <rect key={i} x="-3" y="-20" width="6" height="7" rx="2" fill="#FF6B35" stroke="#1a1a1a" strokeWidth="2" transform={`rotate(${a})`} />
            ))}
          </g>
          {/* Wrench */}
          <g transform="translate(15, 80) rotate(-25)">
            <rect x="0" y="0" width="30" height="8" rx="4" fill="#8c7a5e" stroke="#1a1a1a" strokeWidth="2" />
            <path d="M-5 -3 Q-10 4 -5 11 L0 11 L0 -3 Z" fill="#8c7a5e" stroke="#1a1a1a" strokeWidth="2" />
          </g>
        </svg>
      );
    case 4: // You grow - rocket going up
      return (
        <svg viewBox="0 0 120 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Rocket */}
          <path d="M35 85 Q35 50 50 15 Q65 50 65 85 Z" fill="#FF6B35" stroke="#1a1a1a" strokeWidth="3" />
          <circle cx="50" cy="38" r="6" fill="#5B8FB9" stroke="#1a1a1a" strokeWidth="2" />
          <path d="M35 78 L24 90 L35 82" fill="#FF6B35" stroke="#1a1a1a" strokeWidth="2.5" />
          <path d="M65 78 L76 90 L65 82" fill="#FF6B35" stroke="#1a1a1a" strokeWidth="2.5" />
          {/* Fire */}
          <path d="M43 85 Q46 102 50 92 Q54 102 57 85" fill="#FFD93D" stroke="#FF6B35" strokeWidth="2" />
          <path d="M46 85 Q48 98 50 90 Q52 98 54 85" fill="#FF6B35" />
          {/* Stars */}
          <path d="M85 20 L87 14 L89 20 L95 18 L89 16 L87 10 L85 16 L79 18 Z" fill="#FFD93D" stroke="#1a1a1a" strokeWidth="1.5" />
          <path d="M20 30 L22 24 L24 30 L30 28 L24 26 L22 20 L20 26 L14 28 Z" fill="#FFD93D" stroke="#1a1a1a" strokeWidth="1.5" />
          <path d="M95 60 L96 56 L97 60 L101 58 L97 56 L96 52 L95 56 L91 58 Z" fill="#FFD93D" stroke="#1a1a1a" strokeWidth="1" />
        </svg>
      );
    default:
      return null;
  }
};

// --- NEW UNIBOXX LOGO ---
export const Logo: React.FC<{ className?: string; light?: boolean }> = ({ className = 'h-10', light = false }) => (
  <div className={`flex items-center gap-3 ${className}`}>
    <svg viewBox="0 0 100 100" className="h-full w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Hexagon Shape */}
      <path
        d="M50 5 L89 27.5 L89 72.5 L50 95 L11 72.5 L11 27.5 Z"
        fill="url(#logo-gradient)"
        className="cartoon-stroke"
      />
      {/* Stylized 'U' cutout */}
      <path
        d="M35 30 V60 Q35 70 50 70 Q65 70 65 60 V30 H75 V60 Q75 80 50 80 Q25 80 25 60 V30 H35Z"
        fill={light ? '#1a1a1a' : '#1a1a1a'}
        opacity="0.2"
      />
      <path
        d="M40 35 V60 Q40 68 50 68 Q60 68 60 60 V35"
        stroke="white"
        strokeWidth="8"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient id="logo-gradient" x1="50" y1="5" x2="50" y2="95" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF8F21" />
          <stop offset="1" stopColor="#FF4D00" />
        </linearGradient>
      </defs>
    </svg>
    <div className="flex flex-col">
      <span className={`text-xl md:text-2xl font-black tracking-tight leading-none ${light ? 'text-white' : 'text-dark-soft'}`}>
        UNIBO<span className="text-accent">XX</span>
      </span>
      <span className={`text-[8px] md:text-[10px] font-bold uppercase tracking-[0.2em] mt-0.5 ${light ? 'text-white/60' : 'text-accent'}`}>
        Scale Faster. Grow Smarter.
      </span>
    </div>
  </div>
);

// --- FOOTER LOGO ---
export const LogoSVG: React.FC<{ className?: string }> = ({ className = '' }) => (
  <Logo className={className} />
);

// --- CARTOON DIVIDER ---
export const CartoonDivider: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg viewBox="0 0 1200 20" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 10 Q100 0 200 10 Q300 20 400 10 Q500 0 600 10 Q700 20 800 10 Q900 0 1000 10 Q1100 20 1200 10" stroke="#d4c5a9" strokeWidth="3" strokeLinecap="round" fill="none" />
  </svg>
);

// --- STONE TEXTURE BLOCK ---
export const StoneBlock: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg viewBox="0 0 100 60" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="96" height="56" rx="8" fill="#d4c5a9" stroke="#1a1a1a" strokeWidth="3" />
    <circle cx="20" cy="20" r="3" fill="#c4b599" />
    <circle cx="60" cy="15" r="2" fill="#c4b599" />
    <circle cx="80" cy="35" r="3" fill="#c4b599" />
    <circle cx="35" cy="45" r="2" fill="#c4b599" />
    <circle cx="70" cy="50" r="2" fill="#c4b599" />
  </svg>
);
