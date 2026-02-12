"use client";
import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const LandingImages = () => {
  return (
    <div className="relative mask-r-from-90%"> {/* Just mask, no overflow */}
      <div
        className={cn(
          "relative min-h-72 w-full translate-x-10 pt-20 perspective-distant sm:min-h-80 md:min-h-100 md:translate-x-28 lg:min-h-140 ",
        )}
      >
        {/* Base Image */}
        <div className="translate-x-30 ">

          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="shadow-2xl perspective-[4000px]"
            style={{ opacity: 1, transform: "none" }}
            >
            <Image
              src="/4.webp"
              alt="Demo 1 Image"
              width={1920}
              height={1080}
              draggable={"none"}
              className="pointer-events-none absolute inset-0 rounded-lg mask-r-from-20% mask-b-from-20% shadow-xl"
              style={{
                transform: "rotateY(20deg) rotateX(40deg) rotate(-20deg)",
              }}
            />
          </motion.div>

          {/* Upper Image */}
          <motion.div
            initial={{ opacity: 0, y: -200 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ opacity: 1, transform: "none" }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="translate-x-20 -translate-y-10 perspective-[4000px] md:-translate-y-20 lg:-translate-y-40"
            >
            <Image
              src="/3.webp"
              alt="Demo 2 Image"
              width={1720}
              height={980}
              draggable={"none"}
              className="pointer-events-none absolute inset-0 -translate-x-10 rounded-lg border-4 border-neutral-200 mask-r-from-50% mask-b-from-50% shadow-xl dark:border-neutral-800"
              style={{
                color: "transparent",
                transform: "rotateY(20deg) rotateX(40deg) rotate(-20deg)",
              }}
              />
          </motion.div>
              </div>


        <div className="bg-background absolute inset-x-0 bottom-0 z-50 h-40 w-full mask-t-from-10% md:h-100" />
      </div>
    </div>
  );
};

export { LandingImages };