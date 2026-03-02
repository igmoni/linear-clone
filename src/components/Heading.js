import { cn } from "@/lib/utils";

const Heading = ({ className, children, as = "h2" }) => {
  const Tag = as;
  return (
    <Tag
      className={cn(
        "font-display text-2xl font-bold tracking-tight md:text-4xl lg:text-6xl",
        className,
      )}
    >
      {children}
    </Tag>
  );
};

export { Heading };
