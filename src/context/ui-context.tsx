"use client";

import { IUIContext } from "@/types";
import { createContext, ReactNode, useContext, useState } from "react";

const initialState: IUIContext = {
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
