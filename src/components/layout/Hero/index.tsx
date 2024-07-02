"use client";
import Greeting from "./Greeting";
import Albums from "./Albums";

export default function Hero() {
  return (
    <div className="flex w-full flex-col gap-y-7 px-6 md:px-4 lg:px-10">
      <Greeting />
      <Albums />
    </div>
  );
}
