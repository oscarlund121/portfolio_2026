import Button from "@/components/ui/Button";

export const Hero = () => {
  return (
    <section className="w-full bg-mux-pink border-b border-mux-border">
      <div className="grid-container px-4 py-24 sm:py-32 lg:px-8 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter text-black mb-8 max-w-5xl leading-[0.95]">
          Web Development Student
          <br />
          <span className="text-mux-yellow">& Multimedia Designer</span>
        </h1>

        <p className="text-lg md:text-xl text-black/80 max-w-3xl mb-4 font-medium leading-relaxed">
          I'm Oscar — a web development student focused on building
          responsive websites and digital experiences with a strong eye for
          visual design, structure, and user experience.
        </p>

        <p className="text-base md:text-lg text-black/60 max-w-3xl mb-12 font-medium leading-relaxed">
          Right now, I'm strengthening my frontend skills while expanding
          into <span className="text-mux-yellow">TypeScript</span> and <span className="text-mux-yellow">Python</span> through my top-up education in web
          development.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/projects">View Projects</Button>
          <Button variant="outline" href="/contact">
            Contact Me
          </Button>
        </div>
      </div>
    </section>
  );
};
