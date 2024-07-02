"use client";
import Head from "./Head";
import dynamic from "next/dynamic";
import usePlayer from "@/services/hooks/usePlayer";
import { parseSecondsToTime } from "@/lib/utils/parseSecondsToTime";
import useInfiniteTracks from "@/services/hooks/useInfiniteTracks";
import { useEffect } from "react";
import TableItemSkeleton from "./skeletons/TableItemSkeleton";
import { trackInfinite } from "./types/trackInfinite";
const TableComponent = dynamic(() => import("./Table"), {
  ssr: false,
});

export default function List() {
  const { tracks, nextPage, isValidating } = useInfiniteTracks();

  const { updateCurrentTrack, currentTrack, isPlaying, playerRef } =
    usePlayer();

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } =
        document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight - 20) {
        nextPage();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [nextPage]);

  const table = tracks?.map((track: trackInfinite) => ({
    track: {
      id: track.id,
      title: track.name,
      audio: track.audio,
      image: track.image,
      artist_name: track.artist_name,
      updateCurrentTrack,
      currentTrack,
      isPlaying,
      playerRef,
    },
    album: track.album_name,
    duration: parseSecondsToTime(track.duration),
  }));

  return (
    <div className="flex flex-col">
      <Head />
      <TableComponent data={table} />
      {isValidating && <TableItemSkeleton />}
    </div>
  );
}
