"use client";

import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import Image from "next/image";
import { getSlugFromImageUrl } from "@/lib/utils/slug";

type CategoryCardProps = {
  title: string;
  imageurl: string;
};

export const ProductCard = ({ title, imageurl }: CategoryCardProps) => {
  const router = useRouter();
  const locale = useLocale();
  const slug = getSlugFromImageUrl(imageurl);

  const handleClick = () => {
    router.push(`/${locale}/products/${slug}`);
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="bg-base-100 border border-red-300 aspect-square relative group overflow-hidden flex items-center justify-center">
        <Image
          width={400}
          height={600}
          src={imageurl}
          alt={title}
          className="w-full h-[80%] object-contain transition-all duration-300 group-hover:blur-sm"
        />

        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <button
            onClick={handleClick}
            className="bg-red-800 text-white px-6 py-3 rounded-lg font-semibold hover:cursor-pointer active:scale-95"
          >
            Buy Online
          </button>
        </div>
      </div>

      <h2 className="text-sm lg:text-lg">{title}</h2>
    </div>
  );
};
