import React from "react";

interface Props {
  title: string;
  children?: React.ReactNode;
  bg?: string;
  className?: string;
}

const PageIntro = ({
  title,
  children,
  bg = "bg-mux-blue",
  className = "",
}: Props) => {
  const sectionClasses = `w-full border-b border-mux-border ${className}`.trim();

  return (
    <section className={sectionClasses}>
      <div className={`grid-container px-4 sm:px-6 lg:px-8 py-16 text-center ${bg}`}>
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6 text-black">
          {title}
        </h1>
        <div className="text-xl text-black/80 max-w-2xl mx-auto font-medium space-y-4">
          {children}
        </div>
      </div>
    </section>
  );
};

export default PageIntro;
