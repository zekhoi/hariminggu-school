import Button from "@/components/atoms/Button";
import Logo from "@/components/atoms/Logo";
import clsx from "@/lib/classmerger";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaEquals, FaTimes } from "react-icons/fa";

type NavbarProps = {
  type?: "static" | "dynamic";
};

export default function Navbar({ type = "dynamic" }: NavbarProps) {
  const [toggleOpen, setToggleOpen] = useState(false);
  const [isTransparent, setIsTransparent] = useState(
    type === "dynamic" ? true : false
  );

  useEffect(() => {
    const changeBackground = () => {
      if (type === "static") return;
      const currentScrollPosition = window.scrollY;
      if (currentScrollPosition > 10) {
        setIsTransparent(false);
      } else {
        setIsTransparent(true);
      }
    };

    window.addEventListener("scroll", changeBackground);

    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <nav
      className={clsx(
        "fixed w-full px-4 py-3 transition-all duration-500 ease-in-out z-10",
        toggleOpen ? "bg-white" : "",
        (isTransparent && type) === "dynamic"
          ? "bg-transparent text-white"
          : "bg-white"
      )}
    >
      <div className="custom-container flex flex-col lg:flex-row gap-3">
        <div className="flex flex-row items-center justify-between">
          <Logo color={isTransparent && !toggleOpen ? "white" : "primary"} />
          <button
            className="lg:hidden"
            onClick={() => setToggleOpen(!toggleOpen)}
          >
            {!toggleOpen ? (
              <FaEquals className="icon" />
            ) : (
              <FaTimes className="icon" />
            )}
          </button>
        </div>
        <div
          className={clsx(
            "lg:flex flex-col w-full md:flex-row lg:ml-auto float-right justify-end items-center gap-6",
            toggleOpen ? "flex" : "hidden"
          )}
        >
          <div className="flex w-full lg:w-auto flex-col md:flex-row gap-6">
            <Link
              href="/program"
              className={clsx(
                "text-sm font-semibold",
                isTransparent && !toggleOpen ? "text-white" : "text-gray-700"
              )}
            >
              Program
            </Link>
            <Link
              href="/video-course"
              className={clsx(
                "text-sm font-semibold",
                isTransparent && !toggleOpen ? "text-white" : "text-gray-700"
              )}
            >
              Video Course
            </Link>
            <Link
              href="/corporate"
              className={clsx(
                "text-sm font-semibold",
                isTransparent && !toggleOpen ? "text-white" : "text-gray-700"
              )}
            >
              Corporate
            </Link>
          </div>
          <div className="flex flex-col w-full lg:w-auto md:flex-row gap-3">
            <Button variant="outline">Daftar</Button>
            <Button>Masuk</Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
