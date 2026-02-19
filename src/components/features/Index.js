import React from "react";
import { Container } from "../Container";
import { Heading } from "../Heading";
import { SubHeading } from "../SubHeading";
import { Card, CardButton, CardContent, CardSkeleton, CardTitle } from "./Card";
import { CheckCircleIcon, Plus } from "lucide-react";
import { First } from "./skeletons/First";
import { Third } from "./skeletons/Third";

const Features = () => {
  return (
    <Container className={"py-10 md:py-20 lg:py-32"}>
      <div className="flex items-baseline justify-between">
        <Heading>
          Built for Fast Moving <br /> Teams That Need Control.
        </Heading>
        <SubHeading>
          Agents work inside your existing tools, with built-in approvals, brand
          and policy guardrails, and full traceability. Every action is
          auditable, every outcome accountable.
        </SubHeading>
      </div>

      <div className="m-10 grid grid-cols-1 gap-4 md:my-20 md:grid-cols-3">
        <Card className={"rounded-tl-3xl rounded-bl-3xl"}>
          <CardSkeleton>
            <First />
          </CardSkeleton>

          <CardContent>
            <CardTitle>Prebuilt Agents, Tuned to Your Workflows</CardTitle>
            <CardButton>
              <Plus />
            </CardButton>
          </CardContent>
        </Card>
        <Card>
          <CardSkeleton></CardSkeleton>

          <CardContent>
            <CardTitle>Automate Handoffs, Reduce Ops Friction</CardTitle>
            <CardButton>
              <Plus />
            </CardButton>
          </CardContent>
        </Card>
        <Card className={"rounded-tr-3xl rounded-br-3xl"}>
          <CardSkeleton>
            <Third />
          </CardSkeleton>

          <CardContent>
            <CardTitle>Approvals, Guardrails, and Full Auditability</CardTitle>
            <CardButton>
              <Plus />
            </CardButton>
          </CardContent>
        </Card>
      </div>
    </Container>
  );
};

export { Features };
