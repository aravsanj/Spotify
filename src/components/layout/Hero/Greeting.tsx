import getTimeBasedGreeting from "@/lib/utils/getTimeBasedGreeting";

export default function Greeting() {
  return (
    <h1 className="text-4xl font-bold text-white">{getTimeBasedGreeting()}</h1>
  );
}
