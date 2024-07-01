"use client";
import React from "react";
import Sidebar from "../Sidebar";
import Header from "../Hero/Header";
import { usePathname } from "next/navigation";
import SearchContextProvider from "@/services/providers/SearchContextProvider";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = usePathname();

  let bg = path === "/" ? "bg-main-gradient" : "bg-[#121212]";
  let headerBg = path === "/" ? "bg-transparent" : "bg-black";

  return (
    <div className={`flex ${bg} h-full pb-[120px]`}>
      <Sidebar />
      <div className="w-[100px] lg:w-[310px] lg:px-6"></div>
      <SearchContextProvider>
        <div className="w-full">
          <div className={`flex justify-center pt-2 ${headerBg}`}>
            <div className="container">
              <div className="w-full px-6 md:px-4 lg:px-10">
                <Header />
              </div>
            </div>
          </div>
          {children}
        </div>
      </SearchContextProvider>
    </div>
  );
}
