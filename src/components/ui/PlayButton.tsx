import PlayIcon from "./icons/PlayIcon";

interface PlayButtonProps {
  onClick: () => void;
}

export default function PlayButton({ onClick }: PlayButtonProps) {
  return (
    <button onClick={onClick}>
      <PlayIcon width={50} height={50} />
    </button>
  );
}
