import { cn } from "@/lib/utils";
import React from "react";

const SubHeading = ({ className, children, as = "p" }) => {
  const Tag = as;
  return (
    <Tag
      className={cn(
        "font-inter text-base text-neutral-400 md:text-lg lg:text-lg dark:text-neutral-600 max-w-xl",
        className,
      )}
    >
      {children}
    </Tag>
  );
};

export { SubHeading };
