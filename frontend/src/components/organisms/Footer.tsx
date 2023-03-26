import CopyrightIcon from "@/components/atoms/CopyrightIcon";
import Logo from "@/components/atoms/Logo";
import FooterMenu from "@/components/molecules/FooterMenu";
import {
  bantuanItems,
  komunitasItems,
  layananItems,
  tentangItems,
} from "@/constants/menu";
import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full px-4 bg-grayed">
      <div className="custom-container">
        <div className="grid w-full grid-cols-1 gap-3 py-12 mx-auto md:grid-cols-2 xl:grid-cols-4">
          <FooterMenu title="Layanan" items={layananItems} />
          <FooterMenu title="Tentang" items={tentangItems} />
          <FooterMenu title="Bantuan" items={bantuanItems} />
          <FooterMenu title="Komunitas" items={komunitasItems} />
        </div>
        <div className="flex py-8 flex-col md:flex-row md:justify-between gap-3">
          <div className="flex flex-col md:flex-row gap-3">
            <Logo />
            <div className="flex items-center gap-3">
              <CopyrightIcon />
              <span className="text-gray-700">
                PT. Karya Miskin Sedih. {new Date().getFullYear()}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <a href="#">
              <FaFacebook className="icon" />
            </a>
            <a href="#">
              <FaLinkedin className="icon" />
            </a>
            <a href="#">
              <FaTwitter className="icon" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
