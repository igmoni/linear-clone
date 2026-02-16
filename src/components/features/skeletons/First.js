import { cn } from "@/lib/utils";
import {
  IconCircleDashedCheck,
  IconClock,
  IconRipple,
} from "@tabler/icons-react";

const First = () => {
  return (
    <div>
      <SkeletonCard title={"Campaign Planenr"}  desc={" Creates clear, ready-to-use campaign briefs using product info, audience data, and past results."} icon={<IconCircleDashedCheck className="size-4" />} badge={<Badge text={"120S"} variant="danger" />} />
    </div>
  );
};

export { First };


const SkeletonCard = ({ icon, title, desc, badge }) => {
  return (
    <div className="boder mx-auto max-w-[90%] rounded-lg border-neutral-200 bg-neutral-100 p-3 dark:border-neutral-700">
      <div className="flex items-center gap-3">
        {icon}
        <p>{title}</p>
        {badge}
      </div>
      <p className="mt-2 text-sm font-medium text-neutral-500 dark:text-neutral-400">
        {desc}
      </p>
      <div className="flex flex-wrap items-center gap-2">
        <Tag text={"Google Ads"} />
        <Tag text={"Saas"} />
        <Tag text={"Content"} />
      </div>
    </div>
  );
};

const Tag = ({ text }) => {
  return (
    <div className="mt-3 rounded-sm bg-neutral-200 px-2 py-1 text-xs dark:bg-neutral-700">
      {text}
    </div>
  );
};

const Badge = ({ variant = "success", text }) => {
  return (
    <div
      className={cn(
        "flex w-fit items-center gap-1 rounded-full px-1 py-0.5",
        variant === "danger" &&
          "border border-red-300 bg-red-300/10 text-red-500",
        variant === "warning" &&
          "border border-yellow-300 bg-yellow-300/10 text-yellow-500",
        variant === "success" &&
          "border border-green-300 bg-green-300/10 text-green-500",
      )}
    >
      <IconClock className={cn("size-3")} />
      <p className="text-xs font-bold">{text}</p>
      <IconRipple className={cn("size-3")} />
    </div>
  );
};
