import React from "react";

import s from "./section-title.module.scss";
import clsx from "clsx";

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
      <h3 className={clsx(variant === "bold" ? "fs-h3-bold" : "fs-h3")}>
        {line1}
      </h3>
      <h3 className={clsx(variant === "bold" ? "fs-h3-bold" : "fs-h3")}>
        {line2}
      </h3>
    </div>
  );
};

export default SectionTitle;
