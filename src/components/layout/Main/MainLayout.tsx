import React from "react";
import Sidebar from "../Sidebar";
import Header from "../Hero/Header";
import SearchContextProvider from "@/services/providers/SearchContextProvider";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <SearchContextProvider>
        <div className="w-full">
          <Header />
          {children}
        </div>
      </SearchContextProvider>
    </div>
  );
}
