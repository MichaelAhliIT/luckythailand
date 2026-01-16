"use client";

import { useLocale, useTranslations } from "next-intl";
import { Menu } from "lucide-react";
import { Link, usePathname, useRouter } from "@/i18n/navigation";

export const Navbar = () => {
  const t = useTranslations("Navigation");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const closeDropdown = () => {
    // wait a tick so the click finishes, then drop focus -> dropdown closes
    requestAnimationFrame(() => {
      (document.activeElement as HTMLElement | null)?.blur();
    });
  };

  const switchLocale = (nextLocale: string) => {
    router.push(pathname, { locale: nextLocale });
  };

  return (
    <div className="navbar bg-white/95 shadow-sm text-secondary-content fixed z-20">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl font-bold">LUCKY</a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg gap-5 font-semibold">
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
            className="btn bg-transparent border-none text-secondary m-1"
          >
            {locale === "th" ? (
              <img
                className="size-5"
                alt="Thailand"
                src="https://purecatamphetamine.github.io/country-flag-icons/3x2/TH.svg"
              />
            ) : (
              <img
                className="size-5"
                alt="United States"
                src="https://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg"
              />
            )}
          </div>

          <ul className="dropdown-content menu bg-base-100 rounded-box z-40 w-52 p-2 shadow-sm">
            <li className={locale === "en" ? "disabled" : ""}>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  switchLocale("en");
                  closeDropdown();
                  console.log("English");
                }}
              >
                <span className="fi fi-us" />
                English
              </a>
            </li>

            <li className={locale === "th" ? "disabled" : ""}>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  switchLocale("th");
                  closeDropdown();
                  console.log("Thai");
                }}
              >
                <span className="fi fi-th" />
                Thai
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <Menu size={24} color="#BF0004" />
        </div>

        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-slate-50 rounded-box z-40 mt-3 w-52 p-2 shadow text-lg"
        >
          <li>
            <Link href="/" onClick={closeDropdown}>
              {t("home")}
            </Link>
          </li>
          <li>
            <Link href="/products" onClick={closeDropdown}>
              {t("products")}
            </Link>
          </li>
          <li>
            <Link href="/about" onClick={closeDropdown}>
              {t("about")}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
