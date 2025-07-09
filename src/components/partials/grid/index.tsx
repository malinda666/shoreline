"use client";

import React, { ReactNode } from "react";
import s from "./grid.module.scss";
import clsx from "clsx";

type GridProps = {
  children: ReactNode;
  className?: string;
  columns?: number;
};

const Grid = ({ children, className, columns = 4 }: GridProps) => {
  return (
    <div
      className={clsx(s.grid, className)}
      style={{
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ["--cols" as any]: columns.toString(),
      }}
    >
      {children}
    </div>
  );
};

type GridRowProps = {
  children: ReactNode;
};

function Row({ children }: GridRowProps) {
  return <div className={s.grid_row}>{children}</div>;
}

type GridItemProps = {
  children?: ReactNode;
  isEmpty?: boolean;
};

function Item({ children, isEmpty }: GridItemProps) {
  return (
    <div className={clsx(s.grid_item, isEmpty && s.grid_item_empty)}>
      {children}
    </div>
  );
}

// Attach subcomponents
Grid.Row = Row;
Grid.Item = Item;

export default Grid as typeof Grid & {
  Row: typeof Row;
  Item: typeof Item;
};
