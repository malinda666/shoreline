"use client";

import React from "react";
import clsx from "clsx";

import s from "./team.module.scss";
import Section from "@/components/layout/section";
import SectionTitle from "@/components/partials/section-title";
import Grid from "@/components/partials/grid";
import { team } from "@/constants/team";
import ImageCard from "@/components/partials/cards/image-card";

const Team = () => {
  return (
    <Section className={clsx(s.container)}>
      <div className="row pb-2">
        <SectionTitle line1="Our Team" line2="" />
      </div>
      <Grid columns={4} className="vw pb-1">
        {team.map((row, i) => (
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

export default Team;
