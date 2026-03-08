"use client";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { LogoIcon } from "@/svgs/Logo";
import Image from "next/image";
import React from "react";

const SkeletonTwo = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 mask-radial-from-30% px-8">
      <div className="grid grid-cols-4 justify-center gap-1">
        <Item pattern />
        <Item src="/avatar1.avif" />
        <Item src="/avatar4.avif" />
        <Item pattern />
      </div>
      <div className="grid grid-cols-5 gap-1">
        <Item pattern />
        <Item src="/avatar3.avif" />
        <Item>
          <LogoIcon className="size-10" />
        </Item>
        <Item src="/avatar6.avif" />
        <Item pattern />
      </div>
      <div className="grid grid-cols-4 justify-center gap-1">
        <Item pattern />
        <Item src="/avatar5.avif" />
        <Item src="/avatar2.avif" />
        <Item pattern />
      </div>
    </div>
  );
};

export { SkeletonTwo };

const Item = ({ children, className, src, pattern }) => {
  return (
    <div
      className={cn(
        "relative flex size-25 items-center justify-center overflow-hidden rounded-3xl border border-dashed border-neutral-200 p-px [--pattern-fg:var(--color-neutral-950)]/5 dark:border-neutral-700 dark:[--pattern-fg:var(--color-neutral-400)]/10",
        className,
      )}
    >
      {src && (
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          transition={{
            duration: Math.random() * 0.8 + 0.2,
            delay: Math.random() * 0.8 + 0.2,
          }}
        >
          <div className="relative flex h-full w-full items-center justify-center rounded-[22px] bg-linear-to-br from-blue-500 via-transparent to-blue-500 p-px">
            <Image
              height={120}
              width={120}
              src={src}
              alt="Image"
              className="relative z-20 aspect-square rounded-[21px] object-cover object-top"
            />
          </div>
        </motion.div>
      )}
      {children}
      {pattern && <Pattern />}
    </div>
  );
};

const Pattern = () => {
  return (
    <div className="absolute inset-0 bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] bg-fixed" />
  );
};
