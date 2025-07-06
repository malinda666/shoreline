import React from "react";
import clsx from "clsx";

import s from "./logo-marquee.module.scss";
import { logos } from "@/constants/brands";
import Image from "next/image";

type Props = {
  iterations?: number;
};

const LogoMarquee = ({ iterations = 2 }: Props) => {
  return (
    <div className={clsx(s.wrapper)}>
      {new Array(iterations).fill(null).map((_, i) => (
        <div className={clsx(s.inner, "mb-4")} key={i}>
          {logos.map((logo) => (
            <div className={clsx(s.logo_item, "p-4 mr-4")} key={logo.id}>
              <Image
                src={logo.url}
                alt={logo.id + "logo"}
                width={150}
                height={150}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default LogoMarquee;
