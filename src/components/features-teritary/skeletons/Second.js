import { InstagramIcon, MetaIcon, SheetsIcon, SlackIcon } from "@/icons/FileIcon";
import { cn } from "@/lib/utils";
import { LogoIcon } from "@/svgs/Logo";
import { IconCircleDashedCheck } from "@tabler/icons-react";
import React from "react";

const SkeletonTwo = () => {
  return (
    <div className="absolute inset-x-0 flex h-full w-full flex-1 items-center justify-center gap-2 p-2"
    style={{
        transform: "rotateY(20deg) rotateX(20deg) rotateZ(-20deg)"
    }}
    >
      <Circle className="flex items-center justify-center border-neutral-200 shadow-sm">
        <LogoIcon className={"size-10 text-neutral-400"} />

        <RevolvingCard>
          <SlackIcon className="size-8" />
        </RevolvingCard>

        <RevolvingCard className="[--orbit-duration:20s] [--translate-position:160px]">
          <MetaIcon className="size-8" />
        </RevolvingCard>

        <RevolvingCard className="[--orbit-duration:15s] [--translate-position:180px]">
          <InstagramIcon className="size-8 text-red-500" />
        </RevolvingCard>
       
        <RevolvingCard className="[--orbit-duration:25s] [--translate-position:220px]">
          <SheetsIcon className="size-8 " />
        </RevolvingCard>

        <RevolvingCard
          className={
            "size-auto w-60 bg-transparent shadow-none ring-0 [--orbit-duration:30s] [--translate-position:250px]"
          }
        >
          <SkeletonCard
            className={"absolute bottom-0 left-12 z-30 max-w-[90%]"}
            icon={<IconCircleDashedCheck className="size-4" />}
            title={"Campaign Planner"}
            desc="Creates clear, ready-to-use campaign briefs using product info."
          />
        </RevolvingCard>
      </Circle>
      <Circle className="relative z-9 size-60 border-neutral-100 bg-neutral-100/80 shadow"></Circle>
      <Circle className="z-8 size-80 border-neutral-100 bg-neutral-100/60 shadow"></Circle>
      <Circle className="z-7 size-100 border-neutral-100 bg-neutral-100/40 shadow"></Circle>
      <Circle className="z-6 size-120 border-neutral-100 bg-neutral-100/20 shadow"></Circle>
    </div>
  );
};

export { SkeletonTwo };

const RevolvingCard = ({ className, children }) => {
  return (
    <div
      className={cn(
        "animate-orbit absolute inset-0 m-auto flex size-10 items-center justify-center rounded-sm border border-transparent bg-white ring-1 shadow-black/10 ring-black/10 [--orbit-duration:10s] [--translate-position:120px]",
        className,
      )}
    >
      {children}
    </div>
  );
};
const SkeletonCard = ({ icon, title, desc, badge, className }) => {
  return (
    <div
      className={cn(
        "mx-auto my-auto h-fit w-full max-w-[85%] rounded-2xl border border-neutral-200 bg-neutral-100 p-3 shadow-2xl dark:border-neutral-700 dark:bg-neutral-900",
        className,
      )}
    >
      <div className="flex items-center gap-3">
        {icon}
        <p className="text-sm font-normal text-black dark:text-white">
          {title}
        </p>
        {badge}
      </div>
      <p className="mt-2 text-sm font-normal text-neutral-400/80 dark:text-neutral-400">
        {desc}
      </p>
    </div>
  );
};

const Circle = ({ className, children }) => {
  return (
    <div
      className={cn(
        "absolute inset-0 z-10 m-auto size-40 rounded-full border border-transparent bg-white",
        className,
      )}
    >
      {children}
    </div>
  );
};
