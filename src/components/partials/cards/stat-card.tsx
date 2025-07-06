"use client";

import React, { ComponentProps } from "react";
import s from "./cards.module.scss";
import clsx from "clsx";

type Props = ComponentProps<"div"> & {
  title: string;
  subtitle: string;
};

const StatCard = ({ title, subtitle }: Props) => {
  return (
    <div className={s.stat_card}>
      <div className={clsx(s.title, "fs-h2-bold")}>{title}</div>
      <div className={clsx(s.subtitle, "fs-body")}>{subtitle}</div>
    </div>
  );
};

export default StatCard;
