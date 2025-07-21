"use client";

import { IUIContext } from "@/types";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
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
      }}
    >
      {children}
    </UIContext.Provider>
  );
};

export const useUI = () => useContext(UIContext);
