"use client";
import { useState } from "react";
import { PlayerContext } from "../contexts/PlayerContext";

type currentTrackType = {
  name: string;
  artist_name: string;
  image: string;
  audio: string;
};

export default function PlayerContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState<null | currentTrackType>(
    null
  );

  function updateCurrentTrack(track: {
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
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
}
