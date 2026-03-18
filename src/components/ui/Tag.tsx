import React from "react";

interface Props {
  children?: React.ReactNode;
  className?: string;
}

const Tag = ({ children, className = "" }: Props) => {
  const classes =
    `px-3 py-1 text-xs font-bold uppercase tracking-wider border border-black text-black ${className}`.trim();

  return <span className={classes}>{children}</span>;
};

export default Tag;
