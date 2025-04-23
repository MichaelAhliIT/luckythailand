import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "DELETE") {
    const { id } = req.body;

    try {
      const deletedProduct = await prisma.product.delete({
        where: { id: Number(id) },
      });
      res.status(200).json(deletedProduct);
    } catch (err) {
      res.status(500).json({ error: "Failed to delete product" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
