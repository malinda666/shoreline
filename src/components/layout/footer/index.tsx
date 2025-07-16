"use client";

import React from "react";
import clsx from "clsx";
import s from "./footer.module.scss";
import Star from "@/components/partials/star";
import SectionTitle from "@/components/partials/section-title";
import { mainNav, socialNav } from "@/constants/navigation";
import Paragraph from "@/components/partials/paragraph";
import Link from "@/components/partials/link";
import { usePathname } from "next/navigation";

type Props = {
  variant?: "default" | "half";
};

const Footer = ({ variant = "default" }: Props) => {
  const pathname = usePathname();
  return (
    <div className={clsx(s.container)}>
      {variant === "default" ? (
        <div className={clsx(s.outro)}>
          <div className={clsx(s.outro_overlay)}></div>
          <Star className={s.outro_star} />
          <div className={clsx(s.outro_title, "mt-3")}>
            <h3 className="fs-h2">{`Let's Hang Out Around the Bonfire !`}</h3>
          </div>
        </div>
      ) : null}
      <footer className={clsx(s.footer)}>
        <div className="layout pb-2 pt-2">
          <SectionTitle
            line1="Shoreline"
            line2="Entertainment"
            variant="bold"
            className={s.footer_title}
            isIndented
          />
          <Paragraph
            content="We welcome you to contact us for more information about any of our
            films or services."
            className={clsx("fs-p", s.footer_para)}
            indented
          />
        </div>
        <div className="layout">
          <div className={clsx(s.footer_sitemap)}>
            <div className={clsx("mb-4")}>
              <span>Navigate</span>
            </div>
            <div className={clsx(s.footer_sitemap_links)}>
              {mainNav.map((item) => (
                <Link
                  text={item.label}
                  href={item.path}
                  key={item.key}
                  className="mb-6"
                  size={3}
                  isActive={pathname === item.path}
                  metadata={item.metadata}
                />
              ))}
            </div>
          </div>
          <div className={clsx(s.footer_social)}>
            <div className={clsx("mb-4")}>
              <span>Connect</span>
            </div>
            <div className={clsx(s.footer_social_links)}>
              {socialNav.map((item) => (
                <Link
                  text={item.label}
                  href={item.path}
                  key={item.key}
                  className="mb-6"
                  size={3}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="row pt-3 fs-body-sm pb-3">
          <div>
            <span>© 2025 SHORELINE ENTERTAINMENT All rights reserved</span>
          </div>
          <div>
            <span>Terms & Conditions</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
