import IconProps from "./types/IconProps";

interface IconPropsWithClass extends Omit<IconProps, "width" | "height"> {
  className: string;
}

interface IconPropsWithoutClass extends IconProps {
  className?: never;
}

type PlayIconProps = IconPropsWithClass | IconPropsWithoutClass;

export default function PlayIcon(props: PlayIconProps) {
  let { className } = props;
  let width = 70;
  let height = 70;

  if ("width" in props) {
    width = props.width;
  }

  if ("height" in props) {
    height = props.height;
  }

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 70 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g filter="">
        <circle cx="35" cy="35" r="30" fill="#65D36E" />
        <path
          d="M47.5 35C48.5 34 48.5 32 47.5 31L31 22C30 21 28 22 28 24V46C28 48 30 49 31 48L47.5 35Z"
          fill="black"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_131_2989"
          x="0"
          y="0"
          width="104"
          height="104"
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
          <feGaussianBlur stdDeviation="8" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.45 0"
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
