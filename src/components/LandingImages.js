"use client";
import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const LandingImages = () => {
  return (
    <div className="relative min-h-140 w-full pt-20 perspective-distant">
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="perspective-[4000px]"
      >
        <Image
          src={"/4.webp"}
          alt="Demo 1 Image"
          width={1920}
          height={1080}
          className={cn(
            "absolute inset-0 rounded-lg mask-r-from-20% mask-b-from-20% shadow-xl",
          )}
          style={{
            transform: "rotateY(20deg) rotateX(40deg) rotate(-20deg)",
          }}
        />
      </motion.div>

      {/* Upper Image */}
      <motion.div
        initial={{ opacity: 0, y: -200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
        className="translate-x-30 -translate-y-40 perspective-[4000px]"
      >
        <Image
          src={"/3.webp"}
          alt="Demo 1 Image"
          width={1920}
          height={1080}
          className={cn(
            "absolute inset-0 rounded-lg border-4 border-neutral-200 dark:border-neutral-800 mask-r-from-50% mask-b-from-50% shadow-xl",
          )}
          style={{
            transform: "rotateY(20deg) rotateX(40deg) rotate(-20deg)",
          }}
        />
      </motion.div>
    </div>
  );
};

export { LandingImages };

// const LandingImages = () => {
//   return (
//     <div className="">
//       <div className="relative min-h-72 sm:min-h-80 md:min-h-140 w-full z-999 perspective-distant">
//         <motion.div
//           initial={{
//             opacity: 0,
//             y: -100,
//           }}
//           animate={{
//             opacity: 1,
//             y: 0,
//           }}
//           transition={{
//             duration: 0.5,
//             ease: "easeOut",
//           }}
//           className="persepctive-[4000px] translate-x-7 md:translate-x-20 translate-y-20 md:translate-y-10"
//         >
//           <Image
//             src={"/3.webp"}
//             alt="Hero"
//             height={1080}
//             width={1920}
//             className={cn(
//               "absolute inset-0 rounded-lg mask-r-from-20% mask-b-from-20%  shadow-2xl",
//             )}
//             style={{
//               transform: "rotateY(20deg) rotateX(40deg) rotateZ(-20deg)",
//             }}
//           />
//         </motion.div>
//         <motion.div
//           initial={{
//             opacity: 0,
//             y: -400,
//           }}
//           animate={{
//             opacity: 1,
//             y: 0,
//           }}
//           transition={{
//             ease: "easeOut",
//             duration: 0.5,
//             delay: 0.2,
//           }}
//           className="translate-x-15 md:translate-x-55 translate-y-4 md:-translate-y-30  perspective-[4000px] "
//         >
//           <Image
//             src={"/4.webp"}
//             alt="Hero"
//             height={1080}
//             width={1920}
//             className={cn(
//               "absolute inset-0 rounded-lg mask-r-from-20% mask-b-from-20% shadow-2xl",
//             )}
//             style={{
//               transform: "rotateY(20deg) rotateX(40deg) rotateZ(-20deg)",
//             }}
//           />
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export { LandingImages };
