import React from "react";

interface Props {
  children?: React.ReactNode;
  className?: string;
  bg?: string;
  border?: boolean;
}

const SectionWrapper = ({
  children,
  className = "",
  bg = "bg-mux-bg",
  border = true,
}: Props) => {
  const borderClass = border ? "border-b border-mux-border" : "";
  const classes = `w-full ${bg} ${borderClass} ${className}`.trim();

  return (
    <section className={classes}>
      <div className="grid-container px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
