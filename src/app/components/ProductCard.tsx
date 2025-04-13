type CategoryCardProps = {
  title: string;
  desc: string;
  imageurl: string;
};

export const ProductCard = ({ title, desc, imageurl }: CategoryCardProps) => {
  return (
    <div className="card bg-base-100 shadow-md h-full flex flex-col justify-between rounded-none">
      <figure>
        <img src={imageurl} alt={title} className="w-full h-40 object-cover" />
      </figure>

      <div className="card-body flex-grow">
        <h2 className="card-title text-xl">{title}</h2>
      </div>

      <div className="card-actions mt-auto p-4">
        <p className="font-bold">{desc}</p>
        <button className="btn btn-secondary w-full rounded-md">Buy</button>
      </div>
    </div>
  );
};
