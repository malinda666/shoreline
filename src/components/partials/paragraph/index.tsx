import clsx from "clsx";
import React from "react";

import s from "./paragraph.module.scss";
import SplitText from "../split-text";
import { TAnimTrigger, TAnimType, TSplitTextType } from "@/types";

type Props = {
  content: string;
  indented?: boolean;
  className?: string;
  size?: "default" | "sm";
  type?: TSplitTextType;
  trigger?: TAnimTrigger;
  animType?: TAnimType;
};

const Paragraph = ({
  content,
  indented,
  className,
  size,
  type = "lines",
  trigger,
  animType = "reveal",
}: Props) => {
  return (
    <div className={clsx(className)}>
      <SplitText
        text={content}
        className={clsx(
          size === "sm" ? "fs-body" : "fs-p",
          indented && s.indented
        )}
        as="p"
        type={type}
        trigger={trigger}
        animType={animType}
      />
    </div>
  );
};

export default Paragraph;
