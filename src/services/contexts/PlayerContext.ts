import { createContext, Dispatch, SetStateAction } from "react";

interface PlayerContextProps {
  isPlaying: boolean;

  currentTrack: {
    name: string;
    artist_name: string;
    image: string;
    audio: string;
  } | null;

  updateCurrentTrack: (track: {
    name: string;
    artist_name: string;
    image: string;
    audio: string;
  }) => void;

  setIsPlaying: Dispatch<SetStateAction<boolean>>;
}

export const PlayerContext = createContext<PlayerContextProps>(
  {} as PlayerContextProps
);
