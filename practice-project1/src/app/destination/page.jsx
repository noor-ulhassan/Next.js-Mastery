"use client";
import { useRouter } from "next/navigation";
import React from "react";

function Page() {
  const destination = ["Paris", "Tokyo", "New York"];
  const router = useRouter();
  return (
    <div className="flex justify-center items-center text-white font-bold text-xl h-full flex-col gap-4">
      <div>Choose your Destination</div>
      <div className="flex flex-col gap-4">
        {destination.map((d, index) => {
          <div
            key={index}
            className="text-black font-bold text-2xl items-center justify-center rounded-2xl w-50 h-25 bg-amber-300"
            onClick={router.push(`/destination/${d}`)}
          >
            {d}
          </div>;
        })}
      </div>
    </div>
  );
}

export default Page;
