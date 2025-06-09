import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";
export const runtime = "nodejs"; // or 'edge' if not using Prisma directly

export async function DELETE() {
  try {
    // Delete all records in the correct order to avoid foreign key constraint errors
    await prisma.product.deleteMany();

    return NextResponse.json(
      { message: "All data deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting data:", error);
    return NextResponse.json(
      { error: "Failed to delete data" },
      { status: 500 }
    );
  }
}
