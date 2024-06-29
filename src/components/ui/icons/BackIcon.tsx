import IconProps from "./types/IconProps";

interface BackIconProps extends IconProps {}

export default function BackIcon({ width, height }: BackIconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle opacity="0.5" cx="20" cy="20" r="20" fill="black" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.5425 19.302C12.1381 19.7064 12.1546 20.3669 12.5787 20.7506L23.2736 30.4269C23.7855 30.8901 24.576 30.8506 25.0392 30.3386C25.5023 29.8267 25.4628 29.0362 24.9509 28.5731L15.4253 19.9547L24.9961 10.3839C25.4843 9.89573 25.4843 9.10427 24.9961 8.61612C24.508 8.12796 23.7165 8.12796 23.2284 8.61612L12.5425 19.302Z"
        fill="white"
      />
    </svg>
  );
}
