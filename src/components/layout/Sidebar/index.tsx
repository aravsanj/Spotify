import HomeIcon from "@/components/ui/icons/HomeIcon";
import SearchIcon from "@/components/ui/icons/SearchIcon";
import LibraryIcon from "@/components/ui/icons/LibraryIcon";
import AddIcon from "@/components/ui/icons/AddIcon";
import LoveIcon from "@/components/ui/icons/LoveIcon";
import SidebarItem from "./SidebarItem";

export default function Sidebar() {
  return (
    <div className="flex min-h-screen w-[100px] flex-col gap-y-14 bg-black pt-10 transition-all duration-500 ease-in-out sm:items-start lg:w-[310px] lg:px-6">
      <div className="flex w-full flex-col items-center gap-y-6 lg:items-start">
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
      <div className="flex w-full flex-col items-center gap-y-6 lg:items-start">
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
