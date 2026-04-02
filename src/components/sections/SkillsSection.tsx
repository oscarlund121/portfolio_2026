import type { SkillGroup } from "@/types";
import SectionHeading from "@/components/ui/SectionHeading";

const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Data & Systems",
    items: ["API Integration & Data Processing", "SQL / Databases", "Data Transformation (filtering, mapping, sorting)", "Postman (API testing & validation)", "Docker (containerized environments)"],
  },
  {
    title: "Design",
    items: ["Figma", "UI Design", "Responsive Layout", "Visual Hierarchy", "Prototyping"],
  },
  {
    title: "Workflow",
    items: ["Git", "GitHub", "Component-Based Development", "Design-to-Code Implementation"],
  },
];

export const SkillsSection = () => {
  return (
    <section className="w-full bg-mux-bg border-b border-mux-border">
      <div className="grid-container px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <SectionHeading
          title="Skills & Competencies"
          intro="I build applications that connect data sources, structure information, and present it through clean, scalable interfaces. My work spans frontend development, database design, API integration, and turning complex data into usable digital tools."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="bg-white border-2 border-black p-8 neo-shadow-static"
            >
              <h3 className="text-xl font-black uppercase tracking-tight text-black mb-6">
                {group.title}
              </h3>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="text-black/80 font-medium flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-black rounded-full shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
