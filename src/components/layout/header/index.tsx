import React from "react";

import { mainNav, socialNav } from "@/constants/navigation";
import clsx from "clsx";

import s from "./header.module.scss";
import { useUI } from "@/context/ui-context";
import Link from "@/components/partials/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const { isMenuOpen, toggleMenu } = useUI();
  const pathname = usePathname();

  return (
    <div className={s.wrapper}>
      <header
        className={clsx(
          s.container,
          "row",
          isMenuOpen ? s.container_dark : null
        )}
      >
        <div className={s.inner}>
          <div className="fs-body">
            <span>LOGO</span>
          </div>
          <div className={clsx("fs-body", s.menu_trigger)} onClick={toggleMenu}>
            <span>{isMenuOpen ? "Close" : "Menu"}</span>
          </div>
        </div>
      </header>
      {isMenuOpen && (
        <nav
          className="layout"
          style={{
            transform: isMenuOpen ? "translateY(0%)" : "translateY(-100%)",
            transition: "transform 0.5s ease",
          }}
        >
          <div className={s.nav_main}>
            <ul>
              {mainNav.map((item) => (
                <li key={item.key}>
                  <Link
                    text={item.label}
                    href={item.path}
                    key={item.key}
                    className="mb-6"
                    size={4}
                    isActive={pathname === item.path}
                    metadata={item.metadata}
                  />
                </li>
              ))}
            </ul>
          </div>

          <div className={s.nav_secondary}>
            <div className="fs-body">Connect</div>
            <ul>
              {socialNav.map((item) => (
                <li key={item.key}>
                  <Link
                    text={item.label}
                    href={item.path}
                    key={item.key}
                    className="mb-6"
                    size={3}
                  />
                </li>
              ))}
            </ul>
          </div>
        </nav>
      )}
      <div
        className={s.background}
        style={{
          transform: isMenuOpen ? "translateY(0%)" : "translateY(-100%)",
          transition: "transform 0.5s ease",
        }}
      />
    </div>
  );
};

export default Header;
