import BackIcon from "@/components/ui/icons/BackIcon";
import ForwardIcon from "@/components/ui/icons/ForwardIcon";

export default function Header() {
  return (
    <div className="flex h-16 w-full justify-between">
      <div className="flex gap-x-2">
        <BackIcon height={40} width={40} />
        <ForwardIcon height={40} width={40} />
      </div>
      <div className="flex h-10 items-center justify-center rounded-[40px] bg-black px-6 text-xl font-semibold text-white opacity-70">
        aravsanj
      </div>
    </div>
  );
}
