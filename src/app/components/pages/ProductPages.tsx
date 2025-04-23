"use client";

import { useEffect, useState } from "react";
import { ProductCard } from "../ProductCard";

interface Product {
  id: number;
  category: string;
  name: string;
  price: number;
  imageurl: string;
}

export const ProductPages = () => {
  const [category, setCategory] = useState("wetwipes");
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/get-product");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter(
    (product) => product.category === category
  );

  const categoryLabels: Record<string, string> = {
    wetwipes: "Wet Wipes",
    tissue: "Tissue",
    detergent: "Detergent",
    homesupplies: "Home Supplies",
  };

  return (
    <div className="w-full min-h-screen flex">
      {/* Category */}
      <div className="flex w-full justify-center py-10 px-10 gap-10 bg-base-300">
        <ul className="list bg-base-100 md:min-w-1/7 hidden md:flex">
          <li className="p-4 tracking-wide bg-error-content text-base-100 text-lg font-extrabold">
            CATEGORY
          </li>

          {Object.keys(categoryLabels).map((key) => (
            <li
              key={key}
              className="list-row cursor-pointer hover:bg-secondary rounded-none"
              onClick={() => setCategory(key)}
            >
              <div>{categoryLabels[key]}</div>
            </li>
          ))}

          <li className="p-4 tracking-wide bg-error-content text-base-100 text-lg font-extrabold">
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
          </li>
        </ul>

        <div className="flex flex-col gap-10 w-full">
          <div className="bg-white">
            <h1 className="text-3xl p-3 font-bold capitalize">
              {categoryLabels[category] || category}
            </h1>
          </div>

          {loading ? (
            <div className="text-center text-lg font-semibold">Loading...</div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  title={product.name}
                  desc={`$${product.price.toFixed(2)}`}
                  imageurl={product.imageurl}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
