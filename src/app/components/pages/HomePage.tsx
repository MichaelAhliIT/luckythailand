import Image from "next/image";
import { CategoryCard } from "../CategoryCard";
import { PartnerSection } from "../PartnerSection";
import { Products } from "../Products";
import { Review } from "../Review";
import { Mission } from "../Mission";

export const HomePage = () => {
  return (
    <div className="w-full h-full">
      {/* Hero section */}
      <div className="w-full h-[300px] md:h-[500px] bg-[url(/bgimage.webp)] bg-cover flex items-center px-10 opacity-105">
        <div className="card card-dash bg-base-100 w-1/3 h-2/3 hidden md:flex">
          <div className="card-body">
            <h1>Loved by 1M+ customers</h1>
            <h2 className="card-title text-4xl">
              Your One Stop Solution for Your Everyday Needs
            </h2>
            <p className="text-xl">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo,
              quos.
            </p>
            <div className="card-actions">
              <button className="btn btn-secondary w-full">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
      <div className="card card-dash bg-base-100 w-full h-2/3 md:hidden">
        <div className="card-body">
          <h1>Loved by 1M+ customers</h1>
          <h2 className="card-title text-4xl">
            Your One Stop Solution for Your Everyday Needs
          </h2>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo,
            quos.
          </p>
          <div className="card-actions">
            <button className="btn btn-secondary w-full">Buy Now</button>
          </div>
        </div>
      </div>
      {/* End of Hero Section */}

      {/* Featured Product */}
      <div className="flex flex-col gap-5 px-10 py-20">
        <h1 className="text-5xl font-bold">Featured Product</h1>
        <div className="flex flex-col md:flex-row gap-10">
          <CategoryCard
            title="Lucky Clean →"
            desc="Powerful and eco-friendly cleaning for a spotless, fresh home."
            imageurl="/clean.webp"
          />
          <CategoryCard
            title="Lucky Care →"
            desc="Gentle daily care that nourishes and protects your skin naturally."
            imageurl="/care.webp"
          />
        </div>
      </div>
      {/* End of Featured Product */}
      {/* Divider */}
      <div className="w-full h-60 bg-secondary flex flex-row text-warning-content my-10 px-5 gap-5 md:gap-0">
        <div className="w-full flex items-center justify-center text-2xl md:text-5xl">
          <p className="tracking-wide font-bold text-center">
            Quality You{" "}
            <span className="italic text-accent-content">Trust</span> <br />
            Prices You <span className="italic text-accent-content">Love</span>
          </p>
        </div>
        <div className="w-full flex items-center md:text-xl">
          <p>
            We make everyday essentials that are simple, safe, and designed to
            fit your lifestyle. Clean living starts with quality you can trust —
            delivered with a lucky touch.
          </p>
        </div>
      </div>
      {/* End of Divider */}
      <PartnerSection />
      <Products />
      <Review />
      <Mission colorMode="dark" />
    </div>
  );
};
