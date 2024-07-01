import { createContext, Dispatch, RefObject, SetStateAction } from "react";
import H5AudioPlayer from "react-h5-audio-player";

interface PlayerContextProps {
  isPlaying: boolean;

  currentTrack: {
    id: string;
    name: string;
    artist_name: string;
    image: string;
    audio: string;
  } | null;

  updateCurrentTrack: (track: {
    id: string;
    name: string;
    artist_name: string;
    image: string;
    audio: string;
  }) => void;

  setIsPlaying: Dispatch<SetStateAction<boolean>>;

  playerRef: RefObject<H5AudioPlayer>;
}

export const PlayerContext = createContext<PlayerContextProps>(
  {} as PlayerContextProps
);
