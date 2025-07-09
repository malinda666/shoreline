import React from "react";

import s from "./cards.module.scss";
import Image from "next/image";
import clsx from "clsx";

type Props = {
  url: string;
  alt: string;
  className?: string;
};

const LogoCard = ({ url, alt, className }: Props) => {
  return (
    <div className={clsx(s.logo_card, className, "p-4")}>
      <Image src={url} alt={alt} width={150} height={150} />
    </div>
  );
};

export default LogoCard;
