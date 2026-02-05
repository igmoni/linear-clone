import { cn } from "@/lib/utils";
import React from "react";

const Heading = ({ className, children, as = "h2" }) => {
  const Tag = as; 
  return (
    <Tag
      className={cn(
        "font-display text-2xl tracking-tight md:text-4xl lg:text-6xl font-bold",
        className,
      )}
    >
      {children}
    </Tag>
  );
};

export { Heading };
