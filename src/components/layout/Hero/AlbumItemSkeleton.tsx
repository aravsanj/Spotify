import { Skeleton } from "@/components/ui/Skeleton";

function AlbumItemSkeleton() {
  return (
    <div className="bg-black bg-opacity-10 p-4 lg:h-[82px] lg:min-w-fit lg:p-0 lg:pr-10 2xl:pr-20">
      <div className="flex flex-col items-center gap-y-4 text-center font-semibold lg:flex-row lg:gap-x-4 lg:text-left">
        <Skeleton className="h-8 w-8 rounded-full" />
        <div className="block w-32 overflow-hidden lg:w-full">
          <Skeleton className="h-4 w-full" />
        </div>
      </div>
    </div>
  );
}

export default function AlbumItemSkeletons() {
  return (
    <>
      <div className="grid grid-cols-2 gap-x-10 gap-y-6 md:grid-cols-3 lg:grid-cols-2 lg:gap-x-8 xl:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <AlbumItemSkeleton key={index} />
        ))}
      </div>
    </>
  );
}
