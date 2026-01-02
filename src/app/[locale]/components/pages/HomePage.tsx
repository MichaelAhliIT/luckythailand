"use client";

import Image from "next/image";
import { CategoryCard } from "../CategoryCard";
import { PartnerSection } from "../PartnerSection";
import { NewProducts } from "../NewProducts";
import { Review } from "../Review";
import { useRouter } from "next/navigation";
import * as motion from "motion/react-client";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

export const HomePage = () => {
  const router = useRouter();
  const t = useTranslations("HomePage");
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // Mobile is <768px (Tailwind `md`)
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);
  const viewportAmount = isMobile ? 0.3 : 0.5;
  return (
    <div className="w-full h-full pt-14">
      {/* Hero section */}
      <div className="w-full h-[calc(100vh-10vh)] flex flex-col-reverse md:flex-row mt-14 md:mt-10">
        <div className="w-full md:w-2/5 flex flex-col justify-center p-10 md:pl-28">
          <div className="flex flex-col gap-5">
            <h1 className="text-6xl font-bold text-red-700">Lucky Thailand</h1>
            <p className="w-full md:w-3/4">{t("heroText")}</p>
          </div>
          <button
            className="btn bg-slate-700 text-base lg:text-lg text-secondary w-3/4 lg:w-1/2 xl:w-1/3  mt-5 p-6"
            onClick={() => router.push("/products")}
          >
            {t("shopNow")}
          </button>
        </div>
        <div className="w-full md:w-3/5 md:p-10 flex items-center justify-center">
          <Image
            width={1000}
            height={1000}
            src="/luckyproducts.png"
            alt=""
            className="w-full object-cover aspect-auto"
          />
        </div>
      </div>
      {/* <div className="w-full h-[300px] md:h-[600px] bg-[url(/heroImage.jpg)] bg-cover flex items-center px-10 opacity-105">
        <div className="card card-dash bg-base-100 w-1/3 h-2/3 hidden md:flex">
          <div className="card-body">
            <h1>Loved by 1M+ customers</h1>
            <h2 className="card-title text-4xl">
              Your One Stop Solution for Your Everyday Needs
            </h2>
            <p className="text-lg">
              From household essentials to lifestyle must-haves, we bring
              everything to your doorstep. Shop smarter, live better.
            </p>
            <div className="card-actions">
              
            </div>
          </div>
        </div>
      </div>
      <div className="card card-dash bg-base-100 w-full h-2/3 md:hidden">
        <div className="card-body">
          <h1>Loved by 1M+ customers</h1>
          <h2 className="card-title text-3xl">
            Your One Stop Solution for Your Everyday Needs
          </h2>
          <p className="text-base">
            From household essentials to lifestyle must-haves, we bring
            everything to your doorstep. Shop smarter, live better.
          </p>
          <div className="card-actions">
            <button
              className="btn btn-secondary w-full"
              onClick={() => router.push("/products")}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div> */}
      {/* End of Hero Section */}
      {/* Featured Product */}
      <motion.div
        className="flex flex-col justify-center gap-5 px-10 py-20"
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: {
            duration: 1,
          },
        }}
        viewport={{ once: true, amount: viewportAmount }}
      >
        <h1 className="text-3xl font-bold">{t("featured")}</h1>
        <div className="flex flex-col md:flex-row gap-10">
          <CategoryCard
            title="Lucky Clean"
            desc={t("cleanText")}
            imageurl="/clean.webp"
          />
          <CategoryCard
            title="Lucky Care"
            desc={t("careText")}
            imageurl="/care.webp"
          />
        </div>
      </motion.div>
      {/* End of Featured Product */}
      {/* Divider */}
      <div className="w-full h-60 bg-slate-200 flex flex-col md:flex-row justify-center md:justify-start text-black mb-10 px-5 gap-5 md:gap-0">
        <div className="w-full flex items-center justify-center text-2xl md:text-5xl">
          <p className="tracking-wide font-bold text-center">
            {t("bannerTitle1")}{" "}
            <span className="italic text-[#00B7F0]">{t("trust")}</span> <br />
            {t("bannerTitle2")}{" "}
            <span className="italic text-[#EF6795]">{t("love")}</span>
          </p>
        </div>
        <div className="w-full flex items-center text-sm md:text-xl">
          <p className="text-center md:text-start">{t("bannerDesc")}</p>
        </div>
      </div>
      {/* End of Divider */}
      <PartnerSection />
      <NewProducts />
      <Review />
      {/* <Mission colorMode="dark" /> */}
    </div>
  );
};
