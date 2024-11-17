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
      <div className=" flex md:min-h-[600px] relative justify-start  items-start">
        <Image
          className="absolute bottom-0 w-[96%] -right-3 "
          src={bg}
          alt="bg"
        />
        <Image
          className="absolute top-[15%] right-[15%] w-[100px]"
          src={ballon}
          alt="bg"
        />
        <div
          dangerouslySetInnerHTML={{ __html: t.section2Paragraph }}
          className={`w-[52%] p-20 ${
            locale === "/"
              ? "text-left  font-Gotham-Book"
              : "text-right md:text-lg  font-GE-SS-Text-Light"
          }`}
        />
      </div>
    </Section>
  );
};

export default NationalDay;
