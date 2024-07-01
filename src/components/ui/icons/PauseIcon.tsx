import IconProps from "./types/IconProps";

interface PauseIconProps extends IconProps {}

export default function PauseIcon({ width, height }: PauseIconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 70 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_131_2989)">
        <circle cx="35" cy="35" r="30" fill="#65D36E" />
        <rect x="24" y="20" width="6" height="30" fill="black" />
        <rect x="40" y="20" width="6" height="30" fill="black" />
      </g>
      <defs>
        <filter
          id="filter0_d_131_2989"
          x="0"
          y="0"
          width="70"
          height="70"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_131_2989"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_131_2989"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
