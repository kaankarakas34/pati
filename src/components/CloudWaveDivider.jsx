import React from 'react';

/**
 * CloudWaveDivider
 * A playful scalloped cloud-bubble wave divider inspired by HappiLoop.
 * Seamlessly connects two sections with organic, friendly rounded cloud puffs.
 * 
 * @param {string} fill - Color of the cloud scallops (should match the adjacent section)
 * @param {boolean} flip - If true, flips the cloud scallops to face downward
 * @param {string} className - Additional CSS classes
 */
export default function CloudWaveDivider({ fill = '#ffffff', flip = false, className = '' }) {
  // 1440px wide viewport with 10 organic, friendly cloud scallops
  return (
    <div
      className={`w-full overflow-hidden leading-none select-none pointer-events-none ${className}`}
      style={{ transform: flip ? 'rotate(180deg)' : 'none' }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-10 sm:h-14 md:h-16 block preserve-3d"
        preserveAspectRatio="none"
      >
        <path
          d="M 0,55 
             C 45,12 95,12 144,55 
             C 190,20 240,20 288,55 
             C 335,8 385,8 432,55 
             C 480,22 530,22 576,55 
             C 625,10 675,10 720,55 
             C 768,24 818,24 864,55 
             C 912,8 962,8 1008,55 
             C 1056,20 1106,20 1152,55 
             C 1200,12 1250,12 1296,55 
             C 1344,22 1394,22 1440,55 
             L 1440,70 L 0,70 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
