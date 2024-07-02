import Link from "next/link";
import TrackList from "./Tracks";

export default function Tracks() {
  return (
    <div className="flex w-full flex-col gap-y-7 px-6 md:px-4 lg:px-10">
      <div className="flex items-center justify-between">
        <span className="text-2xl font-bold text-white">Your top tracks</span>
        <span className="text-white">
          <Link href="/tracks">SEE ALL</Link>
        </span>
      </div>
      <TrackList />
    </div>
  );
}
