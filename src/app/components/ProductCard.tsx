import Image from "next/image";

type CategoryCardProps = {
  title: string;
  desc?: string;
  imageurl: string;
};

export const ProductCard = ({ title, desc, imageurl }: CategoryCardProps) => {
  return (
    <div className="card bg-base-100 shadow-xl h-full flex flex-col justify-between rounded-xl border border-slate-100 ">
      <figure className="">
        <Image
          src={imageurl}
          alt={title}
          className="w-full h-40 object-contain"
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title text-sm md:text-xl">{title}</h2>
      </div>

      {/* <div className="card-actions mt-auto p-4">
        <p className="font-bold text-[#EF6795] md:text-xl">{desc}</p>
      </div> */}
    </div>
  );
};
