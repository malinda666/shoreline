import gsap from "gsap";

const EASE1 = "power3.inOut";
const BLUR_IN = "blur(4px)";
const BLUR_OUT = "blur(0px)";
const CLIP_HIDDEN = "inset(0% 0% 100% 0%)";
const CLIP_VISIBLE = "inset(0% 0% 0% 0%)";

export default class MenuAnimation {
  container: HTMLElement;
  dom: {
    menuWrap: HTMLElement | null;
    items: HTMLElement[];
  };
  main: HTMLElement;
  isAnimating: boolean;

  constructor(container: HTMLElement) {
    this.container = container;
    this.dom = this.getDom();
    this.main = document.querySelector("main#main-layout") as HTMLElement;
    this.isAnimating = false;
  }

  getDom() {
    return {
      menuWrap: this.container.querySelector("aside"),
      items: gsap.utils.toArray(
        this.container.querySelectorAll("[data-animate='true']")
      ) as HTMLElement[],
    };
  }

  reset() {
    const { menuWrap } = this.dom;
    if (!menuWrap) return;
    this.isAnimating = true;

    gsap.killTweensOf([menuWrap, ...this.dom.items]);
    gsap.set(menuWrap, {
      autoAlpha: 0,
      pointerEvents: "none",
      clipPath: CLIP_HIDDEN,
    });
  }

  init() {
    const { menuWrap, items } = this.dom;
    if (!menuWrap) return;
    this.isAnimating = true;
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
    if (!menuWrap || this.isAnimating) return;

    this.isAnimating = true;
    this.reset();

    const tl = gsap.timeline({
      defaults: { ease: EASE1 },
      onComplete: () => {
        this.isAnimating = false;
      },
    });
    tl.set(menuWrap, {
      clipPath: CLIP_HIDDEN,
      autoAlpha: 1,
      pointerEvents: "auto",
    })
      .set(items, {
        opacity: 0,
        yPercent: 100,
        filter: BLUR_IN,
      })
      .to(menuWrap, { clipPath: CLIP_VISIBLE, duration: 1 }, 0)
      .to(
        this.main,
        {
          scale: 0.9,
          y: 20,
          duration: 1,
          filter: BLUR_IN,
        },
        0
      )
      .to(
        items,
        {
          opacity: 1,
          yPercent: 0,
          filter: BLUR_OUT,
          duration: 1.25,
          ease: "expo.out",
          stagger: {
            amount: 0.35,
            from: "start",
          },
        },
        "<0.35"
      );
  }

  close() {
    const { menuWrap, items } = this.dom;
    if (!menuWrap || this.isAnimating) return;

    this.isAnimating = true;
    gsap.killTweensOf([menuWrap, ...items]);

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.set(menuWrap, { autoAlpha: 0, pointerEvents: "none" });
        gsap.to([this.main, items], { clearProps: "all" });
        this.isAnimating = false;
      },
    });

    tl.to(items, {
      opacity: 0,
      yPercent: -100,
      filter: BLUR_IN,
      duration: 0.7,
      ease: "expo",
      stagger: {
        amount: 0.3,
        from: "start",
      },
    })
      .addLabel("hide", 0.7)
      .to(
        menuWrap,
        {
          clipPath: CLIP_HIDDEN,
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
          filter: BLUR_OUT,
          duration: 1.25,
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
