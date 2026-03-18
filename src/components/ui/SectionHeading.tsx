import React from "react";

interface Props {
  title: string;
  intro?: string;
  align?: "left" | "center";
  className?: string;
}

const SectionHeading = ({
  title,
  intro,
  align = "center",
  className = "",
}: Props) => {
  const classes = `${align === "center" ? "text-center" : "text-left"} ${className}`.trim();

  return (
    <div className={classes}>
      <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-black mb-4">
        {title}
      </h2>
      {intro && (
        <p className="text-lg text-black/80 max-w-3xl font-medium leading-relaxed mx-auto">
          {intro}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
