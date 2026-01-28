"use client";

import { useEffect, useState } from "react";
import { ProductCard } from "../ProductCard";
import PopupSidebar from "../PopupSidebar";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { getSlugFromImageUrl } from "@/lib/utils/slug";

interface Product {
  id: number;
  category: string;
  name: string;
  engname?: string;
  price: number;
  imageurl: string;
  size: String;
  quantity?: number;
  volume?: number;
  dimensions?: String;
  unit?: String;
  variant?: String;
}

export const ProductPages = () => {
  const [category, setCategory] = useState("detergent");
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const locale = useLocale();
  const t = useTranslations("Product");

  useEffect(() => {
    const fetchProducts = async () => {
      // 3. Construct the dynamic API URL using a template literal
      const apiUrl = `/${locale}/api/get-product`;
      console.log("Fetching from:", apiUrl); // Helpful for debugging

      try {
        setLoading(true); // Reset loading state on each fetch
        const res = await fetch(apiUrl);
        if (!res.ok) {
          throw new Error(`Failed to fetch: ${res.statusText}`);
        }
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [locale]);

  useEffect(() => {
    // Reset search query when category changes
    console.log(locale);
  }, []);

  const filteredProducts = products
    .filter((product) => {
      const matchesCategory = product.category === category;
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.engname?.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      // Get the size value (quantity or volume)
      const getSizeValue = (product: Product) => {
        return product.quantity || product.volume || 0;
      };

      const aSize = getSizeValue(a);
      const bSize = getSizeValue(b);

      // Sort by size value, then by name if sizes are equal
      return aSize - bSize || a.name.localeCompare(b.name);
    });

  const luckyCleanCategory: Record<string, string> = {
    detergent: t("detergent"),
    dishwashing: t("dishwashing"),
    floor: t("floor"),
    garbagebag: t("garbage"),
  };

  const luckyCareCategory: Record<string, string> = {
    tissue: t("tissue"),
    softener: t("softener"),
    cotton: t("cotton"),
  };

  const allCategories = {
    ...luckyCleanCategory,
    ...luckyCareCategory,
  };

  return (
    <div className="w-full min-h-screen flex pt-14">
      <div className="flex flex-col w-full py-10 px-5 md:px-10 gap-10">
        <div className="flex justify-end">
          {/* <h1 className="text-3xl p-3 font-bold capitalize flex-1 hidden md:flex">
              {allCategories[category] || category}
            </h1> */}
          <PopupSidebar category={category} setCategory={setCategory} />
          <label className="flex items-center border-b gap-3 p-2 w-1/2 md:w-1/4">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              type="search"
              required
              placeholder={t("search")}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border-none focus:border-none focus:outline-none focus:ring-0 text-sm w-full"
            />{" "}
          </label>
        </div>
        <div className="flex gap-10 w-full">
          {/* Categories Sidebar */}
          <ul className="list bg-base-100 md:min-w-1/5 hidden md:flex md:pl-4">
            <li className="tracking-wide text-red-700 text-xl pb-6">
              Product Categories
            </li>

            {Object.keys(allCategories).map((key) => (
              <li
                key={key}
                className={`cursor-pointer rounded-none py-3 ${
                  category === key
                    ? "text-red-900"
                    : "hover:underline hover:underline-offset-5 hover:text-red-800 text-black/40"
                }`}
                onClick={() => setCategory(key)}
              >
                <div>{allCategories[key]}</div>
              </li>
            ))}
            {/* <li className="p-4 tracking-wide bg-error-content text-base-100 text-lg font-extrabold  ">
            Lucky Clean
          </li>

          {Object.keys(luckyCleanCategory).map((key) => (
            <li
              key={key}
              className={`list-row cursor-pointer rounded-none ${
                category === key
                  ? "bg-secondary text-red-900"
                  : "hover:bg-secondary/30"
              }`}
              onClick={() => setCategory(key)}
            >
              <div>{luckyCleanCategory[key]}</div>
            </li>
          ))}
          
          <li className="p-4 tracking-wide bg-error-content text-base-100 text-lg font-extrabold  ">
            Lucky Care
          </li>

          {Object.keys(luckyCareCategory).map((key) => (
            <li
              key={key}
              className={`list-row cursor-pointer rounded-none ${
                category === key
                  ? "bg-secondary text-red-900"
                  : "hover:bg-secondary/30"
              }`}
              onClick={() => setCategory(key)}
            >
              <div>{luckyCareCategory[key]}</div>
            </li>
          ))} */}

            {/* <li className="p-4 tracking-wide bg-error-content text-base-100 text-lg font-extrabold">
            PROMO
          </li>
          <li
            className="list-row cursor-pointer hover:bg-secondary rounded-none"
            onClick={() => setCategory("promo1")}
          >
            <div>Buy 1 Get 1</div>
          </li>
          <li
            className="list-row cursor-pointer hover:bg-secondary rounded-none"
            onClick={() => setCategory("promo2")}
          >
            <div>Up To 40%</div>
          </li>
          <li
            className="list-row cursor-pointer hover:bg-secondary rounded-none"
            onClick={() => setCategory("promo3")}
          >
            <div>New Arrival</div>
          </li> */}
          </ul>

          {loading ? (
            <div className="w-full min-h-screen grid grid-cols-2 md:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="skeleton w-full h-full"></div>
              ))}
            </div>
          ) : (
            <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-6">
              {filteredProducts.map((product) => {
                const slug = getSlugFromImageUrl(product.imageurl);

                return (
                  <Link
                    key={product.id}
                    href={`/products/${slug}`}
                    className="block"
                  >
                    <ProductCard
                      title={
                        (locale === "en" ? product.engname : product.name) ?? ""
                      }
                      imageurl={product.imageurl}
                    />
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
