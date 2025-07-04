import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const firstLevelCategories = [
  "All",
  "Features",
  "Series",
  "Classics",
  "Concerts",
  "Rock docs",
  "Xplore! Docuseries",
  "Web Series",
  "The Africa channel",
  "FAST channels",
  "Content Development",
];

async function main() {
  for (const categoryName of firstLevelCategories) {
    const categorySlug = categoryName.toLowerCase().replace(/\s+/g, "-");

    const category = await prisma.category.upsert({
      where: { slug: categorySlug },
      update: {},
      create: {
        name: categoryName,
        slug: categorySlug,
      },
    });

    const subCategory = await prisma.subCategory.upsert({
      where: { slug: `${categorySlug}-general` },
      update: {},
      create: {
        name: `${categoryName} - General`,
        slug: `${categorySlug}-general`,
        categoryId: category.id,
      },
    });

    for (let i = 1; i <= 3; i++) {
      const title = `${categoryName} Film ${i}`;
      const slug = `${categorySlug}-film-${i}`;

      await prisma.content.create({
        data: {
          title,
          slug,
          description: `A sample description for ${title}.`,
          format:
            categoryName === "Series" || categoryName === "Web Series"
              ? "SERIES"
              : categoryName === "Classics"
              ? "CLASSIC"
              : "FEATURE",
          runtime: 90 + i,
          year: 2020 + i,
          language: "English",
          status: "Available",
          posterUrl: "/sample-poster.jpg",
          trailerUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          categories: {
            connect: { id: category.id },
          },
          subCategories: {
            connect: { id: subCategory.id },
          },
        },
      });
    }
  }
}

main()
  .then(() => console.log("✅ Seed complete"))
  .catch((e) => {
    console.error("❌ Seed failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
