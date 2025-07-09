import clsx from "clsx";
import React from "react";

import s from "./paragraph.module.scss";

type Props = {
  content: string;
  indented?: boolean;
  className?: string;
  size?: "default" | "sm";
};

const Paragraph = ({ content, indented, className, size }: Props) => {
  return (
    <div className={clsx(className)}>
      <p
        className={clsx(
          size === "sm" ? "fs-body" : "fs-p",
          indented && s.indented
        )}
      >
        {content}
      </p>
    </div>
  );
};

export default Paragraph;
