"use client";
import React from "react";
import Section from "./Section";
import bg from "@/public/section_2.png";
import ballon from "@/public/section2_balloon.png";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Translations } from "@/types";
import { en } from "@/locales/en";
import { ar } from "@/locales/ar";
const NationalDay = () => {
  const locale = usePathname();
  const t: Translations = locale === "/" ? en : ar;
  return (
    <Section className="overflow-hidden">
      <div className=" flex min-h-[600px] md:min-h-[600px] relative justify-start  items-start">
        <Image
          className="absolute bottom-0 w-full md:w-[96%] md:-right-3 "
          src={bg}
          alt="bg"
        />
        <Image
          className="absolute bottom-36 md:top-[15%] right-10 md:right-[15%] w-[100px]"
          src={ballon}
          alt="bg"
        />
        <div
          dangerouslySetInnerHTML={{ __html: t.section2Paragraph }}
          className={`w-full md:w-[52%] pt-10 pr-6 pl-6  md:p-20 ${
            locale === "/"
              ? "text-left text-xl md:text-lg   font-Gotham-Book"
              : "text-right text-2xl  md:text-lg  font-GE-SS-Text-Light"
          }`}
        />
      </div>
    </Section>
  );
};

export default NationalDay;
