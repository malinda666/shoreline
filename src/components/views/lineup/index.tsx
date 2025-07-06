import Section from "@/components/layout/section";
import Button from "@/components/partials/button";
import SectionTitle from "@/components/partials/section-title";
import React from "react";

const Lineup = () => {
  return (
    <Section>
      <div className="row pb-2">
        <SectionTitle line1="Awarded, applauded," line2="And unforgettable." />
        <Button>View full catalog</Button>
      </div>
    </Section>
  );
};

export default Lineup;
