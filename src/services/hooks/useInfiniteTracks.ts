import { NEXT_GET_TRACKS } from "@/data/endpoints";
import getTracks from "@/data/getTracks";
import useSWRInfinite from "swr/infinite";

export default function useInfiniteTracks() {
  const getKey = (pageIndex: number, previousPageData: any) => {
    if (previousPageData && !previousPageData.results.length) return null;

    if (pageIndex === 0) return NEXT_GET_TRACKS({ offset: 0, limit: 10 });

    console.log(previousPageData.headers.next);

    return previousPageData.headers.next;
  };

  const { data, error, isLoading, isValidating, setSize, size } =
    useSWRInfinite(getKey, getTracks, {
      revalidateOnFocus: false,
    });

  const tracks = data?.map((track) => track.results).flat();

  function nextPage() {
    setSize(size + 1);
  }

  return {
    tracks,
    isLoading,
    isValidating,
    error,
    nextPage,
  };
}
