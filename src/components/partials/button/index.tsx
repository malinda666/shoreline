import React, { ComponentProps, ReactNode } from "react";
import ChevSVG from "../../../../public/assets/svgs/chev.svg";

import s from "./button.module.scss";
import clsx from "clsx";
import Image from "next/image";

type Props = ComponentProps<"button"> & {
  children: ReactNode;
};

const Button = ({ children }: Props) => {
  return (
    <button className={clsx(s.container)}>
      <Image
        src={ChevSVG}
        alt="chevron"
        className={clsx(s.chev, s.chev_first)}
      />
      <div className={s.inner}>{children}</div>
      <Image
        src={ChevSVG}
        alt="chevron"
        className={clsx(s.chev, s.chev_second)}
      />
    </button>
  );
};

export default Button;
