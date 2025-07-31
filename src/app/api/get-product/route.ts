import prisma from "../../../../lib/prisma";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function GET() {
  try {
    const products = await prisma.product.findMany({});
    return NextResponse.json(products, { status: 200 });
  } catch (error: any) {
    console.error("Failed to fetch products:", error);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}
