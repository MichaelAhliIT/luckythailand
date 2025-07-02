"use client";
import { useRef, useState } from "react";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { Menu } from "lucide-react";
import Link from "next/link";

export const Navbar = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSelect = (language: string) => {
    setSelectedLanguage(language);
    setTimeout(() => {
      (document.activeElement as HTMLElement)?.blur();
    }, 100); // short delay to allow DaisyUI's menu click to finish
  };

  return (
    <div className="navbar bg-white shadow-sm text-secondary-content fixed z-20">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <Menu size={24} color="#BF0004" />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-lg"
          >
            <li>
              <Link href="/">HOME</Link>
            </li>
            <li>
              <Link href="/products">PRODUCTS</Link>
            </li>
            <li>
              <Link href="/about">ABOUT US</Link>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl font-bold">LUCKY</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg gap-5 font-semibold ">
          <li>
            <Link href="/">HOME</Link>
          </li>
          <li>
            <Link href="/products">PRODUCTS</Link>
          </li>
          <li>
            <Link href="/about">ABOUT US</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn bg-slate-700 text-secondary m-1"
            ref={dropdownRef}
          >
            {selectedLanguage}
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow-sm"
          >
            <li>
              <a onClick={() => handleSelect("English")}>
                <span className="fi fi-us" />
                English
              </a>
            </li>
            <li>
              <a onClick={() => handleSelect("Thai")}>
                <span className="fi fi-th" /> Thai
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
