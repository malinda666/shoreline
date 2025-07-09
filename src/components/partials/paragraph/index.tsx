import clsx from "clsx";
import React from "react";

import s from "./paragraph.module.scss";

type Props = {
  content: string;
  indented?: boolean;
  className?: string;
};

const Paragraph = ({ content, indented, className }: Props) => {
  return (
    <div className={clsx(className)}>
      <p className={clsx("fs-p", indented && s.indented)}>{content}</p>
    </div>
  );
};

export default Paragraph;
