type P = { className?: string };

const base = {
  fill: "none",
  strokeWidth: 1.5,
  viewBox: "0 0 24 24",
} as const;

export const Star = ({ className = "w-4 h-4" }: P) => (
  <svg aria-hidden="true" focusable="false" className={`${className} fill-current`} viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

export const Pin = ({ className = "w-4 h-4" }: P) => (
  <svg aria-hidden="true" focusable="false" className={`${className} stroke-current`} {...base}>
    <path d="M12 21c-4.418 0-8-3.582-8-8 0-4.667 8-11 8-11s8 6.333 8 11c0 4.418-3.582 8-8 8z" />
    <circle cx="12" cy="13" r="3" />
  </svg>
);

export const PinSimple = ({ className = "w-4 h-4" }: P) => (
  <svg aria-hidden="true" focusable="false" className={`${className} stroke-current`} {...base}>
    <path d="M12 21c-4.418 0-8-3.582-8-8 0-4.667 8-11 8-11s8 6.333 8 11c0 4.418-3.582 8-8 8z" />
  </svg>
);

export const Monitor = ({ className = "w-4 h-4" }: P) => (
  <svg aria-hidden="true" focusable="false" className={`${className} stroke-current`} {...base}>
    <rect height="14" rx="2" width="20" x="2" y="3" />
    <line x1="8" x2="16" y1="21" y2="21" />
    <line x1="12" x2="12" y1="17" y2="21" />
  </svg>
);

export const Shield = ({ className = "w-4 h-4" }: P) => (
  <svg aria-hidden="true" focusable="false" className={`${className} stroke-current`} {...base}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

export const ShieldCheck = ({ className = "w-5 h-5" }: P) => (
  <svg aria-hidden="true" focusable="false" className={`${className} stroke-current`} {...base}>
    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

export const StarOutline = ({ className = "w-5 h-5" }: P) => (
  <svg aria-hidden="true" focusable="false" className={`${className} stroke-current`} {...base}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

export const MapPin = ({ className = "w-5 h-5" }: P) => (
  <svg aria-hidden="true" focusable="false" className={`${className} stroke-current`} {...base}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export const Clock = ({ className = "w-4 h-4" }: P) => (
  <svg aria-hidden="true" focusable="false" className={`${className} stroke-current`} {...base}>
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

export const Calendar = ({ className = "w-4 h-4" }: P) => (
  <svg aria-hidden="true" focusable="false" className={`${className} stroke-current`} {...base}>
    <rect height="18" rx="2" ry="2" width="18" x="3" y="4" />
    <line x1="16" x2="16" y1="2" y2="6" />
    <line x1="8" x2="8" y1="2" y2="6" />
    <line x1="3" x2="21" y1="10" y2="10" />
  </svg>
);

export const Stars = ({ className = "w-4 h-4" }: P) => (
  <>
    {[0, 1, 2, 3, 4].map((i) => (
      <Star key={i} className={className} />
    ))}
  </>
);

export const Sparkle = ({ className = "w-6 h-6" }: P) => (
  <svg aria-hidden="true" focusable="false" className={`${className} fill-current`} viewBox="0 0 24 24">
    <path d="M12 1.5c.6 5.9 4.6 9.9 10.5 10.5-5.9.6-9.9 4.6-10.5 10.5C11.4 16.6 7.4 12.6 1.5 12 7.4 11.4 11.4 7.4 12 1.5z" />
  </svg>
);
