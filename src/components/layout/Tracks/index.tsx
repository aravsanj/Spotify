import TrackList from "./Tracks";

export default function Tracks() {
  return (
    <div className="flex w-full flex-col gap-y-7 px-6 md:px-4 lg:px-10">
      <span className="text-2xl font-bold text-white">Your top tracks</span>
      <TrackList />
    </div>
  );
}
