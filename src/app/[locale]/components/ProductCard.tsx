import Image from "next/image";

type CategoryCardProps = {
  title: string;
  desc?: string;
  imageurl: string;
};

export const ProductCard = ({ title, desc, imageurl }: CategoryCardProps) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="bg-base-100 flex flex-col justify-between border border-red-300 aspect-square relative group overflow-hidden">
        <figure className="flex justify-center items-center">
          <Image
            width={400}
            height={600}
            src={imageurl}
            alt={title}
            className="w-full h-[80%] object-contain aspect-square transition-all duration-300 group-hover:blur-sm"
          />
        </figure>

        {/* Hover overlay with button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="bg-red-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-focus transform hover:scale-105 transition-transform hover:cursor-pointer">
            Buy Online
          </button>
        </div>
      </div>
      <div className="">
        <h2 className="text-sm md:text-xl">{title}</h2>
      </div>
    </div>
  );
};
