"use client";
import {
  FirstIcon,
  FourthIcon,
  IconClock,
  RecentActivity,
  SecondIcon,
  ThirdIcon,
} from "@/icons/BentoIcons";
import {
  FileIcon,
  HubSpotIcon,
  PersonIcon,
  SalesForceIcon,
  CogIcon,
  SheetsIcon,
} from "@/icons/FileIcon";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

const SkeletonOne = () => {
  const items = [
    {
      icon: <FirstIcon />,
      title: "Personalized Emails",
      description: "Personalized Email sent to ••••• @gmail.com",
      badge: (
        <div className="flex items-center gap-1 rounded-md border border-neutral-200 px-1 py-0.5">
          <IconClock className="size-3" />
          <p className="text-[10px] font-bold text-neutral-600">15s</p>
        </div>
      ),
    },
    {
      icon: <SecondIcon />,
      title: "Peer Review",
      iconClassName: "bg-red-500",
      description: "Reviewed and approved 2 outputs from experts",
      badge: (
        <div className="flex items-center gap-1 rounded-md border border-red-200 bg-red-100 px-1 py-0.5">
          <p className="text-[10px] font-bold text-red-500">FAILED</p>
        </div>
      ),
    },
    {
      icon: <ThirdIcon />,
      title: "Content Drafting",
      iconClassName: "bg-orange-500",
      description: "Generated draft campaign brief about the agents",
      badge: (
        <div className="flex items-center gap-1 rounded-md border border-red-200 bg-orange-100 px-1 py-0.5">
          <p className="text-[10px] font-bold text-orange-500">PROCESSING</p>
        </div>
      ),
    },
    {
      icon: <FourthIcon />,
      title: "Admin Approval",
      iconClassName: "bg-black",
      description: "Final approval of marketing copy before posting",
      badge: (
        <div className="flex items-center gap-1 rounded-md border border-red-200 bg-orange-100 px-1 py-0.5">
          <p className="text-[10px] font-bold text-orange-500">PROCESSING</p>
        </div>
      ),
    },
    {
      icon: <FourthIcon />,
      title: "Weekly Campaign Report",
      iconClassName: "bg-purple-500",
      description: "Generated campaign perfomance resassuring agents",
      badge: (
        <div className="flex items-center gap-1 rounded-md border border-neutral-200 px-1 py-0.5">
          <IconClock className="size-3" />
          <p className="text-[10px] font-bold text-neutral-600">2m</p>
        </div>
      ),
    },
    {
      icon: <SecondIcon />,
      title: "SEO Audit",
      iconClassName: "bg-red-500",
      description: "Reviewed and approved 2 outputs from experts",
      badge: (
        <div className="flex items-center gap-1 rounded-md border border-red-200 bg-red-100 px-1 py-0.5">
          <p className="text-[10px] font-bold text-red-500">FAILED</p>
        </div>
      ),
    },
    {
      icon: <ThirdIcon />,
      title: "Price Monitoring Agent",
      iconClassName: "bg-orange-500",
      description: "Generated draft campaign brief about the agents",
      badge: (
        <div className="flex items-center gap-1 rounded-md border border-red-200 bg-orange-100 px-1 py-0.5">
          <p className="text-[10px] font-bold text-orange-500">PROCESSING</p>
        </div>
      ),
    },
  ];

  return (
    <div className="absolute inset-x-10 inset-y-2 mx-auto flex h-full w-full flex-1 flex-col gap-2 rounded-t-3xl border border-neutral-200 bg-neutral-100 px-2 pt-2 dark:bg-neutral-800">
      <Card items={items} />
    </div>
  );
};

export { SkeletonOne };

const Card = ({ items }) => {
  return (
    <div className="flex flex-1 flex-col items-start gap-4 rounded-tl-[12px] border border-transparent bg-white ring shadow-black/10 ring-black/10">
      <div className="flex w-full items-center gap-2 border-b px-4 py-2">
        <RecentActivity />
        <p className="text-sm font-bold text-neutral-800">Recent Activity</p>
      </div>
      {items.map((item, index) => (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <CardItem key={index} {...item} />
        </motion.div>
      ))}
    </div>
  );
};

const CardItem = ({ icon, iconClassName, title, badge, description }) => {
  const randomColors = [
    "--color-blue-500",
    "--color-red-500",
    "--color-green-500",
  ];

  const randomColor =
    randomColors[Math.floor(Math.random() * randomColors.length)];

  return (
    <div className="relative flex w-full items-center justify-between overflow-hidden pl-4">
      <div className="flex items-center gap-2">
        <div
          className={cn(
            "size-4 rounded-sm bg-blue-500 text-white",
            iconClassName,
          )}
        >
          {icon}
        </div>
        <p className="text-sm text-neutral-600">{title}</p>
        {badge}
      </div>
      <p className="max-w-[16rem] flex-nowrap truncate text-sm whitespace-nowrap text-neutral-500">
        {description}
      </p>
    </div>
  );
};

const Tag = ({ icon, text }) => {
  return (
    <div className="flex w-fit items-center gap-1 rounded-sm border border-neutral-100 px-1 py-0.5 text-sm">
      {icon}
      <p className="text-xs text-neutral-500">{text}</p>
    </div>
  );
};
