import { useTranslations } from "next-intl";
import Link from "next/link";

export const PartnerSection = () => {
  const t = useTranslations("HomePage");
  return (
    <div className="w-full flex flex-col items-center justify-center py-10 pb-20 md:pb-0 md:px-10">
      <div className="flex flex-col items-center justify-center bg-blue-900 md:rounded-4xl p-10 gap-8">
        <h1 className="text-4xl font-bold text-white">{t("findProduct")}</h1>

        <div className="w-full grid grid-cols-2 grid-rows-3 md:grid-cols-6 md:grid-rows-1 gap-10 items-center place-items-center">
          <div className="">
            <img src="/partners/watson_white.png" alt="" />
          </div>
          <div className="">
            <img src="/partners/makro_white.png" alt="" />
          </div>
          <div className="">
            <img src="/partners/lawson_white.png" alt="" />
          </div>
          <div className="">
            <img src="/partners/cj_white.png" alt="" />
          </div>
          <div className="">
            <img src="/partners/pt_white.png" alt="" />
          </div>
          <div className="">
            <img src="/partners/jiffy_white.png" alt="" />
          </div>
        </div>

        <Link
          className="btn font-semibold py-6 px-8 hover:cursor-pointer"
          href="/where-to-buy"
        >
          Find A Store Near You
        </Link>
      </div>
    </div>
  );
};
