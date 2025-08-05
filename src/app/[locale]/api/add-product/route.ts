import prisma from "../../../../../lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs"; // 👈 Important: Prevents running in Edge, which doesn't support Prisma

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { category, name, price, imageurl } = body;

    const product = await prisma.product.create({
      data: { category, name, price, imageurl },
    });

    return NextResponse.json(product, { status: 201 });
  } catch (error: any) {
    console.error("[API ERROR]", error);
    return NextResponse.json(
      { error: error.message || "Failed to add product" },
      { status: 500 }
    );
  }
}
