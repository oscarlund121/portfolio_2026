import PageIntro from "@/components/ui/PageIntro";
import { AboutBio } from "@/components/sections/AboutBio";
import { Timeline } from "@/components/sections/Timeline";
import { HowIWork } from "@/components/sections/HowIWork";

export default function About() {
  return (
    <div className="w-full bg-mux-bg">
      <PageIntro title="About Me" bg="bg-mux-yellow" />

      <AboutBio />
      <Timeline />
      <HowIWork />
    </div>
  );
}
