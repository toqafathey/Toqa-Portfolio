/** Abstract, decorative composition: layered planes and arcs suggesting content planning and campaign structure. */
export default function HeroGraphic() {
  return (
    <svg
      viewBox="0 0 400 400"
      className="h-full w-full"
      aria-hidden="true"
      focusable="false"
      role="presentation"
    >
      <defs>
        <linearGradient id="hg-plane" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#F5F1E9" stopOpacity="0.10" />
          <stop offset="1" stopColor="#F5F1E9" stopOpacity="0.01" />
        </linearGradient>
        <linearGradient id="hg-line" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#B9A276" stopOpacity="0" />
          <stop offset="0.5" stopColor="#B9A276" stopOpacity="0.9" />
          <stop offset="1" stopColor="#B9A276" stopOpacity="0" />
        </linearGradient>
      </defs>

      <g className="origin-center animate-float [transform-box:fill-box]">
        <rect x="92" y="70" width="216" height="270" rx="4" fill="url(#hg-plane)" stroke="#F5F1E9" strokeOpacity="0.18" transform="rotate(-9 200 205)" />
        <rect x="92" y="70" width="216" height="270" rx="4" fill="url(#hg-plane)" stroke="#F5F1E9" strokeOpacity="0.28" transform="rotate(4 200 205)" />
        <rect x="92" y="70" width="216" height="270" rx="4" fill="#171717" fillOpacity="0.55" stroke="#B9A276" strokeOpacity="0.7" transform="rotate(16 200 205)" />

        <g stroke="#F5F1E9" strokeOpacity="0.35" strokeWidth="1" transform="rotate(16 200 205)">
          <line x1="122" y1="118" x2="230" y2="118" />
          <line x1="122" y1="138" x2="262" y2="138" />
          <line x1="122" y1="158" x2="198" y2="158" />
        </g>

        <path d="M60 300 C 140 180, 260 330, 350 150" fill="none" stroke="url(#hg-line)" strokeWidth="1.5" />
        <circle cx="350" cy="150" r="5" fill="#B9A276" />
        <circle cx="205" cy="262" r="3" fill="#F5F1E9" fillOpacity="0.8" />
        <circle cx="60" cy="300" r="3" fill="#F5F1E9" fillOpacity="0.5" />
        <circle cx="200" cy="205" r="150" fill="none" stroke="#B9A276" strokeOpacity="0.18" strokeDasharray="2 7" />
      </g>
    </svg>
  );
}
