import type { Project } from "@/types";
import Tag from "@/components/ui/Tag";
import Button from "@/components/ui/Button";
import { FiExternalLink, FiGithub } from "react-icons/fi";

export const projects: Project[] = [
  {
    title: "Travel Destination Tracker",
    description:
      "A full-stack application where users sign up, authenticate, and manage structured travel data through a custom CRUD system. Built with Python, Flask, and MariaDB, running in Docker.",
    whatIDid:
      "Designed the relational database schema (users and destinations), implemented authentication with hashed passwords, built server-side CRUD logic in Flask, and connected it all through Jinja2 templates.",
    role: "Full-Stack Development",
    tech: "Python, Flask, MariaDB, Docker, Jinja2",
    year: "2026",
    projectType: "School project",
    status: "Completed",
    tags: ["Python", "Flask", "MariaDB", "Docker", "Full-Stack"],
    sourceUrl: "https://github.com/oscarlund121/2026_1_travel",
    sourceLabel: "Source Code",
  },
  {
    title: "Psychotherapy Practice Site",
    description:
      "A responsive client website for a psychotherapy practice, built with a focus on accessibility, clarity, and trust-oriented design.",
    whatIDid:
      "Designed the interface in Figma, built responsive layouts in Next.js and Tailwind CSS, and prioritized accessibility and a calm, professional user experience.",
    role: "UI Design, Frontend Development",
    tech: "Next.js, Tailwind CSS, Figma",
    year: "2024",
    projectType: "Client project",
    status: "Live",
    tags: ["Next.js", "Tailwind CSS", "UI Design", "Responsive Design"],
    image: "/img/susan-psyko.png",
    liveUrl: "https://www.psykoterapisusan.dk/",
    
    liveLabel: "View Live",
    
  },
  {
    title: "Danser med Piger - Artist Platform",
    description:
      "A full-stack artist website that fetches and displays live content from multiple external APIs. News and merchandise are served from a Google Sheets-backed endpoint; music data is pulled from the Spotify Web API.",
    whatIDid:
      "Integrated the Spotify Web API using OAuth client credentials to fetch artist profiles and top tracks. Built data fetching layers over Google Apps Script endpoints acting as a lightweight CMS for products and news. Managed client-side cart and UI state with Zustand, and structured all UI components around mapped and filtered API responses.",
    role: "Frontend Development, API Integration",
    tech: "Next.js, React, Tailwind CSS, Spotify API, Google Apps Script, Zustand",
    year: "2025",
    projectType: "Exam project",
    status: "Completed",
    tags: ["Next.js", "React", "API Integration", "Data Fetching", "Spotify API", "Zustand"],
    image: "/img/dmp-eksamen.png",
    sourceUrl: "https://github.com/oscarlund121/dmp-eksamen",
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
        className={`w-full md:w-1/2 p-8 md:p-16 flex items-center justify-center order-first md:order-0 ${
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
