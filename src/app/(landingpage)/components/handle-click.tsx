"use client";

import Link from "next/link";

import { LinkData } from "@/constants/links";
import { useAccessId } from "@/app/provider/access-provider";

import {
  MessageCircle,
  Instagram,
  Facebook,
  ShoppingBag,
  Disc3,
} from "lucide-react";

const iconMap = {
  MessageCircle,
  Instagram,
  Facebook,
  ShoppingBag,
  Disc3,
};

export function HandleClick({ link }: { link: LinkData }) {
  const accessId = useAccessId();
  const IconComponent = iconMap[link.icon as keyof typeof iconMap];

  async function handlerClick(id: string) {
    try {
      await fetch("/api/click", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ accessId, linkId: id }),
      });
    } catch (err) {
      console.log("Erro ao registrar clique:", err);
    }
  }

  return (
    <Link
      type="button"
      href={link.url}
      target={link.id === "pedidos" ? "_self" : "_blank"}
      onClick={() => handlerClick(link.id)}
      className={`flex w-full transform items-center justify-center rounded-2xl border border-white/20 p-4 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:scale-105 ${link.color}`}
    >
      {IconComponent && <IconComponent className="mr-2" />}

      {link.title}
    </Link>
  );
}
