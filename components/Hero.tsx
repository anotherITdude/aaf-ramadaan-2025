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

const Hero = () => {
  const locale = usePathname();
  const t: Translations = locale === "/" ? en : ar;

  return (
    <Section>
      <Navbar />
      <div className="min-h-[450px] md:min-h-[600px]  relative ">
        <Image className="absolute bottom-0" src={bg} alt="bg" />
        <Image
          className="absolute w-full -bottom-2 md:-bottom-[4.1%] right-0"
          src={bg_product}
          alt="bg"
        />
        <div className="w-full md:w-[52%] p-10 pt-12  md:p-20 font-Albus">
          <div className="flex justify-start items-center">
            <div className="mr-3 text-6xl">{t.herotitle1}</div>
            <div className="text-8xl">
              {t.herotitle2} 
            </div>
            <div
              dangerouslySetInnerHTML={{ __html: t.herotitle3 }}
              className="text-6xl "
            />
          </div>
          <p className="text-6xl">{t.herotitle4}</p>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
