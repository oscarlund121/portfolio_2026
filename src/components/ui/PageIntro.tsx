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
  bg = "bg-mux-pink",
  className = "",
}: Props) => {
  const classes = `w-full border-b border-mux-border ${bg} ${className}`.trim();

  return (
    <section className={classes}>
      <div className="grid-container px-4 sm:px-6 lg:px-8 pt-16 pb-24 text-center">
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
