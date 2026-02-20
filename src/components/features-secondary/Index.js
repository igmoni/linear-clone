"use client";
import React from "react";
import { Container } from "../Container";
import { cn } from "@/lib/utils";
import { SkeletonOne } from "./skeletons/First";

const FeaturesSection = () => {
  return (
    <section className="relative overflow-hidden pt-10 md:pt-20 lg:pt-32">
      <Container>
        <div className="grid grid-cols-1 divide-y border-y border-neutral-200 md:grid-cols-2 md:divide-x md:divide-y-0 dark:divide-neutral-800 dark:border-neutral-800">
          
          {/* Left Card */}
          <div className="relative flex flex-col">
            <CardContent>

            <h2 className="text-lg font-bold text-neutral-800 dark:text-neutral-200">
              Agent Studio
            </h2>

            <CardDescription>
              Design, launch and customize AI agents for marketing, sales,
              support and ops, built around your workflows.
            </CardDescription>
            </CardContent>

            <CardSkeleton className={"flex-1"}>
              <SkeletonOne />
            </CardSkeleton>

          </div> 

          {/* Right Card */}
          <div className="relative flex flex-col ">
            <CardContent>

            <h2 className="text-lg font-bold text-neutral-800 dark:text-neutral-200">
              Multi-Agent Orchestration
            </h2>

            <CardDescription>
              Coordinate multiple agents across workflows using memory,
              interrupts, and conditional logic.
            </CardDescription>
            </CardContent>

            <div className="flex-1" />

            <CardSkeleton>
            </CardSkeleton>
          </div>

        </div>
      </Container>
    </section>
  );
};

export { FeaturesSection };





/* -------------------- Skeletons -------------------- */





const SkeletonTwo = () => {
  return (
    <div className="h-40 w-full rounded-xl bg-neutral-300 dark:bg-neutral-700" />
  );
};



const CardContent = ({children}) => {
  return (
    <div className="p-4 md:p-8">{children}</div>
  )
}


const CardDescription = ({ children }) => {
  return (
    <p className="mt-2 max-w-md text-balance text-neutral-600 dark:text-neutral-400">
      {children}
    </p>
  );
};

const CardSkeleton = ({
  className,
  children,
}) => {
  return (
    <div
      className={cn(
        "relative h-80 sm:h-60 overflow-hidden flex flex-col md:h-80 perspective-distant",
        className
      )}
    >
      {children}
    </div>
  );
};