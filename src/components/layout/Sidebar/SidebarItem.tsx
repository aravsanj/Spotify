"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarItemProps {
  text: string;
  icon?: React.ReactNode;
  path?: string;
}

export default function SidebarItem({ icon, text, path }: SidebarItemProps) {
  const pathName = usePathname();

  return (
    <Link
      className={`flex gap-x-3 text-[18px] text-white ${pathName === path ? "opacity-100" : "opacity-70"}`}
      href={path ? path : "#"}
    >
      {icon}
      <span className="hidden text-nowrap lg:inline">{text}</span>
    </Link>
  );
}
