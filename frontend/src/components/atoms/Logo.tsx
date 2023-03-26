import React from "react";
import Link from "next/link";
import clsx from "@/lib/classmerger";

type LogoProps = {
  color?: "primary" | "white";
};

export default function Logo({ color = "primary" }: LogoProps) {
  const colors = {
    primary: "text-primary",
    white: "text-white",
  };
  return (
    <Link
      href="/"
      className={clsx("text-3xl font-medium text-primary", colors[color])}>
      hariminggu.<span className="text-sm">com</span>
    </Link>
  );
}
