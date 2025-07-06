import React from "react";

import s from "./section-title.module.scss";
import clsx from "clsx";

type Props = {
  line1: string;
  line2: string;
  className?: string;
};

const SectionTitle = ({ line1, line2, className }: Props) => {
  return (
    <div className={clsx(s.container, className)}>
      <h3 className="fs-h3">{line1}</h3>
      <h3 className="fs-h3">{line2}</h3>
    </div>
  );
};

export default SectionTitle;
