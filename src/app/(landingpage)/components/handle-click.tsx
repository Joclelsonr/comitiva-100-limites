"use client";

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
  const [accessId, setAccessId] = useState<string | null>(null);

  useEffect(() => {
    const getLocation = async () => {
      if ("geolocation" in navigator) {
        try {
          const position: GeolocationPosition = await new Promise(
            (resolve, reject) => {
              navigator.geolocation.getCurrentPosition(resolve, reject);
            },
          );
          await await createAccess({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        } catch (err) {
          console.log("Erro ao obter localização:", err);
          await createAccess();
        }
      } else {
        console.log("Geolocalização nao suportada neste navegador.");
      }
    };

    getLocation();
  }, []);

  async function createAccess(location?: { lat: number; lng: number }) {
    try {
      const response = await fetch("/api/position", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ location }),
      });
      const data = await response.json();
      if (response.ok) {
        setAccessId(data.id);
      } else {
        console.log("Erro ao registrar acesso:", data.error);
      }
    } catch (err) {
      console.log("Erro ao registrar acesso:", err);
    }
  }

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
