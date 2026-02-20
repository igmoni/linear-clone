import React from "react";
import { Container } from "./Container";
import { Heading } from "./Heading";
import { SubHeading } from "./SubHeading";
import { Button } from "./ui/button";
import Link from "next/link";
import { LandingImages } from "./LandingImages";

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-10 md:pt-20 lg:pt-32">
      <Container>
        <Heading as="h1">
          Agents that do the work <br />
          Approvals that keep you safe.
        </Heading>

        <SubHeading className={"py-8"}>
          Deploy AI agents that plan, act through your tools, and report
          outcomes—without changing how your teams work.
        </SubHeading>

        <div className="flex w-fit items-center gap-6">
          <Button className={"shadow-brand"}>Start your free trial</Button>
          <Button asChild variant="ghost">
            <Link href="#">View role based demos</Link>
          </Button>
        </div>
        <LandingImages />
      </Container>
    </section>
  );
};

export { Hero };
