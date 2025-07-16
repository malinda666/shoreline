"use client";

import React from "react";
import s from "./about-brief.module.scss";
import Section from "@/components/layout/section";
import clsx from "clsx";
import Star from "@/components/partials/star";
import { StatCard } from "@/components/partials/cards";
import SectionTitle from "@/components/partials/section-title";
import Paragraph from "@/components/partials/paragraph";
import Link from "@/components/partials/link";

const AboutBrief = () => {
  return (
    <Section className={clsx(s.container, "pb-2")}>
      <div className={clsx("row pb-2", s.deco)}>
        <Star />
      </div>
      <div className="row pb-2">
        <SectionTitle
          line1="33 Years of Stories."
          line2="One Endless Horizon."
          isIndented
        />
      </div>
      <div className={clsx("layout", s.inner)}>
        <div className={s.cards}>
          <StatCard title="300+" subtitle="Films in our  catalogue" />
          <StatCard title="15+" subtitle="Major media markets" />
          <StatCard title="50+" subtitle="Academy & Spirit award nominations" />
        </div>
        <div className={s.content_wrap}>
          <Paragraph
            content="Shoreline Entertainment is a leading global film sales company, home
            to producer Morris Ruskin. With premieres at Sundance, TIFF,
            Berlinale, and more, we bring acclaimed stories to the world through
            top markets and festivals."
            indented
            className="pb-3"
          />
          <Link
            href="/about-us"
            text="Learn More"
            size={2}
            className={s.cta}
            variant="alt"
          />
        </div>
      </div>
    </Section>
  );
};

export default AboutBrief;
