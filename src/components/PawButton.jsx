import React, { useState } from 'react';
import { SearchIcon, ArrowRightIcon } from './PetIcons';

/**
 * Cute Paw SVG Component
 * Stylized cat/dog paw with pad details for interactive buttons
 */
export const PawIcon = ({ className = "w-5 h-5", padColor = "#ffc1ff", bodyColor = "currentColor" }) => (
  <svg
    viewBox="0 0 58 72"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Paw Arm & Body */}
    <path
      d="M12 72V42C12 30 18 24 24 24H34C40 24 46 30 46 42V72"
      fill={bodyColor}
    />
    <path
      d="M12 72V42C12 30 18 24 24 24H34C40 24 46 30 46 42V72"
      stroke="currentColor"
      strokeWidth="3.5"
      strokeLinecap="round"
    />
    
    {/* Main Heel Pad */}
    <path
      d="M20 48C20 43 24 40 29 40C34 40 38 43 38 48C38 53 34 56 29 56C24 56 20 53 20 48Z"
      fill={padColor}
    />
    
    {/* Toe Beans (4 Toes) */}
    <ellipse cx="16" cy="32" rx="4.5" ry="6" fill={padColor} />
    <ellipse cx="25" cy="22" rx="5" ry="6.5" fill={padColor} />
    <ellipse cx="33" cy="22" rx="5" ry="6.5" fill={padColor} />
    <ellipse cx="42" cy="32" rx="4.5" ry="6" fill={padColor} />
  </svg>
);

/**
 * PawButton
 * Interactive button with springy paw clap/stomp micro-interaction
 * 
 * Variants:
 * - 'search': For primary search buttons (Hero, filters). Includes SearchIcon + Paw stomp.
 * - 'link': Inline text link with stepping paw indicator (replaces/augments arrow).
 * - 'cta': Prominent rounded pill button with paw clap.
 * - 'favorite': Circular or pill favorite/like toggle with paw clap.
 */
export default function PawButton({
  children,
  text,
  variant = 'cta', // 'search' | 'link' | 'cta' | 'favorite'
  type = 'button',
  onClick,
  href,
  className = '',
  icon,
  active = false,
  disabled = false,
  ...props
}) {
  const [stomping, setStomping] = useState(false);

  const handleClick = (e) => {
    if (disabled) return;
    setStomping(true);
    setTimeout(() => setStomping(false), 380);
    if (onClick) onClick(e);
  };

  // 1. Search Variant (for Hero and quick filters)
  if (variant === 'search') {
    return (
      <button
        type={type}
        disabled={disabled}
        onClick={handleClick}
        className={`group relative overflow-visible bg-brand-c2 hover:bg-brand-c1 active:bg-brand-navy text-white font-bold rounded-full flex items-center justify-center gap-2.5 py-3 px-7 transition-all duration-200 shadow-md hover:shadow-lg active:scale-97 w-full md:w-auto font-title cursor-pointer select-none ${className}`}
        {...props}
      >
        <SearchIcon className="w-4 h-4 text-white transition-transform duration-200 group-hover:scale-110" />
        <span className="relative z-10">{text || children}</span>
        
        {/* Animated Paw Stomper */}
        <div
          className={`relative flex items-center justify-center transition-all duration-300 ${
            stomping
              ? 'animate-paw-stomp'
              : 'group-hover:-translate-y-1 group-hover:rotate-12 group-hover:scale-115'
          }`}
          style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.61, 1.4)' }}
        >
          <PawIcon
            className="w-5 h-6 text-white drop-shadow-sm"
            padColor="#ffc1ff"
            bodyColor="#ffffff"
          />
        </div>
      </button>
    );
  }

  // 2. Link / Card Action Variant ("Otelleri İncele", "Mekanları Keşfet")
  if (variant === 'link') {
    const Component = href ? 'a' : 'span';
    return (
      <Component
        href={href}
        onClick={handleClick}
        className={`group inline-flex items-center gap-2 font-bold text-brand-c2 hover:text-brand-c1 transition-colors cursor-pointer select-none ${className}`}
        {...props}
      >
        <span>{text || children}</span>
        <div
          className={`flex items-center justify-center transition-all duration-300 ${
            stomping
              ? 'animate-paw-stomp'
              : 'group-hover:translate-x-1.5 group-hover:-translate-y-0.5 group-hover:scale-115'
          }`}
          style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.61, 1.4)' }}
        >
          <PawIcon
            className="w-4 h-5 text-brand-c2 group-hover:text-brand-c1"
            padColor="#ffc1ff"
            bodyColor="currentColor"
          />
        </div>
      </Component>
    );
  }

  // 3. Prominent CTA Pill Button
  if (variant === 'cta') {
    const Component = href ? 'a' : 'button';
    return (
      <Component
        href={href}
        type={href ? undefined : type}
        disabled={disabled}
        onClick={handleClick}
        className={`group relative inline-flex items-center justify-center gap-2.5 px-6 py-2.5 rounded-full font-bold font-title text-xs sm:text-sm bg-brand-c2 hover:bg-brand-c1 active:bg-brand-navy text-white shadow-xs hover:shadow-md transition-all duration-200 active:scale-97 cursor-pointer select-none ${className}`}
        {...props}
      >
        {icon}
        <span className="relative z-10">{text || children}</span>
        <div
          className={`relative flex items-center justify-center transition-all duration-300 ${
            stomping
              ? 'animate-paw-stomp'
              : 'group-hover:-translate-y-0.5 group-hover:rotate-12 group-hover:scale-115'
          }`}
          style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.61, 1.4)' }}
        >
          <PawIcon
            className="w-4 h-5 text-white"
            padColor="#ffc1ff"
            bodyColor="#ffffff"
          />
        </div>
      </Component>
    );
  }

  // 4. Favorite / Like Toggle Variant
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={handleClick}
      className={`group relative inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-full border border-brand-navy/15 bg-white/90 hover:bg-white text-xs font-bold text-brand-navy transition-all duration-200 shadow-2xs hover:shadow-xs active:scale-95 cursor-pointer select-none ${
        active ? 'border-brand-c4 bg-brand-c5/20 text-brand-c2' : ''
      } ${className}`}
      {...props}
    >
      <div
        className={`transition-transform duration-300 ${
          stomping
            ? 'animate-paw-stomp'
            : 'group-hover:scale-120 group-hover:-translate-y-0.5'
        }`}
        style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.61, 1.4)' }}
      >
        <PawIcon
          className="w-4 h-5 text-brand-c2"
          padColor={active ? '#b98ad5' : '#ffc1ff'}
          bodyColor="currentColor"
        />
      </div>
      {children || (text && <span>{text}</span>)}
    </button>
  );
}
