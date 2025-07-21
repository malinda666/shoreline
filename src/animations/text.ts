import gsap from "gsap";

export const revealText = (elements: HTMLElement[] | Element[]) => {
  return gsap.fromTo(
    elements,
    {
      x: 100,
      opacity: 0,
      //   rotation: -2,
      filter: "blur(4px)",
    },
    {
      x: 0,
      opacity: 1,
      rotation: 0,
      filter: "blur(0px)",
      duration: 1.25,
      ease: "power2.inOut",
      stagger: {
        amount: 0.3,
      },
    }
  );
};
