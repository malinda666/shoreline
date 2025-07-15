import { prisma } from "@/lib/prismaClient";
import Section from "@/components/layout/section";
import SectionTitle from "@/components/partials/section-title";
import ContentCategory from "@/components/views/content/content-category";

export const revalidate = 60;

type Props = {
  params: Promise<{
    category: string;
    subCategory: string;
  }>;
};

export default async function SubCategoryPage({ params }: Props) {
  const { subCategory, category } = await params;
  const sub = await prisma.subCategory.findFirst({
    where: { slug: subCategory },
    include: {
      contents: true,
      category: true,
    },
  });

  if (!sub) return <div className="p-8">Subcategory not found.</div>;

  return (
    <Section>
      <div className="row">
        <SectionTitle
          line1={sub.category.name}
          line2={sub.name}
          variant="bold"
        />
      </div>
      <ContentCategory
        sub={sub}
        category={category}
        subCategory={subCategory}
      />
    </Section>
  );
}
