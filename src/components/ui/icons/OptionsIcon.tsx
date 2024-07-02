import IconProps from "./types/IconProps";

interface IconPropsWithClass extends Omit<IconProps, "width" | "height"> {
  className: string;
}

interface IconPropsWithoutClass extends IconProps {
  className?: never;
}

type OptionsIconProps = IconPropsWithClass | IconPropsWithoutClass;

export default function OptionsIcon(props: OptionsIconProps) {
  let { className } = props;
  let width = 44;
  let height = 44;

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
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clip-path="url(#clip0_149_3258)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12.5714 22C12.5714 23.7358 11.1643 25.1429 9.4285 25.1429C7.69275 25.1429 6.28564 23.7358 6.28564 22C6.28564 20.2643 7.69275 18.8572 9.4285 18.8572C11.1643 18.8572 12.5714 20.2643 12.5714 22ZM25.1428 22C25.1428 23.7358 23.7357 25.1429 21.9999 25.1429C20.2642 25.1429 18.8571 23.7358 18.8571 22C18.8571 20.2643 20.2642 18.8572 21.9999 18.8572C23.7357 18.8572 25.1428 20.2643 25.1428 22ZM34.5714 25.1429C36.3071 25.1429 37.7142 23.7358 37.7142 22C37.7142 20.2643 36.3071 18.8572 34.5714 18.8572C32.8356 18.8572 31.4285 20.2643 31.4285 22C31.4285 23.7358 32.8356 25.1429 34.5714 25.1429Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_149_3258">
          <rect width="44" height="44" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}