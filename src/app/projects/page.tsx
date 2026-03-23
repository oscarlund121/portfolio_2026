import { projects } from "@/components/sections/ProjectCard";
import PageIntro from "@/components/ui/PageIntro";
import { ProjectCard } from "@/components/sections/ProjectCard";

export default function Projects() {
  return (
    <div className="w-full bg-mux-bg">
      <PageIntro title="Projects" bg="bg-mux-yellow" />

      <div className="grid-container flex flex-col">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>

      <div className="grid-container px-4 sm:px-6 lg:px-8 py-12 text-center">
        <p className="text-black/60 font-medium">
          More projects are being added as I continue to grow through my studies
          and development work.
        </p>
      </div>
    </div>
  );
}
