import clsx from "clsx";
import React from "react";

import s from "./paragraph.module.scss";
import SplitText from "../split-text";

type Props = {
  content: string;
  indented?: boolean;
  className?: string;
  size?: "default" | "sm";
};

const Paragraph = ({ content, indented, className, size }: Props) => {
  return (
    <div className={clsx(className)}>
      <SplitText
        text={content}
        className={clsx(
          size === "sm" ? "fs-body" : "fs-p",
          indented && s.indented
        )}
        as="p"
        type="lines"
      />
    </div>
  );
};

export default Paragraph;
