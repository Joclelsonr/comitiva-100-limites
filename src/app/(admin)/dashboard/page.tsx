import Link from "next/link";

import {
  Users,
  RefreshCw,
  BarChart3,
  MousePointer,
  ExternalLink,
} from "lucide-react";
import { Card } from "./components/card";

import { getAnalytics, getLinks, getRecentsLinks } from "@/lib/actions";

export default async function Page() {
  const { cliks, cliksNow, visits } = await getAnalytics();
  const links = await getLinks();
  const recentsLinks = await getRecentsLinks();

  // if (loading) {
  //   return (
  //     <div className="flex min-h-screen items-center justify-center bg-gray-50">
  //       <div className="text-center">
  //         <RefreshCw className="mx-auto mb-4 h-8 w-8 animate-spin text-gray-500" />
  //         <p className="text-gray-600 dark:text-gray-300">
  //           Carregando analytics...
  //         </p>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div className="container mx-auto min-h-screen p-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Analytics Dashboard
            </h1>
            <p className="text-gray-600">
              Acompanhe o desempenho dos seus links
            </p>
          </div>
          <div className="flex gap-2">
            <button className="flex items-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100">
              <RefreshCw className="mr-2 h-4 w-4" />
              Atualizar
            </button>
            <Link
              href="/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Ver Página
            </Link>
          </div>
        </div>

        {/* Cards de Estatísticas */}
        <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          <Card
            title="Total de Cliques"
            icon={<MousePointer className="text-muted-foreground h-4 w-4" />}
            cliks={cliks}
            description="Todos os cliques registrados"
          />

          <Card
            title="Cliques Hoje"
            icon={<BarChart3 className="text-muted-foreground h-4 w-4" />}
            cliks={cliksNow}
            description="Cliques nas últimas 24h"
          />

          <Card
            title="Visitantes"
            icon={<Users className="text-muted-foreground h-4 w-4" />}
            cliks={visits}
            description="IPs únicos registrados"
          />
        </div>

        <div className="grid grid-cols-1 gap-6">
          {/* Estatísticas por Link */}
          <div className="rounded-lg border border-gray-200 p-4 shadow-sm">
            <div className="mb-2">
              <h1 className="text-lg font-medium">Cliques por Link</h1>
            </div>
            {links.map((link, index) => (
              <div key={index} className="mb-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{link.nome}</span>
                  <div className="flex items-center gap-2">
                    <div className="rounded bg-blue-100 px-2 py-1 text-sm">
                      {link.count} cliques
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Cliques Recentes */}
          <div className="rounded-lg border border-gray-200 p-4 shadow-sm">
            <div className="mb-2">
              <h1 className="text-lg font-medium">Atividade Recente</h1>
            </div>
            <div>
              {recentsLinks.map((link, index) => (
                <div key={index} className="mb-2">
                  <div className="flex items-center justify-between text-sm">
                    <div>
                      <span className="font-medium">{link.linkId}</span>
                      <div className="text-xs text-gray-500">
                        {new Date(link.createdAt).toLocaleString("pt-BR")}
                      </div>
                    </div>
                    <div className="text-xs text-gray-400">
                      {link.access?.ipAddress}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
