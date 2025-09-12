"use server";

import { prisma } from "@/service/db/prisma";

export async function getAnalytics() {
  const cliks = await prisma.cliks.count();
  const cliksNow = await prisma.cliks.count({
    where: {
      createdAt: {
        gte: new Date(new Date().setDate(new Date().getDate() - 1)),
      },
    },
  });
  const visits = await prisma.access.count();

  return { cliks, cliksNow, visits };
}

export async function getLinks() {
  const links = await prisma.cliks.findMany();
  const clicksCount = links.reduce(
    (acc, click) => {
      if (!acc[click.linkId]) {
        acc[click.linkId] = 1;
      } else {
        acc[click.linkId]++;
      }
      return acc;
    },
    {} as { [linkId: string]: number },
  );

  const result = Object.entries(clicksCount).map(([nome, count]) => ({
    nome,
    count,
  }));
  return result;
}

export async function getRecentsLinks() {
  const links = await prisma.cliks.findMany({
    include: { access: true },
    orderBy: { createdAt: "desc" },
    take: 5,
  });
  return links;
}
