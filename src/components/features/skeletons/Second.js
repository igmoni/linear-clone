import React from "react";
import { IconCircleDashedCheck } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

const Second = () => {
  return (
    <div
      className={cn(
        "mx-auto my-auto h-80 w-full max-w-[85%] rounded-2xl border border-neutral-200 bg-neutral-100 p-3 shadow-2xl dark:border-neutral-700 dark:bg-neutral-900",
        "[--pattern-fg:var(--color-neutral-950)]/5 dark:[--pattern-fg:var(--color-white)]/10",
      )}
    >
      <div className="flex items-center gap-3">
        <IconCircleDashedCheck className="size-4" />
        <p className="text-sm font-normal text-black dark:text-white">
          Campaign Planner
        </p>
      </div>

      <div className="relative overflow-hidden mt-4 h-60 flex-1 rounded-2xl border border-neutral-200 bg-neutral-200">
        <Pattern />
        <div className="absolute inset-0 h-full w-full bg-white"></div>
      </div>
    </div>
  );
};

export { Second };

const Pattern = () => {
  return (
    <div className="absolute inset-0 bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] bg-fixed" />
  );
};
