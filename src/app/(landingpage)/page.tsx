import Image from "next/image";

import { AccessProvider } from "../provider/access-provider";

import { links } from "@/constants/links";
import { HandleClick } from "@/app/(landingpage)/components/handle-click";

export default function Home() {
  return (
    <AccessProvider>
      <div className="container mx-auto flex min-h-screen flex-col items-center justify-center">
        {/* Header */}
        <div className="mb-6 p-4 text-center">
          <div className="mx-auto mb-2 flex h-24 w-24 items-center justify-center rounded-full">
            <Image src="/logo.png" alt="Logo" width={80} height={80} priority />
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
        <div className="mt-6 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} - Todos os direitos reservados
          </p>
        </div>
      </div>
    </AccessProvider>
  );
}
