"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import ReactLenis from "lenis/react";
import { ReactNode, useEffect, useRef } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.clearScrollMemory("manual");
  ScrollTrigger.defaults({ markers: process.env.NODE_ENV === "development" });
  gsap.defaults({ ease: "none" });

  gsap.ticker.lagSmoothing(0);
  gsap.ticker.remove(gsap.updateRoot);
}

type Props = {
  children: ReactNode;
};

export function Scroll({ children }: Props) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const lenisRef = useRef<any>(null);
  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
      ScrollTrigger.update();
    }

    gsap.ticker.add(update);

    return () => {
      gsap.ticker.remove(update);
      ScrollTrigger.refresh();
    };
  }, []);

  return (
    <ReactLenis root options={{ autoRaf: false }} ref={lenisRef}>
      {children}
    </ReactLenis>
  );
}
