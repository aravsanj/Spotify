"use client";
import useTracks from "@/services/hooks/useTracks";
import Head from "./Head";
import dynamic from "next/dynamic";
import usePlayer from "@/services/hooks/usePlayer";
import { parseSecondsToTime } from "@/lib/utils/parseSecondsToTime";
import useInfiniteTracks from "@/services/hooks/useInfiniteTracks";
import { useEffect } from "react";
import { Skeleton } from "@/components/ui/Skeleton";
const TableComponent = dynamic(() => import("./Table"), {
  ssr: false,
});

type track = {
  id: string;
  name: string;
  audio: string;
  image: string;
  artist_name: string;
  album_name: string;
  duration: number;
};

type table = {
  track: {
    id: string;
    title: string;
    audio: string;
    image: string;
    artist_name: string;
    updateCurrentTrack: (audio: string) => void;
    currentTrack: string;
    isPlaying: boolean;
    playerRef: React.RefObject<HTMLAudioElement>;
  };
  album: string;
  duration: number;
};

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

  const table = tracks?.map((track: track) => ({
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
      {isValidating && (
        <>
          <Skeleton className="mt-4 h-10 w-full" />
          <Skeleton className="mt-4 h-10 w-full" />
        </>
      )}
    </div>
  );
}
