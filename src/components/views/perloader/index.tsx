"use client";

import { useUI } from "@/context/ui-context";
import React, { useEffect, useState } from "react";
import clsx from "clsx";
import s from "./preloader.module.scss";

const Preloader = () => {
  const { playIntroTimeline } = useUI();

  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowLoader(false);
      playIntroTimeline();
    }, 1000);
  }, []);

  return showLoader ? (
    <div className={clsx(s.container)}>Loading....</div>
  ) : null;
};

export default Preloader;
