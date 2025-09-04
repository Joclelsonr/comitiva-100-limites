import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/service/db/prisma";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { location } = body;

  const forwarded = req.headers.get("x-forwarded-for");
  const ipAddress = forwarded ? forwarded.split(",")[0] : null;

  try {
    const createAccess = await prisma.access.create({
      data: {
        lat: location ? String(location?.lat) : "0",
        lng: location ? String(location?.lng) : "0",
        ipAddress: ipAddress,
      },
    });

    return NextResponse.json({ id: createAccess.id }, { status: 200 });
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Error creating access";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
