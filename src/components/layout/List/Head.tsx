import DownloadIcon from "@/components/ui/icons/DownloadIcon";
import LoveIconOutline from "@/components/ui/icons/LoveOutlineIcon";
import OptionsIcon from "@/components/ui/icons/OptionsIcon";
import PlayIcon from "@/components/ui/icons/PlayIcon";
import SearchIcon from "@/components/ui/icons/SearchIcon";

export default function Head() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-x-2 sm:gap-x-4">
        <PlayIcon className="h-16 w-16 md:h-24 md:w-24 lg:h-32 lg:w-32" />
        <LoveIconOutline className="h-8 w-8 md:h-10 md:w-10" />
        <DownloadIcon className="h-8 w-8 md:h-10 md:w-10" />
        <OptionsIcon className="h-8 w-8 md:h-10 md:w-10" />
      </div>
      <div className="flex items-center gap-x-2 sm:gap-x-4">
        <SearchIcon width={20} height={20} />
        <div className="flex items-center gap-x-1">
          <span className="text-sm text-white sm:text-base">Custom order</span>
          <svg
            width="14"
            height="8"
            viewBox="0 0 14 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 7.5L0 0.5L14 0.500001L7 7.5Z" fill="white" />
          </svg>
        </div>
      </div>
    </div>
  );
}
