"use client";

import { IUIContext } from "@/types";
import { createContext, ReactNode, useContext, useState } from "react";

const initialState: IUIContext = {
  isLoading: false,
  setLoading: () => {},
  isMenuOpen: false,
  toggleMenu: () => {},
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
      setMenuOpen(false);
      setScrollEnabled(true);
    } else {
      setMenuOpen(true);
      setScrollEnabled(false);
    }
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setScrollEnabled(true);
  };

  return (
    <UIContext.Provider
      value={{
        isLoading,
        setLoading,
        isMenuOpen,
        toggleMenu,
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
