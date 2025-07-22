"use client";

import React from "react";
import s from "./hero.module.scss";
import clsx from "clsx";
import Section from "@/components/layout/section";
import { THeroTypes } from "@/types";
import Paragraph from "@/components/partials/paragraph";
import Star from "@/components/partials/star";
import SplitText from "@/components/partials/split-text";

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

      <div
        className={clsx(s.wrapper, "layout", !isMain ? "pt-1 pb-2" : "pb-3")}
      >
        <div className={s.title_wrap}>
          {isMain ? (
            <>
              <div className={clsx(s.sub_title, "mb-2")}>
                <SplitText
                  className="fs-p"
                  as="h4"
                  type="words"
                  text={subtitle}
                  trigger="tl"
                />
              </div>
              <div className={s.title}>
                <SplitText
                  className={clsx("fs-h1")}
                  as="h1"
                  text={titleLine1}
                  trigger="tl"
                />
                <SplitText
                  className={clsx("fs-h1")}
                  as="h1"
                  text={titleLine2}
                  trigger="tl"
                />
              </div>
            </>
          ) : (
            <>
              <div className={s.title}>
                <h1 className={clsx("fs-h2-bold")}>{titleLine1}</h1>
                <h1 className={clsx("fs-h2-bold")}>{titleLine2}</h1>
              </div>
              <div className={clsx(s.sub_title, "layout--full pt-2")}>
                <Star className={s.sub_title_deco} />
                <Paragraph
                  content={subtitle}
                  className={clsx(s.sub_title_para)}
                  indented
                />
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
