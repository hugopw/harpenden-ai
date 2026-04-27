// Geometric flat llama illustration — Sherpas register, used on the
// teen path only. Styled inline so it ports cleanly without an asset
// download. Tasteful nod to the Sherpas social mascot.
export function Llama({
  className,
  size = 240,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      viewBox="0 0 240 240"
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
      role="img"
    >
      <defs>
        <linearGradient id="llamaCoat" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F5E0C5" />
          <stop offset="55%" stopColor="#E0B989" />
          <stop offset="100%" stopColor="#B07645" />
        </linearGradient>
        <linearGradient id="llamaScarf" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#29ABE2" />
          <stop offset="35%" stopColor="#5B6BF5" />
          <stop offset="70%" stopColor="#8B2FC9" />
          <stop offset="100%" stopColor="#E91E8C" />
        </linearGradient>
      </defs>
      {/* body */}
      <path
        d="M70,180 C70,140 95,118 120,118 C145,118 170,140 170,180 L170,210 C170,218 165,222 158,222 L82,222 C75,222 70,218 70,210 Z"
        fill="url(#llamaCoat)"
      />
      {/* legs */}
      <rect x="84" y="200" width="14" height="32" rx="4" fill="#7C5234" />
      <rect x="142" y="200" width="14" height="32" rx="4" fill="#7C5234" />
      {/* neck */}
      <path
        d="M132,118 C132,90 142,70 156,68 C172,66 184,82 184,108 L168,118 Z"
        fill="url(#llamaCoat)"
      />
      {/* head */}
      <ellipse cx="178" cy="58" rx="22" ry="18" fill="url(#llamaCoat)" />
      {/* ears */}
      <path d="M170,42 L172,28 L182,42 Z" fill="#7C5234" />
      <path d="M188,40 L194,28 L198,42 Z" fill="#7C5234" />
      {/* snout */}
      <ellipse cx="195" cy="62" rx="9" ry="7" fill="#FFF6E8" />
      {/* eye */}
      <circle cx="183" cy="54" r="2.5" fill="#191931" />
      {/* eye sparkle */}
      <circle cx="184" cy="53" r="0.9" fill="#fff" />
      {/* scarf — Sherpas gradient nod */}
      <path
        d="M138,108 C148,104 168,104 178,108 L182,124 C172,120 148,120 136,124 Z"
        fill="url(#llamaScarf)"
      />
      {/* scarf tail */}
      <path d="M138,124 L130,150 L142,148 L146,124 Z" fill="url(#llamaScarf)" />
      {/* tuft of hair */}
      <path
        d="M170,40 C173,30 180,28 185,32 C181,36 178,40 176,46 Z"
        fill="#7C5234"
      />
    </svg>
  );
}
