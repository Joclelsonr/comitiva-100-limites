"use client";

import Link from "next/link";

import { useEffect, useState } from "react";
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
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(
    null,
  );
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (err) => {
          setError("Permissão negada ou erro ao obter localização.");
        },
      );
    } else {
      setError("Geolocalização não suportada neste navegador.");
    }
  }, []);

  async function handlerClick(id: string) {
    try {
      await fetch("/api/click", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ linkId: id, location }),
      });
    } catch (err) {
      console.error("Erro ao registrar clique:", err);
    }
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
