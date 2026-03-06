import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Interactive E-Commerce Platform",
      description: "A modern, high-performance shopping experience built with Next.js, featuring dynamic product filtering and smooth micro-animations. Focus on user-centered design.",
      tags: ["Next.js", "React", "TailwindCSS", "UX/UI"],
      image: "https://images.unsplash.com/photo-1557821552-17105153cebc?w=800&q=80",
      github: "#",
      demo: "#"
    },
    {
      title: "Multimedia Portfolio V1",
      description: "My initial portfolio demonstrating multimedia design capabilities. Integrates custom CSS animations and responsive layouts.",
      tags: ["HTML", "CSS", "Vanilla JS", "Design System"],
      image: "https://images.unsplash.com/photo-1531297172867-4f50ef54f5aa?w=800&q=80",
      github: "#",
      demo: "#"
    },
    {
      title: "Data Visualization Dashboard",
      description: "An ongoing learning project combining TypeScript basics with complex data visualization libraries for a sleek dark-mode admin panel.",
      tags: ["TypeScript", "React", "Chart.js"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      github: "#",
      demo: "#"
    }
  ];

  return (
    <div className="w-full bg-mux-bg">
      <div className="grid-container border-b border-mux-border pt-16 pb-24 text-center bg-mux-yellow">
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6 text-black">Projects</h1>
        <p className="text-xl text-black/80 max-w-2xl mx-auto font-medium">
          A showcase of my journey from multimedia design into frontend web development, 
          highlighting my focus on aesthetics and user experience.
        </p>
      </div>

      <div className="grid-container flex flex-col">
        {projects.map((project, index) => (
          <div key={index} className={`flex flex-col md:flex-row border-b border-mux-border last:border-b-0 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
            
            {/* Project Details */}
            <div className={`w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center ${index % 2 !== 0 ? 'md:border-l border-b md:border-b-0' : 'md:border-r border-b md:border-b-0'} border-mux-border`}>
              <h2 className="text-3xl md:text-4xl font-black mb-4 uppercase tracking-tight text-black">{project.title}</h2>
              <p className="text-black/70 mb-8 text-lg leading-relaxed font-medium">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 text-xs font-bold uppercase tracking-wider border border-black text-black">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Link href={project.demo} className="pill-button pill-button-black gap-2">
                  View Live <ExternalLink className="h-4 w-4" />
                </Link>
                <Link href={project.github} className="pill-button pill-button-outline gap-2">
                  Source Code <Github className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Project Image */}
            <div className={`w-full md:w-1/2 p-8 md:p-16 flex items-center justify-center group ${index % 2 === 0 ? 'bg-mux-pink/10' : 'bg-mux-yellow/10'}`}>
              <div className="relative w-full aspect-video bg-black neo-shadow overflow-hidden transition-all duration-300 group-hover:-translate-y-2 group-hover:-translate-x-2 group-hover:shadow-[12px_12px_0px_black]">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-0"
                />
              </div>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
}
