import HomeIcon from "@/components/ui/icons/HomeIcon";
import SearchIcon from "@/components/ui/icons/SearchIcon";
import LibraryIcon from "@/components/ui/icons/LibraryIcon";
import AddIcon from "@/components/ui/icons/AddIcon";
import LoveIcon from "@/components/ui/icons/LoveIcon";
import SidebarItem from "./SidebarItem";

export default function Sidebar() {
  return (
    <div className="flex h-screen w-[100px] flex-col items-center gap-y-14 bg-black pt-10 transition-all duration-500 ease-in-out sm:items-start sm:px-6 md:w-[310px]">
      <div className="flex flex-col gap-y-6">
        <SidebarItem
          icon={<HomeIcon width={25} height={28} />}
          text="Home"
          path="/"
        />
        <SidebarItem
          icon={<SearchIcon width={28} height={29} />}
          text="Search"
          path="/search"
        />
        <SidebarItem
          icon={<LibraryIcon width={26} height={26} />}
          text="Your Library"
        />
      </div>
      <div className="flex flex-col gap-y-6">
        <SidebarItem
          icon={<AddIcon width={32} height={32} />}
          text="Create Playlist"
        />
        <SidebarItem
          icon={<LoveIcon width={32} height={32} />}
          text="Liked Songs"
        />
      </div>
    </div>
  );
}
