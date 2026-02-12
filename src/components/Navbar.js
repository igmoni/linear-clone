"use client";
import { Logo } from "@/svgs/Logo";
import React, { useState } from "react";
import { Container } from "./Container";
import Link from "next/link";
import { Button } from "./ui/button";
import { IconLayoutSidebar, IconX } from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";
import { useTheme } from "next-themes";

const navLinks = [
  { title: "Features", href: "/features" },
  { title: "Product", href: "/product" },
  { title: "Socials", href: "/socials" },
  { title: "Pricing", href: "/pricing" },
];

const Navbar = () => {
  return (
    <div className="border-b border-neutral-200 dark:border-neutral-800">
      <DesktopNavbar />
      <MobileNavbar />
    </div>
  );
};

export { Navbar };

export const MobileNavbar = () => {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  return (
    <div className="relative flex items-center justify-between px-4 py-2 md:hidden">
      <div onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        <Logo />
      </div>
      <button onClick={() => setOpen(true)}>
        <IconLayoutSidebar className="size-4 text-black dark:text-white" />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              backdropFilter: "blur(10px)",
              background: "transparent",
            }}
            exit={{
              opacity: 0,
              backdropFilter: "blur(10px)",
              background: "rgba(255,255,255,0.1)",
            }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 h-full w-full bg-black/40 px-4 backdrop-blur-md"
          >
            <div className="flex items-center justify-between py-2">
              <Logo />
              <button
                className="absolute top-1.5 right-3 z-60 rounded-sm border border-neutral-800 p-1"
                onClick={() => setOpen(false)}
              >
                <IconX className="size-4 text-black dark:text-white" />
              </button>
            </div>
            <div className="my-10 flex flex-col items-start gap-6">
              {navLinks.map((item, index) => (
                <motion.div
                  initial={{
                    opacity: 0,
                    x: -4,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.1,
                  }}
                  key={item.title}
                >
                  <Link
                    href={item.href}
                    className="text-2xl font-medium text-neutral-600 dark:text-neutral-400"
                  >
                    {item.title}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="absolute right-5 bottom-10 flex items-center gap-4">
              <Link
                href={"/login"}
                className="inline-block rounded-md px-4 py-2 text-sm font-medium text-neutral-600 dark:text-neutral-400"
              >
                Log in
              </Link>
              <Button>Sign up</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const DesktopNavbar = () => {
  const { theme, setTheme } = useTheme();
  return (
    <Container className={"hidden items-center justify-between py-4 md:flex"}>
     <div onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        <Logo />
      </div>
      <div className="flex items-center gap-4">
        {navLinks.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="text-sm font-medium text-neutral-600 dark:text-neutral-400"
          >
            {item.title}
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-4">
        <Link
          href={"/login"}
          className="inline-block rounded-md px-4 py-2 text-sm font-medium text-neutral-600 dark:text-neutral-400"
        >
          Log in
        </Link>
        <Button>Sign up</Button>
      </div>
    </Container>
  );
};
