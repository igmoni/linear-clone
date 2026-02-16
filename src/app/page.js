import { Features } from "@/components/features/Index";
import { Hero } from "@/components/Hero";
import { LogoCloud } from "@/components/LogoCloud";

const page = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <LogoCloud />
      <Features />
    </div>
  );
};

export default page;
