import PlayButton from "@/components/ui/PlayButton";
import usePlayer from "@/services/hooks/usePlayer";
import Image from "next/image";

interface SearchItemProps {
  id: string;
  name: string;
  artist_name: string;
  image: string;
  album_name: string;
  audio: string;
}

export default function SearchItem({
  id,
  name,
  artist_name,
  image,
  album_name,
  audio,
}: SearchItemProps) {
  const { updateCurrentTrack, currentTrack, isPlaying, playerRef } =
    usePlayer();

  const isCurrentPlaying = currentTrack?.id === id && isPlaying;

  function onPlay() {
    if (currentTrack?.id === id) {
      playerRef.current?.audio?.current?.play();
      return;
    }

    updateCurrentTrack({
      id,
      name,
      artist_name,
      image,
      audio,
    });
  }

  function onPause() {
    playerRef.current?.audio?.current?.pause();
  }

  return (
    <div className="flex w-[95%] items-center justify-between rounded-lg bg-white bg-opacity-[0.04] p-4 shadow-sm">
      <div className="flex items-center space-x-4">
        <Image
          src={image}
          alt={name}
          width={64}
          height={64}
          className={`rounded-lg ${isCurrentPlaying ? "animate-pulse" : ""}`}
        />
        <div>
          <h3 className="text-lg font-semibold text-white">{name}</h3>
          <p className="text-sm text-gray-500">{artist_name}</p>
          <p className="text-sm text-gray-500">{album_name}</p>
        </div>
      </div>
      <PlayButton
        isPlaying={isCurrentPlaying}
        onPlay={() => onPlay()}
        onPause={() => onPause()}
      />
    </div>
  );
}
