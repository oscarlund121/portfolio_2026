import { SiNextdotjs, SiReact, SiJavascript, SiTailwindcss, SiFigma, SiGithub, SiNodedotjs, SiVercel, SiGit, SiAstro } from "react-icons/si";
import { FiMonitor, FiZap } from "react-icons/fi";

const coreStack = [
  { label: "JavaScript",        icon: SiJavascript },
  { label: "React",             icon: SiReact },
  { label: "Next.js",           icon: SiNextdotjs },
  { label: "Astro",             icon: SiAstro },
  { label: "Tailwind CSS",      icon: SiTailwindcss },
  { label: "Node.js",           icon: SiNodedotjs },
  { label: "API Integration",   icon: FiZap },
  { label: "Git",               icon: SiGit },
  { label: "GitHub",            icon: SiGithub },
  { label: "Vercel",            icon: SiVercel },
  { label: "Figma",             icon: SiFigma },
  { label: "Responsive Design", icon: FiMonitor },
];

export const CoreStack = () => {
  return (
    <section className="w-full bg-mux-bg border-[0.5px] border-mux-border">
      <div className="grid-container py-4 text-center">
        <p className="tech-mono text-black">Core Stack</p>
      </div>
      <div className="grid-container grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-mux-border text-center font-bold items-center">
        {coreStack.map(({ label, icon: Icon }) => (
          <div key={label} className="py-8 border-[0.5px] border-m  ux-border flex flex-col items-center gap-2">
            <Icon size={28} />
            <span className="text-lg">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
