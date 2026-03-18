import SectionWrapper from "@/components/ui/SectionWrapper";

export const HowIWork = () => {
  return (
    <SectionWrapper>
      <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-black mb-8 text-center">
        How I Work
      </h2>

      <div className="max-w-3xl mx-auto space-y-6">
        <p className="text-lg text-black/80 font-medium leading-relaxed">
          I enjoy turning visual ideas into working interfaces. My approach is
          usually a mix of structure, visual consistency, and practical frontend
          thinking — making sure the end result not only looks good, but also
          feels clear and works properly across devices.
        </p>
        <p className="text-lg text-black/80 font-medium leading-relaxed">
          I&apos;m especially interested in projects where design and frontend
          meet closely, because that&apos;s where I do my best work.
        </p>
      </div>
    </SectionWrapper>
  );
};
