import AboutContent from "@/components/views/about/about-content";
import Team from "@/components/views/about/team";
import Hero from "@/components/views/hero";

export default function AboutUs() {
  return (
    <>
      <Hero
        titleLine1="33 Years of Stories."
        titleLine2="One Endless Horizon."
        subtitle="Shoreline Entertainment is a leading global film sales company, home to producer Morris Ruskin. With premieres at Sundance, TIFF, Berlinale, and more, we bring acclaimed stories to the world through top markets and festivals."
      />
      <AboutContent />
      <Team />
    </>
  );
}
