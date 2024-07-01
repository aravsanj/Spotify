"use client";
import { useState } from "react";
import { SearchContext } from "../contexts/SearchContext";
import { NEXT_SEARCH_TRACKS } from "@/data/endpoints";
import getSearchResults from "@/data/getSearchResults";
import { SearchResult } from "@/lib/types/SearchResult";
import useSWRInfinite from "swr/infinite";

export default function SearchContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [query, setQuery] = useState("");

  function search(query: string) {
    if (query.trim().length > 3) {
      setQuery(query);
    }
  }

  let results: SearchResult[] = [];
  let isPageEnd = true;

  const getKey = (pageIndex: number, previousPageData: any) => {
    if (previousPageData && !previousPageData.results.length) return null;

    if (!query) return NEXT_SEARCH_TRACKS({ query: "", offset: 0, limit: 4 });

    if (pageIndex === 0)
      return NEXT_SEARCH_TRACKS({ query, offset: 0, limit: 10 });

    return previousPageData.headers.next;
  };

  const { data, error, isLoading, size, setSize, isValidating } =
    useSWRInfinite(getKey, getSearchResults, {
      keepPreviousData: true,
      revalidateOnFocus: false,
    });

  if (data) {
    results = data.flatMap((data) => data.results);
    isPageEnd = results.length === data[0].headers.results_fullcount || !query;
  }

  function nextPage() {
    setSize(size + 1);
  }

  return (
    <SearchContext.Provider
      value={{
        query,
        setQuery,
        results,
        isLoading,
        isValidating,
        isPageEnd,
        nextPage,
        search,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}
