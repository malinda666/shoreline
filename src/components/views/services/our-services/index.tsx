"use client";

import Section from "@/components/layout/section";
import Button from "@/components/partials/button";
import Grid from "@/components/partials/grid";
import Paragraph from "@/components/partials/paragraph";
import SectionTitle from "@/components/partials/section-title";
import { services } from "@/constants/services";
import React from "react";
import clsx from "clsx";

import s from "./our-services.module.scss";

const OurServices = () => {
  return (
    <Section>
      <div className="row pb-3">
        <SectionTitle line1="Our Services" line2="" />
      </div>
      <Grid columns={3} className="vw pb-1" aspect={3 / 4} gap={30}>
        {services.map((row, i) => (
          <Grid.Row key={i}>
            {row.map((item, j) => (
              <Grid.Item key={j} isEmpty={!item}>
                {item ? (
                  <div className={clsx(s.service_card, "p-3")}>
                    <Paragraph content={item.title} className="mb-3" />
                    <Paragraph
                      content={item.description}
                      size="sm"
                      className="mb-4"
                    />
                    {item.ctaLink ? <Button>Learn More</Button> : null}
                  </div>
                ) : null}
              </Grid.Item>
            ))}
          </Grid.Row>
        ))}
      </Grid>
    </Section>
  );
};

export default OurServices;
