import Link from "next/link";

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
          <Link href="/products">
            <div className="carousel-item h-full hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
              <div className="card bg-base-100 w-72 md:w-90 shadow-sm">
                <figure>
                  <img
                    src="/detergent/det1.png"
                    alt="Detergent"
                    className="w-full h-40 object-contain"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    ผลิตภัณฑ์ซักผ้า ลัคกี้คลีน ลักซ์ชูเรียส มิสต์
                    กลิ่นพิงค์มิราจ 1200 ml
                  </h2>
                </div>
              </div>
            </div>
          </Link>

          <Link href="/products">
            <div className="carousel-item h-full hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
              <div className="card bg-base-100 w-72 md:w-90 shadow-sm">
                <figure>
                  <img
                    src="/detergent/det2.png"
                    alt="Shoes"
                    className="w-full h-40 object-contain"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    ผลิตภัณฑ์ซักผ้า ลัคกี้คลีน ลักซ์ชูเรียส มิสต์
                    กลิ่นโอเชียนเพิร์ล 1200 ml
                  </h2>
                </div>
              </div>
            </div>
          </Link>

          <Link href="/products">
            <div className="carousel-item h-full hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
              <div className="card bg-base-100 w-72 md:w-90 shadow-sm">
                <figure>
                  <img
                    src="/detergent/det3.png"
                    alt="Shoes"
                    className="w-full h-40 object-contain"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    ผลิตภัณฑ์ซักผ้า ลัคกี้คลีน ลักซ์ชูเรียส มิสต์
                    กลิ่นมิสทิคไวโอเลต 1200 ml
                  </h2>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
