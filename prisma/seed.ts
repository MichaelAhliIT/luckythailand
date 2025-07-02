import { PrismaClient } from "@/app/generated/prisma";

const prisma = new PrismaClient();

const products = [
  {
    category: "cotton",
    name: "สำลีก้านจิ๋วบริสุทธิ์ ลัคกี้แคร์ 200 ก้าน",
    price: 2.49,
    imageurl: "/cotton/cotton1.png",
  },
  {
    category: "cotton",
    name: "สำลีก้อนบริสุทธิ์ ลัคกี้แคร์ 100 ชิ้น",
    price: 2.99,
    imageurl: "/cotton/cotton2.png",
  },
  {
    category: "cotton",
    name: "สำลีแผ่นบริสุทธิ์ ลัคกี้แคร์ 80 แผ่น",
    price: 3.49,
    imageurl: "/cotton/cotton3.png",
  },
  {
    category: "cotton",
    name: "สำลีก้านบริสุทธิ์ ลัคกี้แคร์ 400 ก้าน",
    price: 3.99,
    imageurl: "/cotton/cotton4.png",
  },
  {
    category: "cotton",
    name: "สำลีก้านบริสุทธิ์ ลัคกี้แคร์ 250 ก้าน",
    price: 4.49,
    imageurl: "/cotton/cotton5.png",
  },
  {
    category: "cotton",
    name: "สำลีก้านบริสุทธิ์ ลัคกี้แคร์ 100 ก้าน",
    price: 4.99,
    imageurl: "/cotton/cotton6.png",
  },
  {
    category: "detergent",
    name: "ผลิตภัณฑ์ซักผ้า ลัคกี้คลีน ลักซ์ชูเรียส มิสต์ กลิ่นพิงค์มิราจ 1200 ml",
    price: 2.49,
    imageurl: "/detergent/det1.png",
  },
  {
    category: "detergent",
    name: "ผลิตภัณฑ์ซักผ้า ลัคกี้คลีน ลักซ์ชูเรียส มิสต์ กลิ่นโอเชียนเพิร์ล 1200 ml",
    price: 2.99,
    imageurl: "/detergent/det2.png",
  },
  {
    category: "detergent",
    name: "ผลิตภัณฑ์ซักผ้า ลัคกี้คลีน ลักซ์ชูเรียส มิสต์ กลิ่นมิสทิคไวโอเลต 1200 ml",
    price: 3.49,
    imageurl: "/detergent/det3.png",
  },
  {
    category: "detergent",
    name: "ผลิตภัณฑ์ซักผ้า ลัคกี้คลีน ลักซ์ชูเรียส มิสต์ กลิ่นพิงค์มิราจ 800 ml",
    price: 3.99,
    imageurl: "/detergent/det4.png",
  },
  {
    category: "detergent",
    name: "ผลิตภัณฑ์ซักผ้า ลัคกี้คลีน ลักซ์ชูเรียส มิสต์ กลิ่นมิสทิคไวโอเลต 800 ml",
    price: 4.49,
    imageurl: "/detergent/det5.png",
  },
  {
    category: "detergent",
    name: "ผลิตภัณฑ์ซักผ้า ลัคกี้ คลีน เดย์ลี่ แคร์ กลิ่นมอร์นิ่ง คิส 3500 ml",
    price: 4.99,
    imageurl: "/detergent/det6.png",
  },
  {
    category: "detergent",
    name: "ผลิตภัณฑ์ซักผ้า ลัคกี้ คลีน เดย์ลี่ แคร์ กลิ่นบลอสซั่ม คิส 3500 ml",
    price: 5.49,
    imageurl: "/detergent/det7.png",
  },
  {
    category: "detergent",
    name: "ผลิตภัณฑ์ซักผ้า ลัคกี้ คลีน เดย์ลี่ แคร์ กลิ่นมอร์นิ่ง คิส 800 ml",
    price: 5.99,
    imageurl: "/detergent/det8.png",
  },
  {
    category: "detergent",
    name: "ผลิตภัณฑ์ซักผ้า ลัคกี้ คลีน เดย์ลี่ แคร์ กลิ่นบลอสซั่ม คิส 800 ml",
    price: 6.49,
    imageurl: "/detergent/det9.png",
  },
  {
    category: "detergent",
    name: "ผลิตภัณฑ์ซักผ้า ลัคกี้ คลีน เดย์ลี่ แคร์ กลิ่นโรแมนติค ไวโอเลต 600 ml",
    price: 6.99,
    imageurl: "/detergent/det10.png",
  },
  {
    category: "detergent",
    name: "ผลิตภัณฑ์ซักผ้า ลัคกี้ คลีน เดย์ลี่ แคร์ กลิ่นฟอรัล คิส 600 ml",
    price: 7.49,
    imageurl: "/detergent/det11.png",
  },
  {
    category: "detergent",
    name: "ผลิตภัณฑ์ซักผ้า ลัคกี้ คลีน เดย์ลี่ แคร์ กลิ่นอิมเพรสชั่น 600 ml",
    price: 7.99,
    imageurl: "/detergent/det12.png",
  },
  {
    category: "detergent",
    name: "ผลิตภัณฑ์ซักผ้า ลัคกี้ คลีน เดย์ลี่ แคร์ กลิ่นบลอสซั่ม คิส 600 ml",
    price: 8.49,
    imageurl: "/detergent/det13.png",
  },
  {
    category: "dishwashing",
    name: "ผลิตภัณฑ์ล้างจาน ลัคกี้คลีน เดย์ลี่ พาวเวอร์ แบรนด์ ดิช วอชชิ่ง ลิควิดกลิ่นส้มยูสุ 700 ml",
    price: 2.49,
    imageurl: "/dishwashing/dish1.png",
  },
  {
    category: "dishwashing",
    name: "ผลิตภัณฑ์ล้างจาน ลัคกี้คลีน เดย์ลี่ พาวเวอร์ แบรนด์ ดิช วอชชิ่ง ลิควิดกลิ่นมะนาว 700 ml",
    price: 2.99,
    imageurl: "/dishwashing/dish2.png",
  },
  {
    category: "dishwashing",
    name: "ผลิตภัณฑ์ล้างจาน ลัคกี้คลีน เดย์ลี่ พาวเวอร์ แบรนด์ ดิช วอชชิ่ง ลิควิดกลิ่นองุ่นเคียวโฮ 700 ml",
    price: 3.49,
    imageurl: "/dishwashing/dish3.png",
  },
  {
    category: "dishwashing",
    name: "ผลิตภัณฑ์ล้างจาน ลัคกี้คลีน กลิ่นแอปเปิ้ลเขียว 450 ml",
    price: 3.99,
    imageurl: "/dishwashing/dish4.png",
  },
  {
    category: "dishwashing",
    name: "ผลิตภัณฑ์ล้างจาน ลัคกี้คลีน กลิ่นมะนาว 450 ml.",
    price: 4.49,
    imageurl: "/dishwashing/dish5.png",
  },
  {
    category: "dishwashing",
    name: "ผลิตภัณฑ์ล้างจาน ลัคกี้คลีน กลิ่นองุ่นเคียวโฮ 450 ml.",
    price: 4.99,
    imageurl: "/dishwashing/dish6.png",
  },
  {
    category: "dishwashing",
    name: "ผลิตภัณฑ์ล้างจาน ลัคกี้คลีน กลิ่นส้มยูสุ 450 ml",
    price: 5.49,
    imageurl: "/dishwashing/dish7.png",
  },
  {
    category: "floor",
    name: "ผลิตภัณฑ์ทำความสะอาดพื้น ลัคกี้คลีน กลิ่นพฤกษา 800 ml",
    price: 2.49,
    imageurl: "/floor/floor1.png",
  },
  {
    category: "floor",
    name: "ผลิตภัณฑ์ทำความสะอาดพื้น ลัคกี้คลีน กลิ่นเพอร์เพิ้ลการ์เด้น 800 ml",
    price: 2.99,
    imageurl: "/floor/floor2.png",
  },
  {
    category: "floor",
    name: "ผลิตภัณฑ์ทำความสะอาดพื้น ลัคกี้คลีน กลิ่นตะไคร้ 800 ml",
    price: 3.49,
    imageurl: "/floor/floor3.png",
  },
  {
    category: "garbagebag",
    name: "ถุงขยะลัคกี้คลีน ชนิดม้วน 28 × 36 นิ้ว",
    price: 2.49,
    imageurl: "/garbagebag/garbage1.png",
  },
  {
    category: "garbagebag",
    name: "ถุงขยะลัคกี้คลีน ชนิดม้วน 26 × 34 นิ้ว",
    price: 2.99,
    imageurl: "/garbagebag/garbage2.png",
  },
  {
    category: "garbagebag",
    name: "ถุงขยะลัคกี้คลีน ชนิดม้วน 24 × 28 นิ้ว",
    price: 3.49,
    imageurl: "/garbagebag/garbage3.png",
  },
  {
    category: "garbagebag",
    name: "ถุงขยะลัคกี้คลีน ชนิดม้วน 20 × 25 นิ้ว",
    price: 3.99,
    imageurl: "/garbagebag/garbage4.png",
  },
  {
    category: "garbagebag",
    name: "ถุงขยะลัคกี้คลีน ชนิดม้วน 18 × 20 นิ้ว",
    price: 4.49,
    imageurl: "/garbagebag/garbage5.png",
  },
  {
    category: "garbagebag",
    name: "Sample Product 6 (garbagebag)",
    price: 4.99,
    imageurl: "/garbagebag/garbage6.png",
  },
  {
    category: "softener",
    name: "ผลิตภัณฑ์ปรับผ้านุ่ม ลัคกี้แคร์ เดย์ลี่แคร์ กลิ่นพิงค์เบบี้ 500 ml",
    price: 2.49,
    imageurl: "/softener/softener1.png",
  },
  {
    category: "softener",
    name: "ผลิตภัณฑ์ปรับผ้านุ่ม ลัคกี้แคร์ เดย์ลี่แคร์ กลิ่นเลิฟลี่บลูม 500 ml",
    price: 2.99,
    imageurl: "/softener/softener2.png",
  },
  {
    category: "softener",
    name: "ผลิตภัณฑ์ปรับผ้านุ่ม ลัคกี้แคร์ เดย์ลี่แคร์ กลิ่นบลูมมิ่ง ไวโอเลต 500 ml",
    price: 3.49,
    imageurl: "/softener/softener3.png",
  },
  {
    category: "tissue",
    name: "กระดาษเช็ดหน้า ลัคกี้แคร์ 180 แผ่นหนา2ชั้น ผลิตจากเยื่อกระดาษบริสุทธิ์ 100%",
    price: 2.49,
    imageurl: "/tissue/tissue1.png",
  },
  {
    category: "tissue",
    name: "กระดาษเช็ดหน้า ลัคกี้แคร์ 180 แผ่นหนา2ชั้น ผลิตจากเยื่อกระดาษบริสุทธิ์ 100%",
    price: 2.99,
    imageurl: "/tissue/tissue2.png",
  },
  {
    category: "tissue",
    name: "ทิชชูเปียก ลัคกี้แคร์ 50 แผ่น กลิ่นแป้งเด็ก",
    price: 3.49,
    imageurl: "/tissue/tissue3.png",
  },
  {
    category: "tissue",
    name: "ทิชชูเปียก ลัคกี้แคร์ 50 แผ่น กลิ่นแป้งเด็ก",
    price: 3.99,
    imageurl: "/tissue/tissue4.png",
  },
  {
    category: "tissue",
    name: "ทิชชูเปียก ลัคกี้แคร์ 45 แผ่น กลิ่นแป้งเด็ก",
    price: 4.49,
    imageurl: "/tissue/tissue5.png",
  },
  {
    category: "tissue",
    name: "ทิชชูเปียก ลัคกี้แคร์ 45 แผ่น กลิ่นแป้งเด็ก",
    price: 4.99,
    imageurl: "/tissue/tissue6.png",
  },
  {
    category: "tissue",
    name: "ทิชชูเปียก ลัคกี้แคร์ 65 แผ่น",
    price: 5.49,
    imageurl: "/tissue/tissue7.png",
  },
  {
    category: "tissue",
    name: "กระดาษชำระ ลัคกี้แคร์ ชนิดม้วน 6ม้วนต่อแพ็ค",
    price: 5.99,
    imageurl: "/tissue/tissue8.png",
  },
  {
    category: "tissue",
    name: "กระดาษชำระ ลัคกี้แคร์ ชนิดม้วน 6ม้วนต่อแพ็ค",
    price: 6.49,
    imageurl: "/tissue/tissue9.png",
  },
  {
    category: "tissue",
    name: "กระดาษเช็ดหน้า ลัคกี้แคร์ 170 แผ่นหนา2ชั้น ผลิตจากเยื่อกระดาษบริสุทธิ์ 100%",
    price: 6.99,
    imageurl: "/tissue/tissue10.png",
  },
  {
    category: "tissue",
    name: "กระดาษเช็ดหน้า ลัคกี้แคร์ 170 แผ่นหนา2ชั้น ผลิตจากเยื่อกระดาษบริสุทธิ์ 100%",
    price: 7.49,
    imageurl: "/tissue/tissue11.png",
  },
  {
    category: "tissue",
    name: "กระดาษเช็ดหน้า ลัคกี้แคร์ 250 แผ่นหนา2ชั้น ผลิตจากเยื่อกระดาษบริสุทธิ์ 100%",
    price: 7.99,
    imageurl: "/tissue/tissue12.png",
  },
  {
    category: "tissue",
    name: "กระดาษเช็ดหน้า ลัคกี้แคร์ 250 แผ่นหนา2ชั้น ผลิตจากเยื่อกระดาษบริสุทธิ์ 100%",
    price: 8.49,
    imageurl: "/tissue/tissue13.png",
  },
  {
    category: "tissue",
    name: "กระดาษเช็ดหน้า ลัคกี้แคร์ ชนิดกล่อง 120 แผ่นหนา2ชั้น ผลิตจากเยื่อกระดาษบริสุทธิ์ 100%",
    price: 8.99,
    imageurl: "/tissue/tissue14.png",
  },
  {
    category: "tissue",
    name: "กระดาษเช็ดหน้า ลัคกี้แคร์ ชนิดกล่อง 120 แผ่นหนา2ชั้น ผลิตจากเยื่อกระดาษบริสุทธิ์ 100%",
    price: 9.49,
    imageurl: "/tissue/tissue15.png",
  },
  {
    category: "tissue",
    name: "กระดาษทิชชู ลัคกี้แคร์ แบบแขวน 1000 แผ่น หนา4ชั้น ผลิตจากเยื่อกระดาษบริสุทธิ์ 100%",
    price: 9.99,
    imageurl: "/tissue/tissue16.png",
  },
  {
    category: "tissue",
    name: "กระดาษทิชชู ลัคกี้แคร์ แบบแขวน 1000 แผ่น หนา4ชั้น ผลิตจากเยื่อกระดาษบริสุทธิ์ 100%",
    price: 10.49,
    imageurl: "/tissue/tissue17.png",
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
