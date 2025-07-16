"use client";

import { ICategory } from "@/types";
import Link from "next/link";
import clsx from "clsx";
import s from "./content-list.module.scss";
import Image from "next/image";
import Grid from "@/components/partials/grid";

type Props = {
  categories: ICategory[];
};

const ContentList = ({ categories }: Props) => {
  return (
    <div className={clsx(s.container, "layout pb-2")}>
      <ul className={clsx(s.list)}>
        {categories.map((category: ICategory) => {
          const firstSub = category.subCategories[0];
          if (!firstSub) return null;

          return (
            <li key={category.id} className={clsx(s.list_item, "pb-4")}>
              <div className={clsx(s.list_item_deco)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="65"
                  height="65"
                  viewBox="0 0 20 17"
                  fill="none"
                >
                  <path
                    d="M11.5914 16.5557C11.6063 16.5708 12.0644 16.6856 12.6092 16.8108C13.1541 16.936 13.6059 17.0194 13.6131 16.9961C13.6203 16.9728 13.6767 16.5946 13.7384 16.1556C13.8622 15.2741 14.1621 14.2449 14.4825 13.6013C15.4812 11.5952 17.2731 10.267 19.4464 9.92175L19.9998 9.83382V8.94765V8.06142L19.4982 7.97726C16.2119 7.42593 14.0694 4.96872 13.6686 1.29151C13.6424 1.05139 13.6111 0.854996 13.5991 0.854996C13.4883 0.854996 11.6518 1.29759 11.617 1.33265C11.5919 1.358 11.6106 1.5831 11.6586 1.83279C12.19 4.59765 13.7117 6.84749 15.6862 7.7882L16.1599 8.01386L6.41978 8.03153L0.260742 8.04275V9.83621L6.43562 9.84744L16.1528 9.86518L15.5548 10.1682C14.0035 10.9541 12.7753 12.4958 12.052 14.5652C11.8459 15.1547 11.5349 16.4988 11.5914 16.5557Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              {/* <Star className={clsx(s.list_item_deco, "")} /> */}
              <Link
                href={`/content/${category.slug}/${firstSub.slug}`}
                className={clsx("fs-h3", s.list_item_link)}
              >
                {category.name}
              </Link>
            </li>
          );
        })}
      </ul>
      <div className={clsx(s.preview_wrapper)}>
        <Grid className={clsx(s.preview)} columns={2}>
          <Grid.Row>
            <Grid.Item>
              <div className={s.preview_inner}>
                <Image src="/assets/posters/2.png" alt="preview-1" fill />
              </div>
            </Grid.Item>
            <Grid.Item>
              <div className={s.preview_inner}>
                <Image src="/assets/posters/1.png" alt="preview-1" fill />
              </div>
            </Grid.Item>
          </Grid.Row>
          <Grid.Row>
            <Grid.Item isEmpty />
            <Grid.Item>
              <div className={s.preview_inner}>
                <Image src="/assets/posters/3.png" alt="preview-1" fill />
              </div>
            </Grid.Item>
          </Grid.Row>
        </Grid>
      </div>
    </div>
  );
};

export default ContentList;
