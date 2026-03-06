import { BookOpen, GraduationCap, Code2 } from "lucide-react";

export default function About() {
  const experiences = [
    {
      title: "Self-Taught Engineering",
      role: "Student",
      period: "Present",
      description: "Diving deep into TypeScript and Python, building scalable architectures and modern web applications.",
      icon: <Code2 className="h-8 w-8 text-black" />
    },
    {
      title: "Web Development Studies",
      role: "Current Focus",
      period: "2025 - Present",
      description: "Mastering React, Next.js, and the broader JavaScript ecosystem to bring designs to life with robust code.",
      icon: <BookOpen className="h-8 w-8 text-black" />
    },
    {
      title: "Multimedia Design",
      role: "Education Graduate",
      period: "2023 - 2025",
      description: "Specialized in UX/UI, digital prototyping, and creating compelling aesthetic experiences across media formats.",
      icon: <GraduationCap className="h-8 w-8 text-black" />
    }
  ];

  return (
    <div className="w-full bg-mux-bg">
      <div className="grid-container border-b border-mux-border pt-16 pb-24 text-center bg-mux-pink">
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6 text-black">About Me</h1>
        <p className="text-xl text-black/80 max-w-2xl mx-auto font-medium">
          I'm Oscar, a multimedia designer who fell in love with code. I believe the best digital experiences happen 
          at the intersection of beautiful design and solid engineering.
        </p>
      </div>

      <div className="grid-container w-full">
        {experiences.map((exp, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-4 border-b border-mux-border last:border-b-0">
            
            {/* Year / Period Block */}
            <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-mux-border flex items-center justify-center bg-mux-yellow/20">
              <span className="tech-mono text-black font-bold text-lg">{exp.period}</span>
            </div>

            {/* Content Block */}
            <div className="p-8 md:p-12 col-span-3 flex flex-col justify-center bg-white">
              <div className="bg-mux-bg border-2 border-black p-8 neo-shadow-static hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[12px_12px_0px_black] transition-transform">
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 mb-6">
                  <div className="p-4 bg-white border-2 border-black shadow-[4px_4px_0px_black] inline-flex">
                    {exp.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-black uppercase tracking-tight">{exp.title}</h3>
                    <h4 className="tech-mono text-black/60 mt-1">{exp.role}</h4>
                  </div>
                </div>
                <p className="text-lg text-black/80 leading-relaxed font-medium max-w-3xl">
                  {exp.description}
                </p>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
