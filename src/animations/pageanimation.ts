import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { revealText } from "./text";

interface IDOM {
  el: HTMLElement;
  preloader: HTMLElement;
  main: HTMLElement;
  splits: ISplitElements;
}

interface ISplitElements {
  intro: HTMLElement[];
  tl: HTMLElement[];
  scroll: HTMLElement[];
}

gsap.registerPlugin(ScrollTrigger);

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
      splits: {
        intro: [...el.querySelectorAll("[data-anim='intro']")] as HTMLElement[],
        tl: [...el.querySelectorAll("[data-anim='tl']")] as HTMLElement[],
        scroll: [
          ...el.querySelectorAll("[data-anim='scroll']"),
        ] as HTMLElement[],
      },
    };
  }

  init() {
    this.tl.add(() => this.enterPage());
    this.initScrollTrigger();
  }

  initScrollTrigger() {
    const {
      splits: { scroll },
    } = this.dom;

    for (let i = 0; i < scroll.length; i++) {
      const el = scroll[i];
      const splittedItems = [
        ...el.querySelectorAll(".char"),
        ...el.querySelectorAll(".word"),
        ...el.querySelectorAll(".line"),
      ];

      revealText(splittedItems, {
        scrollTrigger: {
          trigger: el,
          start: "top center+=45%",
        },
      });
    }
  }

  introAnimation() {
    this.dom = this.getDom(document.body as HTMLElement);
    const {
      splits: { intro },
    } = this.dom;
    for (let i = 0; i < intro.length; i++) {
      const el = intro[i];
      const splittedItems = [
        ...el.querySelectorAll(".char"),
        ...el.querySelectorAll(".word"),
        ...el.querySelectorAll(".line"),
      ];

      revealText(splittedItems, { delay: 0.5 });
    }
  }

  exitAnimation() {
    this.dom = this.getDom(document.body as HTMLElement);
    console.log("exit animation");
  }

  intro() {
    this.tl.play();
  }

  enterPage(cb?: () => void) {
    this.tl
      .clear()
      .add(() => {
        if (cb && typeof cb === "function") {
          cb();
        }
      })
      .add(() => {
        this.hidePreloader().play();
      }, 1)
      .add(() => this.introAnimation());
  }
  exitPage(cb?: () => void) {
    this.tl
      .clear()
      .add(() => {
        if (cb && typeof cb === "function") {
          cb();
        }
      })
      .add(() => this.exitAnimation())
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
      clipPath: "inset(100% 0% 0% 0%)",
    }).to(el, {
      clipPath: "inset(0% 0% 0% 0%)",
      transformOrigin: "0% 0%",
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
      clipPath: "inset(0% 0% 0% 0%)",
    }).to(el, {
      clipPath: "inset(0% 0% 100% 0%)",
      transformOrigin: "0% 0%",
    });

    return tl;
  };
}
