"use client";

import React from "react";
import clsx from "clsx";
import s from "./footer.module.scss";
import Star from "@/components/partials/star";
import SectionTitle from "@/components/partials/section-title";
import { mainNav, socialNav } from "@/constants/navigation";

const Footer = () => {
  return (
    <div className={clsx(s.container)}>
      <div className={clsx(s.outro)}>
        <div className={clsx(s.outro_overlay)}></div>
        <Star className={s.outro_star} />
        <div className={clsx(s.outro_title, "mt-3")}>
          <h3 className="fs-h3-bold">{`Let's Hang Out Around the Bonfire !`}</h3>
        </div>
      </div>
      <footer className={clsx(s.footer)}>
        <div className="layout pb-2 pt-2">
          <SectionTitle
            line1="Shoreline"
            line2="Entertainment"
            variant="bold"
            className={s.footer_title}
          />
          <p className={clsx("fs-p", s.footer_para)}>
            We welcome you to contact us for more information about any of our
            films or services.
          </p>
        </div>
        <div className="layout">
          <div className={clsx(s.footer_sitemap)}>
            <div className={clsx("mb-4")}>
              <span>Navigate</span>
            </div>
            <div className={clsx(s.footer_sitemap_links)}>
              {mainNav.map((item) => (
                <div className="fs-p mb-6" key={item.key}>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className={clsx(s.footer_social)}>
            <div className={clsx("mb-4")}>
              <span>Connect</span>
            </div>
            <div className={clsx(s.footer_social_links)}>
              {socialNav.map((item) => (
                <div className="fs-p mb-6" key={item.key}>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="row pt-3 fs-body-sm">
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
