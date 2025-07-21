"use client";

import clsx from "clsx";
import s from "./link.module.scss";
import { getVWSize } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useUI } from "@/context/ui-context";
import NextLink from "next/link";
import { Arrow2 } from "../arrows";

type Props = {
  href: string;
  text: string;
  className?: string;
  size?: 1 | 2 | 3 | 4;
  metadata?: string | number;
  isActive?: boolean;
  variant?: "default" | "alt";
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
  const router = useRouter();
  const { closeMenu } = useUI();

  const navigate = () => {
    console.log("transition start");

    setTimeout(() => {
      closeMenu();
      router.push(href);
      console.log("transition end");
    }, 500);
  };

  return (
    <div
      className={clsx(
        s.link,
        className,
        isActive ? `${s.link}-active` : `${s.link}-base`
      )}
      data-state={isActive ? "active" : "base"}
      style={{
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ["--size" as any]: getVWSize(size),
      }}
    >
      <Arrow2 className={clsx(s.link_arrow, s.link_arrow_default)} />
      <NextLink
        href={href}
        onClick={(e) => {
          e.preventDefault();
          navigate();
        }}
        className={clsx(s.link_content)}
      >
        <span>{text}</span>
        {metadata && <sup>({metadata})</sup>}
      </NextLink>
      {variant === "alt" && (
        <Arrow2 className={clsx(s.link_arrow, s.link_arrow_alt)} />
      )}
    </div>
  );
};

export default Link;
