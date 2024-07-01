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
    <div className={`flex ${bg} min-h-screen`}>
      <Sidebar />
      <SearchContextProvider>
        <div className="w-full pb-[200px]">
          <div className={`flex justify-center ${headerBg}`}>
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
