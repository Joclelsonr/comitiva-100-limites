"use client";

import { createContext, useContext, useEffect, useState } from "react";

const AccessContext = createContext<string | null>(null);

export function AccessProvider({ children }: { children: React.ReactNode }) {
  const [accessId, setAccessId] = useState<string | null>(null);

  useEffect(() => {
    const getLocation = async () => {
      if ("geolocation" in navigator) {
        try {
          const position = await new Promise<GeolocationPosition>(
            (resolve, reject) => {
              navigator.geolocation.getCurrentPosition(resolve, reject);
            },
          );

          await createAccess({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        } catch {
          await createAccess();
        }
      } else {
        await createAccess();
      }
    };

    async function createAccess(location?: { lat: number; lng: number }) {
      const res = await fetch("/api/position", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ location }),
      });
      const data = await res.json();
      if (res.ok) setAccessId(data.id);
    }

    getLocation();
  }, []);

  return (
    <AccessContext.Provider value={accessId}>{children}</AccessContext.Provider>
  );
}

export function useAccessId() {
  return useContext(AccessContext);
}
