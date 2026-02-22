import React from "react";
import { Container } from "./Container";
import { Heading } from "./Heading";
import { SubHeading } from "./SubHeading";
import { LandingImages } from "./LandingImages";

const Outcomes = () => {
  return (
    <Container className={"py-10 md:py-20 lg:py-0 overflow-hidden"}>
      <Heading>
       Governed AI <br />
        Trusted Outcomes.
      </Heading>

      <SubHeading className={"py-8"}>
      Deploy AI agents with built-in approvals, brand guardrails, and audit trails. Every step is visible, reviewable, and compliant.
      </SubHeading>

      
      <LandingImages firstImg="/5.webp" secondImg="/6.webp"   />
    </Container>
  );
};

export { Outcomes };
