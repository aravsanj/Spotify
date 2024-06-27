"use client";
import Link from "next/link";
import HomeIcon from "@/utils/icons/HomeIcon";
import SearchIcon from "@/utils/icons/SearchIcon";
import LibraryIcon from "@/utils/icons/LibraryIcon";
import AddIcon from "@/utils/icons/AddIcon";
import LoveIcon from "@/utils/icons/LoveIcon";
import { usePathname } from "next/navigation";

interface SidebarItemProps {
  text: string;
  icon?: React.ReactNode;
  path?: string;
}

function SidebarItem({ icon, text, path }: SidebarItemProps) {
  const pathName = usePathname();

  return (
    <Link
      className={`just flex items-center gap-x-3 text-[18px] text-white ${pathName === path ? "opacity-100" : "opacity-70"}`}
      href={path ? path : "#"}
    >
      {icon}
      <span className="hidden text-nowrap md:inline">{text}</span>
    </Link>
  );
}

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
