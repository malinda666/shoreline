"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface UIContext {
  isLoading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  isMenuOpen: boolean;
  toggleMenu: () => void;
  isScrollEnabled: boolean;
  setScrollEnabled: Dispatch<SetStateAction<boolean>>;
}

const initialState: UIContext = {
  isLoading: false,
  setLoading: () => {},
  isMenuOpen: false,
  toggleMenu: () => {},
  isScrollEnabled: true,
  setScrollEnabled: () => {},
};

const UIContext = createContext<UIContext>(initialState);

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

  return (
    <UIContext.Provider
      value={{
        isLoading,
        setLoading,
        isMenuOpen,
        toggleMenu,
        isScrollEnabled,
        setScrollEnabled,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};

export const useUI = () => useContext(UIContext);
