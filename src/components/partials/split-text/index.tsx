"use client";

import React, {
  ComponentPropsWithoutRef,
  ElementType,
  useEffect,
  useRef,
} from "react";
import clsx from "clsx";
import s from "./split-text.module.scss";
import _SplitText from "gsap/SplitText";
import gsap from "gsap";
import { revealText } from "@/animations/text";

type Props<T extends ElementType> = {
  text: string;
  as?: T;
  className?: string;
  type?: "chars" | "words" | "lines";
  trigger?: "tl" | "scroll";
} & Omit<ComponentPropsWithoutRef<T>, "as">;

gsap.registerPlugin(_SplitText);

const SplitText = <T extends React.ElementType = "div">({
  text,
  as,
  className,
  type = "chars",
  trigger = "scroll",
  ...rest
}: Props<T>) => {
  const Element = as || "div";

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const wrapper: any = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (wrapper.current) {
      const split = _SplitText.create(wrapper.current, {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        type: type as any,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        mask: type as any,
        reduceWhiteSpace: false,
      });

      if (trigger === "tl") {
        revealText(split[type]);
      } else {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: wrapper.current,
              start: "top bottom",
            },
          })
          .add(revealText(split[type]), 0);
      }
    }
  }, [type]);

  return (
    <Element className={clsx(s.container, className)} {...rest} ref={wrapper}>
      {text}
    </Element>
  );
};

export default SplitText;
