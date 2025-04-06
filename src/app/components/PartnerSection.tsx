export const PartnerSection = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-20 pb-10 px-10">
      <h1 className="text-5xl font-bold">Find Our Products At</h1>

      <div className="w-3/4 flex flex-col md:grid md:grid-cols-5 md:grid-rows-2 gap-10 items-center  ">
        <div>
          <img src="7eleven.png" alt="" />
        </div>
        <div className="col-start-2 row-start-2">
          <img src="/familymart.png" alt="" />
        </div>
        <div className="col-start-3 row-start-1">
          <img src="lotus.jpeg" alt="" />
        </div>
        <div className="col-start-4 row-start-2">
          <img src="/shopee.png" alt="" />
        </div>
        <div className="col-start-5 row-start-1">
          <img src="7eleven.png" alt="" />
        </div>
      </div>
    </div>
  );
};
