"use client";
import Image from "next/image";
import { motion } from "motion/react";

const LogoCloud = () => {
  const logos = [
    { title: "Open AI", src: "/openai.webp" },
    { title: "Granola", src: "/granola.webp" },
    { title: "Character AI", src: "/characterai.webp" },
    { title: "Hello Patient", src: "/hello-patient.webp" },
    { title: "Portola", src: "/portola.webp" },
    { title: "Oracle", src: "/oracle.webp" },
  ];
  return (
    <section className="pb-10">
      <h2 className="mx-auto mt-10 max-w-xl text-center text-lg font-medium text-neutral-600 dark:text-neutral-400">
        Trusted by modern operators across industries.
        <br />
        <span className="text-neutral-400">
          From pilot to scale without chaos.
        </span>
      </h2>
      <div className="mx-auto grid max-w-3xl grid-cols-2 md:grid-cols-3">
        {logos.map((logo, index) => (
          <motion.div
            key={index}
            initial={{ y: -10, opacity: 0, filter: "blur(10px)" }}
            whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
              delay: index * 0.1,
            }}
          >
            <Image
              alt={logo.title}
              src={logo.src}
              width={100}
              height={100}
              className="mx-auto size-20 object-contain"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export { LogoCloud };
