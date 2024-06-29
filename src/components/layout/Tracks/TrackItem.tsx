import PlayIcon from "@/components/ui/icons/PlayIcon";
import Image from "next/image";

interface TrackItemProps {
  name: string;
  artist_name: string;
  image: string;
  audio: string;
}

export default function TrackItem({
  name,
  artist_name,
  image,
  audio,
}: TrackItemProps) {
  return (
    <div className="w-full rounded-lg bg-white bg-opacity-[0.04] py-6">
      <div className="flex justify-center">
        <div className="flex flex-col gap-y-4">
          <div className="relative h-[182px] w-[182px]">
            <Image src={image} alt={name} objectFit="contain" fill={true} />
          </div>
          <div className="flex max-w-[182px] flex-col gap-y-2">
            <span className="block truncate font-bold text-white">{name}</span>
            <span className="block truncate text-white opacity-70">
              {artist_name}
            </span>
            <button className="">
              <PlayIcon width={50} height={50} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
