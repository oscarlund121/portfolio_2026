import SectionHeading from "@/components/ui/SectionHeading";

const currentlyLearning = ["Python", "TypeScript", "SQL / Databases", "Docker"];

export const CurrentlyLearning = () => {
  return (
    <section className="w-full bg-mux-yellow/20 border-b border-mux-border">
      <div className="grid-container px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <SectionHeading title="Currently Learning" />

        <p className="text-lg text-black/80 max-w-3xl mx-auto font-medium leading-relaxed text-center mt-4 mb-10">
          Through my top-up in web development at EK, I'm building deeper skills in backend development, database design, and data handling. My focus is on understanding how data moves through systems, from APIs and databases to the interfaces that make it useful.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {currentlyLearning.map((item) => (
            <span
              key={item}
              className="px-6 py-3 text-sm font-bold uppercase tracking-wider border border-black  text-black "
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
