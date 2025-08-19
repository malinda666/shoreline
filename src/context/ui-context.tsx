"use client";

import PageAnimation from "@/animations/pageanimation";
import { IUIContext } from "@/types";
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
  mainTl: null,
  playIntroTimeline: () => {},
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

  const mainTl = useRef<PageAnimation | null>(null);

  useEffect(() => {
    if (isFirstLoad) {
      setFirstLoad(false);
    }
    mainTl.current = new PageAnimation();
    mainTl.current.intro();
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

  const playIntroTimeline = () => {
    console.log(mainTl.current);
    console.log("play intro");
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
        mainTl: mainTl.current,
        playIntroTimeline,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};

export const useUI = () => useContext(UIContext);
