import gsap from "gsap";

export const revealTitle = (
  elements: HTMLElement[] | Element[],
  elementType: "title" | "paragraph"
) => {
  const tl = gsap.timeline();

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
