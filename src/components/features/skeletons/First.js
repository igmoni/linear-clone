import { cn } from "@/lib/utils";
import {
  IconCircleDashedCheck,
  IconClock,
  IconExclamationCircle,
  IconPrison,
  IconRipple,
} from "@tabler/icons-react";

const First = () => {
  return (
    <div
    style={{
      transform: "rotateZ(15deg) rotateX(30deg) rotateY(-20deg) scale(1.3) "
    }}
    className="perspective-distant h-full w-full transform-3d absolute -translate-y-10 translate-x-5 mask-radial-from-50% mask-r-from-50%">
      <SkeletonCard
        className={"absolute left-12 bottom-0 z-30 max-w-[90%]"}
        title={"Campaign Planner"}
        desc={
          "Creates clear, ready-to-use campaign briefs using product info, audience data, and past results."
        }
        icon={<IconCircleDashedCheck className="size-4" />}
        badge={<Badge text={"90S"} variant="warning" />}
      />
      <SkeletonCard
        className={"absolute left-8 bottom-8 z-20"}
        title={"Issue Tracker"}
        desc={
          "Creates clear, ready-to-use campaign briefs using product info, audience data, and past results."
        }
        icon={<IconExclamationCircle className="size-4" />}
        badge={<Badge text={"45S"} variant="success" />}
      />
      <SkeletonCard
        className={"absolute bottom-20 left-4  z-10 max-w-[80%]"}
        title={"Risk Analysis"}
        desc={
          "Creates clear, ready-to-use campaign briefs using product info, audience data, and past results."
        }
        icon={<IconPrison className="size-4" />}
        badge={<Badge text={"120S"} variant="danger" />}
      />
    </div>
  );
};

export { First };

const SkeletonCard = ({ icon, title, desc, badge, className }) => {
  return (
    <div
      className={cn(
        "mx-auto my-auto shadow-2xl h-fit w-full max-w-[85%] rounded-2xl border border-neutral-200 bg-neutral-100 dark:bg-neutral-900 p-3 dark:border-neutral-700",
        className,
      )}
    >
      <div className="flex items-center gap-3">
        {icon}
        <p className="text-sm font-normal text-black dark:text-white">{title}</p>
        {badge}
      </div>
      <p className="mt-2 text-sm font-normal text-neutral-400/80 dark:text-neutral-400">
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
