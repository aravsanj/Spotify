import { currentTrack } from "@/lib/types/currentTrack";
import { playerRef } from "@/lib/types/playerRef";
import { updateCurrentTrack } from "@/lib/types/updateCurrentTrack";

type track = {
  id: string;
  title: string;
  audio: string;
  image: string;
  artist_name: string;
  updateCurrentTrack: updateCurrentTrack;
  currentTrack: currentTrack;
  isPlaying: boolean;
  playerRef: playerRef;
};

export type TableItem = {
  track: track;
  album: string;
  duration: string;
};
