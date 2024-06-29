"use client";
import TrackItem from "./TrackItem";
import useTracks from "@/services/hooks/useTracks";
import { Track } from "./types/Track";

export default function TrackList() {
  const { tracks, isLoading } = useTracks();
  return (
    <div className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {tracks?.map((track: Track) => (
        <TrackItem
          key={track.id}
          name={track.name}
          artist_name={track.artist_name}
          image={track.image}
          audio={track.audio}
        />
      ))}
    </div>
  );
}
