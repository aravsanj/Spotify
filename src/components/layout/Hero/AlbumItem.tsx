import Image from "next/image";
import { Album } from "./types/Album";
import { Skeleton } from "@/components/ui/Skeleton";

interface AlbumItemProps {
  album: Album;
}

export default function AlbumItem({ album }: AlbumItemProps) {
  return (
    <div className="bg-black bg-opacity-10 p-4 lg:h-[82px] lg:min-w-fit lg:p-0 lg:pr-10 2xl:pr-20">
      <div className="flex flex-col items-center gap-y-4 text-center font-semibold lg:flex-row lg:gap-x-4 lg:text-left">
        <Image src={album.image} alt={album.name} width={82} height={82} />

        <span className="block w-32 overflow-hidden px-4 lg:w-full">
          <span className="block truncate whitespace-nowrap text-nowrap text-white lg:animate-none lg:text-wrap">
            {album.name}
          </span>
        </span>
      </div>
    </div>
  );
}
