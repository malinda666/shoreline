"use client";

import clsx from "clsx";
import React, { ComponentProps, ReactNode } from "react";

import s from "./section.module.scss";

type Props = ComponentProps<"section"> & {
  children: ReactNode;
  isSpaced?: boolean;
  className?: string;
  isDark?: boolean;
};

const Section = ({
  children,
  isSpaced = true,
  className,
  isDark,
  ...props
}: Props) => {
  return (
    <section
      className={clsx(
        s.container,
        className,
        isSpaced ? s.container_spaced : null,
        isDark ? s.container_dark : s.container_light
      )}
      {...props}
      data-dark={isDark}
    >
      {children}
    </section>
  );
};

export default Section;
