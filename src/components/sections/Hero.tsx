import Button from "@/components/ui/Button";

export const Hero = () => {
  return (
    <section className="w-full bg-mux-pink border-b border-mux-border hero-grid">
      <div className="grid-container px-4 py-24 sm:py-28 lg:px-8 flex flex-col items-start">
        {/* Eyebrow */}
        <p className="text-xs font-bold tracking-[0.2em] uppercase text-black/50 mb-6 border border-black/20 inline-block px-3 py-1">
          Frontend / UI / Multimedia
        </p>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-black mb-6 max-w-4xl leading-[0.9]">
          Future <span className="text-mux-yellow">Fullstack</span> Developer
        </h1>

        <p className="text-lg md:text-xl text-black/80 max-w-2xl mb-3 font-medium leading-relaxed">
          I&apos;m Oscar, a web development student focused on building responsive,
          user-friendly websites with strong visual design.
        </p>

        <p className="text-base text-black/60 max-w-2xl mb-12 font-medium">
          Currently sharpening my frontend skills and working with TypeScript and Python.
        </p>

        <div className="flex flex-col sm:flex-row items-start gap-4">
          <Button variant="primary" href="/projects">View Projects</Button>
          <Button variant="accent" href="/contact">Contact Me</Button>
        </div>
      </div>
    </section>
  );
};
