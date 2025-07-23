"use client";

import { IUIContext } from "@/types";
import gsap from "gsap";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

const initialState: IUIContext = {
  isFirstLoad: true,
  isLoading: false,
  setLoading: () => {},
  isMenuOpen: false,
  toggleMenu: () => {},
  openMenu: () => {},
  closeMenu: () => {},
  isScrollEnabled: true,
  setScrollEnabled: () => {},
  introTimeline: null,
  addToIntroTimeline: () => {},
  playIntroTimeline: () => {},
  setPreloaderAnimation: () => {},
};

const UIContext = createContext<IUIContext>(initialState);

type TContextProps = {
  children: ReactNode;
};

export const UIContextProvider = ({ children }: TContextProps) => {
  const [isLoading, setLoading] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isScrollEnabled, setScrollEnabled] = useState(false);
  const [isFirstLoad, setFirstLoad] = useState(true);

  const introTimelineRef = useRef<GSAPTimeline | null>(
    gsap.timeline({ paused: true })
  );
  const preloaderRef = useRef<GSAPTimeline | null>(null);

  useEffect(() => {
    if (isFirstLoad) {
      setFirstLoad(false);
    }
  }, [isFirstLoad]);

  const toggleMenu = () => {
    if (isMenuOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setScrollEnabled(true);
  };
  const openMenu = () => {
    setMenuOpen(true);
    setScrollEnabled(false);
  };

  const addToIntroTimeline = (
    callback: (tl: GSAPTimeline) => GSAPTimeline,
    position?: string | number
  ) => {
    const timeline = introTimelineRef.current;
    if (!timeline) return;

    // Build the sub-animation
    const subTimeline = callback(gsap.timeline());

    // Add it to the main timeline at a specific position if given
    timeline.add(subTimeline, position);
  };

  const setPreloaderAnimation = (animation: GSAPTimeline) => {
    preloaderRef.current = animation;
  };

  const playIntroTimeline = () => {
    if (preloaderRef.current) {
      preloaderRef.current.eventCallback("onComplete", () => {
        introTimelineRef.current?.play();
      });
    } else {
      introTimelineRef.current?.play();
    }
  };

  return (
    <UIContext.Provider
      value={{
        isFirstLoad,
        isLoading,
        setLoading,
        isMenuOpen,
        toggleMenu,
        openMenu,
        closeMenu,
        isScrollEnabled,
        setScrollEnabled,
        introTimeline: introTimelineRef.current,
        addToIntroTimeline,
        playIntroTimeline,
        setPreloaderAnimation,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};

export const useUI = () => useContext(UIContext);
