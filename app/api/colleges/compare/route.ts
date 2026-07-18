import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(request: NextRequest) {
  const ids =
    request.nextUrl.searchParams.get("ids")?.split(",") || [];

  const colleges = await prisma.college.findMany({
    where: {
      id: {
        in: ids,
      },
    },
  });

  return NextResponse.json({
    colleges,
  });
}