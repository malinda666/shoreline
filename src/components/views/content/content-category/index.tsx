"use client";

import clsx from "clsx";
import s from "./content-category.module.scss";
import { ICategory, IContent, ISubCategory } from "@/types";
import Link from "next/link";
import ImageCard from "@/components/partials/cards/image-card";

type ISub = ISubCategory &
  Omit<ICategory, "subCategories" | "order"> & {
    contents: IContent[];
  };

type ContentCategoryProps = {
  sub: ISub;
  category: string;
  subCategory: string;
};

const ContentCategory = ({
  sub,
  category,
  subCategory,
}: ContentCategoryProps) => {
  return (
    <div className={clsx(s.container, "pt-2 pb-2 layout")}>
      <div className={clsx(s.content_inner)}>
        {sub.contents.map((content) => (
          <ContentCategoryItem
            key={content.id}
            content={content}
            link={`/content/${category}/${subCategory}/${content.slug}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ContentCategory;

type ContentCategoryItemProps = {
  content: IContent;
  link: string;
};

const ContentCategoryItem = ({ content, link }: ContentCategoryItemProps) => {
  return (
    <div className={clsx(s.item)} key={content.id}>
      <Link href={link} className={clsx(s.item_inner)}>
        <ImageCard
          image={`/assets/posters${content.posterUrl}` || ""}
          title={content.title}
        />
      </Link>
    </div>
  );
};
