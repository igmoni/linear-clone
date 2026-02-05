"use client";
import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const LandingImages = () => {
  return (
    <div >
      <div className="relative min-h-72 mask-b-from-50% mask-r-from-80% sm:min-h-80 md:min-h-140 w-full overflow-y-visible overflow-x-hidden  perspective-distant">
        <motion.div
          initial={{
            opacity: 0,
            y: -100,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
          className="persepctive-[4000px] translate-x-7 md:translate-x-20 translate-y-20 md:translate-y-10"
        >
          <Image
            src={"/3.webp"}
            alt="Hero"
            height={1080}
            width={1920}
            className={cn(
              "absolute inset-0 rounded-lg mask-r-from-20% mask-b-from-20%  shadow-2xl",
            )}
            style={{
              transform: "rotateY(20deg) rotateX(40deg) rotateZ(-20deg)",
            }}
          />
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            y: -400,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            ease: "easeOut",
            duration: 0.5,
            delay: 0.2,
          }}
          className="translate-x-15 md:translate-x-55 translate-y-4 md:-translate-y-30  perspective-[4000px]"
        >
          <Image
            src={"/4.webp"}
            alt="Hero"
            height={1080}
            width={1920}
            className={cn(
              "absolute inset-0 rounded-lg mask-r-from-80% mask-b-from-80% shadow-2xl",
            )}
            style={{
              transform: "rotateY(20deg) rotateX(40deg) rotateZ(-20deg)",
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export { LandingImages };
