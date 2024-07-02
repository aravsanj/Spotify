import { currentTrack } from "@/lib/types/currentTrack";
import { playerRef } from "@/lib/types/playerRef";
import { updateCurrentTrack } from "@/lib/types/updateCurrentTrack";
import usePlayer from "@/services/hooks/usePlayer";
import Image from "next/image";

interface TitleCardProps {
  id: string;
  image: string;
  title: string;
  artist_name: string;
  audio: string;
  updateCurrentTrack: updateCurrentTrack;
  currentTrack: currentTrack;
  isPlaying: boolean;
  playerRef: playerRef;
}

export default function TitleCard({
  id,
  image,
  title,
  artist_name,
  audio,
}: TitleCardProps) {
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
      name: title,
      artist_name,
      image,
      audio,
    });
  }

  function onPause() {
    playerRef.current?.audio?.current?.pause();
  }

  return (
    <div
      className="flex cursor-pointer gap-x-4"
      onClick={isCurrentPlaying ? onPause : onPlay}
    >
      <div className="relative h-12 w-12 flex-shrink-0 sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-20 lg:w-20">
        <Image
          className={`${isCurrentPlaying ? "animate-pulse" : ""} rounded-lg`}
          layout="fill"
          objectFit="cover"
          src={image}
          alt={title}
        />
      </div>
      <div className="flex flex-col">
        <span className="w-28 truncate text-nowrap text-sm font-semibold sm:text-base">
          {title}
        </span>
        <span className="font-[#B3B3B3] text-xs">{artist_name}</span>
      </div>
    </div>
  );
}
