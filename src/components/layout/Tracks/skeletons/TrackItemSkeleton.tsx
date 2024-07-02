import { Skeleton } from "@/components/ui/Skeleton";

export default function TrackItemSkeleton() {
  return (
    <div className="w-full rounded-lg bg-white bg-opacity-[0.04] py-6">
      <div className="flex justify-center">
        <div className="flex flex-col gap-y-4">
          <div className="relative h-[182px] w-[182px]">
            <Skeleton className="h-[182px] w-[182px] rounded-lg" />
          </div>
          <div className="flex max-w-[182px] flex-col gap-y-2">
            <Skeleton className="block h-4 w-full truncate font-bold text-white" />
            <Skeleton className="block h-4 w-full truncate text-white opacity-70" />
            <Skeleton className="h-8 w-8 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
