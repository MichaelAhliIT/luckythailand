import { BentoGrid } from "../BentoGrid";
import { CarouselCard } from "../CarouselCard";
import { Mission } from "../Mission";

export const AboutPage = () => {
  return (
    <div>
      {/* First Hero */}
      <div className="w-full h-full md:min-h-screen flex flex-col md:flex-row pt-14">
        <div className="w-full flex items-center bg-blue-100 text-black">
          <div className="flex flex-col justify-center w-full md:w-3/5 gap-5 mx-10 my-10 md:my-0">
            <h1 className="text-6xl font-extrabold">
              We are <span className="text-[#EF6795]">Lucky</span>
            </h1>
            <p className="text-xl">
              We are lucky to be part of your everyday routine—bringing you
              safe, effective, and trusted care for a cleaner, healthier home.
            </p>
          </div>
        </div>
        <div className="w-full">
          <img src="/clean.webp" alt="" />
        </div>
      </div>
      {/* End of First Hero */}
      <CarouselCard />
      <BentoGrid />
      <Mission colorMode="light" />
    </div>
  );
};
