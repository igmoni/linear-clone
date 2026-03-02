import { cn } from "@/lib/utils";

const SubHeading = ({ className, children, as = "p" }) => {
  const Tag = as;
  return (
    <Tag
      className={cn(
        "font-inter max-w-xl text-base text-neutral-400 md:text-lg lg:text-lg dark:text-neutral-600",
        className,
      )}
    >
      {children}
    </Tag>
  );
};

export { SubHeading };
