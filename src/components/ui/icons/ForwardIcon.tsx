import IconProps from "./types/IconProps";

interface ForwardIconProps extends IconProps {}

export default function ForwardIcon({ width, height }: ForwardIconProps) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle opacity="0.5" cx="20" cy="20" r="20" fill="black" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.0701 19.302C27.4745 19.7064 27.458 20.3669 27.0339 20.7506L16.339 30.4269C15.8271 30.8901 15.0366 30.8506 14.5735 30.3386C14.1103 29.8267 14.1498 29.0362 14.6617 28.5731L24.1873 19.9547L14.6165 10.3839C14.1283 9.89573 14.1283 9.10427 14.6165 8.61612C15.1046 8.12796 15.8961 8.12796 16.3843 8.61612L27.0701 19.302Z"
        fill="white"
      />
    </svg>
  );
}
