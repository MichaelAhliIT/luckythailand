import prisma from "../../../../lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest) {
  try {
    const body = await req.json();
    const { id } = body;

    const deletedProduct = await prisma.product.delete({
      where: { id: Number(id) },
    });

    return NextResponse.json(deletedProduct, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete product" },
      { status: 500 }
    );
  }
}
