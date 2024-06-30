import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/layout/Sidebar";
import AudioPlayer from "@/components/layout/AudoPlayer";
import PlayerContextProvider from "@/services/providers/PlayerContextProvider";
import Header from "@/components/layout/Hero/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spotify",
  description: "Stream your favorite music",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PlayerContextProvider>
          <div className="flex bg-main-gradient pb-24">
            <Sidebar />
            <div className="w-full">
              <div className="flex justify-center pt-10">
                <div className="container">
                  <div className="w-full px-6 md:px-4 lg:px-10">
                    <Header />
                  </div>
                </div>
              </div>
              {children}
            </div>
          </div>
          <AudioPlayer />
        </PlayerContextProvider>
      </body>
    </html>
  );
}
