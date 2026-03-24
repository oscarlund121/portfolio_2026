import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects, ProjectCard } from "@/components/sections/ProjectCard";

export const FeaturedProjects = () => {
  return (
    <section className="w-full bg-mux-bg border-b border-mux-border">
      <div className="grid-container px-4 sm:px-6 lg:px-8 pt-16 pb-8 md:py-18">
        <SectionHeading
          title="Latest Project"
        />
      </div>

      <div className="grid-container flex flex-col border-[0.5px] border-mux-border">
        {projects.slice(0, 2).map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      <div className=" px-4 sm:px-6 lg:px-8 pt-16 pb-8 md:py-12 flex justify-center">
        <Button variant="accent" href="/projects">
          See All Projects {"▶"}
        </Button>
      </div>
      </div>

    </section>
  );
};
