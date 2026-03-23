import type { TimelineEntry } from "@/types";

const timeline: TimelineEntry[] = [
  {
    title: "Top-Up in Web Development",
    meta: "2025 Present",
    description:
      "Currently building on my design background with a stronger technical focus on frontend development, modern workflows, and problem-solving in code. At the moment, I'm expanding my skills in TypeScript and Python alongside my existing frontend stack.",
  },
  {
    title: "Multimedia Design",
    meta: "2023 2025",
    description:
      "Built a foundation in visual communication, UI/UX thinking, digital prototyping, and design systems, skills I now bring directly into frontend development.",
  },
  {
    title: "Frontend Focus",
    meta: "Ongoing",
    description:
      "Working with JavaScript, React, Next.js, and Tailwind CSS to build responsive websites and interfaces with a clear visual identity and strong user focus.",
  },
];

export const Timeline = () => {
  return (
    <div className="grid-container w-full">
      {timeline.map((entry) => (
        <div
          key={entry.title}
          className="grid grid-cols-1 md:grid-cols-4 border-b border-mux-border last:border-b-0"
        >
          <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-mux-border flex items-center justify-center bg-mux-yellow/20">
            <span className="tech-mono text-black font-bold text-lg">
              {entry.meta}
            </span>
          </div>

          <div className="p-8 md:p-12 col-span-3 flex flex-col justify-center bg-white">
            <div className="bg-mux-bg border-2 border-black p-8 neo-shadow-static hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[12px_12px_0px_black] transition-transform">
              <h3 className="text-2xl font-black text-black uppercase tracking-tight mb-4">
                {entry.title}
              </h3>
              <p className="text-lg text-black/80 leading-relaxed font-medium max-w-3xl">
                {entry.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
