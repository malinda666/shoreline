"use client";

import { useRouter } from "next/navigation";
import { useUI } from "@/context/ui-context";
import { useLenis } from "lenis/react";
import { easeInOutQuint } from "@/lib/utils";

export function usePreloaderNavigation() {
  const router = useRouter();
  const lenis = useLenis();
  const { closeMenu, mainTl } = useUI();

  const navigate = async (href: string) => {
    try {
      if (!lenis) {
        console.log("without lenis");
        router.push(href);
        return;
      }

      if (lenis.actualScroll < 50) {
        console.log("scroll 0");
        closeMenu();
        mainTl?.exitPage();
        setTimeout(() => {
          router.push(href);
          mainTl?.enterPage();
        }, 2000);
      } else {
        lenis?.scrollTo(0, {
          duration: 2,
          easing: easeInOutQuint,
          lerp: 0.1,
          onStart: () => {
            console.log("scroll start");
            mainTl?.exitPage(closeMenu);
          },
          onComplete: () => {
            console.log("scroll complete");
            mainTl?.enterPage(() => router.push(href));
          },
        });
      }
    } catch (err) {
      console.error("Navigation failed:", err);
    }
  };

  return { navigate };
}
