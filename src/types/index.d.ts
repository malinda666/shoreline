export interface INavItem {
  key: string;
  label: string;
  path: string;
}

export type THeroTypes = "main" | "secondary";

export interface IUIContext {
  isLoading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  isMenuOpen: boolean;
  toggleMenu: () => void;
  isScrollEnabled: boolean;
  setScrollEnabled: Dispatch<SetStateAction<boolean>>;
}
