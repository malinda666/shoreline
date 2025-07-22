import gsap from "gsap";

export const revealTitle = (
  elements: HTMLElement[] | Element[],
  elementType: "title" | "paragraph"
) => {
  return elementType === "title"
    ? gsap.fromTo(
        elements,
        {
          xPercent: 100,
          opacity: 0,
          filter: "blur(4px)",
          transformOrigin: "0% 50%",
        },
        {
          xPercent: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1.25,
          ease: "power2.out",
          stagger: {
            amount: 0.4,
          },
        }
      )
    : gsap.fromTo(
        elements,
        {
          opacity: 0,
          filter: "blur(4px)",
          transformOrigin: "0% 50%",
        },
        {
          opacity: 1,
          filter: "blur(0px)",
          duration: 1.25,
          ease: "power2.inOut",
          stagger: {
            amount: 0.6,
          },
        }
      );
};
