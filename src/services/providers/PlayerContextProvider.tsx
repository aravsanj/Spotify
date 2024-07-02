"use client";
import { useRef, useState } from "react";
import { PlayerContext } from "../contexts/PlayerContext";
import H5AudioPlayer from "react-h5-audio-player";
import { currentTrack } from "@/lib/types/currentTrack";

export default function PlayerContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState<currentTrack>(null);
  const playerRef = useRef<H5AudioPlayer>(null);

  function updateCurrentTrack(track: {
    id: string;
    name: string;
    artist_name: string;
    image: string;
    audio: string;
  }) {
    setCurrentTrack(track);
  }

  return (
    <PlayerContext.Provider
      value={{
        isPlaying,
        currentTrack,
        updateCurrentTrack,
        setIsPlaying,
        playerRef,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
}
