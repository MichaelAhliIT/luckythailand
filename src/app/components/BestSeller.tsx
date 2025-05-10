export const BestSeller = () => {
  return (
    <div className="w-full h-full flex flex-col md:flex-row gap-5 p-10 bg-slate-200 text-black md:mt-20">
      <div className="w-full md:w-1/3 flex flex-col gap-5 justify-center">
        <h1 className="text-5xl font-bold">
          <span className="text-[#EF6795]">Best</span> Seller
        </h1>
        <p className="text-sm md:text-base">
          Our top daily essentials—trusted by families every day. From gentle
          soaps to reliable detergents and soft tissues, these bestsellers make
          everyday life cleaner, simpler, and more comfortable.
        </p>
      </div>
      <div className="w-full md:w-2/3 flex">
        <div className="carousel carousel-center rounded-box w-full space-x-4 p-4 text-secondary-content">
          <div className="carousel-item">
            <div className="card bg-base-100 w-72 md:w-90 shadow-sm">
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Card Title</h2>
                <p>
                  A card component has a figure, a body part, and inside body
                  there are title and actions parts
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="card bg-base-100 w-72 md:w-90 shadow-sm">
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Card Title</h2>
                <p>
                  A card component has a figure, a body part, and inside body
                  there are title and actions parts
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="card bg-base-100 w-72 md:w-90 shadow-sm">
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Card Title</h2>
                <p>
                  A card component has a figure, a body part, and inside body
                  there are title and actions parts
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="card bg-base-100 w-72 md:w-90 shadow-sm">
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Card Title</h2>
                <p>
                  A card component has a figure, a body part, and inside body
                  there are title and actions parts
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
