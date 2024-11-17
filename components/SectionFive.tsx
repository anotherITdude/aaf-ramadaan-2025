"use client";
import React from "react";
import section_five from "@/public/section_5.png";
import Section from "./Section";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Translations } from "@/types";
import { en } from "@/locales/en";
import { ar } from "@/locales/ar";

const SectionFive = () => {
  const locale = usePathname();
  const t: Translations = locale === "/" ? en : ar;

  return (
    <Section className="pb-6">
      <div className="flex md:min-h-[600px] section5SM md:section5 
      pt-8 md:pt-0 min-h-[550px] relative">
        <div>
          <Image
            className="absolute max-w-[240px] md:max-w-[330px] 
            -bottom-14 left-0 md:-bottom-0 "
            src={section_five}
            alt="bg"
          />
        </div>
        <div className="flex justify-end">
          <div
            dir={`${locale === "/" ? "ltr" : "rtl"}`}
            dangerouslySetInnerHTML={{
              __html: t.section5Paragraph,
            }}
            className={` w-full md:w-[50%] p-6 md:p-20  ${
              locale === "/"
                ? "font-Gotham-Book text-xl md:text-lg gg text-right"
                : "text-right text-2xl md:text-xl font-GE-SS-Text-Light"
            }`}
          />
        </div>
      </div>
    </Section>
  );
};

export default SectionFive;
