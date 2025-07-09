import React from "react";

import s from "./star.module.scss";
import clsx from "clsx";

type Props = {
  className?: string;
};

const Star = ({ className }: Props) => {
  return (
    <div className={clsx(s.container, className)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="75"
        height="75"
        viewBox="0 0 75 75"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M75 36.9463C73.6789 37.3073 72.2884 37.5 70.8529 37.5H54.0874C45.4189 37.5 38.3917 44.5271 38.3917 53.1953V71.7446C38.3917 72.8606 38.2751 73.9496 38.0539 75C37.6927 73.6789 37.5 72.2884 37.5 70.8529V54.0874C37.5 45.4189 30.4729 38.3917 21.8046 38.3917H3.25546C2.13926 38.3917 1.05027 38.2751 0 38.0539C1.32108 37.6927 2.71164 37.5 4.14724 37.5H20.9128C29.5812 37.5 36.6083 30.4729 36.6083 21.8046V3.25544C36.6083 2.13925 36.7248 1.05027 36.9463 0C37.3073 1.32109 37.5 2.71165 37.5 4.14724V20.9128C37.5 29.5812 44.5271 36.6083 53.1956 36.6083H71.7446C72.8606 36.6083 73.9496 36.7248 75 36.9463Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
};

export default Star;
