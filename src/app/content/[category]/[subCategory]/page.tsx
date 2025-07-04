import Link from "next/link";
import { prisma } from "@/lib/prismaClient";

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
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">
        {sub.category.name} / {sub.name}
      </h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {sub.contents.map((content) => (
          <Link
            key={content.id}
            href={`/content/${category}/${subCategory}/${content.slug}`}
            className="border p-4 rounded hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold mb-1">{content.title}</h2>
            <p className="text-sm text-gray-600">{content.year}</p>
            <p className="text-sm mt-2 line-clamp-3">{content.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
