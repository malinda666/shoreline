import React from "react";
import clsx from "clsx";

import s from "./logo-marquee.module.scss";
import { logos } from "@/constants/brands";
import LogoCard from "../cards/logo-card";

type Props = {
  iterations?: number;
};

const LogoMarquee = ({ iterations = 2 }: Props) => {
  return (
    <div className={clsx(s.wrapper)}>
      {new Array(iterations).fill(null).map((_, i) => (
        <div className={clsx(s.inner, "mb-4")} key={i}>
          {logos.map((logo) => (
            <LogoCard url={logo.url} alt={logo.id + "logo"} key={logo.id} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default LogoMarquee;
