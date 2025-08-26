import { links } from "@/constants/links";
import { HandleClick } from "@/components/handle-click";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="container flex flex-col items-center justify-center">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-blue-500">
            <span className="text-2xl font-bold text-white">CL</span>
          </div>
          <h1 className="mb-2 text-2xl font-bold text-gray-300">
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
