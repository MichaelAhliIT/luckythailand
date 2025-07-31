"use client";

import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const cards = [
  {
    title:
      "ผลิตภัณฑ์ซักผ้า ลัคกี้คลีน ลักซ์ชูเรียส มิสต์ กลิ่นพิงค์มิราจ 1200 ml",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, eaque labore ullam similique magnam quo!",
    image: "/detergent/det1.png",
  },
  {
    title:
      "ผลิตภัณฑ์ซักผ้า ลัคกี้คลีน ลักซ์ชูเรียส มิสต์ กลิ่นโอเชียนเพิร์ล 1200 ml",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, eaque labore ullam similique magnam quo!",
    image: "/detergent/det2.png",
  },
  {
    title:
      "ผลิตภัณฑ์ซักผ้า ลัคกี้คลีน ลักซ์ชูเรียส มิสต์ กลิ่นมิสทิคไวโอเลต 1200 ml",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, eaque labore ullam similique magnam quo!",
    image: "/detergent/det3.png",
  },
  {
    title: "ทิชชูเปียก ลัคกี้แคร์ 50 แผ่น กลิ่นแป้งเด็ก",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, eaque labore ullam similique magnam quo!",
    image: "/tissue/tissue3.png",
  },
  {
    title: "ทิชชูเปียก ลัคกี้แคร์ 50 แผ่น กลิ่นแป้งเด็ก",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, eaque labore ullam similique magnam quo!",
    image: "/tissue/tissue4.png",
  },
  {
    title: "กระดาษชำระ ลัคกี้แคร์ ชนิดม้วน 6ม้วนต่อแพ็ค",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, eaque labore ullam similique magnam quo!",
    image: "/tissue/tissue8.png",
  },
];

export const CarouselCard = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;

    const cardWidth = container.scrollWidth / cards.length;
    const scrollAmount = direction === "right" ? cardWidth : -cardWidth;

    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto px-4 py-10">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-3xl">Shop Our Shopee</h2>
      </div>

      <div className="relative">
        <button
          onClick={() => scroll("left")}
          className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 absolute left-0 top-[50%] transform -translate-y-1/2 z-10 shadow-lg"
        >
          <ChevronLeft />
        </button>

        <button
          onClick={() => scroll("right")}
          className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 absolute right-0 top-[50%] transform -translate-y-1/2 z-10 shadow-lg"
        >
          <ChevronRight />
        </button>

        <div
          ref={scrollRef}
          className="flex py-5 gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory hide-scrollbar"
          style={{ height: "auto" }}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="min-w-[250px] w-60 flex-shrink-0 bg-white hover:bg-pink-50 rounded-xl shadow border border-black snap-start transition-colors duration-200"
            >
              {/* Card with fixed height and flex layout */}
              <div className="h-80 flex flex-col p-4">
                <Image
                  src={card.image}
                  alt={card.title}
                  className="h-40 w-full object-contain rounded mb-3 flex-shrink-0"
                />
                <div className="flex-1 flex flex-col">
                  <h3 className="text-lg font-bold mb-2">{card.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
