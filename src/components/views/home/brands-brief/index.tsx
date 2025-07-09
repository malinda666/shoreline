import Section from "@/components/layout/section";
import clsx from "clsx";
import React from "react";

import s from "./brands-brief.module.scss";
import SectionTitle from "@/components/partials/section-title";
import LogoMarquee from "@/components/partials/logo-marquee";

const BrandBrief = () => {
  return (
    <Section isDark className={clsx(s.container)}>
      <div className="row pb-2">
        <SectionTitle line1="In Good Company." line2="In Great Cinema." />
      </div>
      <div className="pb-2">
        <LogoMarquee />
      </div>
    </Section>
  );
};

export default BrandBrief;
