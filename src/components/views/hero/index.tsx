"use client";

import React from "react";
import s from "./hero.module.scss";
import clsx from "clsx";
import Section from "@/components/layout/section";
import { THeroType } from "@/types";
import Paragraph from "@/components/partials/paragraph";
import Star from "@/components/partials/star";
import SplitText from "@/components/partials/split-text";

type Props = {
  titleLine1: string;
  titleLine2: string;
  subtitle: string;
  mode?: THeroType;
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
                  trigger="intro"
                  position={0}
                />
              </div>
              <div className={s.title}>
                <SplitText
                  className={clsx("fs-h1")}
                  as="h1"
                  text={titleLine1}
                  trigger="intro"
                  position="<0.4"
                />
                <SplitText
                  className={clsx("fs-h1")}
                  as="h1"
                  text={titleLine2}
                  trigger="intro"
                  position="<0.2"
                />
              </div>
            </>
          ) : (
            <>
              <div className={s.title}>
                <SplitText
                  className={clsx("fs-h2-bold")}
                  as="h2"
                  text={titleLine1}
                  trigger="intro"
                  position="0"
                />
                <SplitText
                  className={clsx("fs-h2-bold")}
                  as="h2"
                  text={titleLine2}
                  trigger="intro"
                  position="<0.2"
                />
              </div>
              <div className={clsx(s.sub_title, "layout--full pt-2")}>
                <Star className={s.sub_title_deco} />
                <Paragraph
                  content={subtitle}
                  className={clsx(s.sub_title_para)}
                  indented
                  trigger="intro"
                  position="<0.4"
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
