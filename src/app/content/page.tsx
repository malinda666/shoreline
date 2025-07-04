/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
import { prisma } from "@/lib/prismaClient";

export const revalidate = 60;

export default async function CatalogueLandingPage() {
  const categories = await prisma.category.findMany({
    orderBy: { order: "asc" },
    include: { subCategories: true },
  });

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Catalogue</h1>
      <ul className="grid gap-4">
        {categories.map((category: any) => {
          const firstSub = category.subCategories[0];
          if (!firstSub) return null;

          return (
            <li key={category.id} className="border p-4 rounded">
              <Link
                href={`/content/${category.slug}/${firstSub.slug}`}
                className="text-xl text-blue-600 hover:underline"
              >
                {category.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
