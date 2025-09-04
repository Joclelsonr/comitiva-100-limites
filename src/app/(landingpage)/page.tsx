import Image from "next/image";

import { links } from "@/constants/links";
import { HandleClick } from "@/app/(landingpage)/components/handle-click";
import { AccessProvider } from "../provider/access-provider";

export default function Home() {
  return (
    <AccessProvider>
      <div className="flex min-h-screen items-center bg-[hsl(240_10%_3.9%)]">
        {/* Background Effects */}
        <div className="fixed inset-0 bg-[linear-gradient(135deg,hsl(142_76%_36%)_0%,hsl(295_85%_60%)_100%)] opacity-10"></div>
        <div className="fixed inset-0 bg-[radial-gradient(circle_at_20%_80%,hsl(120_69%_47%)_0%,transparent_50%)] opacity-20"></div>
        <div className="fixed inset-0 bg-[radial-gradient(circle_at_80%_20%,hsl(295_85%_60%)_0%,transparent_50%)] opacity-20"></div>

        <div className="container mx-auto flex flex-col items-center justify-center">
          {/* Header */}
          <div className="mb-8 text-center">
            <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full">
              <Image
                src="/logo.png"
                alt="Logo"
                width={80}
                height={80}
                priority
              />
            </div>
            <h1 className="mb-1 text-2xl font-bold text-white">
              Comitiva 💯 Limites
            </h1>
            <p className="text-gray-400">
              Conecte-se conosco através dos nossos canais
            </p>
          </div>

          {/* Links */}
          <div className="w-full max-w-md space-y-4 p-4">
            {links.map((link) => (
              <HandleClick key={link.id} link={link} />
            ))}
          </div>

          {/* Footer */}
          <div className="mt-8 text-center">
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} - Todos os direitos reservados
            </p>
          </div>
        </div>
      </div>
    </AccessProvider>
  );
}
