import PageIntro from "@/components/ui/PageIntro";
import { Timeline } from "@/components/sections/Timeline";
import { HowIWork } from "@/components/sections/HowIWork";

export default function About() {
  return (
    <div className="w-full bg-mux-bg">
      <PageIntro title="About Me">
        <p>
          I&apos;m Oscar, a web development student with a background in
          multimedia design. I work in the space between visual design and
          frontend development, with a strong interest in building interfaces
          that feel clear, responsive, and well-crafted.
        </p>
        <p>
          My background in design helps me think visually and structure content
          with intention, while my development work keeps me focused on
          functionality, usability, and clean implementation.
        </p>
        <p>
          Right now, I&apos;m continuing to strengthen my frontend foundation
          while expanding into TypeScript and Python as part of my top-up
          education in web development.
        </p>
      </PageIntro>

      <Timeline />
      <HowIWork />
    </div>
  );
}
