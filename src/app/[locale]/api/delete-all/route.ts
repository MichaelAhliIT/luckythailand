import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";
import { withAuth } from "../../../../../lib/auth-middleware";

export const runtime = "nodejs";

async function deleteHandler(request: NextRequest) {
  try {
    // Access user info from middleware
    const user = (request as any).user;

    console.log(`Admin ${user.email} is deleting all products`);

    // Delete all records in the correct order to avoid foreign key constraint errors
    await prisma.product.deleteMany();

    return NextResponse.json(
      {
        message: "All data deleted successfully",
        deletedBy: user.email,
        timestamp: new Date().toISOString(),
      },
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

// Apply authentication middleware with admin requirement
export const DELETE = withAuth(deleteHandler, { requireAdmin: true });
