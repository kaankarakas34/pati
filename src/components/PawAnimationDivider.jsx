import React, { useState, useEffect, useRef } from 'react';

/**
 * PawAnimationDivider
 * Single continuous paw walk animation inspired by https://codepen.io/motionimaging/pen/MKrQXa
 * A single animal walks from the left edge of the screen across to the right edge,
 * with footsteps sequentially appearing and fading out, then looping continuously.
 */
export default function PawAnimationDivider({
  className = '',
  pawColor = 'text-brand-c3',
  stepX = 40,
  stepDuration = 0.16, // seconds per step
  footprintLifetime = 1.1, // how long each paw print stays visible (seconds)
  pauseAfterWalk = 0.5 // brief pause after reaching the right edge before starting again
}) {
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(1280);

  useEffect(() => {
    function updateWidth() {
      if (containerRef.current) {
        const w = containerRef.current.offsetWidth || window.innerWidth || 1280;
        setContainerWidth(w);
      }
    }

    updateWidth();

    if (typeof ResizeObserver !== 'undefined' && containerRef.current) {
      const ro = new ResizeObserver(() => updateWidth());
      ro.observe(containerRef.current);
      return () => ro.disconnect();
    }

    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  // Calculate total steps needed to cover from left edge (0) to right edge
  const totalSteps = Math.max(8, Math.ceil(containerWidth / stepX) + 2);
  const totalWalkTime = totalSteps * stepDuration;
  const totalDuration = totalWalkTime + pauseAfterWalk;

  // Calculate keyframe percentages for footprint fade in and fade out
  const fadeStartPct = Math.max(0.5, Number(((0.08 / totalDuration) * 100).toFixed(2)));
  const fadeMidPct = Math.max(1, Number(((0.25 / totalDuration) * 100).toFixed(2)));
  const fadeEndPct = Math.min(99, Number(((footprintLifetime / totalDuration) * 100).toFixed(2)));

  const paws = Array.from({ length: totalSteps }, (_, i) => i);

  return (
    <div
      ref={containerRef}
      role="presentation"
      aria-hidden="true"
      className={`relative w-full h-14 overflow-hidden select-none pointer-events-none ${className}`}
      style={{
        maskImage: 'linear-gradient(to right, transparent 0%, black 3%, black 97%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 3%, black 97%, transparent 100%)'
      }}
    >
      <style>{`
        @keyframes singlePawTrackAnim {
          0% {
            opacity: 0;
            transform: scale(0.92);
          }
          ${fadeStartPct}% {
            opacity: 0.95;
            transform: scale(1.04);
          }
          ${fadeMidPct}% {
            opacity: 0.85;
            transform: scale(1);
          }
          ${fadeEndPct}% {
            opacity: 0;
            transform: scale(0.95);
          }
          100% {
            opacity: 0;
            transform: scale(0.92);
          }
        }
      `}</style>

      <div className="absolute inset-0 w-full h-full">
        {paws.map((i) => {
          const isEven = i % 2 === 0;
          const delay = i * stepDuration;

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
                className={`w-full h-full ${pawColor}`}
                style={{
                  opacity: 0,
                  animationName: 'singlePawTrackAnim',
                  animationDuration: `${totalDuration.toFixed(3)}s`,
                  animationTimingFunction: 'ease-in-out',
                  animationDelay: `${delay.toFixed(3)}s`,
                  animationIterationCount: 'infinite',
                  willChange: 'opacity, transform'
                }}
              >
                {/* CodePen MKrQXa SVG Paw */}
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
