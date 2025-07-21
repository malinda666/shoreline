import React from "react";

import s from "./section-title.module.scss";
import clsx from "clsx";
import SplitText from "../split-text";

type Props = {
  line1: string;
  line2: string;
  className?: string;
  variant?: "default" | "bold";
  isIndented?: boolean;
};

const SectionTitle = ({
  line1,
  line2,
  className,
  variant = "default",
  isIndented = false,
}: Props) => {
  return (
    <div
      className={clsx(
        s.container,
        // "row",
        isIndented && s.container_indent,
        className
      )}
    >
      <SplitText
        text={line1}
        className={clsx(variant === "bold" ? "fs-h3-bold" : "fs-h3")}
        as="h3"
        // type="words"
      />
      <SplitText
        text={line2}
        className={clsx(variant === "bold" ? "fs-h3-bold" : "fs-h3")}
        as="h3"
        // type="words"
      />
    </div>
  );
};

export default SectionTitle;
