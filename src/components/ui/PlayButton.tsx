import PauseIcon from "./icons/PauseIcon";
import PlayIcon from "./icons/PlayIcon";

interface PlayButtonProps {
  isPlaying: boolean;
  onPlay: () => void;
  onPause: () => void;
}

export default function PlayButton({
  onPlay,
  isPlaying,
  onPause,
}: PlayButtonProps) {
  return (
    <>
      {isPlaying ? (
        <button onClick={onPause}>
          <PauseIcon width={50} height={50} />
        </button>
      ) : (
        <button onClick={onPlay}>
          <PlayIcon width={50} height={50} />
        </button>
      )}
    </>
  );
}
