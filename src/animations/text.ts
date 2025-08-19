import gsap from "gsap";
import { EASE1, REVEAL_DURATION } from "./constants";

export const revealTitle = (
  elements: HTMLElement[] | Element[],
  elementType: "title" | "paragraph"
) => {
  const tl = gsap.timeline({ paused: true });

  if (elementType === "title") {
    tl.fromTo(
      elements,
      {
        yPercent: 100,
        opacity: 1,
        scale: 0.5,
        filter: "blur(4px)",
        transformOrigin: "0% 100%",
      },
      {
        yPercent: 0,
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        duration: 1.25,
        ease: "power3.inOut",
        stagger: {
          amount: 0.2,
        },
      }
    );
  } else {
    tl.fromTo(
      elements,
      {
        yPercent: 100,
        opacity: 1,
        scale: 0.8,
        transformOrigin: "0% 100%",
      },
      {
        yPercent: 0,
        opacity: 1,
        scale: 1,
        duration: 1.25,
        ease: "power3.inOut",
        stagger: {
          amount: 0.5,
        },
      }
    );
  }

  return tl;
};

export const revealText = (elements: Element[], options?: GSAPTweenVars) => {
  gsap.set(elements, {
    yPercent: 100,
    opacity: 1,
    scale: 1,
    transformOrigin: "50% 50%",
  });

  gsap.to(elements, {
    yPercent: 0,
    opacity: 1,
    scale: 1,
    duration: REVEAL_DURATION,
    ease: EASE1,
    stagger: {
      amount: 0.5,
    },
    ...options,
  });
};
