import React from "react";
import { MenuType } from "@/types/menu";

type FooterMenuProps = {
  title: string;
  items: MenuType[];
};

export default function FooterMenu({ title, items }: FooterMenuProps) {
  return (
    <div className="flex flex-col gap-3">
      <h6 className="text-sm font-semibold uppercase">{title}</h6>
      <ul>
        {items.map((item, index) => (
          <li key={index} className="my-1">
            <a className="text-sm text-gray-700" href={item.href}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
