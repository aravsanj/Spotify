import Hero from "@/components/layout/Hero";
import Tracks from "@/components/layout/Tracks";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full justify-center pt-10">
      <div className="container flex flex-col items-center gap-y-10">
        <Hero />
        <Tracks />
      </div>
    </div>
  );
}
