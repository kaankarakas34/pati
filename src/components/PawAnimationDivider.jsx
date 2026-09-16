import React, { useState, useEffect, useRef } from 'react';

/**
 * PawAnimationDivider
 * Continuous walking paw prints animation inspired by https://codepen.io/motionimaging/pen/MKrQXa
 * Spans the full screen width with an endless walking trail from left to right.
 */
export default function PawAnimationDivider({
  className = '',
  pawColor = 'text-brand-c3',
  stepX = 38,
  periodSteps = 12,
  periodDuration = 2.4
}) {
  const containerRef = useRef(null);
  const [pawCount, setPawCount] = useState(50); // Sensible desktop default for initial render

  useEffect(() => {
    function updateCount() {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth || window.innerWidth;
        const needed = Math.ceil(width / stepX) + 4;
        setPawCount(Math.max(12, needed));
      }
    }

    updateCount();

    if (typeof ResizeObserver !== 'undefined' && containerRef.current) {
      const ro = new ResizeObserver(() => updateCount());
      ro.observe(containerRef.current);
      return () => ro.disconnect();
    }

    window.addEventListener('resize', updateCount);
    return () => window.removeEventListener('resize', updateCount);
  }, [stepX]);

  const stepDuration = periodDuration / periodSteps;
  const paws = Array.from({ length: pawCount }, (_, i) => i);

  return (
    <div
      ref={containerRef}
      role="presentation"
      aria-hidden="true"
      className={`relative w-full h-14 overflow-hidden select-none pointer-events-none ${className}`}
      style={{
        maskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)'
      }}
    >
      <div className="absolute inset-0 w-full h-full">
        {paws.map((i) => {
          const isEven = i % 2 === 0;
          const stepInPeriod = i % periodSteps;
          // Negative delay ensures steady-state immediate playback without initial wait
          const delay = (stepInPeriod * stepDuration) - periodDuration;

          return (
            <div
              key={i}
              className="absolute w-6 h-6"
              style={{
                left: `${i * stepX}px`,
                top: isEven ? '22px' : '8px',
                transform: isEven ? 'rotate(100deg)' : 'rotate(80deg)'
              }}
            >
              <div
                className={`w-full h-full animate-paw ${pawColor}`}
                style={{
                  animationDelay: `${delay.toFixed(3)}s`,
                  animationDuration: `${periodDuration}s`
                }}
              >
                {/* Authentic Paw SVG vector from CodePen MKrQXa */}
                <svg
                  viewBox="0 0 249 209.32"
                  className="w-full h-full fill-current drop-shadow-xs"
                >
                  <ellipse cx="27.917" cy="106.333" rx="27.917" ry="35.833" />
                  <ellipse cx="84.75" cy="47.749" rx="34.75" ry="47.751" />
                  <ellipse cx="162" cy="47.749" rx="34.75" ry="47.751" />
                  <ellipse cx="221.083" cy="106.333" rx="27.917" ry="35.833" />
                  <path d="M43.98 165.39s9.76-63.072 76.838-64.574c0 0 71.082-6.758 83.096 70.33 0 0 2.586 19.855-12.54 31.855 0 0-15.75 17.75-43.75-6.25 0 0-7.124-8.374-24.624-7.874 0 0-12.75-.125-21.5 6.625 0 0-16.375 18.376-37.75 12.75 0 0-28.29-7.72-19.77-42.86z" />
                </svg>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
