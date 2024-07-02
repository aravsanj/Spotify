import { Skeleton } from "@/components/ui/Skeleton";

export default function SearchItemSkeleton() {
  return (
    <>
      <Skeleton className="h-[70px] w-[95%]" />
      <Skeleton className="h-[70px] w-[95%]" />
    </>
  );
}
