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
        router.push(href);
        return;
      }

      if (lenis.actualScroll < 50) {
        closeMenu();
        mainTl?.exitPage();
        setTimeout(() => {
          mainTl?.enterPage(() => router.push(href));
        }, 2000);
      } else {
        lenis?.scrollTo(0, {
          duration: 2,
          easing: easeInOutQuint,
          lerp: 0.1,
          onStart: () => mainTl?.exitPage(closeMenu),
          onComplete: () => mainTl?.enterPage(() => router.push(href)),
        });
      }
    } catch (err) {
      console.error("Navigation failed:", err);
    }
  };

  return { navigate };
}
