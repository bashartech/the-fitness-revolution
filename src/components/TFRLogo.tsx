import React from 'react';

interface TFRLogoProps {
  className?: string;
  size?: number | string;
  showText?: boolean;
}

export const TFRLogo: React.FC<TFRLogoProps> = ({
  className = "w-12 h-12",
  size,
  showText = false,
}) => {
  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      <svg
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={size ? { width: size, height: size } : undefined}
        className="w-full h-full shrink-0 drop-shadow-[0_0_20px_rgba(255,196,0,0.25)]"
        aria-label="The Fitness Revolution TFR Official Logo"
      >
        <defs>
          {/* Gold metallic gradient */}
          <linearGradient id="goldMetallic" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF176" />
            <stop offset="25%" stopColor="#FFD54F" />
            <stop offset="50%" stopColor="#FFC107" />
            <stop offset="75%" stopColor="#FFA000" />
            <stop offset="100%" stopColor="#FF8F00" />
          </linearGradient>

          {/* Electric Blue gradient */}
          <linearGradient id="blueElectric" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4DD0E1" />
            <stop offset="35%" stopColor="#00E5FF" />
            <stop offset="70%" stopColor="#00AEEF" />
            <stop offset="100%" stopColor="#0288D1" />
          </linearGradient>

          {/* 3D Gold bevel for TFR text */}
          <linearGradient id="tfrBevelTop" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFDE7" />
            <stop offset="40%" stopColor="#FFD54F" />
            <stop offset="70%" stopColor="#FFB300" />
            <stop offset="100%" stopColor="#C47D00" />
          </linearGradient>

          <linearGradient id="tfrBevelDark" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#8D5500" />
            <stop offset="100%" stopColor="#432600" />
          </linearGradient>

          {/* Rim dual gradient */}
          <linearGradient id="rimGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFD54F" />
            <stop offset="45%" stopColor="#FFA000" />
            <stop offset="55%" stopColor="#00E5FF" />
            <stop offset="100%" stopColor="#0088CC" />
          </linearGradient>

          {/* Subtle inner dark radial shadow */}
          <radialGradient id="innerBlack" cx="50%" cy="50%" r="50%">
            <stop offset="60%" stopColor="#0A0A0A" />
            <stop offset="95%" stopColor="#020202" />
            <stop offset="100%" stopColor="#000000" />
          </radialGradient>
        </defs>

        {/* Circular Outer Border Ring */}
        <circle cx="250" cy="250" r="240" fill="url(#innerBlack)" stroke="url(#rimGradient)" strokeWidth="12" />

        {/* Inner thin accent ring */}
        <circle cx="250" cy="250" r="228" stroke="rgba(255, 213, 79, 0.4)" strokeWidth="2" strokeDasharray="12 4" />

        {/* Male Silhouette (Left - Gold) */}
        <g id="male-silhouette">
          {/* Hair / Head / Chest / Bicep */}
          <path
            d="M 180 115 
               C 165 110, 155 125, 150 140 
               C 135 120, 125 150, 130 170 
               C 115 155, 105 180, 110 200 
               C 115 220, 135 225, 150 220
               C 160 215, 175 225, 190 220
               C 210 215, 220 195, 225 180
               C 230 165, 225 150, 215 145
               C 205 140, 200 130, 195 120 Z"
            fill="url(#goldMetallic)"
          />
          {/* Flexed Arm Left */}
          <path
            d="M 120 200 
               C 100 180, 110 150, 130 135
               C 140 120, 150 95, 160 110
               C 165 120, 155 135, 150 145
               C 135 155, 130 180, 140 200 Z"
            fill="url(#goldMetallic)"
          />
          {/* Muscle flow lines */}
          <path
            d="M 130 205 C 160 220, 210 210, 235 225 C 205 235, 150 240, 115 220 Z"
            fill="#FFA000"
          />
        </g>

        {/* Female Silhouette (Right - Electric Blue) */}
        <g id="female-silhouette">
          {/* Ponytail & Head */}
          <path
            d="M 320 115 
               C 335 105, 360 120, 365 140 
               C 380 125, 395 150, 390 175 
               C 375 190, 360 180, 350 170
               C 345 185, 335 195, 320 200
               C 305 205, 290 195, 280 185
               C 270 170, 275 150, 285 140
               C 295 130, 305 120, 320 115 Z"
            fill="url(#blueElectric)"
          />
          {/* Flexed Arm Right */}
          <path
            d="M 370 195
               C 390 180, 395 150, 385 135
               C 375 120, 365 100, 355 110
               C 350 120, 360 135, 365 145
               C 375 160, 370 180, 360 195 Z"
            fill="url(#blueElectric)"
          />
          {/* Female torso muscle line */}
          <path
            d="M 370 205 C 340 220, 290 210, 265 225 C 295 235, 350 240, 385 220 Z"
            fill="#0288D1"
          />
        </g>

        {/* Central Core TFR Metallic Letters */}
        <g id="tfr-letters" filter="drop-shadow(0px 8px 12px rgba(0,0,0,0.8))">
          {/* T letter */}
          <path
            d="M 60 270 L 195 270 L 175 305 L 145 305 L 115 385 L 75 385 L 105 305 L 60 305 Z"
            fill="url(#tfrBevelDark)"
          />
          <path
            d="M 62 268 L 193 268 L 175 300 L 143 300 L 115 380 L 80 380 L 108 300 L 62 300 Z"
            fill="url(#tfrBevelTop)"
          />

          {/* F letter */}
          <path
            d="M 195 270 L 320 270 L 305 305 L 245 305 L 240 320 L 290 320 L 275 350 L 225 350 L 210 385 L 170 385 Z"
            fill="url(#tfrBevelDark)"
          />
          <path
            d="M 197 268 L 318 268 L 305 300 L 243 300 L 238 318 L 288 318 L 275 346 L 223 346 L 210 380 L 175 380 Z"
            fill="url(#tfrBevelTop)"
          />

          {/* R letter */}
          <path
            d="M 315 270 L 415 270 C 445 270, 455 290, 445 320 C 440 335, 425 348, 410 352 L 440 385 L 395 385 L 370 355 L 350 355 L 340 385 L 295 385 Z M 350 305 L 380 305 C 395 305, 400 315, 395 325 C 390 335, 380 335, 365 335 L 340 335 Z"
            fill="url(#tfrBevelDark)"
          />
          <path
            d="M 317 268 L 413 268 C 443 268, 452 288, 442 318 C 437 333, 422 346, 407 350 L 437 380 L 398 380 L 372 352 L 350 352 L 342 380 L 300 380 Z M 352 302 L 380 302 C 393 302, 398 312, 393 322 C 388 332, 378 332, 365 332 L 342 332 Z"
            fill="url(#tfrBevelTop)"
          />
        </g>

        {/* Text: THE FITNESS REVOLUTION */}
        <g id="brand-text">
          <text
            x="248"
            y="418"
            textAnchor="middle"
            fontFamily="'Bebas Neue', 'Impact', sans-serif"
            fontSize="34"
            letterSpacing="3"
            fontWeight="bold"
          >
            <tspan fill="#FFFFFF">THE FITNESS </tspan>
            <tspan fill="url(#goldMetallic)">REVOLUTION</tspan>
          </text>
        </g>

        {/* ECG / Heartbeat line with Cyan on left and Gold on right */}
        <g id="heartbeat-pulse" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
          {/* Left blue segment */}
          <path
            d="M 80 442 L 210 442 L 225 442"
            stroke="url(#blueElectric)"
          />
          {/* Central heartbeat spike */}
          <path
            d="M 225 442 L 235 432 L 243 458 L 253 420 L 263 464 L 271 436 L 278 442"
            stroke="#FFD54F"
            strokeWidth="5"
          />
          {/* Right gold segment */}
          <path
            d="M 278 442 L 420 442"
            stroke="url(#goldMetallic)"
          />
        </g>
      </svg>

      {showText && (
        <div className="flex flex-col">
          <span className="font-display text-xl sm:text-2xl font-bold tracking-wider text-white leading-none">
            THE FITNESS <span className="text-[#FFC400]">REVOLUTION</span>
          </span>
          <span className="text-[10px] tracking-[0.25em] text-[#B7B7B7] uppercase font-semibold">
            TFR · Nazimabad Karachi
          </span>
        </div>
      )}
    </div>
  );
};
