"use client";
import TrackItem from "./TrackItem";
import useTracks from "@/services/hooks/useTracks";
import { Track } from "./types/Track";
import usePlayer from "@/services/hooks/usePlayer";
import TrackItemSkeleton from "./skeletons/TrackItemSkeleton";

export default function TrackList() {
  const { tracks, isLoading } = useTracks();
  const { updateCurrentTrack, currentTrack, isPlaying, playerRef } =
    usePlayer();

  const loadingSkeletons = new Array(5).fill({});

  return (
    <div className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {isLoading &&
        loadingSkeletons.map((_, index) => (
          <TrackItemSkeleton key={`skeleton-${index}`} />
        ))}

      {tracks?.map((track: Track) => (
        <TrackItem
          key={track.id}
          id={track.id}
          name={track.name}
          artist_name={track.artist_name}
          image={track.image}
          audio={track.audio}
          updateCurrentTrack={updateCurrentTrack}
          currentTrack={currentTrack}
          isPlaying={isPlaying}
          playerRef={playerRef}
        />
      ))}
    </div>
  );
}
