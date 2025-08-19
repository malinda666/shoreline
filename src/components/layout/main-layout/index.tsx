"use client";

import React, { ReactNode, useEffect, useRef } from "react";
import gsap from "gsap";
import { ReactLenis } from "lenis/react";
import { ScrollTrigger, SplitText } from "gsap/all";

import { Inter } from "next/font/google";
import localfont from "next/font/local";
import Header from "../header";

import s from "./main-layout.module.scss";
import { useUI } from "@/context/ui-context";
import clsx from "clsx";
import Footer from "../footer";
import { usePathname } from "next/navigation";
import Preloader from "@/components/views/perloader";

const nohemi = localfont({
  src: [
    {
      path: "../../../../public/assets/fonts/nohemi/Nohemi-Regular.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../../../public/assets/fonts/nohemi/Nohemi-Semibold.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--f-nohemi",
});

const inter = Inter({
  variable: "--f-inter",
  subsets: ["latin"],
});

type Props = {
  children: ReactNode;
};

gsap.registerPlugin(ScrollTrigger, SplitText);

const MainLayout = ({ children }: Props) => {
  const { isScrollEnabled, isMenuOpen } = useUI();
  const pathname = usePathname();
  const wrapperEl = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const lenisRef = useRef<any>(null);

  const isContentPages = pathname.includes("content");

  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
      ScrollTrigger.update();
    }

    gsap.ticker.add(update);

    return () => gsap.ticker.remove(update);
  }, []);

  return (
    <html lang="en">
      <ReactLenis root options={{ autoRaf: false }} ref={lenisRef}>
        <body
          className={clsx(
            inter.variable,
            nohemi.variable,
            isScrollEnabled ? "" : "no-scroll",
            isMenuOpen ? "nav-open" : "nav-closed"
          )}
        >
          <Preloader />
          <div className={s.container} ref={wrapperEl}>
            <Header />
            <main id="main-layout">
              {children}
              <Footer variant={isContentPages ? "half" : "default"} />
            </main>
          </div>
        </body>
      </ReactLenis>
    </html>
  );
};

export default MainLayout;
