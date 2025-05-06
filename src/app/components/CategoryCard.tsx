"use client";

import { useRouter } from "next/navigation";

type CategoryCardProps = {
  title: string;
  desc: string;
  imageurl: string;
};

export const CategoryCard = ({ title, desc, imageurl }: CategoryCardProps) => {
  const router = useRouter();
  return (
    <div className="flex-1">
      <div className="card shadow-sm rounded-xl">
        <figure className="rounded h-60">
          <img
            src={imageurl}
            alt="Shoes"
            className="w-full h-full object-cover"
          />
        </figure>
      </div>
      <h1
        className={`text-3xl pt-5 cursor-pointer w-fit font-bold hover:font-normal active:opacity-50 ${
          title == "Lucky Clean" ? "text-[#00B7F0]" : "text-[#EF6795]"
        }`}
        onClick={() => router.push("/products")}
      >
        {title}
      </h1>
      <p>{desc}</p>
    </div>
  );
};
