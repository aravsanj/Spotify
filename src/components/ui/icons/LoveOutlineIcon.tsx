import IconProps from "./types/IconProps";

interface IconPropsWithClass extends Omit<IconProps, "width" | "height"> {
  className: string;
}

interface IconPropsWithoutClass extends IconProps {
  className?: never;
}

type LoveOutlineIconProps = IconPropsWithClass | IconPropsWithoutClass;

export default function LoveOutlineIcon(props: LoveOutlineIconProps) {
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
      viewBox="0 0 40 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M19.1506 4.13203L20.0023 4.92368L20.8533 4.13137C24.9367 0.32997 31.2348 0.45444 35.1723 4.544C39.1251 8.65351 39.2703 15.2098 35.6082 19.4886L19.9978 35.6979L4.39108 19.4886C0.728597 15.2093 0.87682 8.64173 4.82604 4.54499C8.76864 0.459139 15.0545 0.324672 19.1506 4.13203Z"
        stroke="white"
        stroke-width="2.5"
      />
    </svg>
  );
}
