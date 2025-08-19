import PageAnimation from "@/animations/pageanimation";

export interface INavItem {
  key: string;
  label: string;
  path: string;
  metadata?: string | number;
}

export type THeroType = "main" | "secondary";

export type TSplitTextType = "chars" | "words" | "lines";
export type TSplitTextTrigger = "tl" | "scroll" | "intro";

export interface IUIContext {
  isFirstLoad: boolean;
  isLoading: boolean;
  setLoading: (loading: boolean) => void;
  isMenuOpen: boolean;
  toggleMenu: () => void;
  openMenu: () => void;
  closeMenu: () => void;
  isScrollEnabled: boolean;
  setScrollEnabled: (enabled: boolean) => void;
  mainTl: PageAnimation | null;
  playIntroTimeline: () => void;
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
