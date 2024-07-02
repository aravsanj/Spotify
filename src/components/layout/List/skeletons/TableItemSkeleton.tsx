import { Skeleton } from "@/components/ui/Skeleton";

export default function TableItemSkeleton() {
  return (
    <>
      <Skeleton className="mt-4 h-10 w-full" />
      <Skeleton className="mt-4 h-10 w-full" />
    </>
  );
}
