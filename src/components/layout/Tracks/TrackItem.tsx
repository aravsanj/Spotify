import PlayButton from "@/components/ui/PlayButton";
import Image from "next/image";
import H5AudioPlayer from "react-h5-audio-player";
import { currentTrack } from "@/lib/types/currentTrack";
import { updateCurrentTrack } from "../../../lib/types/updateCurrentTrack";

interface TrackItemProps {
  id: string;
  name: string;
  artist_name: string;
  image: string;
  audio: string;
  currentTrack: currentTrack;
  isPlaying: boolean;
  playerRef: React.RefObject<H5AudioPlayer>;
  updateCurrentTrack: updateCurrentTrack;
}

export default function TrackItem({
  id,
  name,
  artist_name,
  image,
  audio,
  currentTrack,
  isPlaying,
  playerRef,
  updateCurrentTrack,
}: TrackItemProps) {
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
    <div className="w-full rounded-lg bg-white bg-opacity-[0.04] py-6">
      <div className="flex justify-center">
        <div className="flex flex-col gap-y-4">
          <div className="relative h-[182px] w-[182px]">
            <Image
              src={image}
              alt={name}
              objectFit="contain"
              fill={true}
              className="rounded-lg"
            />
          </div>
          <div className="flex max-w-[182px] flex-col gap-y-2">
            <span className="block truncate font-bold text-white">{name}</span>
            <span className="block truncate text-white opacity-70">
              {artist_name}
            </span>
            <PlayButton
              onPlay={() => onPlay()}
              onPause={() => onPause()}
              isPlaying={isCurrentPlaying}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
