import { SearchResult } from "@/lib/types/SearchResult";
import { createContext } from "react";

type SearchContextType = {
  query: string;
  setQuery: (query: string) => void;
  results: SearchResult[];
  isLoading: boolean;
  isValidating: boolean;
  isPageEnd: boolean;
  nextPage: () => void;
  search: (query: string) => void;
};

export const SearchContext = createContext<SearchContextType>(
  {} as SearchContextType
);
