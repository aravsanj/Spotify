"use client";
import BackIcon from "@/components/ui/icons/BackIcon";
import ForwardIcon from "@/components/ui/icons/ForwardIcon";
import SearchInput from "@/components/ui/SearchInput";
import { usePathname } from "next/navigation";

type HeaderConfig = {
  [key: string]: {
    bgColor: string;
    showBackForwardIcons: boolean;
    showSearchInput: boolean;
  };
};

const headerConfig: HeaderConfig = {
  "/": {
    bgColor: "bg-[#3333A3]",
    showBackForwardIcons: true,
    showSearchInput: false,
  },
  "/search": {
    bgColor: "bg-black",
    showBackForwardIcons: false,
    showSearchInput: true,
  },
  "/tracks": {
    bgColor: "bg-[#DDF628]",
    showBackForwardIcons: true,
    showSearchInput: false,
  },
};

export default function Header() {
  const pathname = usePathname();

  const config = headerConfig[pathname];

  if (!config) {
    return null;
  }

  return (
    <div className={`flex justify-center ${config.bgColor}`}>
      <div className="container">
        <div className="w-full px-6 md:px-4 lg:px-10">
          <div className="h-18 flex w-full items-center justify-between py-6">
            <div className="flex items-center gap-x-2">
              {config.showBackForwardIcons && (
                <>
                  <BackIcon height={40} width={40} />
                  <ForwardIcon height={40} width={40} />
                </>
              )}
              {config.showSearchInput && <SearchInput />}
            </div>
            <div className="flex h-10 items-center justify-center rounded-[40px] bg-transparent px-6 text-xl font-semibold text-white sm:bg-black sm:bg-opacity-70">
              <div className="mr-2 h-6 w-6 rounded-full bg-white bg-opacity-55"></div>
              <span className="hidden sm:inline">aravsanj</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
