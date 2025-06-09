import { PrismaClient } from "@/app/generated/prisma";

const prisma = new PrismaClient();

const products = [
  {
    category: "cotton",
    name: "Cotton 200",
    price: 2.49,
    imageurl: "/cotton/cotton1.jpg",
  },
  {
    category: "cotton",
    name: "Sample Product 2 (cotton)",
    price: 2.99,
    imageurl: "/cotton/cotton2.jpg",
  },
  {
    category: "cotton",
    name: "Sample Product 3 (cotton)",
    price: 3.49,
    imageurl: "/cotton/cotton3.jpg",
  },
  {
    category: "cotton",
    name: "Sample Product 4 (cotton)",
    price: 3.99,
    imageurl: "/cotton/cotton4.jpg",
  },
  {
    category: "cotton",
    name: "Sample Product 5 (cotton)",
    price: 4.49,
    imageurl: "/cotton/cotton5.jpg",
  },
  {
    category: "cotton",
    name: "Sample Product 6 (cotton)",
    price: 4.99,
    imageurl: "/cotton/cotton6.jpg",
  },
  {
    category: "detergent",
    name: "Sample Product 1 (detergent)",
    price: 2.49,
    imageurl: "/detergent/det1.jpg",
  },
  {
    category: "detergent",
    name: "Sample Product 2 (detergent)",
    price: 2.99,
    imageurl: "/detergent/det2.jpg",
  },
  {
    category: "detergent",
    name: "Sample Product 3 (detergent)",
    price: 3.49,
    imageurl: "/detergent/det3.jpg",
  },
  {
    category: "detergent",
    name: "Sample Product 4 (detergent)",
    price: 3.99,
    imageurl: "/detergent/det4.jpg",
  },
  {
    category: "detergent",
    name: "Sample Product 5 (detergent)",
    price: 4.49,
    imageurl: "/detergent/det5.jpg",
  },
  {
    category: "detergent",
    name: "Sample Product 6 (detergent)",
    price: 4.99,
    imageurl: "/detergent/det6.jpg",
  },
  {
    category: "detergent",
    name: "Sample Product 7 (detergent)",
    price: 5.49,
    imageurl: "/detergent/det7.jpg",
  },
  {
    category: "detergent",
    name: "Sample Product 8 (detergent)",
    price: 5.99,
    imageurl: "/detergent/det8.jpg",
  },
  {
    category: "detergent",
    name: "Sample Product 9 (detergent)",
    price: 6.49,
    imageurl: "/detergent/det9.jpg",
  },
  {
    category: "detergent",
    name: "Sample Product 10 (detergent)",
    price: 6.99,
    imageurl: "/detergent/det10.jpg",
  },
  {
    category: "detergent",
    name: "Sample Product 11 (detergent)",
    price: 7.49,
    imageurl: "/detergent/det11.jpg",
  },
  {
    category: "detergent",
    name: "Sample Product 12 (detergent)",
    price: 7.99,
    imageurl: "/detergent/det12.jpg",
  },
  {
    category: "detergent",
    name: "Sample Product 13 (detergent)",
    price: 8.49,
    imageurl: "/detergent/det13.jpg",
  },
  {
    category: "dishwashing",
    name: "Sample Product 1 (dishwashing)",
    price: 2.49,
    imageurl: "/dishwashing/dish1.jpg",
  },
  {
    category: "dishwashing",
    name: "Sample Product 2 (dishwashing)",
    price: 2.99,
    imageurl: "/dishwashing/dish2.jpg",
  },
  {
    category: "dishwashing",
    name: "Sample Product 3 (dishwashing)",
    price: 3.49,
    imageurl: "/dishwashing/dish3.jpg",
  },
  {
    category: "dishwashing",
    name: "Sample Product 4 (dishwashing)",
    price: 3.99,
    imageurl: "/dishwashing/dish4.jpg",
  },
  {
    category: "dishwashing",
    name: "Sample Product 5 (dishwashing)",
    price: 4.49,
    imageurl: "/dishwashing/dish5.jpg",
  },
  {
    category: "dishwashing",
    name: "Sample Product 6 (dishwashing)",
    price: 4.99,
    imageurl: "/dishwashing/dish6.jpg",
  },
  {
    category: "dishwashing",
    name: "Sample Product 7 (dishwashing)",
    price: 5.49,
    imageurl: "/dishwashing/dish7.jpg",
  },
  {
    category: "floor",
    name: "Sample Product 1 (floor)",
    price: 2.49,
    imageurl: "/floor/floor1.jpg",
  },
  {
    category: "floor",
    name: "Sample Product 2 (floor)",
    price: 2.99,
    imageurl: "/floor/floor2.jpg",
  },
  {
    category: "floor",
    name: "Sample Product 3 (floor)",
    price: 3.49,
    imageurl: "/floor/floor3.jpg",
  },
  {
    category: "garbagebag",
    name: "Sample Product 1 (garbagebag)",
    price: 2.49,
    imageurl: "/garbagebag/garbage1.jpg",
  },
  {
    category: "garbagebag",
    name: "Sample Product 2 (garbagebag)",
    price: 2.99,
    imageurl: "/garbagebag/garbage2.jpg",
  },
  {
    category: "garbagebag",
    name: "Sample Product 3 (garbagebag)",
    price: 3.49,
    imageurl: "/garbagebag/garbage3.jpg",
  },
  {
    category: "garbagebag",
    name: "Sample Product 4 (garbagebag)",
    price: 3.99,
    imageurl: "/garbagebag/garbage4.jpg",
  },
  {
    category: "garbagebag",
    name: "Sample Product 5 (garbagebag)",
    price: 4.49,
    imageurl: "/garbagebag/garbage5.jpg",
  },
  {
    category: "garbagebag",
    name: "Sample Product 6 (garbagebag)",
    price: 4.99,
    imageurl: "/garbagebag/garbage6.jpg",
  },
  {
    category: "softener",
    name: "Sample Product 1 (softener)",
    price: 2.49,
    imageurl: "/softener/softener1.jpg",
  },
  {
    category: "softener",
    name: "Sample Product 2 (softener)",
    price: 2.99,
    imageurl: "/softener/softener2.jpg",
  },
  {
    category: "softener",
    name: "Sample Product 3 (softener)",
    price: 3.49,
    imageurl: "/softener/softener3.jpg",
  },
  {
    category: "tissue",
    name: "Sample Product 1 (tissue)",
    price: 2.49,
    imageurl: "/tissue/tissue1.jpg",
  },
  {
    category: "tissue",
    name: "Sample Product 2 (tissue)",
    price: 2.99,
    imageurl: "/tissue/tissue2.jpg",
  },
  {
    category: "tissue",
    name: "Sample Product 3 (tissue)",
    price: 3.49,
    imageurl: "/tissue/tissue3.jpg",
  },
  {
    category: "tissue",
    name: "Sample Product 4 (tissue)",
    price: 3.99,
    imageurl: "/tissue/tissue4.jpg",
  },
  {
    category: "tissue",
    name: "Sample Product 5 (tissue)",
    price: 4.49,
    imageurl: "/tissue/tissue5.jpg",
  },
  {
    category: "tissue",
    name: "Sample Product 6 (tissue)",
    price: 4.99,
    imageurl: "/tissue/tissue6.jpg",
  },
  {
    category: "tissue",
    name: "Sample Product 7 (tissue)",
    price: 5.49,
    imageurl: "/tissue/tissue7.png",
  },
  {
    category: "tissue",
    name: "Sample Product 8 (tissue)",
    price: 5.99,
    imageurl: "/tissue/tissue8.jpg",
  },
  {
    category: "tissue",
    name: "Sample Product 9 (tissue)",
    price: 6.49,
    imageurl: "/tissue/tissue9.jpg",
  },
  {
    category: "tissue",
    name: "Sample Product 10 (tissue)",
    price: 6.99,
    imageurl: "/tissue/tissue10.jpg",
  },
  {
    category: "tissue",
    name: "Sample Product 11 (tissue)",
    price: 7.49,
    imageurl: "/tissue/tissue11.jpg",
  },
  {
    category: "tissue",
    name: "Sample Product 12 (tissue)",
    price: 7.99,
    imageurl: "/tissue/tissue12.png",
  },
  {
    category: "tissue",
    name: "Sample Product 13 (tissue)",
    price: 8.49,
    imageurl: "/tissue/tissue13.png",
  },
  {
    category: "tissue",
    name: "Sample Product 14 (tissue)",
    price: 8.99,
    imageurl: "/tissue/tissue14.png",
  },
  {
    category: "tissue",
    name: "Sample Product 15 (tissue)",
    price: 9.49,
    imageurl: "/tissue/tissue15.png",
  },
  {
    category: "tissue",
    name: "Sample Product 16 (tissue)",
    price: 9.99,
    imageurl: "/tissue/tissue16.jpg",
  },
  {
    category: "tissue",
    name: "Sample Product 17 (tissue)",
    price: 10.49,
    imageurl: "/tissue/tissue17.jpg",
  },
];

async function main() {
  console.log("Deleting existing products...");
  await prisma.product.deleteMany(); // Optional: reset data before seeding

  console.log("Seeding database...");
  await Promise.all(
    products.map((product) => prisma.product.create({ data: product }))
  );

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
