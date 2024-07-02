import { currentTrack } from "@/lib/types/currentTrack";
import { playerRef } from "@/lib/types/playerRef";
import { updateCurrentTrack } from "@/lib/types/updateCurrentTrack";
import { createContext, Dispatch, RefObject, SetStateAction } from "react";

interface PlayerContextProps {
  isPlaying: boolean;

  currentTrack: currentTrack;

  updateCurrentTrack: updateCurrentTrack;

  setIsPlaying: Dispatch<SetStateAction<boolean>>;

  playerRef: playerRef;
}

export const PlayerContext = createContext<PlayerContextProps>(
  {} as PlayerContextProps
);
