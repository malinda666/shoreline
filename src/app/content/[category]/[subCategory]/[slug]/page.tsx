import { prisma } from "@/lib/prismaClient";
import { notFound } from "next/navigation";
import Image from "next/image";

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
    <div className="max-w-5xl mx-auto p-6">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/3">
          {content.posterUrl ? (
            <Image
              src={content.posterUrl}
              alt={content.title}
              width={400}
              height={600}
              className="w-full h-auto object-cover"
            />
          ) : (
            <div className="bg-gray-200 h-72 w-full flex items-center justify-center text-gray-500">
              No poster
            </div>
          )}
        </div>
        <div className="w-full md:w-2/3">
          <h1 className="text-3xl font-bold mb-2">{content.title}</h1>
          <p className="text-sm text-gray-500 mb-4">
            {category} / {subCategory} · {content.year} · {content.language}
          </p>
          <p className="mb-4">{content.description}</p>
          {content.synopsis && (
            <>
              <h2 className="text-lg font-semibold mt-6 mb-2">Synopsis</h2>
              <p className="text-sm text-gray-700">{content.synopsis}</p>
            </>
          )}
          {content.trailerUrl && (
            <div className="mt-6">
              <h2 className="text-lg font-semibold mb-2">Trailer</h2>
              <iframe
                src={content.trailerUrl}
                className="w-full aspect-video"
                frameBorder="0"
                allowFullScreen
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
