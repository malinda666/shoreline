import React, { useRef } from "react";

import { mainNav, socialNav } from "@/constants/navigation";
import clsx from "clsx";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

import s from "./header.module.scss";
import { useUI } from "@/context/ui-context";
import Link from "@/components/partials/link";
import { usePathname } from "next/navigation";
import MenuButton from "./menu-button";
import MenuAnimation from "@/animations/menu";

const Header = () => {
  const header = useRef<HTMLDivElement>(null);

  const { isMenuOpen, isFirstLoad } = useUI();
  const pathname = usePathname();

  useGSAP(
    () => {
      if (!header.current) return;
      const menuAnimation = new MenuAnimation(header.current);

      if (isFirstLoad) {
        menuAnimation.init();
      }
      if (isMenuOpen) {
        menuAnimation.open();
      } else {
        menuAnimation.close();
      }
    },
    { dependencies: [isMenuOpen, isFirstLoad], scope: header }
  );

  return (
    <div className={s.wrapper} ref={header}>
      <header
        className={clsx(
          s.container,
          "row",
          isMenuOpen ? s.container_dark : null
        )}
      >
        <div className={s.inner}>
          <div className="fs-body">
            <span>SHORELINE</span>
          </div>
          <MenuButton />
        </div>
      </header>

      <aside>
        <nav className="layout">
          <div className={s.nav_main}>
            <ul>
              {mainNav.map((item) => (
                <li key={item.key} data-animate>
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
            <div className="fs-body" data-animate>
              Connect
            </div>
            <ul>
              {socialNav.map((item) => (
                <li key={item.key} data-animate>
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
      </aside>
    </div>
  );
};

export default Header;
