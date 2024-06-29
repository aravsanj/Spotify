import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/layout/Sidebar";
import AudioPlayer from "@/components/layout/AudoPlayer";
import PlayerContextProvider from "@/services/providers/PlayerContextProvider";

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
            {children}
          </div>
          <AudioPlayer />
        </PlayerContextProvider>
      </body>
    </html>
  );
}
