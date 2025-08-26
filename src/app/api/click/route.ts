import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/service/db/prisma";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { linkId, location } = body;

  const forwarded = req.headers.get("x-forwarded-for");
  const ipAddress = forwarded ? forwarded.split(",")[0] : null;

  try {
    await prisma.cliks.create({
      data: {
        linkId,
        ipAddress: ipAddress,
        lat: String(location?.lat),
        lng: String(location?.lng),
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erro ao salvar clique:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
