import type { Project } from "@/types";
import Tag from "@/components/ui/Tag";
import Button from "@/components/ui/Button";
import { FiExternalLink, FiGithub } from "react-icons/fi";

export const projects: Project[] = [
  {
    title: "Psychotherapy Practice Site",
    description:
      "A calm and professional website created for a psychotherapy practice, designed with a focus on clarity, accessibility, and a trustworthy user experience.",
    role: "Design and frontend implementation",
    tech: "Next.js, Tailwind CSS, Figma",
    tags: ["Next.js", "Tailwind CSS", "UI Design", "Responsive Design"],
    image: "/img/susan-psyko.png",
    liveUrl: "https://www.psykoterapisusan.dk/",
    sourceUrl: "https://github.com/oscarlund121/susancorrecto",
    liveLabel: "View Live",
    sourceLabel: "Source Code",
  },
  {
    title: "Multimedia Portfolio V1",
    description:
      "An earlier portfolio project built to explore layout, visual identity, animation, and responsive frontend development through custom HTML, CSS, and JavaScript.",
    role: "Design and frontend development",
    tech: "HTML, CSS, JavaScript",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    image: "/img/multimedie_image.png",
    liveLabel: "View Live",
    sourceLabel: "Source Code",
  },
  {
    title: "Async/Exhibit",
    description:
      "A frontend-focused exhibition and event management concept built around structured UI work, API-based content, and a strong focus on usability and digital flow.",
    role: "Frontend development and UI work",
    tech: "Next.js, React, Tailwind CSS, API Integration",
    tags: ["Next.js", "React", "Tailwind CSS", "API Integration"],
    liveLabel: "View Project",
    sourceLabel: "Source Code",
  },
  {
    title: "Frontend Webshop Project",
    description:
      "A webshop project focused on product listing, filtering, pagination, and component-based UI building. Created to strengthen my practical workflow in React and Next.js.",
    role: "Frontend development",
    tech: "Next.js, React, Tailwind CSS, API Data",
    tags: ["Next.js", "React", "Tailwind CSS", "API Data"],
    liveLabel: "View Project",
    sourceLabel: "Source Code",
  },
];

type ProjectCardProps = {
  project: Project;
  index: number;
};

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <div
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
        <h2 className="text-3xl md:text-4xl font-black mb-4 uppercase tracking-tight text-black">
          {project.title}
        </h2>
        <p className="text-black/70 mb-6 text-lg leading-relaxed font-medium">
          {project.description}
        </p>

        {project.role && (
          <p className="tech-mono text-black/60 mb-2">Role: {project.role}</p>
        )}
        {project.tech && (
          <p className="tech-mono text-black/60 mb-6">Tech: {project.tech}</p>
        )}

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-4">
          {project.liveUrl && (
            <Button href={project.liveUrl} external className="gap-2">
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
              className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-0"
            />
          </div>
        ) : (
          <div className="w-full aspect-video bg-mux-bg border-2 border-black neo-shadow-static flex items-center justify-center">
            <span className="tech-mono text-black/40">Preview</span>
          </div>
        )}
      </div>
    </div>
  );
};
