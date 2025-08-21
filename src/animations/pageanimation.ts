import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { revealText } from "./text";
import { CLIP_HIDDEN, CLIP_HIDDEN_ALT, CLIP_VISIBLE } from "./constants";

gsap.registerPlugin(ScrollTrigger);
interface IDOM {
  el: HTMLElement;
  preloader: HTMLElement;
  main: HTMLElement;
}

export default class PageAnimation {
  dom: IDOM;
  tl: GSAPTimeline;

  constructor() {
    const el = document.body as HTMLElement;
    this.dom = this.getDom(el);

    this.tl = gsap.timeline({ paused: true });
    this.init();
  }

  getDom(el: HTMLElement): IDOM {
    return {
      el,
      main: el.querySelector("main") as HTMLElement,
      preloader: el.querySelector("[data-anim='preloader']") as HTMLElement,
    };
  }

  private init() {
    this.tl.add(() => this.enterPage());
  }

  private cleanupScrollTriggers() {
    ScrollTrigger.getAll().forEach((t) => t.kill());
  }

  private initAnimations() {
    const elements = [...document.querySelectorAll<HTMLElement>("[data-anim]")];

    elements.forEach((el) => {
      const animAttr = el.dataset.anim;
      if (!animAttr || animAttr === "preloader") return;
      const [trigger, type] = animAttr.split(":");
      const animationFn = this.animations[type];
      if (!animationFn) return;

      if (trigger === "intro") {
        animationFn(el, { delay: 0.75 });
      } else if (trigger === "scroll") {
        animationFn(el, {
          scrollTrigger: {
            trigger: el,
            start: "top center+=40%",
            once: true,
          },
        });
      }
    });
    ScrollTrigger.refresh();
  }

  private animations: Record<
    string,
    (el: HTMLElement, options?: GSAPTweenVars) => void
  > = {
    reveal: (el, options = {}) => {
      const items = [
        ...el.querySelectorAll(".char"),
        ...el.querySelectorAll(".word"),
        ...el.querySelectorAll(".line"),
        ...el.querySelectorAll("span"),
      ];
      revealText(items.length ? items : [el], {
        duration: 1,
        ...options,
      });
    },
    "scale-down": (el, options = {}) => {
      gsap.set(el, { scale: 1.2, opacity: 0, transformOrigin: "50% 50%" });
      gsap.to(el, {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "expo.out",
        ...options,
      });
    },
  };

  exitAnimation() {
    console.log("exit animation");
  }

  intro() {
    this.tl.play();
  }

  enterPage(cb?: () => void) {
    this.tl
      .clear()
      .add(() => cb?.())
      .add(() => {
        this.dom = this.getDom(document.body as HTMLElement);
        this.hidePreloader().play();
      }, 0.5)
      .add(() => this.cleanupScrollTriggers())
      .add(() => this.initAnimations(), "+=0.2");
  }
  exitPage(cb?: () => void) {
    this.tl
      .clear()
      .add(() => cb?.())
      .add(() => {
        this.cleanupScrollTriggers();
        this.exitAnimation();
      })
      .add(this.showPreloader().play());
  }

  showPreloader = () => {
    const tl = gsap.timeline({
      paused: true,
      defaults: {
        duration: 1.25,
        ease: "expo.inOut",
      },
    });
    const el = this.dom.preloader;

    tl.set(el, {
      clipPath: CLIP_HIDDEN_ALT,
    }).to(el, {
      clipPath: CLIP_VISIBLE,
      transformOrigin: "100% 0%",
    });

    return tl;
  };

  hidePreloader = () => {
    const tl = gsap.timeline({
      paused: true,
      defaults: {
        duration: 1.25,
        ease: "expo.inOut",
      },
    });
    const el = this.dom.preloader;

    tl.set(el, {
      clipPath: CLIP_VISIBLE,
    }).to(el, {
      clipPath: CLIP_HIDDEN,
      transformOrigin: "0% 0%",
    });

    return tl;
  };
}
