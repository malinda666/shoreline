"use client";

import clsx from "clsx";
import s from "./link.module.scss";
import { getVWSize } from "@/lib/utils";
import NextLink from "next/link";
import { Arrow3 } from "../arrows";
import { usePreloaderNavigation } from "@/hooks/usePreloaderNavigation";

type Props = {
  href: string;
  text: string;
  className?: string;
  size?: 1 | 2 | 3 | 4;
  metadata?: string | number;
  isActive?: boolean;
  variant?: "default" | "alt" | "stealth";
};

const Link = ({
  href,
  text,
  className,
  size = 1,
  metadata,
  isActive = false,
  variant = "default",
}: Props) => {
  const { navigate } = usePreloaderNavigation();

  return (
    <div
      className={clsx(
        s.link,
        className,
        isActive ? `${s.link}-active` : `${s.link}-base`,
        `${s.link}-variant--${variant}`
      )}
      data-state={isActive ? "active" : "base"}
      style={{
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ["--size" as any]: getVWSize(size),
      }}
    >
      {(variant === "default" || variant === "alt") && (
        <Arrow3 className={clsx(s.link_arrow, s.link_arrow_default)} />
      )}
      <NextLink
        href={href}
        onClick={(e) => {
          e.preventDefault();
          navigate(href);
        }}
        className={clsx(s.link_content)}
      >
        <span>{text}</span>
        {metadata && <sup>({metadata})</sup>}
      </NextLink>
      {variant === "alt" && (
        <Arrow3 className={clsx(s.link_arrow, s.link_arrow_alt)} />
      )}
    </div>
  );
};

export default Link;
