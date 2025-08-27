import Image from "next/image";

import { links } from "@/constants/links";
import { HandleClick } from "@/app/(landingpage)/components/handle-click";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container flex flex-col items-center justify-center">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full">
            <Image src="/logo.png" alt="Logo" width={80} height={80} />
          </div>
          <h1 className="mb-1 text-2xl font-bold text-gray-300">
            Comitiva 💯 Limites
          </h1>
          <p className="text-gray-500">
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
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} - Todos os direitos reservados
          </p>
        </div>
      </div>
    </div>
  );
}
