"use client";

import Link from "next/link";

import { LinkData } from "@/constants/links";
import { MessageCircle, Instagram, Facebook, ShoppingBag } from "lucide-react";

const iconMap = {
  MessageCircle,
  Instagram,
  Facebook,
  ShoppingBag,
};

export function HandleClick({ link }: { link: LinkData }) {
  const IconComponent = iconMap[link.icon as keyof typeof iconMap];

  function handlerClick(title: string) {
    console.log("click", title);
  }

  return (
    <Link
      key={link.id}
      href={link.url}
      target="_blank"
      className={`flex items-center justify-center rounded-md p-4 text-white ${link.color}`}
      onClick={() => handlerClick(link.title)}
    >
      {IconComponent && <IconComponent className="mr-2" />}

      {link.title}
    </Link>
  );
}
