import { Logo } from "@/svgs/Logo";
import React from "react";
import { Container } from "./Container";
import Link from "next/link";
import { Button } from "./ui/button";

const navLinks = [
  { title: "Features", href: "/features" },
  { title: "Product", href: "/profuct" },
  { title: "Socials", href: "/socials" },
  { title: "Pricing", href: "/pricing" },
];

const Navbar = () => {
  return (
    <div className="border-b  border-neutral-200 dark:border-neutral-800">
      <Container className={"flex items-center justify-between py-4"}>
        <Logo />
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
            className="inline-block rounded-md bg-white px-4 py-2 text-sm font-medium text-neutral-600 dark:text-neutral-400"
          >
            Log in
          </Link>
          <Button>Sign up</Button>
        </div>
      </Container>
    </div>
  );
};

export { Navbar };
