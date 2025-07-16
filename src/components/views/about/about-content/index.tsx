"use client";

import React from "react";

import clsx from "clsx";
import s from "./about-content.module.scss";
import Section from "@/components/layout/section";
import Paragraph from "@/components/partials/paragraph";
import Grid from "@/components/partials/grid";
import { featuredContent2Col } from "@/constants/lineup";
import Image from "next/image";

const AboutContent = () => {
  return (
    <Section className={clsx(s.container, "pb-1")} isDark>
      <div className="layout">
        <div className={clsx(s.content_left)}>
          <Paragraph
            content="Established in 1992, Shoreline Entertainment has become one of the industry’s most enduring and prolific film sales companies—representing award-winning films across genres, cultures, and continents. We proudly bring bold stories to screens around the globe."
            indented
            className="mb-3"
          />
          <Paragraph
            size="sm"
            content="Shoreline Entertainment is a recognized force in international cinema. With a presence at over 15 leading film festivals and media markets each year, we’ve built trusted relationships with over a thousand global partners—from broadcasters to distributors to festival programmers. Our curated catalogue of 300+ films spans genres, languages, and cultures, representing compelling stories that have premiered at Berlinale, TIFF, Sundance, Tribeca, and beyond."
            className="mb-4"
          />
          <Paragraph
            size="sm"
            content="Founded by Morris Ruskin after the acclaimed Glengarry Glen Ross, Shoreline has carried a legacy of excellence in film production and sales. Morris has produced over 50 films, with many earning Oscar and Spirit Award nominations, while premiering at top-tier festivals worldwide. Today, Shoreline continues to expand its global impact through film aggregation—bridging the traditional sales world with the future of digital distribution. Alongside Shoreline, Morris leads MoJo Global Arts, further championing powerful storytelling and creative talent."
            className="mb-4"
          />
        </div>
        <div className={clsx(s.content_right)}>
          <Grid columns={2}>
            {featuredContent2Col.map((row, i) => (
              <Grid.Row key={i}>
                {row.map((item, j) => (
                  <Grid.Item key={j} isEmpty={!item}>
                    {item ? (
                      <div className={s.content_right_item}>
                        <Image src={item.image} alt={item.title} fill />
                      </div>
                    ) : null}
                  </Grid.Item>
                ))}
              </Grid.Row>
            ))}
          </Grid>
        </div>
      </div>
    </Section>
  );
};

export default AboutContent;
