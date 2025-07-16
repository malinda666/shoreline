"use client";

import Section from "@/components/layout/section";
import LogoCard from "@/components/partials/cards/logo-card";
import Grid from "@/components/partials/grid";
import SectionTitle from "@/components/partials/section-title";
import { marketAttendace } from "@/constants/partners";
import React from "react";

const MarketAttendance = () => {
  return (
    <Section>
      <div className="row pb-2">
        <SectionTitle line1="Market Attendance" line2="" />
      </div>
      <Grid columns={8} className="vw pb-1" aspect={1 / 1}>
        {marketAttendace.map((row, i) => (
          <Grid.Row key={i}>
            {row.map((item, j) => (
              <Grid.Item key={j} isEmpty={!item}>
                {item ? (
                  <LogoCard url={item.image} alt={item.title} key={item.id} />
                ) : null}
              </Grid.Item>
            ))}
          </Grid.Row>
        ))}
      </Grid>
    </Section>
  );
};

export default MarketAttendance;
