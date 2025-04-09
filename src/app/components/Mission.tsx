type MissionProps = {
  colorMode: "light" | "dark"; // restrict to valid values
};

export const Mission = ({ colorMode }: MissionProps) => {
  const isDark = colorMode === "dark";

  return (
    <div
      className={`w-full flex flex-col px-10 md:px-40 py-20 md:py-40 gap-15 ${
        isDark ? "bg-secondary text-secondary-content" : "bg-white"
      }`}
    >
      {/* Header Section */}
      <div className="flex flex-col md:flex-row w-full gap-5 md:gap-0">
        <div className="md:w-1/3 flex items-center">
          <p className="text-6xl font-bold">
            Our{" "}
            <span
              className={`${
                isDark ? "text-neutral" : "text-secondary-content"
              }`}
            >
              Mission
            </span>
          </p>
        </div>
        <p className="text-lg font-semibold md:w-2/3">
          "We’re here to support families with safe, gentle, and reliable
          essentials made for everyday life — from baby care to home cleaning —
          because true care begins at home, in the little things we use and
          trust every day."
        </p>
      </div>

      {/* Image Grid */}
      <div className="w-full grid grid-rows-2 grid-cols-2 md:grid-cols-4 md:grid-rows-1 gap-5">
        {[...Array(4)].map((_, i) => (
          <img
            key={i}
            src="/care.webp"
            alt=""
            className="w-full rounded-xl object-cover"
          />
        ))}
      </div>

      {/* Vision Section */}
      <div className="w-full flex flex-col md:flex-row items-center justify-center pt-10 md:pt-20 gap-5 md:gap-0">
        <div className="md:w-1/2 flex flex-col gap-5">
          <p className="text-6xl font-bold">
            Our{" "}
            <span
              className={`${
                isDark ? "text-neutral" : "text-secondary-content"
              }`}
            >
              Vision
            </span>
          </p>
          <p className="text-lg font-semibold">
            We imagine a future where every home has access to high-quality,
            sustainable essentials — supporting a healthier lifestyle for
            families and the planet.
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <img
            src="/clean.webp"
            alt=""
            className="w-full h-60 md:h-80 object-cover rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};
