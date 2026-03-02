import { cn } from "@/lib/utils";
import React from "react";

const Card = ({ className, children }) => {
  return (
    <div
      className={cn(
        "mx-auto max-w-xl rounded-lg bg-neutral-50 dark:bg-neutral-800",
        className,
      )}
    >
      {children}
    </div>
  );
};

const CardTitle = ({ className, children }) => {
  return (
    <h3
      className={cn("font-display text-lg font-medium md:text-2xl", className)}
    >
      {children}
    </h3>
  );
};

const CardContent = ({ className, children }) => {
  return (
    <div
      className={cn(
        "flex items-center justify-between px-4 pb-6 md:px-8 md:pb-12",
        className,
      )}
    >
      {children}
    </div>
  );
};

const CardButton = ({ className, children, ...rest }) => {
  return (
    <button
      {...rest}
      className={cn(
        "flex size-5 shrink-0 items-center justify-center rounded-full border border-neutral-200 transition duration-200 active:scale-[0.95] md:size-10 dark:border-neutral-800",
        className,
      )}
    >
      {children}
    </button>
  );
};

const CardSkeleton = ({ className, children }) => {
  return (
    <div
      className={cn(
        "relative h-80 overflow-hidden mask-radial-from-50% perspective-distant sm:h-60 md:h-80",
        className,
      )}
    >
      {children}
    </div>
  );
};

export { Card, CardTitle, CardContent, CardButton, CardSkeleton };
