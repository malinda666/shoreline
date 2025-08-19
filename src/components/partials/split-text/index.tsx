"use client";

import React, {
  ComponentPropsWithoutRef,
  ElementType,
  useEffect,
  useMemo,
  useRef,
} from "react";
import clsx from "clsx";
import s from "./split-text.module.scss";
import _SplitText from "gsap/SplitText";
import gsap from "gsap";
import { TSplitTextTrigger, TSplitTextType } from "@/types";

type Props<T extends ElementType> = {
  text: string;
  as?: T;
  className?: string;
  type?: TSplitTextType;
  trigger?: TSplitTextTrigger;
  position?: number | string;
} & Omit<ComponentPropsWithoutRef<T>, "as">;

gsap.registerPlugin(_SplitText);

const SplitText = <T extends React.ElementType = "div">({
  text,
  as,
  className,
  type = "chars",
  trigger = "scroll",
  position = 0,
  ...rest
}: Props<T>) => {
  const Element = as || "div";
  const wrapperRef = useRef<HTMLElement | null>(null);

  const elementType = useMemo(() => {
    if (typeof as === "string") {
      return ["h1", "h2", "h3"].includes(as) ? "title" : "paragraph";
    }
    return "paragraph";
  }, [as]);

  useEffect(() => {
    if (!wrapperRef.current) return;
    const split = _SplitText.create(wrapperRef.current, {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      type: type as any,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      mask: type as any,
      charsClass: "char++",
      linesClass: "line++",
      wordsClass: "word++",
    });

    return () => {
      split.revert?.();
    };
  }, [type, trigger, position, elementType, text]);

  const dataAnim = useMemo(() => {
    if (trigger === "tl") return "tl";
    if (trigger === "intro") return "intro";
    return "scroll";
  }, [trigger]);

  return (
    <Element
      className={clsx(s.container, className)}
      {...rest}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={wrapperRef as any}
      data-anim={dataAnim}
      data-split
    >
      {text}
    </Element>
  );
};

export default SplitText;
