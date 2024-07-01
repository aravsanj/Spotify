import useSearch from "@/services/hooks/useSearch";
import SearchIcon from "./icons/SearchIcon";

export default function SearchInput() {
  const { search } = useSearch();

  return (
    <div className="flex h-[36px] items-center rounded-[40px] bg-white px-4 sm:h-[46px]">
      <SearchIcon width={28} height={28} fill="#121212" />
      <input
        onChange={(e) => search(e.target.value)}
        type="search"
        placeholder="Artists, songs, albums"
        className="-ml-1 w-28 rounded-[40px] bg-white px-6 text-sm text-[#757575] outline-none sm:w-40 md:w-72"
      />
    </div>
  );
}
