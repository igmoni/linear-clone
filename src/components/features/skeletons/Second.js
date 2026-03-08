import React from "react";
import {
  IconCircleDashedCheck,
  IconLoader2,
  IconRipple,
  IconCheck,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";

const Second = () => {
  return (
    <div
      style={{
        transform: "rotateY(20deg) rotateX(20deg) rotateZ(-20deg)",
      }}
      className={cn(
        "mx-auto my-auto h-80 w-full max-w-[85%] rounded-2xl border border-neutral-300 bg-neutral-100 p-3 shadow-2xl dark:border-neutral-700 dark:bg-neutral-900",
        "[--pattern-fg:var(--color-neutral-950)]/5 dark:[--pattern-fg:var(--color-white)]/10",
        "group translate-x-16 mask-b-from-40% mask-radial-from-50% perspective-distant",
      )}
    >
      <div className="flex items-center gap-3">
        <IconCircleDashedCheck className="size-4" />
        <p className="text-sm font-semibold text-black dark:text-white">
          Campaign Planner
        </p>
      </div>

      <div className="relative mt-4 h-60 flex-1 rounded-2xl border border-neutral-200 dark:border-neutral-700 bg-neutral-200 dark:bg-neutral-800">
        <Pattern />
        <div className="absolute inset-0 h-full w-full translate-x-8 -translate-y-2 scale-105 rounded-2xl bg-white dark:bg-neutral-800 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:scale-100">
          <Row
            icon={<IconCheck className="size-4 fill-green-500 stroke-white" />}
            title={"Fetching Data"}
            time={"10s"}
          />
          <GradientHr />
          <Row
            icon={<IconCheck className="size-4 fill-green-500 stroke-white" />}
            title={"Processing Data"}
            time={"20s"}
          />
          <GradientHr />
          <Row
            icon={<IconCheck className="size-4 fill-green-500 stroke-white" />}
            title={"Performing Action"}
            time={"30s"}
          />
          <GradientHr />
          <Row
            icon={<IconCheck className="size-4 fill-green-500 stroke-white" />}
            title={"Waiting"}
            time={"40s"}
          />
          <GradientHr />
          <Row
            icon={<IconLoader2 className="size-4 animate-spin text-white" />}
            title={"Generating Prompt"}
            time={"50s"}
            variant="warning"
          />
        </div>
      </div>
    </div>
  );
};

export { Second };

export const GradientHr = () => {
  return(
    <div className="h-px w-full bg-linear-to-r from-transparent via-neutral-200 to-transparent" />
  );
};

export const Row = ({ icon, title, time, variant = "success" }) => {
  return (
    <div className="flex items-center justify-between px-4 py-2">
      <div className="flex items-center gap-2">
        <div
          className={cn(
            "flex size-4 items-center justify-center rounded-full",
            variant === "success"
              ? "bg-green-500"
              : variant === "warning"
                ? "bg-yellow-500"
                : "bg-red-500",
          )}
        >
          {icon}
        </div>
        <p className="text-sm font-medium text-neutral-500">{title}</p>
      </div>
      <div className="flex items-center gap-1 text-neutral-400">
        <IconRipple className="size-3" />
        <p className="text-[10px] font-bold">{time}</p>
      </div>
    </div>
  );
};

export const Pattern = () => {
  return (
    <div className="absolute inset-0 bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] bg-fixed" />
  );
};
