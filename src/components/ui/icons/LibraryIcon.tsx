import IconProps from "./types/IconProps";

interface LibraryIconProps extends IconProps {}

export default function LibraryIcon({ width, height }: LibraryIconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="3" height="26" rx="1.5" fill="white" />
      <rect x="8" width="3" height="26" rx="1.5" fill="white" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.5 3.67524V23.5191H23.5V6.76681L18.5 3.67524ZM17.5288 0.151696C16.8627 -0.260161 16 0.215122 16 0.993937V25.0076C16 25.5557 16.4477 26 17 26H25C25.5523 26 26 25.5557 26 25.0076V5.94045C26 5.59781 25.8219 5.2794 25.5288 5.09821L17.5288 0.151696Z"
        fill="white"
      />
    </svg>
  );
}
