import { Skeleton } from "@/components/ui/Skeleton";

export default function AlbumItemSkeleton() {
  return (
    <div className="bg-black bg-opacity-10 p-4 lg:h-[82px] lg:min-w-fit lg:p-0 lg:pr-10 2xl:pr-20">
      <div className="flex flex-col items-center gap-y-4 text-center font-semibold lg:flex-row lg:gap-x-4 lg:text-left">
        <Skeleton className="h-[82px] w-[82px]" />
        <div className="block w-32 overflow-hidden px-4 lg:w-full">
          <Skeleton className="block h-2 w-full truncate whitespace-nowrap text-nowrap text-white lg:animate-none lg:text-wrap" />
        </div>
      </div>
    </div>
  );
}
