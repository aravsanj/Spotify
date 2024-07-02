"use client";
import { useRouter } from "next/navigation";
import PlayButton from "@/components/ui/PlayButton";
import usePlayer from "@/services/hooks/usePlayer";
import Link from "next/link";

export default function NotFound() {
  const router = useRouter();
  const { updateCurrentTrack, isPlaying, playerRef } = usePlayer();

  const sampleTrack = {
    id: "1532771",
    name: "Let Me Hear You I",
    artist_name: "Paul Werner",
    image:
      "https://usercontent.jamendo.com?type=album&id=404140&width=300&trackid=1532771",
    audio:
      "https://prod-1.storage.jamendo.com/?trackid=1532771&format=mp31&from=%2F65TW4RKEa%2BVaTF5km%2FtPg%3D%3D%7CA654h1VnYZW%2FqayguC569g%3D%3D",
  };

  const isSamplePlaying =
    isPlaying && playerRef.current?.audio?.current?.src === sampleTrack.audio;

  const handlePlay = () => {
    if (playerRef.current?.audio?.current?.src !== sampleTrack.audio) {
      updateCurrentTrack(sampleTrack);
    } else if (!isSamplePlaying) {
      playerRef.current?.audio?.current?.play();
    }
  };

  const handlePause = () => {
    if (isSamplePlaying) {
      playerRef.current?.audio?.current?.pause();
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-[#121212]">
      <span className="flex flex-col items-center gap-x-2 text-xl text-white sm:flex-row">
        <span>Nothing here, click</span>
        <PlayButton
          isPlaying={isSamplePlaying}
          onPlay={handlePlay}
          onPause={handlePause}
        />
        <span>to hear something cool, or go </span>
        <Link href={"/"} className="text-blue-300">
          home
        </Link>
      </span>
    </div>
  );
}
