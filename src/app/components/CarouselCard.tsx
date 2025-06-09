"use client";

import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const cards = [
  {
    title: "Lucky Clean",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, eaque labore ullam similique magnam quo!",
    image: "/clean.webp",
  },
  {
    title: "Lucky Care",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, eaque labore ullam similique magnam quo!",
    image: "/care.webp",
  },
  {
    title: "Lucky Wipes",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, eaque labore ullam similique magnam quo!",
    image: "/clean.webp",
  },
  {
    title: "Lucky Tissue",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, eaque labore ullam similique magnam quo!",
    image: "/care.webp",
  },
  {
    title: "Lucky Detergent",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, eaque labore ullam similique magnam quo!",
    image: "/clean.webp",
  },
  {
    title: "Lucky Spray",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, eaque labore ullam similique magnam quo!",
    image: "/care.webp",
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
        <h2 className="text-5xl">Shop Our Shopee</h2>
      </div>

      <div
        ref={scrollRef}
        className="flex py-5 gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory hide-scrollbar"
      >
        <button
          onClick={() => scroll("left")}
          className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 absolute left-0 top-[50%]"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => scroll("right")}
          className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 absolute right-0 top-[50%]"
        >
          <ChevronRight />
        </button>
        {cards.map((card, index) => (
          <div
            key={index}
            className="min-w-[250px] w-60 h-full flex-shrink-0 bg-white hover:bg-pink-50 rounded-xl shadow p-4 snap-start border border-black"
          >
            <img
              src={card.image}
              alt={card.title}
              className="h-40 w-full object-cover rounded mb-3"
            />
            <h3 className="text-lg font-bold">{card.title}</h3>
            <p className="text-sm text-gray-600">{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
