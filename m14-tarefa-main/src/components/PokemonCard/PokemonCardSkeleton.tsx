import React from "react";
export default function PokemonCardSkeleton() {
  return (
    <div className="border border-blue-300 shadow rounded-md p-4 max-w-72 w-full mx-auto">
      <div className="animate-pulse flex flex-col gap-2">
        <div className="h-6 max-w-[50%] bg-slate-700 rounded-lg"></div>

        <div className="h-60 bg-slate-700 rounded-lg w-full"></div>
        <div className="h-10 bg-slate-700 rounded-lg"></div>
        <div className="h-10 bg-slate-700 rounded-lg"></div>
      </div>
    </div>
  );
}
