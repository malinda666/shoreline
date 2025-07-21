export interface INavItem {
  key: string;
  label: string;
  path: string;
  metadata?: string | number;
}

export type THeroTypes = "main" | "secondary";

export interface IUIContext {
  isFirstLoad: boolean;
  isLoading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  isMenuOpen: boolean;
  toggleMenu: () => void;
  openMenu: () => void;
  closeMenu: () => void;
  isScrollEnabled: boolean;
  setScrollEnabled: Dispatch<SetStateAction<boolean>>;
}

export interface ISubCategory {
  categoryId: string;
  id: string;
  name: string;
  slug: sting;
}
export interface ICategory {
  id: string;
  name: string;
  order: number | null;
  slug: string;
  subCategories: ISubCategory[];
}

export type TContentTypes = "FEATURE" | "SERIES" | "CLASSIC";

export interface IContent {
  id: string;
  title: string;
  slug: string;
  description: string;
  synopsis: string | null;
  format: string;
  runtime: number | null;
  year: number | null;
  language: string;
  posterUrl: string | null;
  trailerUrl: string | null;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}
