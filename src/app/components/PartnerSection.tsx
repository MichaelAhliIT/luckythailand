export const PartnerSection = () => {
  return (
    <div className="w-full md:min-h-screen flex flex-col items-center justify-center gap-20 py-10 pb-20 md:pb-0 px-10">
      <h1 className="text-5xl">Find Our Products At</h1>

      <div className="w-3/4 grid grid-cols-2 grid-rows-3 md:grid-cols-3 md:grid-rows-2 gap-10 items-center place-items-center">
        <div>
          <img src="watson.png" alt="" />
        </div>
        <div className="">
          <img src="/makro.png" alt="" />
        </div>
        <div className="">
          <img src="lawson.png" alt="" />
        </div>
        <div className="md:size-60">
          <img src="/cjexpress.png" alt="" />
        </div>
        <div className="">
          <img src="pt.png" alt="" />
        </div>
        <div className="md:size-40">
          <img src="jiffy.png" alt="" />
        </div>
      </div>
    </div>
  );
};
