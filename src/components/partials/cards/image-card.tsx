"use client";

import React from "react";

import s from "./cards.module.scss";
import Image from "next/image";
import clsx from "clsx";

type Props = {
  title: string;
  image: string;
};

const ImageCard = ({ title, image }: Props) => {
  return (
    <div className={s.image_card}>
      <div className={clsx(s.image_wrapper)}>
        <Image src={image} alt={title} fill />
        <Image src={image} alt={title} fill />
        <div className={s.overlay_title}>
          <span className="fs-p">{title}</span>
        </div>
      </div>
      <div className={clsx(s.title, "mt-6")}>
        <span className="fs-body">{title}</span>
      </div>
    </div>
  );
};

export default ImageCard;
