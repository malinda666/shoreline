"use client";

import React, { ReactNode } from "react";
import Header from "../header";

import s from "./main-layout.module.scss";

type Props = {
  children: ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return (
    <div className={s.container}>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
