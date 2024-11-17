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
      <div className="flex md:min-h-[600px] section5 min-h-[500px] relative">
        <div>
          <Image
            className="absolute max-w-[330px] -bottom-6"
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
            className={`w-[50%] p-20  ${
              locale === "/"
                ? "font-Gotham-Book gg text-right"
                : "text-right md:text-lg font-GE-SS-Text-Light"
            }`}
          />
        </div>
      </div>
    </Section>
  );
};

export default SectionFive;
