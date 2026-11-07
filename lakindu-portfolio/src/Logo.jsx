
export default function Logo({ size = 40 }) {
  return (
    <svg className="lgmark" width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="lgGrad" x1="4" y1="2" x2="36" y2="38" gradientUnits="userSpaceOnUse">
          <stop offset="0" style={{ stopColor: 'var(--ac)' }} />
          <stop offset="1" style={{ stopColor: 'var(--pk)' }} />
        </linearGradient>
      </defs>
      <circle cx="20" cy="20" r="20" fill="url(#lgGrad)" />
      {/* L */}
      <path d="M8 13V27H16" stroke="#07080d" strokeWidth="3.6" strokeLinecap="round" strokeLinejoin="round" />
      {/* G */}
      <path d="M31.4 15.5A7 7 0 1 0 33 20H27" stroke="#07080d" strokeWidth="3.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}