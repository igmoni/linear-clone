"use client";
import {
  FileIcon,
  HubSpotIcon,
  PersonIcon,
  SalesForceIcon,
  CogIcon,
  SheetsIcon,
} from "@/icons/FileIcon";
import { motion } from "motion/react";

const SkeletonOne = () => {
  return (
    <div className="absolute inset-x-0 mx-auto flex h-full w-full max-w-sm flex-1 flex-col gap-2 rounded-t-3xl border border-neutral-200 bg-neutral-100 p-2 dark:bg-neutral-900 dark:border-neutral-700">
      <Card
        topIcon={<PersonIcon />}
        title={"Human-in-the-Loop"}
        desc={"Add reviews, approvals and escalations without slowing work."}
        tags={[
          { icon: <SalesForceIcon className="size-3" />, text: "Salesforce" },
          { icon: <HubSpotIcon className="size-3" />, text: "Hubspot" },
          { icon: <SheetsIcon className="size-3" />, text: "Sheets" },
        ]}
      />
      <Card
        topIcon={<CogIcon />}
        title={"Define Processing Logic"}
        desc={
          "Create workflows, decision points, and conditional actions for each task."
        }
        tags={[
          { icon: <SalesForceIcon className="size-3" />, text: "Salesforce" },
          { icon: <HubSpotIcon className="size-3" />, text: "Hubspot" },
          { icon: <SheetsIcon className="size-3" />, text: "Sheets" },
        ]}
      />
      <Card
        topIcon={<FileIcon />}
        title={"Connect Data"}
        desc={
          "Link CRMs, helpdesks, and APIs to give agents secure, role-based `access."
        }
        tags={[
          { icon: <SalesForceIcon className="size-3" />, text: "Salesforce" },
          { icon: <HubSpotIcon className="size-3" />, text: "Hubspot" },
          { icon: <SheetsIcon className="size-3" />, text: "Sheets" },
        ]}
      />
    </div>
  );
};

export { SkeletonOne };

const Card = ({ topIcon, title, desc, tags }) => {
  const randomColors = [
    "--color-blue-500",
    "--color-red-500",
    "--color-green-500",
  ];

  const randomColor =
    randomColors[Math.floor(Math.random() * randomColors.length)];

  return (
    <div className="flex items-start gap-4 rounded-[12px] border border-transparent bg-white dark:bg-neutral-800 p-4 ring shadow-black/10 ring-black/10">
      <div
        className="mt-1 flex size-6 shrink-0 items-center justify-center rounded-full"
        style={{
          backgroundColor: `var(${randomColor})`,
        }}
      >
        {topIcon}
      </div>
      <div>
        <p className="text-lg font-bold dark:text-white text-neutral-800">{title}</p>
        <p className="text-base text-neutral-600">{desc}</p>
        <div className="mt-2 flex flex-row flex-wrap gap-2">
          {tags.map((tag) => (
            <Tag icon={tag.icon} text={tag.text} />
          ))}
        </div>
      </div>
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
