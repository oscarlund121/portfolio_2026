import { Hero } from "@/components/sections/Hero";
import { CoreStack } from "@/components/sections/CoreStack";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { CurrentlyLearning } from "@/components/sections/CurrentlyLearning";
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
  return (
    <div className="w-full flex md:block flex-col">
      <Hero />
      <CoreStack />
      <FeaturedProjects />
      <SkillsSection />
      <CurrentlyLearning />
      <CTASection />
    </div>
  );
}
