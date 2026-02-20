import { Features } from "@/components/features/Index";
import { Hero } from "@/components/Hero";
import { LogoCloud } from "@/components/LogoCloud";
import { Speed } from "@/components/ui/Speed";

const page = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <LogoCloud />
      <Features />
      <Speed />
    </div>
  );
};

export default page;
