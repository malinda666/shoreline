"use client";

import React from "react";
import s from "./hero.module.scss";
import clsx from "clsx";
import Section from "@/components/layout/section";
import { THeroTypes } from "@/types";

type Props = {
  titleLine1: string;
  titleLine2: string;
  subtitle: string;
  mode?: THeroTypes;
};

const Hero = ({
  titleLine1,
  titleLine2,
  subtitle,
  mode = "secondary",
}: Props) => {
  const isMain = mode === "main";
  return (
    <Section
      className={clsx(isMain ? s.container_main : s.container_secondary)}
      isSpaced={false}
    >
      {isMain ? <div className={s.background} /> : null}

      <div className={clsx(s.wrapper, "layout pb-3", !isMain && "pt-1")}>
        <div className={s.title_wrap}>
          {isMain ? (
            <>
              <div className={clsx(s.sub_title, "mb-2")}>
                <h3 className="fs-p">{subtitle}</h3>
              </div>
              <div className={s.title}>
                <h1 className={clsx("fs-h1")}>{titleLine1}</h1>
                <h1 className={clsx("fs-h1")}>{titleLine2}</h1>
              </div>
            </>
          ) : (
            <>
              <div className={s.title}>
                <h1 className={clsx("fs-h2-bold")}>{titleLine1}</h1>
                <h1 className={clsx("fs-h2-bold")}>{titleLine2}</h1>
              </div>
              <div className={clsx(s.sub_title, "layout--full")}>
                <p className="fs-p mt-2">{subtitle}</p>
              </div>
            </>
          )}
        </div>
        {isMain ? (
          <div className={clsx(s.meta, "mb-4")}>
            <span>Est. 1992</span>
          </div>
        ) : null}
      </div>
    </Section>
  );
};

export default Hero;
