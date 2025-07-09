import Hero from "@/components/views/hero";
import AboutBrief from "@/components/views/home/about-brief";
import BrandBrief from "@/components/views/home/brands-brief";

import Lineup from "@/components/views/home/lineup";

export default function Home() {
  return (
    <>
      <Hero
        titleLine1="Shoreline"
        titleLine2="Entertainment"
        subtitle="Distributing Dreams, One Frame at a Time."
        mode="main"
      />
      <AboutBrief />
      <BrandBrief />
      <Lineup />
    </>
  );
}
