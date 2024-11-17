'use client';
import React from "react";
import bg from "@/public/test.png";
import Image from "next/image";
import bg_product from "@/public/Group34.png";
import Section from "./Section";
import Navbar from "./Navbar";
import { en } from "@/locales/en";
import { ar } from "@/locales/ar";
import { Translations } from "@/types";
import { usePathname } from "next/navigation";

const HeroAr = () => {
  const locale = usePathname();
  const t: Translations = locale === "/" ? en : ar;

  return (
    <Section>
      <Navbar />
      <div className="md:min-h-[600px]  relative ">
        <Image className="absolute bottom-0" src={bg} alt="bg" />
        <Image
          className="absolute w-full -bottom-[4.1%] right-0"
          src={bg_product}
          alt="bg"
        />
        <div className="w-[62%] md:text-7xl p-20 font-Zain-Black">
          <div className="flex justify-start items-center">
            <div className="mr-3">{t.herotitlear1}</div>
          </div>
          <p>{t.herotitlear2}</p>
        </div>
      </div>
    </Section>
  );
};

export default HeroAr;
