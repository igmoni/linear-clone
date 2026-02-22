import { Features } from "@/components/features/Index";
import { FeaturesSection } from "@/components/features-secondary/Index";
import { Hero } from "@/components/Hero";
import { LogoCloud } from "@/components/LogoCloud";
import { Speed } from "@/components/Speed";
import { Outcomes } from "@/components/Outcomes";
import { FeaturesTeritary } from "@/components/features-teritary/Index";

const page = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <LogoCloud />
      <Features />
      <Speed />
      <FeaturesSection />
      <Outcomes />
      <FeaturesTeritary />
      <div className="min-h-[20vh]"></div>
    </div>
  );
};

export default page;
