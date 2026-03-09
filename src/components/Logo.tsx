const Logo = ({ className = "w-10 h-10" }) => {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <defs>
        <linearGradient id="logoGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00F0FF" />
          <stop offset="100%" stopColor="#0099FF" />
        </linearGradient>
        <linearGradient id="logoGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#00F0FF" />
          <stop offset="100%" stopColor="#00FF88" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Outer hexagon frame */}
      <g filter="url(#glow)">
        <path
          d="M100 20 L160 50 L160 150 L100 180 L40 150 L40 50 Z"
          fill="none"
          stroke="url(#logoGradient1)"
          strokeWidth="2"
          opacity="0.6"
        />
      </g>

      {/* Inner hexagon */}
      <g filter="url(#glow)">
        <path
          d="M100 45 L145 70 L145 130 L100 155 L55 130 L55 70 Z"
          fill="none"
          stroke="url(#logoGradient2)"
          strokeWidth="2"
          opacity="0.8"
        />
      </g>

      {/* Central tech circuit pattern */}
      <circle cx="100" cy="100" r="8" fill="url(#logoGradient1)" filter="url(#glow)" />

      {/* Orbital rings */}
      <circle
        cx="100"
        cy="100"
        r="25"
        fill="none"
        stroke="url(#logoGradient1)"
        strokeWidth="1.5"
        opacity="0.5"
        strokeDasharray="4 4"
      />
      <circle
        cx="100"
        cy="100"
        r="40"
        fill="none"
        stroke="url(#logoGradient2)"
        strokeWidth="1"
        opacity="0.3"
        strokeDasharray="6 3"
      />

      {/* Tech nodes */}
      <circle cx="100" cy="60" r="3.5" fill="url(#logoGradient1)" filter="url(#glow)" />
      <circle cx="135" cy="85" r="3.5" fill="url(#logoGradient2)" filter="url(#glow)" />
      <circle cx="135" cy="115" r="3.5" fill="url(#logoGradient1)" filter="url(#glow)" />
      <circle cx="100" cy="140" r="3.5" fill="url(#logoGradient2)" filter="url(#glow)" />
      <circle cx="65" cy="115" r="3.5" fill="url(#logoGradient1)" filter="url(#glow)" />
      <circle cx="65" cy="85" r="3.5" fill="url(#logoGradient2)" filter="url(#glow)" />

      {/* Connection lines */}
      <line
        x1="100"
        y1="100"
        x2="100"
        y2="60"
        stroke="url(#logoGradient1)"
        strokeWidth="1.5"
        opacity="0.6"
      />
      <line
        x1="100"
        y1="100"
        x2="135"
        y2="85"
        stroke="url(#logoGradient2)"
        strokeWidth="1.5"
        opacity="0.6"
      />
      <line
        x1="100"
        y1="100"
        x2="135"
        y2="115"
        stroke="url(#logoGradient1)"
        strokeWidth="1.5"
        opacity="0.6"
      />
      <line
        x1="100"
        y1="100"
        x2="100"
        y2="140"
        stroke="url(#logoGradient2)"
        strokeWidth="1.5"
        opacity="0.6"
      />
      <line
        x1="100"
        y1="100"
        x2="65"
        y2="115"
        stroke="url(#logoGradient1)"
        strokeWidth="1.5"
        opacity="0.6"
      />
      <line
        x1="100"
        y1="100"
        x2="65"
        y2="85"
        stroke="url(#logoGradient2)"
        strokeWidth="1.5"
        opacity="0.6"
      />
    </svg>
  );
};

export default Logo;
