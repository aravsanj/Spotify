import Image from "next/image";

export default function Cover() {
  return (
    <div className="flex w-full items-end gap-x-6 sm:gap-x-10">
      <div className="relative h-[100px] w-[100px] overflow-hidden shadow-2xl bottom-line sm:h-[180px] sm:w-[180px] md:h-[230px] md:w-[230px] lg:h-[297px] lg:w-[297px]">
        <Image
          src={"https://images.unsplash.com/photo-1521417170173-29cd2de82858"}
          alt="cover-image"
          objectFit="cover"
          layout="fill"
        />
      </div>
      <div>
        <div className="flex flex-col text-white sm:gap-y-2 md:gap-y-3">
          <span className="text-sm drop-shadow-xl sm:text-base">
            PUBLIC PLAYLIST
          </span>
          <span className="text-xl font-bold drop-shadow-xl sm:text-4xl md:text-6xl xl:text-7xl 2xl:text-8xl">
            All Tracks
          </span>
          <span className="text-balance text-sm drop-shadow-xl sm:text-base">
            Julia Wolf, ayokay, Khalid and more
          </span>
          <span className="text-sm drop-shadow-xl sm:text-base">
            Made with ❤️
          </span>
        </div>
      </div>
    </div>
  );
}
