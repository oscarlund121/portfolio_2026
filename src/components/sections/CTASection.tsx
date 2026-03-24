import Button from "@/components/ui/Button";

export const CTASection = () => {
  return (
    <section className="w-full bg-mux-pink border-b border-mux-border">
      <div className="grid-container px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-black mb-6">
          Let’s build something solid
        </h2>
        <p className="text-lg text-black/80 max-w-2xl mx-auto font-medium leading-relaxed mb-10">
         If you have a project, a collaboration, or a role in mind, feel free to reach out. I’m always open to conversations about design, development, and digital work.
        </p>
        <Button href="/contact" variant="accent">Get In Touch</Button>
      </div>
    </section>
  );
};
