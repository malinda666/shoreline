"use client";

import { useUI } from "@/context/ui-context";
import React, { useEffect } from "react";
import clsx from "clsx";
import s from "./preloader.module.scss";

const Preloader = () => {
  const { playIntroTimeline } = useUI();

  useEffect(() => {
    playIntroTimeline();
  }, []);

  return (
    <div className={clsx(s.container)} data-anim="preloader">
      Loading....
    </div>
  );
};

export default Preloader;
