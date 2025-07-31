import { PrismaClient } from "@/app/generated/prisma";

const prisma = new PrismaClient();

const products = [
  {
    category: "cotton",
    name: "สำลีก้านจิ๋วบริสุทธิ์ ลัคกี้แคร์ 200 ก้าน",
    price: 2.49,
    imageurl: "/cotton/cotton1.png",
    size: "200 ก้าน",
    quantity: 200,
    unit: "ก้าน"
  },
  {
    category: "cotton",
    name: "สำลีก้อนบริสุทธิ์ ลัคกี้แคร์ 100 ชิ้น",
    price: 2.99,
    imageurl: "/cotton/cotton2.png",
    size: "100 ชิ้น",
    quantity: 100,
    unit: "ชิ้น"
  },
  {
    category: "cotton",
    name: "สำลีแผ่นบริสุทธิ์ ลัคกี้แคร์ 80 แผ่น",
    price: 3.49,
    imageurl: "/cotton/cotton3.png",
    size: "80 แผ่น",
    quantity: 80,
    unit: "แผ่น"
  },
  {
    category: "cotton",
    name: "สำลีก้านบริสุทธิ์ ลัคกี้แคร์ 400 ก้าน",
    price: 3.99,
    imageurl: "/cotton/cotton4.png",
    size: "400 ก้าน",
    quantity: 400,
    unit: "ก้าน"
  },
  {
    category: "cotton",
    name: "สำลีก้านบริสุทธิ์ ลัคกี้แคร์ 250 ก้าน",
    price: 4.49,
    imageurl: "/cotton/cotton5.png",
    size: "250 ก้าน",
    quantity: 250,
    unit: "ก้าน"
  },
  {
    category: "cotton",
    name: "สำลีก้านบริสุทธิ์ ลัคกี้แคร์ 100 ก้าน",
    price: 4.99,
    imageurl: "/cotton/cotton6.png",
    size: "100 ก้าน",
    quantity: 100,
    unit: "ก้าน"
  },
  {
    category: "detergent",
    name: "ผลิตภัณฑ์ซักผ้า ลัคกี้คลีน ลักซ์ชูเรียส มิสต์ กลิ่นพิงค์มิราจ 1200 ml",
    price: 2.49,
    imageurl: "/detergent/det1.png",
    size: "1200ml",
    volume: 1200,
    unit: "ml"
  },
  {
    category: "detergent",
    name: "ผลิตภัณฑ์ซักผ้า ลัคกี้คลีน ลักซ์ชูเรียส มิสต์ กลิ่นโอเชียนเพิร์ล 1200 ml",
    price: 2.99,
    imageurl: "/detergent/det2.png",
    size: "1200ml",
    volume: 1200,
    unit: "ml"
  },
  {
    category: "detergent",
    name: "ผลิตภัณฑ์ซักผ้า ลัคกี้คลีน ลักซ์ชูเรียส มิสต์ กลิ่นมิสทิคไวโอเลต 1200 ml",
    price: 3.49,
    imageurl: "/detergent/det3.png",
    size: "1200ml",
    volume: 1200,
    unit: "ml"
  },
  {
    category: "detergent",
    name: "ผลิตภัณฑ์ซักผ้า ลัคกี้คลีน ลักซ์ชูเรียส มิสต์ กลิ่นพิงค์มิราจ 800 ml",
    price: 3.99,
    imageurl: "/detergent/det4.png",
    size: "800ml",
    volume: 800,
    unit: "ml"
  },
  {
    category: "detergent",
    name: "ผลิตภัณฑ์ซักผ้า ลัคกี้คลีน ลักซ์ชูเรียส มิสต์ กลิ่นมิสทิคไวโอเลต 800 ml",
    price: 4.49,
    imageurl: "/detergent/det5.png",
    size: "800ml",
    volume: 800,
    unit: "ml"
  },
  {
    category: "detergent",
    name: "ผลิตภัณฑ์ซักผ้า ลัคกี้ คลีน เดย์ลี่ แคร์ กลิ่นมอร์นิ่ง คิส 3500 ml",
    price: 4.99,
    imageurl: "/detergent/det6.png",
    size: "3500ml",
    volume: 3500,
    unit: "ml"
  },
  {
    category: "detergent",
    name: "ผลิตภัณฑ์ซักผ้า ลัคกี้ คลีน เดย์ลี่ แคร์ กลิ่นบลอสซั่ม คิส 3500 ml",
    price: 5.49,
    imageurl: "/detergent/det7.png",
    size: "3500ml",
    volume: 3500,
    unit: "ml"
  },
  {
    category: "detergent",
    name: "ผลิตภัณฑ์ซักผ้า ลัคกี้ คลีน เดย์ลี่ แคร์ กลิ่นมอร์นิ่ง คิส 800 ml",
    price: 5.99,
    imageurl: "/detergent/det8.png",
    size: "800ml",
    volume: 800,
    unit: "ml"
  },
  {
    category: "detergent",
    name: "ผลิตภัณฑ์ซักผ้า ลัคกี้ คลีน เดย์ลี่ แคร์ กลิ่นบลอสซั่ม คิส 800 ml",
    price: 6.49,
    imageurl: "/detergent/det9.png",
    size: "800ml",
    volume: 800,
    unit: "ml"
  },
  {
    category: "detergent",
    name: "ผลิตภัณฑ์ซักผ้า ลัคกี้ คลีน เดย์ลี่ แคร์ กลิ่นโรแมนติค ไวโอเลต 600 ml",
    price: 6.99,
    imageurl: "/detergent/det10.png",
    size: "600ml",
    volume: 600,
    unit: "ml"
  },
  {
    category: "detergent",
    name: "ผลิตภัณฑ์ซักผ้า ลัคกี้ คลีน เดย์ลี่ แคร์ กลิ่นฟอรัล คิส 600 ml",
    price: 7.49,
    imageurl: "/detergent/det11.png",
    size: "600ml",
    volume: 600,
    unit: "ml"
  },
  {
    category: "detergent",
    name: "ผลิตภัณฑ์ซักผ้า ลัคกี้ คลีน เดย์ลี่ แคร์ กลิ่นอิมเพรสชั่น 600 ml",
    price: 7.99,
    imageurl: "/detergent/det12.png",
    size: "600ml",
    volume: 600,
    unit: "ml"
  },
  {
    category: "detergent",
    name: "ผลิตภัณฑ์ซักผ้า ลัคกี้ คลีน เดย์ลี่ แคร์ กลิ่นบลอสซั่ม คิส 600 ml",
    price: 8.49,
    imageurl: "/detergent/det13.png",
    size: "600ml",
    volume: 600,
    unit: "ml"
  },
  {
    category: "dishwashing",
    name: "ผลิตภัณฑ์ล้างจาน ลัคกี้คลีน เดย์ลี่ พาวเวอร์ แบรนด์ ดิช วอชชิ่ง ลิควิดกลิ่นส้มยูสุ 700 ml",
    price: 2.49,
    imageurl: "/dishwashing/dish1.png",
    size: "700ml",
    volume: 700,
    unit: "ml"
  },
  {
    category: "dishwashing",
    name: "ผลิตภัณฑ์ล้างจาน ลัคกี้คลีน เดย์ลี่ พาวเวอร์ แบรนด์ ดิช วอชชิ่ง ลิควิดกลิ่นมะนาว 700 ml",
    price: 2.99,
    imageurl: "/dishwashing/dish2.png",
    size: "700ml",
    volume: 700,
    unit: "ml"
  },
  {
    category: "dishwashing",
    name: "ผลิตภัณฑ์ล้างจาน ลัคกี้คลีน เดย์ลี่ พาวเวอร์ แบรนด์ ดิช วอชชิ่ง ลิควิดกลิ่นองุ่นเคียวโฮ 700 ml",
    price: 3.49,
    imageurl: "/dishwashing/dish3.png",
    size: "700ml",
    volume: 700,
    unit: "ml"
  },
  {
    category: "dishwashing",
    name: "ผลิตภัณฑ์ล้างจาน ลัคกี้คลีน กลิ่นแอปเปิ้ลเขียว 450 ml",
    price: 3.99,
    imageurl: "/dishwashing/dish4.png",
    size: "450ml",
    volume: 450,
    unit: "ml"
  },
  {
    category: "dishwashing",
    name: "ผลิตภัณฑ์ล้างจาน ลัคกี้คลีน กลิ่นมะนาว 450 ml.",
    price: 4.49,
    imageurl: "/dishwashing/dish5.png",
    size: "450ml",
    volume: 450,
    unit: "ml"
  },
  {
    category: "dishwashing",
    name: "ผลิตภัณฑ์ล้างจาน ลัคกี้คลีน กลิ่นองุ่นเคียวโฮ 450 ml.",
    price: 4.99,
    imageurl: "/dishwashing/dish6.png",
    size: "450ml",
    volume: 450,
    unit: "ml"
  },
  {
    category: "dishwashing",
    name: "ผลิตภัณฑ์ล้างจาน ลัคกี้คลีน กลิ่นส้มยูสุ 450 ml",
    price: 5.49,
    imageurl: "/dishwashing/dish7.png",
    size: "450ml",
    volume: 450,
    unit: "ml"
  },
  {
    category: "floor",
    name: "ผลิตภัณฑ์ทำความสะอาดพื้น ลัคกี้คลีน กลิ่นพฤกษา 800 ml",
    price: 2.49,
    imageurl: "/floor/floor1.png",
    size: "800ml",
    volume: 800,
    unit: "ml"
  },
  {
    category: "floor",
    name: "ผลิตภัณฑ์ทำความสะอาดพื้น ลัคกี้คลีน กลิ่นเพอร์เพิ้ลการ์เด้น 800 ml",
    price: 2.99,
    imageurl: "/floor/floor2.png",
    size: "800ml",
    volume: 800,
    unit: "ml"
  },
  {
    category: "floor",
    name: "ผลิตภัณฑ์ทำความสะอาดพื้น ลัคกี้คลีน กลิ่นตะไคร้ 800 ml",
    price: 3.49,
    imageurl: "/floor/floor3.png",
    size: "800ml",
    volume: 800,
    unit: "ml"
  },
  {
    category: "garbagebag",
    name: "ถุงขยะลัคกี้คลีน ชนิดม้วน 28 × 36 นิ้ว",
    price: 2.49,
    imageurl: "/garbagebag/garbage1.png",
    size: "28×36 นิ้ว",
    dimensions: "28×36",
    unit: "นิ้ว"
  },
  {
    category: "garbagebag",
    name: "ถุงขยะลัคกี้คลีน ชนิดม้วน 26 × 34 นิ้ว",
    price: 2.99,
    imageurl: "/garbagebag/garbage2.png",
    size: "26×34 นิ้ว",
    dimensions: "26×34",
    unit: "นิ้ว"
  },
  {
    category: "garbagebag",
    name: "ถุงขยะลัคกี้คลีน ชนิดม้วน 24 × 28 นิ้ว",
    price: 3.49,
    imageurl: "/garbagebag/garbage3.png",
    size: "24×28 นิ้ว",
    dimensions: "24×28",
    unit: "นิ้ว"
  },
  {
    category: "garbagebag",
    name: "ถุงขยะลัคกี้คลีน ชนิดม้วน 20 × 25 นิ้ว",
    price: 3.99,
    imageurl: "/garbagebag/garbage4.png",
    size: "20×25 นิ้ว",
    dimensions: "20×25",
    unit: "นิ้ว"
  },
  {
    category: "garbagebag",
    name: "ถุงขยะลัคกี้คลีน ชนิดม้วน 18 × 20 นิ้ว",
    price: 4.49,
    imageurl: "/garbagebag/garbage5.png",
    size: "18×20 นิ้ว",
    dimensions: "18×20",
    unit: "นิ้ว"
  },
  {
    category: "garbagebag",
    name: "Sample Product 6 (garbagebag)",
    price: 4.99,
    imageurl: "/garbagebag/garbage6.png",
    size: "Unknown",
    unit: "unknown"
  },
  {
    category: "softener",
    name: "ผลิตภัณฑ์ปรับผ้านุ่ม ลัคกี้แคร์ เดย์ลี่แคร์ กลิ่นพิงค์เบบี้ 500 ml",
    price: 2.49,
    imageurl: "/softener/softener1.png",
    size: "500ml",
    volume: 500,
    unit: "ml"
  },
  {
    category: "softener",
    name: "ผลิตภัณฑ์ปรับผ้านุ่ม ลัคกี้แคร์ เดย์ลี่แคร์ กลิ่นเลิฟลี่บลูม 500 ml",
    price: 2.99,
    imageurl: "/softener/softener2.png",
    size: "500ml",
    volume: 500,
    unit: "ml"
  },
  {
    category: "softener",
    name: "ผลิตภัณฑ์ปรับผ้านุ่ม ลัคกี้แคร์ เดย์ลี่แคร์ กลิ่นบลูมมิ่ง ไวโอเลต 500 ml",
    price: 3.49,
    imageurl: "/softener/softener3.png",
    size: "500ml",
    volume: 500,
    unit: "ml"
  },
  {
    category: "tissue",
    name: "กระดาษเช็ดหน้า ลัคกี้แคร์ 180 แผ่นหนา2ชั้น ผลิตจากเยื่อกระดาษบริสุทธิ์ 100%",
    price: 2.49,
    imageurl: "/tissue/tissue1.png",
    size: "180 แผ่น",
    quantity: 180,
    unit: "แผ่น"
  },
    {
    category: "tissue",
    name: "กระดาษเช็ดหน้า ลัคกี้แคร์ 180 แผ่นหนา2ชั้น ผลิตจากเยื่อกระดาษบริสุทธิ์ 100%",
    price: 2.99,
    imageurl: "/tissue/tissue2.png",
    size: "180 แผ่น",
    quantity: 180,
    unit: "แผ่น"
  },
  {
    category: "tissue",
    name: "ทิชชูเปียก ลัคกี้แคร์ 50 แผ่น กลิ่นแป้งเด็ก",
    price: 3.49,
    imageurl: "/tissue/tissue3.png",
    size: "50 แผ่น",
    quantity: 50,
    unit: "แผ่น"
  },
  {
    category: "tissue",
    name: "ทิชชูเปียก ลัคกี้แคร์ 50 แผ่น กลิ่นแป้งเด็ก",
    price: 3.99,
    imageurl: "/tissue/tissue4.png",
    size: "50 แผ่น",
    quantity: 50,
    unit: "แผ่น"
  },
  {
    category: "tissue",
    name: "ทิชชูเปียก ลัคกี้แคร์ 45 แผ่น กลิ่นแป้งเด็ก",
    price: 4.49,
    imageurl: "/tissue/tissue5.png",
    size: "45 แผ่น",
    quantity: 45,
    unit: "แผ่น"
  },
  {
    category: "tissue",
    name: "ทิชชูเปียก ลัคกี้แคร์ 45 แผ่น กลิ่นแป้งเด็ก",
    price: 4.99,
    imageurl: "/tissue/tissue6.png",
    size: "45 แผ่น",
    quantity: 45,
    unit: "แผ่น"
  },
  {
    category: "tissue",
    name: "ทิชชูเปียก ลัคกี้แคร์ 65 แผ่น",
    price: 5.49,
    imageurl: "/tissue/tissue7.png",
    size: "65 แผ่น",
    quantity: 65,
    unit: "แผ่น"
  },
  {
    category: "tissue",
    name: "กระดาษชำระ ลัคกี้แคร์ ชนิดม้วน 6ม้วนต่อแพ็ค",
    price: 5.99,
    imageurl: "/tissue/tissue8.png",
    size: "6 ม้วน",
    quantity: 6,
    unit: "ม้วน"
  },
  {
    category: "tissue",
    name: "กระดาษชำระ ลัคกี้แคร์ ชนิดม้วน 6ม้วนต่อแพ็ค",
    price: 6.49,
    imageurl: "/tissue/tissue9.png",
    size: "6 ม้วน",
    quantity: 6,
    unit: "ม้วน"
  },
  {
    category: "tissue",
    name: "กระดาษเช็ดหน้า ลัคกี้แคร์ 170 แผ่นหนา2ชั้น ผลิตจากเยื่อกระดาษบริสุทธิ์ 100%",
    price: 6.99,
    imageurl: "/tissue/tissue10.png",
    size: "170 แผ่น",
    quantity: 170,
    unit: "แผ่น"
  },
  {
    category: "tissue",
    name: "กระดาษเช็ดหน้า ลัคกี้แคร์ 170 แผ่นหนา2ชั้น ผลิตจากเยื่อกระดาษบริสุทธิ์ 100%",
    price: 7.49,
    imageurl: "/tissue/tissue11.png",
    size: "170 แผ่น",
    quantity: 170,
    unit: "แผ่น"
  },
  {
    category: "tissue",
    name: "กระดาษเช็ดหน้า ลัคกี้แคร์ 250 แผ่นหนา2ชั้น ผลิตจากเยื่อกระดาษบริสุทธิ์ 100%",
    price: 7.99,
    imageurl: "/tissue/tissue12.png",
    size: "250 แผ่น",
    quantity: 250,
    unit: "แผ่น"
  },
  {
    category: "tissue",
    name: "กระดาษเช็ดหน้า ลัคกี้แคร์ 250 แผ่นหนา2ชั้น ผลิตจากเยื่อกระดาษบริสุทธิ์ 100%",
    price: 8.49,
    imageurl: "/tissue/tissue13.png",
    size: "250 แผ่น",
    quantity: 250,
    unit: "แผ่น"
  },
  {
    category: "tissue",
    name: "กระดาษเช็ดหน้า ลัคกี้แคร์ ชนิดกล่อง 120 แผ่นหนา2ชั้น ผลิตจากเยื่อกระดาษบริสุทธิ์ 100%",
    price: 8.99,
    imageurl: "/tissue/tissue14.png",
    size: "120 แผ่น",
    quantity: 120,
    unit: "แผ่น"
  },
  {
    category: "tissue",
    name: "กระดาษเช็ดหน้า ลัคกี้แคร์ ชนิดกล่อง 120 แผ่นหนา2ชั้น ผลิตจากเยื่อกระดาษบริสุทธิ์ 100%",
    price: 9.49,
    imageurl: "/tissue/tissue15.png",
    size: "120 แผ่น",
    quantity: 120,
    unit: "แผ่น"
  },
  {
    category: "tissue",
    name: "กระดาษทิชชู ลัคกี้แคร์ แบบแขวน 1000 แผ่น หนา4ชั้น ผลิตจากเยื่อกระดาษบริสุทธิ์ 100%",
    price: 9.99,
    imageurl: "/tissue/tissue16.png",
    size: "1000 แผ่น",
    quantity: 1000,
    unit: "แผ่น"
  },
  {
    category: "tissue",
    name: "กระดาษทิชชู ลัคกี้แคร์ แบบแขวน 1000 แผ่น หนา4ชั้น ผลิตจากเยื่อกระดาษบริสุทธิ์ 100%",
    price: 10.49,
    imageurl: "/tissue/tissue17.png",
    size: "1000 แผ่น",
    quantity: 1000,
    unit: "แผ่น"
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
