export const AboutBio = () => {
  const specialties = [
    "Frontend Development",
    "UI / Visual Design",
    "Responsive Layouts",
    "Component Architecture",
  ];

  return (
    <section className="w-full bg-mux-bg border-b border-mux-border">
      <div className="grid-container px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16">
          {/* Left: Big intro copy */}
          <div className="md:w-3/5 space-y-6">
            <p className="tech-mono text-black/40 text-xs">About me</p>
            <p className="text-2xl md:text-3xl font-bold text-black leading-snug tracking-tight">
              I'm Oscar, a web development student with a background in multimedia design.
              I build digital experiences that are{" "}
              <span className="text-mux-yellow">clear, responsive, and well crafted</span>{" "}
              both visually and technically.
            </p>
            <p className="text-lg text-black/60 font-medium leading-relaxed">
              I work across frontend, visual design, and increasingly backend
              and databases. I enjoy the process of turning ideas into polished,
              functional interfaces.
            </p>
          </div>

          {/* Right: Stacked specialties */}
          <div className="md:w-2/5 flex flex-col justify-center">
            <p className="tech-mono text-black/40 text-xs mb-4">Specialties</p>
            <ul className="space-y-3">
              {specialties.map((item) => (
                <li
                  key={item}
                  className="text-lg font-bold text-black border-b border-mux-border pb-3 last:border-b-0 last:pb-0"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
