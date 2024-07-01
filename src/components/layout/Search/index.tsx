"use client";
import useSearch from "@/services/hooks/useSearch";
import SearchItem from "./SearchItem";
import { Skeleton } from "@/components/ui/Skeleton";

export default function SearchContent() {
  const { results, isValidating, isPageEnd, query, isLoading, nextPage } =
    useSearch();

  return (
    <div className="mt-4 flex w-full flex-col items-center gap-y-4">
      <div className="mb-4 w-[95%]">
        <p className="text-2xl font-semibold text-white">Suggestions</p>
        <p className="font-bold text-white opacity-60">{query}</p>
      </div>

      {!isLoading &&
        results?.map((result) => (
          <SearchItem
            key={result.id}
            id={result.id}
            name={result.name}
            artist_name={result.artist_name}
            image={result.image}
            album_name={result.album_name}
            audio={result.audio}
          />
        ))}

      {!isValidating && !isPageEnd && (
        <button
          onClick={nextPage}
          className="rounded-lg bg-white bg-opacity-[0.04] p-4 text-white"
        >
          Load More
        </button>
      )}

      {isValidating && (
        <>
          <Skeleton className="h-[70px] w-[95%]" />
          <Skeleton className="h-[70px] w-[95%]" />
        </>
      )}

      {!query && (
        <p className="p-4 text-white">
          Search for your favorite tracks by artists, albums, or tags and see
          them here.
        </p>
      )}

      {isPageEnd && !isValidating && query && (
        <p className="p-4 text-white">
          We&apos;ve reached the end of the page. Perhaps you&apos;d like to
          explore further by conducting a new search?
        </p>
      )}
    </div>
  );
}
