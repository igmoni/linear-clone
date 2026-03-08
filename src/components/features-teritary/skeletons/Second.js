
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const SkeletonTwo = () => {
  return (
    <div className="h-full w-full rounded-t-3xl px-8">
      <div className="grid grid-cols-5 gap-1">
        <Item />
      </div>
    </div>
  );
};

export { SkeletonTwo };

const Item = ({ children, className, src="/avatar1.avif" }) => {
  return (
    <div
      className={cn(
        "size-20 rounded-xl border border-dashed relative p-2 border-neutral-200 [--pattern-fg:var(--color-neutral-950)]/5 dark:[--pattern-fg:var(--color-neutral)]/10 overflow-hidden",
        className,
      )}
    >

      <div className="absolute inset-0 bg-black rounded-xl">
      {/* <Image fill src={src} alt="Image" className="object-cover object-top"  /> */}

      </div>
      <Pattern />
    </div>
  );
};

const Pattern = () => {
  return (
    <div className="absolute inset-0 bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] bg-fixed" />
  );
};
