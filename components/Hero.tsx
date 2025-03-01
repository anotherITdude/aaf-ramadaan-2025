"use client";
import React from "react";
import Image from "next/image";

import Section from "./Section";
import Navbar from "./Navbar";
import { en } from "@/locales/en";
import { ar } from "@/locales/ar";
import { Translations } from "@/types";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import moonSpoon from "@/public/moon_with_spoon.png";
import star1 from "@/public/star1.png";
import star2 from "@/public/star2.png";
import star3 from "@/public/star3.png";
import star4 from "@/public/star4.png";
import star5 from "@/public/star5.png";
import bg_product from "@/public/hero_products.png";
import bg_gold from "@/public/bg_gold.png";
import ramadaan_logo from "@/public/ramadaan_logo.png";
import top_lamp from "@/public/top_left.png";
import logo from "@/public/logo.png";
const Hero = () => {
  const locale = usePathname();
  const t: Translations = locale === "/" ? en : ar;

  return (
    <Section>
      <Navbar />
      <div
        className="flex min-h-[700px] relative flex-col items-center justify-start
      hero overflow-hidden
      "
      > 
        <div className="absolute -right-14 -top-20 flex flex-row items-center justify-center">
          <Image className="max-w-[300px]"  src={logo} alt="Logo" />
        </div>
        <div className="absolute left-16 top-0 flex flex-row items-center justify-center">
          <Image className="max-w-[110px]"  src={top_lamp} alt="Golden Day" />
        </div>
        <div className="flex flex-row items-center justify-center">
          <Image
            className="max-w-[410px] mt-[15%]"
            src={moonSpoon}
            alt="Moon with Spoon"
          />
          <div
            dangerouslySetInnerHTML={{ __html: t.herotitle }}
            className={`-ml-48 text-secondary 
                ${
                  locale === "/ar"
                    ? "arabic-font-class"
                    : "font-Gotham-Bold text-3xl"
                }
                `}
          ></div>
        </div>

        {/* Updated positions for stars based on reference image */}
        <Image
          className="absolute left-[25%] top-[45%] max-w-[50px]"
          src={star1}
          alt="Star 1"
        />
        <Image
          className="absolute left-[30%] top-[5%] max-w-[30px]"
          src={star2}
          alt="Star 2"
        />
        <Image
          className="absolute left-[42%] bottom-[29%] max-w-[30px]"
          src={star3}
          alt="Star 3"
        />
        <Image
          className="absolute top-[42%] right-[48%] max-w-[20px]"
          src={star4}
          alt="Star 4"
        />
        <Image
          className="absolute top-[18%] right-[40%] max-w-[20px]"
          src={star4}
          alt="Star 4"
        />

        <Image
          className="absolute right-[23%] top-[40%] max-w-[15px]"
          src={star5}
          alt="Star 5"
        />

        <Image
          className="absolute right-[8%] top-[50%] max-w-[10px]"
          src={star5}
          alt="Star 5"
        />

        <div className="absolute bottom-0 flex flex-row items-center justify-between w-full pl-10 pr-10">
          <Image
            className="z-50 max-w-[300px] mt-[18%]"
            src={ramadaan_logo}
            alt="Product"
          />
          <Image
            className="z-50 max-w-[440px]"
            src={bg_product}
            alt="Product"
          />
        </div>

        <Image
          className="absolute -bottom-2 z-10"
          src={bg_gold}
          alt="Golden Day"
        />
      </div>
    </Section>
  );
};

export default Hero;
