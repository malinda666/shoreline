"use client";

import clsx from "clsx";
import { ReactNode, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import s from "./sticky.module.scss";

type Props = {
  children: ReactNode;
  className?: string;
};

gsap.registerPlugin(useGSAP);

const Sticky = ({ children, className }: Props) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!wrapperRef.current || !innerRef.current) return;
      const wrapperHeight = wrapperRef.current.offsetHeight;
      const innerHeight = innerRef.current.offsetHeight;
      const topOffset = wrapperHeight - innerHeight;
      const bottomOffset = topOffset / 2 + innerHeight;

      const start = `top top+=${topOffset / 2}px`;
      const end = `bottom top+=${bottomOffset}px`;

      gsap.timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          start,
          end,
          //   markers: true,
          pin: true,
          pinSpacing: false,
          pinReparent: true,
        },
      });
    },
    { scope: wrapperRef }
  );

  return (
    <div className={clsx(s.container, className)} ref={wrapperRef}>
      <div className={clsx(s.inner)} ref={innerRef}>
        {children}
      </div>
    </div>
  );
};

export default Sticky;
