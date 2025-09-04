import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/service/db/prisma";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { accessId, linkId } = body;

  try {
    await prisma.cliks.create({
      data: {
        accessId,
        linkId,
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erro ao salvar clique:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
