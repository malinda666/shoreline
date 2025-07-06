import Image from "next/image";
import React from "react";

import StarSVG from "../../../../public/assets/svgs/star.svg";
import s from "./star.module.scss";

const Star = () => {
  return (
    <div className={s.container}>
      <Image src={StarSVG} alt="star" />
    </div>
  );
};

export default Star;
