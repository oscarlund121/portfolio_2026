import Tag from "@/components/ui/Tag";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { projects } from "@/components/sections/ProjectCard";

export const FeaturedProjects = () => {
  return (
    <section className="w-full bg-mux-bg border-b border-mux-border">
      <div className="grid-container px-4 sm:px-6 lg:px-8 pt-16 pb-8 md:pt-24 md:pb-12">
        <SectionHeading
          title="Latest Project"
        />
      </div>

      <div className="grid-container flex flex-col border-[0.5px] border-mux-border">
        {projects.slice(0, 1).map((project, index) => (
          <div
            key={project.title}
            className={`flex flex-col md:flex-row border-b border-mux-border last:border-b-0 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div
              className={`w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center ${
                index % 2 !== 0
                  ? "md:border-l border-b md:border-b-0"
                  : "md:border-r border-b md:border-b-0"
              } border-mux-border`}
            >
              <h3 className="text-3xl md:text-4xl font-black mb-1 uppercase tracking-tight text-black">
                {project.title}
              </h3>

              {(project.year || project.projectType || project.status) && (
                <p className="tech-mono text-black/40 mb-5 text-[0.7rem]">
                  {[project.year, project.projectType, project.status].filter(Boolean).join(" · ")}
                </p>
              )}

              <p className="text-black/70 mb-4 text-lg leading-relaxed font-medium">
                {project.description}
              </p>

              {project.whatIDid && (
                <p className="text-black/60 mb-6 text-sm leading-relaxed border-l-2 border-mux-yellow pl-3">
                  <span className="font-bold text-black/80">What I did: </span>
                  {project.whatIDid}
                </p>
              )}

              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4">
                {project.liveUrl && (
                  <Button variant="primary" href={project.liveUrl} external className="gap-2">
                    {project.liveLabel ?? "View Live"}{" "}
                    <FiExternalLink className="h-4 w-4" />
                  </Button>
                )}
                {project.sourceUrl && (
                  <Button
                    variant="outline"
                    href={project.sourceUrl}
                    external
                    className="gap-2"
                  >
                    {project.sourceLabel ?? "Source Code"}{" "}
                    <FiGithub className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </div>

            <div
              className={`w-full md:w-1/2 p-8 md:p-16 flex items-center justify-center ${
                index % 2 === 0 ? "bg-mux-pink/10" : "bg-mux-yellow/10"
              }`}
            >
              {project.image ? (
                <div className="group relative w-full aspect-video bg-black neo-shadow overflow-hidden transition-all duration-300">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover duration-500 "
                  />
                </div>
              ) : (
                <div className="w-full aspect-video bg-mux-bg border-2 border-black neo-shadow-static flex items-center justify-center">
                  <span className="tech-mono text-black/40">Preview</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
