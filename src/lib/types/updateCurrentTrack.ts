export type updateCurrentTrack = (track: {
  id: string;
  name: string;
  artist_name: string;
  image: string;
  audio: string;
}) => void;
