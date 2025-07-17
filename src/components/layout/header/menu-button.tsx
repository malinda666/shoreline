"use client";

import clsx from "clsx";
import s from "./header.module.scss";
import { useUI } from "@/context/ui-context";

const MenuButton = () => {
  const { isMenuOpen, toggleMenu } = useUI();

  return (
    <button
      onClick={toggleMenu}
      className={clsx(
        s.menu_button,
        isMenuOpen ? s.menu_button_open : s.menu_button_closed
      )}
    >
      <div className={s.menu_button_bg} />
      <div className={clsx(s.menu_button_inner)}>
        <div className={clsx(s.menu_button_line)} />
        <div className={clsx(s.menu_button_line)} />
        <div className={clsx(s.menu_button_line)} />
      </div>
    </button>
  );
};

export default MenuButton;
