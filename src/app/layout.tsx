import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AudioPlayer from "@/components/layout/AudoPlayer";
import PlayerContextProvider from "@/services/providers/PlayerContextProvider";
import MainLayout from "@/components/layout/Main/MainLayout";

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
          <MainLayout>{children}</MainLayout>
          <AudioPlayer />
        </PlayerContextProvider>
      </body>
    </html>
  );
}
