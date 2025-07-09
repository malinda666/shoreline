import Hero from "@/components/views/hero";
import GlobalPartners from "@/components/views/partners/global-partners";
import MarketAttendance from "@/components/views/partners/market-attendance";

export default function Partners() {
  return (
    <>
      <Hero
        titleLine1="Celebrated. Screened."
        titleLine2="Sold Worldwide."
        subtitle="From streaming to shelf, Shoreline leverages its house brands to release films via apps, FAST, AVOD, and traditional formats like DVD and Blu-ray."
      />
      <GlobalPartners />
      <MarketAttendance />
    </>
  );
}
