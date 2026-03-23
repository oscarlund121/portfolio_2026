import type { Project } from "@/types";
import Tag from "@/components/ui/Tag";
import Button from "@/components/ui/Button";
import { FiExternalLink, FiGithub } from "react-icons/fi";

export const projects: Project[] = [
  {
    title: "Psychotherapy Practice Site",
    description:
      "Designed and developed a responsive website for a psychotherapy practice, focused on accessibility, clarity, and building trust through design.",
    whatIDid:
      "Designed the interface, built responsive layouts in Next.js and Tailwind CSS, and focused on accessibility and a calm, trustworthy user experience.",
    role: "UI Design, Frontend Development",
    tech: "Next.js, Tailwind CSS, Figma",
    year: "2024",
    projectType: "Client project",
    status: "Live",
    tags: ["Next.js", "Tailwind CSS", "UI Design", "Responsive Design"],
    image: "/img/susan-psyko.png",
    liveUrl: "https://www.psykoterapisusan.dk/",
    sourceUrl: "https://github.com/oscarlund121/susancorrecto",
    liveLabel: "View Live",
    sourceLabel: "Source Code",
  },
  {
    title: "Frontend Portfolio Website",
    description:
      "A portfolio built to explore layout, visual identity, animation, and responsive frontend development through custom HTML, CSS, and JavaScript.",
    whatIDid:
      "Designed and developed the full site from scratch: layout, typography, animations, and responsive behaviour.",
    role: "Design, Frontend Development",
    tech: "HTML, CSS, JavaScript",
    year: "2023",
    projectType: "Personal project",
    status: "Live",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    image: "/img/multimedie_image.png",
    liveUrl: "https://praktik-digital.vercel.app/",
    sourceUrl: "https://github.com/oscarlund121/praktik-digital",
    liveLabel: "View Live",
    sourceLabel: "Source Code",
  },
  {
    title: "Async/Exhibit",
    description:
      "A frontend-focused exhibition and event management concept built around structured UI work, API-based content, and a strong focus on usability.",
    whatIDid:
      "Built UI components, integrated API-based content, and focused on scalable page structure and digital flow.",
    role: "Frontend Development, UI Design",
    tech: "Next.js, React, Tailwind CSS, API Integration",
    year: "2024",
    projectType: "School project",
    status: "In progress",
    tags: ["Next.js", "React", "Tailwind CSS", "API Integration"],
    liveLabel: "View Project",
    sourceLabel: "Source Code",
  },
  {
    title: "Exam Project",
    description:
      "A school exam project built around real-world frontend techniques: API fetching, data mapping, and dynamic filtering with a focus on clean component structure.",
    whatIDid:
      "Implemented API calls and data fetching, mapped and transformed response data, and built filtering functionality across a structured component-based UI.",
    role: "Frontend Development",
    tech: "Next.js, React, Tailwind CSS, REST API",
    year: "2025",
    projectType: "Exam project",
    status: "Completed",
    tags: ["Next.js", "React", "Tailwind CSS", "API Fetching", "Filtering"],
    image: "/img/dmp-eksamen.png",
    sourceLabel: "Source Code",
  },
  {
    title: "Frontend Webshop Project",
    description:
      "A webshop focused on product listing, filtering, pagination, and component-based UI. Built to strengthen practical frontend workflow in React and Next.js.",
    whatIDid:
      "Built product listing pages, filtering, and pagination using React and Next.js with a focus on reusable component patterns.",
    role: "Frontend Development",
    tech: "Next.js, React, Tailwind CSS, API Data",
    year: "2024",
    projectType: "School project",
    status: "In progress",
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
        <h2 className="text-3xl md:text-4xl font-black mb-1 uppercase tracking-tight text-black">
          {project.title}
        </h2>

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

        {project.role && (
          <p className="tech-mono text-black/60 mb-2">Role: {project.role}</p>
        )}
        {project.tech && (
          <p className="tech-mono text-black/60 mb-6">Built with: {project.tech}</p>
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
          index % 2 === 0 ? "bg-mux-blue/10" : "bg-mux-yellow/10"
        }`}
      >
        {project.image ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full aspect-video bg-black neo-shadow overflow-hidden transition-all duration-300 block"
          >
            <img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </a>
        ) : (
          <div className="w-full aspect-video bg-mux-bg border-2 border-black neo-shadow-static flex items-center justify-center">
            <span className="tech-mono text-black/40">Preview</span>
          </div>
        )}
      </div>
    </div>
  );
};
