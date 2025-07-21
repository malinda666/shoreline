import gsap from "gsap";

const EASE1 = "power3.inOut";

export default class MenuAnimation {
  container: HTMLElement;
  dom: {
    menuWrap: HTMLElement | null;
    items: HTMLElement[];
  };
  main: HTMLElement;

  constructor(container: HTMLElement) {
    this.container = container;
    this.dom = this.getDom();
    this.main = document.querySelector("main#main-layout") as HTMLElement;
  }

  getDom() {
    return {
      menuWrap: this.container.querySelector("aside"),
      items: gsap.utils.toArray(
        this.container.querySelectorAll("ul li")
      ) as HTMLElement[],
    };
  }

  init() {
    const { menuWrap, items } = this.dom;
    if (!menuWrap) return;
    gsap.killTweensOf([menuWrap, items]);
    document.body.classList.remove("no-scroll");
    gsap.set(menuWrap, {
      autoAlpha: 0,
      pointerEvents: "none",
      clipPath: "inset(0% 0% 100% 0%)",
    });
  }

  open() {
    const { menuWrap, items } = this.dom;
    if (!menuWrap) return;
    gsap.killTweensOf([menuWrap, items]);

    const tl = gsap.timeline({ defaults: { ease: EASE1, duration: 1 } });
    tl.set(menuWrap, {
      clipPath: "inset(0% 0% 100% 0%)",
      autoAlpha: 1,
      pointerEvents: "auto",
    })
      .set(items, { opacity: 0, x: 40, filter: "blur(4px)" })
      .to(menuWrap, {
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 1,
        ease: EASE1,
      })
      .to(
        this.main,
        {
          scale: 0.9,
          y: 20,
          filter: "blur(6px)",
        },
        0
      )
      .to(
        items,
        {
          opacity: 1,
          x: 0,
          filter: "blur(0px)",
          stagger: {
            amount: 0.35,
            from: "start",
          },
          duration: 1.25,
          ease: "expo.out",
        },
        "<0.35"
      );
  }

  close() {
    const { menuWrap, items } = this.dom;
    if (!menuWrap) return;

    gsap.killTweensOf([menuWrap, items]);
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.set(menuWrap, { autoAlpha: 0, pointerEvents: "none" });
        gsap.to([this.main, items], { clearProps: "all" });
      },
    });
    tl.to(items, {
      opacity: 0,
      x: -40,
      filter: "blur(4px)",
      stagger: {
        amount: 0.3,
        from: "start",
      },
      duration: 0.7,
      ease: "expo.out",
    })
      .addLabel("hide", 0.7)
      .to(
        menuWrap,
        {
          clipPath: "inset(0% 0% 100% 0%)",
          duration: 0.7,
          ease: EASE1,
        },
        "hide-=0.5"
      )
      .to(
        this.main,
        {
          scale: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1,
          ease: EASE1,
        },
        "hide-=0.7"
      );
  }

  destroy() {
    gsap.killTweensOf(this.dom.items);
    this.dom = { menuWrap: null, items: [] };
  }
}
