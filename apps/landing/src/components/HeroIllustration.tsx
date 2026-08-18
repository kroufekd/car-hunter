/**
 * Ploché vektorové panorama: cesta klidnou krajinou vede k rannímu slunci,
 * kolem body evropských trhů s auty. Žádné fotky, jen paleta značky.
 */
export function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 1440 640"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label="Ilustrace: cesta klidnou krajinou vede k rannímu slunci, kolem body evropských trhů s auty"
    >
      <rect width="1440" height="640" fill="#364f3b" />
      <circle cx="988" cy="150" r="84" fill="#f0b892" />
      <path
        d="M700 118c9-9 18-9 27 0"
        fill="none"
        stroke="#f9f6f0"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity=".65"
      />
      <path
        d="M752 92c8-8 15-8 23 0"
        fill="none"
        stroke="#f9f6f0"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity=".5"
      />
      <path
        d="M0 372c180-50 340-66 520-42s300-12 480-8 320 26 440 14v304H0Z"
        fill="#5d7355"
      />
      <path d="M104 356l17-40 17 40Z" fill="#2b4030" />
      <path d="M132 344l14-32 14 32Z" fill="#2b4030" />
      <path d="M1288 352l15-36 15 36Z" fill="#2b4030" />
      <path d="M0 420c240-36 480-48 720-32s480-8 720 8v244H0Z" fill="#d8d1c0" />
      <path d="M0 496c260-34 560-40 860-20 260 17 440 2 580 10v154H0Z" fill="#e0dace" />
      <path d="M0 576c320-28 640-32 960-16 240 12 400 2 480 6v74H0Z" fill="#ece7dd" />
      <path
        d="M360 640c200-88 400-170 588-244l18 0c-166 90-306 164-406 244Z"
        fill="#4c4539"
      />
      <path
        d="M460 640c180-92 330-178 496-242"
        fill="none"
        stroke="#f9f6f0"
        strokeWidth="5"
        strokeDasharray="30 26"
        opacity=".9"
      />
      <g transform="translate(600 552) rotate(-17)">
        <rect x="-34" y="-14" width="68" height="22" rx="10" fill="#bc6f4c" />
        <path d="M-18-24h30a8 8 0 0 1 8 8v2h-46v-2a8 8 0 0 1 8-8Z" fill="#bc6f4c" />
        <circle cx="-16" cy="10" r="7" fill="#2a2620" />
        <circle cx="18" cy="10" r="7" fill="#2a2620" />
      </g>
      <g>
        <circle cx="962" cy="382" r="9" fill="#bc6f4c" />
        <circle cx="962" cy="382" r="3.4" fill="#f9f6f0" />
        <circle cx="1180" cy="452" r="9" fill="#bc6f4c" />
        <circle cx="1180" cy="452" r="3.4" fill="#f9f6f0" />
        <circle cx="286" cy="512" r="9" fill="#bc6f4c" />
        <circle cx="286" cy="512" r="3.4" fill="#f9f6f0" />
      </g>
    </svg>
  );
}
