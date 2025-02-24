import IconProps from "./types/IconProps";

interface IconPropsWithClass extends Omit<IconProps, "width" | "height"> {
  className: string;
}

interface IconPropsWithoutClass extends IconProps {
  className?: never;
}

type DownloadIconProps = IconPropsWithClass | IconPropsWithoutClass;

export default function DownloadIcon(props: DownloadIconProps) {
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
      viewBox="0 0 52 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clip-path="url(#clip0_149_3259)">
        <circle cx="26" cy="26" r="17.75" stroke="white" stroke-width="2.5" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M34.839 28.9289L26.884 36.8839C26.3959 37.372 25.6044 37.372 25.1162 36.8839L17.1613 28.9289C16.6731 28.4408 16.6731 27.6493 17.1613 27.1612C17.6494 26.673 18.4409 26.673 18.9291 27.1612L24.7501 32.9822L24.7501 17C24.7501 16.3096 25.3098 15.75 26.0001 15.75C26.6905 15.75 27.2501 16.3096 27.2501 17L27.2501 32.9822L33.0712 27.1612C33.5594 26.673 34.3508 26.673 34.839 27.1612C35.3271 27.6493 35.3271 28.4408 34.839 28.9289Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_149_3259">
          <rect width="52" height="52" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
