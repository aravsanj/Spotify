import Cover from "@/components/layout/Cover";
import List from "@/components/layout/List";

export default function AllTracks() {
  return (
    <div className="relative z-0 min-h-screen w-full">
      <div className="bg-size-cover relative flex min-h-screen w-full flex-col bg-tracks-gradient pb-[200px] pt-10">
        <div className="container relative z-10 mx-auto mb-10 space-y-10 px-6 md:px-4 lg:px-10">
          <Cover />
          <List />
        </div>
      </div>
      <div className="absolute inset-0 top-[160px] z-0 bg-black opacity-30 sm:top-[240px] md:top-[300px] lg:top-[360px]"></div>
    </div>
  );
}
