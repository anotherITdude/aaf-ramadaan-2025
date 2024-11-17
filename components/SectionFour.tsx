"use client";
import React from "react";
import section_four from "@/public/section_4.png";
import Section from "./Section";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Translations } from "@/types";
import { en } from "@/locales/en";
import { ar } from "@/locales/ar";
const SectionFour = () => {
  const locale = usePathname();
  const t: Translations = locale === "/" ? en : ar;
  return (
    <Section className="pb-6">
      <div className=" flex flex-col 
      pt-0 md:pt-0
      md:min-h-[600px] section4SM md:section4 min-h-[500px] relative  ">
        <div>
          <Image
            className="absolute max-w-[220px] z-10 md:max-w-[300px] 
            -bottom-10 left-0 md:-bottom-0"
            src={section_four}
            alt="bg"
          />
        </div>
        <div className="flex w-full justify-center text-center md:justify-end">
          <div
            className={`w-full md:w-[60%] p-6 md:p-20  text-right  ${
              locale === "/"
                ? "font-Albus text-5xl "
                : "font-Zain-Black text-4xl md:text-5xl"
            }`}
          >
            <p>{t.nationalday1}</p>
            <p>{t.nationalday2} </p>
            <p>{t.nationalday3} </p>
            <p>{t.nationalday4} </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default SectionFour;
