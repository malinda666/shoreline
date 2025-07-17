"use client";

import clsx from "clsx";
import s from "./content-single.module.scss";
import { IContent } from "@/types";
import Image from "next/image";
import Section from "@/components/layout/section";
import SectionTitle from "@/components/partials/section-title";
import Grid from "@/components/partials/grid";
import { team } from "@/constants/team";
import ImageCard from "@/components/partials/cards/image-card";
import Paragraph from "@/components/partials/paragraph";

type IData = IContent;

type Props = {
  data: IData;
  category: string;
  subCategory: string;
};

const ContentSingle = ({ data }: Props) => {
  console.log(data);
  return (
    <div className={clsx(s.container)}>
      <Section>
        <div className={clsx(s.content_hero, "layout pb-2")}>
          <div className={s.content_hero_left}>
            <SectionTitle
              line1={data.title}
              line2=""
              variant="bold"
              className={s.content_hero_title}
            />
            <div className={clsx(s.content_hero_left_meta, "pt-4")}>
              <div className={clsx(s.header_year)}>{data.year}</div>
              <div className={clsx(s.header_runtime)}>{data.runtime} min</div>
            </div>
            <div className={clsx(s.content_hero_left_tags, "pt-5 fs-body-sm")}>
              <div className="fs-body-sm">{data.format}</div>
              <div className="fs-body-sm">{data.language}</div>
            </div>
            <div className={clsx(s.content_hero_description, "pt-2 fs-p")}>
              <Paragraph content={data.description} indented />
            </div>
          </div>
          <div className={s.content_hero_right}>
            {data.posterUrl ? (
              <Image
                src={`/assets/posters${data.posterUrl}`}
                alt={data.title}
                layout="fill"
                objectFit="contain"
              />
            ) : (
              <div className="bg-gray-200 h-72 w-full flex items-center justify-center text-gray-500">
                No poster
              </div>
            )}
          </div>
        </div>

        <div className={clsx(s.trailer, "row pt-3")}>
          {data.trailerUrl && (
            <div className={clsx(s.trailer_inner)}>
              {/* <iframe
                src={data.trailerUrl}
                className="w-full aspect-video"
                frameBorder="0"
                allowFullScreen
              /> */}
              <Image
                src={`/assets/posters${data.posterUrl}`}
                alt={data.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
          )}
        </div>
      </Section>

      <Section>
        {data.synopsis ? (
          <>
            <div className="row pb-3">
              <SectionTitle line1="Synopsis" line2="" />
            </div>

            <div className={clsx(s.synopsis, "row pb-2")}>
              <Paragraph
                content={data.synopsis}
                indented
                className={s.synopsis_inner}
              />
            </div>
          </>
        ) : null}
        <div className="row pb-2">
          <SectionTitle line1="Cast" line2="" />
        </div>
        <Grid columns={4} className="vw pb-1">
          {team.map((row, i) => (
            <Grid.Row key={i}>
              {row.map((item, j) => (
                <Grid.Item key={j} isEmpty={!item}>
                  {item ? (
                    <ImageCard image={item?.image} title={item?.title} />
                  ) : null}
                </Grid.Item>
              ))}
            </Grid.Row>
          ))}
        </Grid>
      </Section>
    </div>
  );
};

export default ContentSingle;
