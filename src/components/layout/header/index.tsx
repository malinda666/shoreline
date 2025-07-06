import React from "react";

import { mainNav, socialNav } from "@/constants/navigation";
import Link from "next/link";
import clsx from "clsx";

import s from "./header.module.scss";
import { useUI } from "@/context/ui-context";

const Header = () => {
  const { isMenuOpen, toggleMenu } = useUI();

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
          <div className="fs-body" onClick={toggleMenu}>
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
                  <Link href={item.path}>
                    <span className="fs-h3">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={s.nav_secondary}>
            <div className="fs-body">Connect</div>
            <ul>
              {socialNav.map((item) => (
                <li key={item.key}>
                  <Link href={item.path}>
                    <span className="fs-p">{item.label}</span>
                  </Link>
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
