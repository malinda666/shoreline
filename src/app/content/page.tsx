import { prisma } from "@/lib/prismaClient";
import ContentList from "@/components/views/content/content-list";
import Section from "@/components/layout/section";

export const revalidate = 60;

export default async function CatalogueLandingPage() {
  const categories = await prisma.category.findMany({
    orderBy: { order: "asc" },
    include: { subCategories: true },
  });

  return (
    <Section>
      <ContentList categories={categories} />
    </Section>
  );
}
