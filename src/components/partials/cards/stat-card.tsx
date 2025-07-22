"use client";

import React, { ComponentProps } from "react";
import s from "./cards.module.scss";
import clsx from "clsx";
import SplitText from "../split-text";

type Props = ComponentProps<"div"> & {
  title: string;
  subtitle: string;
};

const StatCard = ({ title, subtitle }: Props) => {
  return (
    <div className={clsx(s.stat_card, "px-4 py-2")}>
      <SplitText
        className={clsx(s.title, "fs-h3-bold")}
        text={title}
        as="p"
        type="words"
      />
      <SplitText
        className={clsx(s.subtitle, "fs-body")}
        type="words"
        as="p"
        text={subtitle}
      />
    </div>
  );
};

export default StatCard;
