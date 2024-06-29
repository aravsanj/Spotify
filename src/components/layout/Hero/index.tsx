"use client";
import Header from "./Header";
import Greeting from "./Greeting";
import AlbumItemSkeleton from "./AlbumItemSkeleton";
import dynamic from "next/dynamic";

const Albums = dynamic(() => import("./Albums"), {
  ssr: false,
  loading: () => <AlbumItemSkeleton />,
});

export default function Hero() {
  return (
    <div className="flex w-full flex-col gap-y-7 px-6 md:px-4 lg:px-10">
      <Header />
      <Greeting />
      <Albums />
    </div>
  );
}
