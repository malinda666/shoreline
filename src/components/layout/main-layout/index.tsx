"use client";

import React, { ReactNode } from "react";
import { Inter } from "next/font/google";
import localfont from "next/font/local";
import Header from "../header";

import s from "./main-layout.module.scss";
import { useUI } from "@/context/ui-context";
import clsx from "clsx";
import Footer from "../footer";
import { usePathname } from "next/navigation";

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

const MainLayout = ({ children }: Props) => {
  const { isScrollEnabled, isMenuOpen } = useUI();
  const pathname = usePathname();

  const isContentPages = pathname.includes("content");

  return (
    <html lang="en">
      <body
        className={clsx(
          inter.variable,
          nohemi.variable,
          isScrollEnabled ? "" : "no-scroll",
          isMenuOpen ? "nav-open" : "nav-closed"
        )}
      >
        <div className={s.container}>
          <Header />
          <main
            id="main-layout"
            // style={{
            //   transform: isMenuOpen
            //     ? "translateY(calc(2 * var(--s-1)))"
            //     : "translateY(0%)",
            //   transition: "transform 0.5s ease",
            // }}
          >
            {children}
          </main>
          <Footer variant={isContentPages ? "half" : "default"} />
        </div>
      </body>
    </html>
  );
};

export default MainLayout;
