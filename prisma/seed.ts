import { PrismaClient } from "@/app/generated/prisma";

const prisma = new PrismaClient();

const products = [
  {
    category: "wetwipes",
    name: "Fresh Scent Wet Wipes",
    price: 3.99,
    imageurl: "/tissue.jpg",
  },
  {
    category: "wetwipes",
    name: "Aloe Vera Wet Wipes",
    price: 4.49,
    imageurl: "/tissue.jpg",
  },
  {
    category: "wetwipes",
    name: "Baby Care Wet Wipes",
    price: 5.29,
    imageurl: "/tissue.jpg",
  },
  {
    category: "wetwipes",
    name: "Antibacterial Wet Wipes",
    price: 4.99,
    imageurl: "/tissue.jpg",
  },
  {
    category: "wetwipes",
    name: "Travel Pack Wet Wipes",
    price: 2.99,
    imageurl: "/tissue.jpg",
  },
  {
    category: "wetwipes",
    name: "Sensitive Skin Wet Wipes",
    price: 4.79,
    imageurl: "/tissue.jpg",
  },
  {
    category: "wetwipes",
    name: "Eco-Friendly Wet Wipes",
    price: 5.49,
    imageurl: "/tissue.jpg",
  },
  {
    category: "wetwipes",
    name: "Flushable Wet Wipes",
    price: 3.99,
    imageurl: "/tissue.jpg",
  },
  {
    category: "tissue",
    name: "Ultra Soft Facial Tissues",
    price: 2.49,
    imageurl: "/tissue.jpg",
  },
  {
    category: "tissue",
    name: "2-Ply Toilet Paper",
    price: 6.99,
    imageurl: "/tissue.jpg",
  },
  {
    category: "tissue",
    name: "Travel Size Tissue Pack",
    price: 1.29,
    imageurl: "/tissue.jpg",
  },
  {
    category: "tissue",
    name: "Eco-Friendly Bamboo Tissues",
    price: 3.99,
    imageurl: "/tissue.jpg",
  },
  {
    category: "tissue",
    name: "Lotion Infused Tissues",
    price: 2.99,
    imageurl: "/tissue.jpg",
  },
  {
    category: "tissue",
    name: "Colored Facial Tissues",
    price: 2.79,
    imageurl: "/tissue.jpg",
  },
  {
    category: "tissue",
    name: "Recycled Paper Tissues",
    price: 2.49,
    imageurl: "/tissue.jpg",
  },
  {
    category: "tissue",
    name: "Hypoallergenic Tissues",
    price: 3.29,
    imageurl: "/tissue.jpg",
  },
  {
    category: "detergent",
    name: "Liquid Laundry Detergent",
    price: 12.99,
    imageurl: "/tissue.jpg",
  },
  {
    category: "detergent",
    name: "Powdered Laundry Detergent",
    price: 10.49,
    imageurl: "/tissue.jpg",
  },
  {
    category: "detergent",
    name: "Detergent Pods",
    price: 15.99,
    imageurl: "/tissue.jpg",
  },
  {
    category: "detergent",
    name: "Eco-Friendly Detergent",
    price: 13.49,
    imageurl: "/tissue.jpg",
  },
  {
    category: "detergent",
    name: "Sensitive Skin Detergent",
    price: 14.29,
    imageurl: "/tissue.jpg",
  },
  {
    category: "detergent",
    name: "High Efficiency Detergent",
    price: 11.99,
    imageurl: "/tissue.jpg",
  },
  {
    category: "detergent",
    name: "Detergent with Fabric Softener",
    price: 13.99,
    imageurl: "/tissue.jpg",
  },
  {
    category: "detergent",
    name: "Stain Fighter Detergent",
    price: 12.49,
    imageurl: "/tissue.jpg",
  },
  {
    category: "homesupplies",
    name: "Microfiber Cleaning Cloth",
    price: 2.99,
    imageurl: "/tissue.jpg",
  },
  {
    category: "homesupplies",
    name: "Multi-Purpose Spray Cleaner",
    price: 5.49,
    imageurl: "/tissue.jpg",
  },
  {
    category: "homesupplies",
    name: "Dishwashing Liquid",
    price: 3.79,
    imageurl: "/tissue.jpg",
  },
  {
    category: "homesupplies",
    name: "Glass Cleaner",
    price: 4.29,
    imageurl: "/tissue.jpg",
  },
  {
    category: "homesupplies",
    name: "Bathroom Cleaner",
    price: 6.99,
    imageurl: "/tissue.jpg",
  },
  {
    category: "homesupplies",
    name: "Mop and Bucket Set",
    price: 15.99,
    imageurl: "/tissue.jpg",
  },
  {
    category: "homesupplies",
    name: "Rubber Gloves",
    price: 2.49,
    imageurl: "/tissue.jpg",
  },
  {
    category: "homesupplies",
    name: "Scented Trash Bags",
    price: 4.89,
    imageurl: "/tissue.jpg",
  },
];

async function main() {
  console.log("Seeding database...");
  for (const product of products) {
    await prisma.product.create({ data: product });
  }
  console.log("Seeding complete.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
