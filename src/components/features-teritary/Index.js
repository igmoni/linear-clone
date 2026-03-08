"use client";
import React from "react";
import { Container } from "../Container";
import { cn } from "@/lib/utils";
import { SkeletonOne } from "./skeletons/First";
import { SkeletonTwo } from "./skeletons/Second";
import {
  HumanLoopIcon,
  IntergrationIcon,
  WorkFlowIcon,
} from "@/icons/FileIcon";
import { SkeletonThree } from "./skeletons/Third";
import { SkeletonFour } from "./skeletons/Fourth";

const FeaturesTeritary = () => {
  return (
    <section className="relative overflow-hidden pt-10 md:pt-20 lg:pt-32">
      <Container>
        <div className="grid grid-cols-1 divide-x divide-y border-y border-neutral-200 md:grid-cols-2 dark:divide-neutral-800 dark:border-neutral-800">
          {/* Left Card */}
          <div>
            <CardContent>
              <h2 className="text-lg font-bold text-neutral-800 dark:text-neutral-200">
                Audit Trail
              </h2>

              <CardDescription>
                Tracks every agent action with full input-output visibility and
                timestamps.
              </CardDescription>
            </CardContent>

            <CardSkeleton className={"flex-1"}>
              <SkeletonOne />
            </CardSkeleton>
          </div>

          {/* Right Card */}
          <div>
            <CardContent>
              <h2 className="text-lg font-bold text-neutral-800 dark:text-neutral-200">
                Role-Based Access
              </h2>

              <CardDescription>
                Controls who can launch, review, or manage agents based on
                roles.
              </CardDescription>
            </CardContent>

            <div className="flex-1" />

            <CardSkeleton className={"mask-x-from-70% mask-radial-from-80%"}>
              <SkeletonTwo />
            </CardSkeleton>
          </div>
          {/* Bottom */}
          <div>
            <CardContent>
              <h2 className="text-lg font-bold text-neutral-800 dark:text-neutral-200">
                Approval Queue
              </h2>

              <CardDescription>
                Sends agent-generated content to human reviewers before it's
                published.
              </CardDescription>
            </CardContent>

            <div className="flex-1" />

            <CardSkeleton className={"mask-x-from-70% mask-radial-from-80%"}>
              <SkeletonThree />
            </CardSkeleton>
          </div>
          <div>
            <CardContent>
              <h2 className="text-lg font-bold text-neutral-800 dark:text-neutral-200">
                Guardrail Engine
              </h2>

              <CardDescription>
                Applies brand, tone, and policy checks before output goes live.
              </CardDescription>
            </CardContent>

            <div className="flex-1" />

            <CardSkeleton className={"mask-x-from-70% mask-radial-from-80%"}>
              <SkeletonFour />
            </CardSkeleton>
          </div>
        </div>
      </Container>
    </section>
  );
};

export { FeaturesTeritary };

/* -------------------- Skeletons -------------------- */

const CardContent = ({ children }) => {
  return <div className="p-4 md:p-8">{children}</div>;
};

const CardDescription = ({ children }) => {
  return (
    <p className="mt-2 max-w-md text-balance text-neutral-600 dark:text-neutral-400">
      {children}
    </p>
  );
};

const CardSkeleton = ({ className, children }) => {
  return (
    <div
      className={cn(
        "relative flex h-80 flex-col overflow-hidden perspective-distant sm:h-60 md:h-80",
        className,
      )}
    >
      {children}
    </div>
  );
};
