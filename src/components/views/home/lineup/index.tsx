"use client";

import Section from "@/components/layout/section";
import ImageCard from "@/components/partials/cards/image-card";
import Grid from "@/components/partials/grid";
import Link from "@/components/partials/link";
import SectionTitle from "@/components/partials/section-title";
import { featuredContent } from "@/constants/lineup";
import React from "react";

const Lineup = () => {
  return (
    <Section>
      <div className="row pb-2">
        <SectionTitle
          line1="Awarded, applauded,"
          line2="And unforgettable."
          isIndented
        />
        <Link href="/content" text="View full catalog" variant="alt" size={2} />
      </div>
      <Grid className="pb-2 vw" columns={4}>
        {featuredContent.map((row, i) => (
          <Grid.Row key={i}>
            {row.map((item, j) => (
              <Grid.Item key={j} isEmpty={!item}>
                {item ? (
                  <ImageCard image={item?.image} title={item?.title} />
                ) : null}
              </Grid.Item>
            ))}
          </Grid.Row>
        ))}
      </Grid>
    </Section>
  );
};

export default Lineup;
