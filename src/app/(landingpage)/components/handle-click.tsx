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

  if (link.id === "pedidos") {
    return (
      <button
        disabled={true}
        className={`flex w-full items-center justify-center rounded-2xl p-4 text-white ${link.color}`}
      >
        {IconComponent && <IconComponent className="mr-2" />}
        {link.title}
      </button>
    );
  } else {
    return (
      <Link
        key={link.id}
        href={link.url}
        target="_blank"
        className={`flex items-center justify-center rounded-2xl p-4 text-white ${link.color}`}
        onClick={() => handlerClick(link.id)}
      >
        {IconComponent && <IconComponent className="mr-2" />}

        {link.title}
      </Link>
    );
  }
}
