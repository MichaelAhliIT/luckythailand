type CategoryCardProps = {
  title: string;
  desc: string;
  imageurl: string;
};

export const CategoryCard = ({ title, desc, imageurl }: CategoryCardProps) => {
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
      <h1 className="text-3xl pt-5 font-bold">{title}</h1>
      <p>{desc}</p>
    </div>
  );
};
