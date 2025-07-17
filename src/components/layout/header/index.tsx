import React, {
  useRef,
  // useState
} from "react";

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

const Header = () => {
  const header = useRef<HTMLDivElement>(null);

  const { isMenuOpen } = useUI();
  const pathname = usePathname();

  // const [isNavVisible, setNavVisible] = useState(false);

  useGSAP(
    () => {
      if (!header.current) return;

      if (isMenuOpen) {
        gsap
          .timeline({
            defaults: { duration: 1 },
            onStart: () => {
              // setNavVisible(true);
            },
          })
          .to(header.current, {
            backgroundColor: "var(--c-off-black)",
          })
          .to(
            header.current.querySelector("aside"),
            {
              clipPath: "inset(0% 0% 0% 0%)",
              ease: "power3.inOut",
              duration: 1.25,
            },
            0
          );
      } else {
        gsap
          .timeline({
            onComplete: () => {
              // setNavVisible(false);
            },
          })
          .to(header.current, {
            duration: 0.7,
            backgroundColor: "transparent",
          })
          .to(
            header.current.querySelector("aside"),
            {
              clipPath: "inset(0% 0% 100% 0%)",
              ease: "power3.inOut",
              duration: 1.25,
            },
            0
          );
      }
    },
    { dependencies: [isMenuOpen], scope: header }
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
            <span>LOGO</span>
          </div>
          <MenuButton />
        </div>
      </header>

      <aside>
        <nav className="layout">
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
      </aside>
      {/* <div className={s.background} /> */}
    </div>
  );
};

export default Header;
