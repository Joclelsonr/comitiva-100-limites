"use client";

import { LinkData } from "@/constants/links";
import { useAccessId } from "@/app/provider/access-provider";

import { MessageCircle, Instagram, Facebook, ShoppingBag } from "lucide-react";

const iconMap = {
  MessageCircle,
  Instagram,
  Facebook,
  ShoppingBag,
};

export function HandleClick({ link }: { link: LinkData }) {
  const accessId = useAccessId();
  const IconComponent = iconMap[link.icon as keyof typeof iconMap];

  async function handlerClick(id: string, href?: string) {
    try {
      const res = await fetch("/api/click", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ accessId, linkId: id }),
      });
      if (res.ok) {
        window.open(href, "_blank", "noopener,noreferrer");
      }
    } catch (err) {
      console.log("Erro ao registrar clique:", err);
    }
  }

  return (
    <button
      type="button"
      key={link.id}
      disabled={link.id === "pedidos"}
      onClick={() => handlerClick(link.id, link.url)}
      className={`flex w-full transform items-center justify-center rounded-2xl border border-white/20 p-4 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:scale-105 ${link.color}`}
    >
      {IconComponent && <IconComponent className="mr-2" />}

      {link.title}
    </button>
  );
}
