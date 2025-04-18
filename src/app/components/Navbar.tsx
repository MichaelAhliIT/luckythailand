"use client";
import { useRef, useState } from "react";

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
    <div className="navbar bg-base-100 shadow-sm text-secondary-content	">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-lg"
          >
            <li>
              <a href="/">HOME</a>
            </li>
            <li>
              <a href="/products">PRODUCTS</a>
            </li>
            <li>
              <a href="/about">ABOUT US</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl font-bold">LUCKY</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg">
          <li>
            <a href="/">HOME</a>
          </li>
          <li>
            <a href="/products">PRODUCTS</a>
          </li>
          <li>
            <a href="/about">ABOUT US</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn m-1" ref={dropdownRef}>
            {selectedLanguage}
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow-sm"
          >
            <li>
              <a onClick={() => handleSelect("English")}>English</a>
            </li>
            <li>
              <a onClick={() => handleSelect("Thailand")}>Thailand</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
