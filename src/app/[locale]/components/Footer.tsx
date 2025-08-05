import { useTranslations } from "next-intl";

export const Footer = () => {
  const t = useTranslations("Footer");

  return (
    <footer className="footer sm:footer-horizontal text-black p-10 bg-slate-100">
      <nav>
        <h6 className="footer-title">{t("products")}</h6>
        <a className="link link-hover">{t("detergent")}</a>
        <a className="link link-hover">{t("dishwashing")}</a>
        <a className="link link-hover">{t("floor")}</a>
        <a className="link link-hover">{t("garbage")}</a>
        <a className="link link-hover">{t("tissue")}</a>
        <a className="link link-hover">{t("softener")}</a>
        <a className="link link-hover">{t("cotton")}</a>
      </nav>
      <nav>
        <h6 className="footer-title">{t("company")}</h6>
        <a className="link link-hover">{t("about")}</a>
        <a className="link link-hover">{t("contact")}</a>
        <a className="link link-hover">{t("faq")}</a>
        <a className="link link-hover">{t("toc")}</a>
      </nav>
      <nav>
        <h6 className="footer-title">{t("social")}</h6>
        <div className="grid grid-flow-col gap-4">
          <a>
            <img
              width="28"
              height="28"
              src="https://img.icons8.com/color/48/shopee.png"
              alt="shopee"
            />
          </a>
          <a>
            <img
              width="28"
              height="28"
              src="https://img.icons8.com/ios-filled/48/tiktok--v1.png"
              alt="tiktok--v1"
            />
          </a>
          <a>
            <img
              width="28"
              height="28"
              src="https://img.icons8.com/fluency/48/instagram-new.png"
              alt="instagram-new"
            />
          </a>
        </div>
      </nav>
    </footer>
  );
};
