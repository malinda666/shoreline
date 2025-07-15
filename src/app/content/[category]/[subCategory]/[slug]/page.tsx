import { prisma } from "@/lib/prismaClient";
import { notFound } from "next/navigation";
import ContentSingle from "@/components/views/content/content-single";

type Props = {
  params: Promise<{
    category: string;
    subCategory: string;
    slug: string;
  }>;
};

export const revalidate = 60;

export default async function ContentDetailPage({ params }: Props) {
  const { slug } = await params;
  const content = await prisma.content.findUnique({
    where: { slug: slug },
    include: {
      categories: true,
      subCategories: {
        include: {
          category: true,
        },
      },
    },
  });

  if (!content) return notFound();

  const category = content.subCategories?.[0]?.category?.name || "";
  const subCategory = content.subCategories?.[0]?.name || "";

  return (
    <ContentSingle
      data={content}
      category={category}
      subCategory={subCategory}
    />
  );
}
