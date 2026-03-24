import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";

const approaches = [
  {
    label: "01",
    title: "Structure & Clarity",
    text: "I prioritize balanced layouts, consistent spacing, and hierarchy that makes interfaces easy to understand across all screen sizes.",
  },
  {
    label: "02",
    title: "Design Meets Code",
    text: "My design background means I naturally pay attention to visual consistency, while also thinking through component architecture and how data flows.",
  },
  {
    label: "03",
    title: "AI-Assisted Workflow",
    text: "I use AI as a practical tool to work faster, test ideas, solve problems, and support both creative and technical tasks more efficiently.",
  },
];

export const HowIWork = () => {
  return (
    <SectionWrapper>
      <SectionHeading title="How I Work" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {approaches.map((item) => (
          <div key={item.label} className="space-y-3">
            <p className="tech-mono text-mux-yellow text-xs">{item.label}</p>
            <h3 className="text-xl font-black uppercase tracking-tight text-black">
              {item.title}
            </h3>
            <p className="text-black/60 font-medium leading-relaxed">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
