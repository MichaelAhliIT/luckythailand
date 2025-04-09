import { BentoGrid } from "../BentoGrid";
import { CarouselCard } from "../CarouselCard";
import { Mission } from "../Mission";

export const AboutPage = () => {
  return (
    <div>
      {/* First Hero */}
      <div className="w-full h-full md:min-h-screen flex flex-col md:flex-row">
        <div className="w-full flex items-center bg-amber-100">
          <div className="flex flex-col justify-center w-full md:w-3/5 gap-5 mx-10 my-10 md:my-0">
            <h1 className="text-5xl font-extrabold">We are Lucky</h1>
            <p className="text-lg">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni
              culpa distinctio consequuntur dolore ratione voluptates accusamus
              esse quidem porro qui.
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
