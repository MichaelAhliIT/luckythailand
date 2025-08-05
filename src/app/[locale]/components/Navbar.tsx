"use client";

// 1. IMPORTANT: Import hooks and Link from next-intl's navigation
import { useLocale, useTranslations } from "next-intl";
import { Menu } from "lucide-react";
import Link from "next/link"; // Keep this for now, but we will discuss alternatives
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { usePathname, useRouter } from "@/i18n/navigation";

export const Navbar = () => {
  const t = useTranslations("Navigation");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  // 3. The function to switch the language
  const switchLocale = (nextLocale: string) => {
    // This will switch the locale while keeping the user on the same page
    router.push(pathname, { locale: nextLocale });
  };

  return (
    <div className="navbar bg-white/95 shadow-sm text-secondary-content fixed z-20">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <Menu size={24} color="#BF0004" />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-lg"
          >
            {/* These Links should also be locale-aware. Assuming next-intl/link is used */}
            <li>
              <Link href="/">{t("home")}</Link>
            </li>
            <li>
              <Link href="/products">{t("products")}</Link>
            </li>
            <li>
              <Link href="/about">{t("about")}</Link>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl font-bold">LUCKY</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg gap-5 font-semibold ">
          <li>
            <Link href="/">{t("home")}</Link>
          </li>
          <li>
            <Link href="/products">{t("products")}</Link>
          </li>
          <li>
            <Link href="/about">{t("about")}</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn bg-slate-700 text-secondary m-1"
          >
            {/* Display current language based on locale */}
            {locale === "th" ? "Thai" : "English"}
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow-sm"
          >
            {/* 4. Update onClick to use the new function and add disabled state */}
            <li className={locale === "en" ? "disabled" : ""}>
              <a onClick={() => switchLocale("en")}>
                <span className="fi fi-us" />
                English
              </a>
            </li>
            <li className={locale === "th" ? "disabled" : ""}>
              <a onClick={() => switchLocale("th")}>
                <span className="fi fi-th" />
                Thai
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
