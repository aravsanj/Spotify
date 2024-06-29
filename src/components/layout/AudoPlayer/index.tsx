"use client";
import ReactAudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "./styles/custom.css";
import usePlayer from "@/services/hooks/usePlayer";
import Image from "next/image";

function PlaySummary() {
  const { isPlaying, currentTrack } = usePlayer();

  if (!currentTrack) {
    return (
      <div className="absolute flex items-center gap-x-2">
        <div className="h-[50px] w-[50px] rounded-lg bg-white bg-opacity-10"></div>
        <div className="hidden lg:flex lg:flex-col lg:gap-y-2">
          <span className="font-bold text-white">No track is playing</span>
          <span className="text-white">Why not start something?</span>
        </div>
      </div>
    );
  }

  return (
    <div className="absolute flex items-center gap-x-2">
      <Image
        src={currentTrack.image}
        alt={currentTrack.name}
        width={50}
        height={50}
        className={`${isPlaying ? "animate-pulse" : ""} rounded-lg`}
        objectFit="contain"
      />
      <div className="hidden max-w-[182px] lg:flex lg:flex-col lg:gap-y-2">
        <span className="truncate font-bold text-white">
          {currentTrack.name}
        </span>
        <span className="truncate text-white opacity-70">
          {currentTrack.artist_name}
        </span>
      </div>
    </div>
  );
}

export default function AudioPlayer() {
  const { currentTrack, setIsPlaying } = usePlayer();

  const audio = currentTrack?.audio;

  return (
    <div className="fixed bottom-0 w-full">
      <ReactAudioPlayer
        autoPlay
        src={audio}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        layout="stacked-reverse"
        customAdditionalControls={[<PlaySummary key="play-summary" />]}
        volume={0.5}
      />
    </div>
  );
}
