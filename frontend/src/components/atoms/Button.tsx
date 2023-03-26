import clsx from "@/lib/classmerger";
import React from "react";

type ButtonProps = {
  variant?: "outline" | "primary";
  color?: "gray" | "primary";
  active?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  variant = "primary",
  color = "primary",
  active = true,
  className = "px-6 py-2 rounded text-sm",
  children,
  ...rest
}: ButtonProps) {
  const variants = {
    outline: "border border-primary text-primary",
    primary: "",
  };

  const colors = {
    primary: "bg-primary text-white",
    gray: "bg-gray-400 text-gray-800",
  };

  return (
    <button
      className={clsx(
        className,
        variants[variant],
        variant !== "outline" ? colors[color] : "",
        variant == "primary" && (active ? "bg-primary" : "bg-gray-400")
      )}
      {...rest}>
      {children}
    </button>
  );
}
