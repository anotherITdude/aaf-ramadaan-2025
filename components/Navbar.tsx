"use client";
import React from "react";
import logo from "../public/aafLogo.svg";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Navbar = () => {
  const locale = usePathname();
  const locales = ["en", "ar"];
  return (
    <div className="flex justify-between pl-4 pr-4 md:pl-10 md:pr-10 pt-6 items-center ">
      <div className={`md:pr-4 text-2xl`}>
        {locales.map((lang, index) => (
          <React.Fragment key={lang}>
            <Link
              href={lang === "en" ? "/" : `/${lang}`}
              className={`${
                locale === `/${lang}` || (locale === "/" && lang === "en")
                  ? "text-gray-500 cursor-not-allowed underline animate-pulse underline-offset-4 font-Albus"
                  : "text-black cursor-pointer font-Albus"
              }`}
            >
              {lang === "ar" ? "Ar" : "En"}
            </Link>
            {index !== locales.length - 1 && (
              <span className="font-DIN-Bold pr-1 pl-1 text-md ">&#x2022;</span>
            )}
          </React.Fragment>
        ))}
      </div>
      <div>
        <Image className="w-[110px] md:w-[140px] md:-mb-24" src={logo} alt="logo" />
      </div>
    </div>
  );
};

export default Navbar;
