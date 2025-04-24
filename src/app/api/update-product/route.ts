import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../lib/prisma";

export async function PUT(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "PUT") {
    const { id, ...data } = req.body;

    try {
      const updatedProduct = await prisma.product.update({
        where: { id: Number(id) },
        data,
      });
      res.status(200).json(updatedProduct);
    } catch (err) {
      res.status(500).json({ error: "Failed to update product" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
