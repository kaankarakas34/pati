import React from 'react';

/**
 * SearchMascots
 * Very cute, layered vector mascots (Joyful Puppy & Cheerful Kitten)
 * physically leaning over and resting their front paws on top of the search bar!
 */
export default function SearchMascots() {
  return (
    <div className="relative z-20 flex justify-center items-end select-none pointer-events-none -mb-3 sm:-mb-3.5">
      <div className="flex items-end justify-center gap-4 sm:gap-10 md:gap-16 w-full max-w-xl mx-auto px-4">
        
        {/* =========================================
            PUPPY MASCOT (Left)
           ========================================= */}
        <div className="relative flex flex-col items-center animate-bounce-subtle pointer-events-auto group">
          {/* Playful Floating Speech Bubble */}
          <div className="absolute -top-10 sm:-top-12 -left-6 sm:-left-12 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-2xl rounded-br-xs border-2 border-brand-purple/20 shadow-lg text-brand-dark flex items-center gap-1.5 transition-transform group-hover:scale-110">
            <span className="text-xs sm:text-sm">🏖️</span>
            <span className="text-2xs sm:text-xs font-extrabold font-title whitespace-nowrap text-brand-purple">
              Hadi tatile!
            </span>
          </div>

          <svg
            viewBox="0 0 160 140"
            className="w-28 sm:w-36 md:w-44 h-auto overflow-visible drop-shadow-md"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Soft Shadow behind head */}
            <ellipse cx="80" cy="115" rx="55" ry="18" fill="#3c2f4b" fillOpacity="0.12" />

            {/* Left Ear */}
            <path
              d="M 40,35 C 15,35 5,65 18,92 C 26,108 42,102 46,85 C 48,76 46,50 40,35 Z"
              fill="#d98938"
            />
            <path
              d="M 36,45 C 22,48 16,68 24,88 C 29,97 38,94 40,82 Z"
              fill="#c47426"
            />

            {/* Right Ear */}
            <path
              d="M 120,35 C 145,35 155,65 142,92 C 134,108 118,102 114,85 C 112,76 114,50 120,35 Z"
              fill="#d98938"
            />
            <path
              d="M 124,45 C 138,48 144,68 136,88 C 131,97 122,94 120,82 Z"
              fill="#c47426"
            />

            {/* Puppy Head Base */}
            <ellipse cx="80" cy="65" rx="50" ry="46" fill="#f5ab48" />

            {/* Head Highlights / Cheeks */}
            <ellipse cx="50" cy="74" rx="14" ry="10" fill="#ffd185" fillOpacity="0.8" />
            <ellipse cx="110" cy="74" rx="14" ry="10" fill="#ffd185" fillOpacity="0.8" />
            
            {/* Forehead Stripe */}
            <path
              d="M 75,22 C 75,20 85,20 85,22 C 84,40 88,52 80,56 C 72,52 76,40 75,22 Z"
              fill="#ffdfa0"
            />

            {/* Snout Area */}
            <ellipse cx="80" cy="78" rx="28" ry="22" fill="#fff3db" />

            {/* Dark Button Nose */}
            <path
              d="M 72,68 C 72,64 88,64 88,68 C 88,74 82,78 80,78 C 78,78 72,74 72,68 Z"
              fill="#2e1b40"
            />
            <ellipse cx="76" cy="67" rx="3" ry="1.5" fill="#ffffff" fillOpacity="0.8" />

            {/* Smiling Mouth with Tongue Out */}
            <path
              d="M 70,80 Q 80,85 90,80"
              stroke="#2e1b40"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
            />
            {/* Happy Pink Tongue */}
            <path
              d="M 75,82 C 74,94 86,94 85,82 Z"
              fill="#ff6b8b"
            />
            <path
              d="M 80,82 L 80,90"
              stroke="#e04e6e"
              strokeWidth="1.5"
              strokeLinecap="round"
            />

            {/* Left Big Shiny Eye */}
            <ellipse cx="58" cy="56" rx="8" ry="10" fill="#2e1b40" />
            <circle cx="56" cy="53" r="3.5" fill="#ffffff" />
            <circle cx="61" cy="61" r="1.5" fill="#ffffff" />

            {/* Right Big Shiny Eye */}
            <ellipse cx="102" cy="56" rx="8" ry="10" fill="#2e1b40" />
            <circle cx="100" cy="53" r="3.5" fill="#ffffff" />
            <circle cx="105" cy="61" r="1.5" fill="#ffffff" />

            {/* Eyebrows */}
            <path d="M 52,43 Q 58,40 64,44" stroke="#c47426" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M 96,44 Q 102,40 108,43" stroke="#c47426" strokeWidth="2.5" strokeLinecap="round" />

            {/* Collar */}
            <path
              d="M 46,104 C 65,116 95,116 114,104"
              stroke="#723a8d"
              strokeWidth="8"
              strokeLinecap="round"
            />
            {/* Gold Pendant */}
            <circle cx="80" cy="114" r="6" fill="#f8c12b" stroke="#d49a09" strokeWidth="1.5" />
            <circle cx="80" cy="114" r="2.5" fill="#ffffff" />

            {/* Left Front Paw (Physically Rested on Search Bar!) */}
            <g transform="translate(36, 108)">
              <ellipse cx="12" cy="14" rx="14" ry="11" fill="#f5ab48" stroke="#d98938" strokeWidth="2" />
              {/* Toe separations */}
              <circle cx="5" cy="18" r="3" fill="#ffd185" />
              <circle cx="12" cy="20" r="3" fill="#ffd185" />
              <circle cx="19" cy="18" r="3" fill="#ffd185" />
            </g>

            {/* Right Front Paw (Physically Rested on Search Bar!) */}
            <g transform="translate(98, 108)">
              <ellipse cx="12" cy="14" rx="14" ry="11" fill="#f5ab48" stroke="#d98938" strokeWidth="2" />
              {/* Toe separations */}
              <circle cx="5" cy="18" r="3" fill="#ffd185" />
              <circle cx="12" cy="20" r="3" fill="#ffd185" />
              <circle cx="19" cy="18" r="3" fill="#ffd185" />
            </g>
          </svg>
        </div>

        {/* =========================================
            KITTEN MASCOT (Right)
           ========================================= */}
        <div className="relative flex flex-col items-center animate-bounce-subtle pointer-events-auto group" style={{ animationDelay: '0.4s' }}>
          {/* Playful Floating Speech Bubble */}
          <div className="absolute -top-10 sm:-top-12 -right-4 sm:-right-8 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-2xl rounded-bl-xs border-2 border-brand-coral/20 shadow-lg text-brand-dark flex items-center gap-1.5 transition-transform group-hover:scale-110">
            <span className="text-xs sm:text-sm">🐾</span>
            <span className="text-2xs sm:text-xs font-extrabold font-title whitespace-nowrap text-brand-coral">
              Patini de al gel!
            </span>
          </div>

          <svg
            viewBox="0 0 150 140"
            className="w-24 sm:w-32 md:w-40 h-auto overflow-visible drop-shadow-md"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Soft Shadow behind head */}
            <ellipse cx="75" cy="115" rx="50" ry="16" fill="#3c2f4b" fillOpacity="0.12" />

            {/* Pointy Left Ear */}
            <path
              d="M 34,50 L 16,14 C 28,14 48,22 55,40 Z"
              fill="#f69956"
            />
            <path
              d="M 33,44 L 23,22 C 30,22 43,28 47,38 Z"
              fill="#ffbfcf"
            />

            {/* Pointy Right Ear */}
            <path
              d="M 116,50 L 134,14 C 122,14 102,22 95,40 Z"
              fill="#f69956"
            />
            <path
              d="M 117,44 L 127,22 C 120,22 107,28 103,38 Z"
              fill="#ffbfcf"
            />

            {/* Kitten Head Base */}
            <ellipse cx="75" cy="68" rx="46" ry="40" fill="#fbb67a" />

            {/* Cheeks Fluff */}
            <ellipse cx="42" cy="76" rx="12" ry="8" fill="#ffe2c4" />
            <ellipse cx="108" cy="76" rx="12" ry="8" fill="#ffe2c4" />

            {/* White Muzzle */}
            <ellipse cx="75" cy="78" rx="22" ry="16" fill="#ffffff" />

            {/* Cute Pink Triangle Nose */}
            <path
              d="M 71,72 L 79,72 L 75,76 Z"
              fill="#ff6b8b"
            />

            {/* Sweet Kitten Mouth */}
            <path
              d="M 71,77 Q 75,80 75,76 Q 75,80 79,77"
              stroke="#3c2f4b"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
            />

            {/* Whiskers */}
            <path d="M 45,74 L 24,71" stroke="#3c2f4b" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
            <path d="M 44,79 L 22,81" stroke="#3c2f4b" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
            <path d="M 105,74 L 126,71" stroke="#3c2f4b" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
            <path d="M 106,79 L 128,81" stroke="#3c2f4b" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />

            {/* Happy Curved Wink / Sparkle Eyes */}
            {/* Left Big Eye */}
            <ellipse cx="54" cy="58" rx="7" ry="9" fill="#2e1b40" />
            <circle cx="52" cy="55" r="3" fill="#ffffff" />
            <circle cx="57" cy="62" r="1.5" fill="#ffffff" />

            {/* Right Big Eye */}
            <ellipse cx="96" cy="58" rx="7" ry="9" fill="#2e1b40" />
            <circle cx="94" cy="55" r="3" fill="#ffffff" />
            <circle cx="99" cy="62" r="1.5" fill="#ffffff" />

            {/* Cute Pink Cheeks */}
            <ellipse cx="44" cy="70" rx="5" ry="3" fill="#ff7f9e" fillOpacity="0.45" />
            <ellipse cx="106" cy="70" rx="5" ry="3" fill="#ff7f9e" fillOpacity="0.45" />

            {/* Coral Collar with Bell */}
            <path
              d="M 46,104 C 64,114 86,114 104,104"
              stroke="#f16a40"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <circle cx="75" cy="112" r="5" fill="#f8c12b" stroke="#d49a09" strokeWidth="1.5" />

            {/* Left Front Kitten Paw (Physically Rested on Search Bar!) */}
            <g transform="translate(36, 108)">
              <ellipse cx="11" cy="13" rx="12" ry="10" fill="#ffffff" stroke="#f69956" strokeWidth="2" />
              <circle cx="5" cy="16" r="2.5" fill="#ffbfcf" />
              <circle cx="11" cy="18" r="2.5" fill="#ffbfcf" />
              <circle cx="17" cy="16" r="2.5" fill="#ffbfcf" />
            </g>

            {/* Right Front Kitten Paw (Physically Rested on Search Bar!) */}
            <g transform="translate(93, 108)">
              <ellipse cx="11" cy="13" rx="12" ry="10" fill="#ffffff" stroke="#f69956" strokeWidth="2" />
              <circle cx="5" cy="16" r="2.5" fill="#ffbfcf" />
              <circle cx="11" cy="18" r="2.5" fill="#ffbfcf" />
              <circle cx="17" cy="16" r="2.5" fill="#ffbfcf" />
            </g>
          </svg>
        </div>

      </div>
    </div>
  );
}
