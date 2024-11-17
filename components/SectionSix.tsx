"use client";
import React from "react";
import section_six from "@/public/section_6.png";
import Section from "./Section";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Translations } from "@/types";
import { en } from "@/locales/en";
import { ar } from "@/locales/ar";

const SectionSix = () => {
  const locale = usePathname();
  const t: Translations = locale === "/" ? en : ar;

  return (
    <Section className="pb-6">
      <div
        className="flex md:min-h-[600px] section6SM md:section6 
        pt-0 md:pt-0 min-h-[550px] relative"
      >
        {/* Image Section */}
        <div>
          <Image
            className="absolute max-w-[80%] md:max-w-[450px] 
            -bottom-0 left-2 md:-bottom-0"
            src={section_six}
            alt="bg"
          />
        </div>

        {/* Text Section */}
        <div className="flex justify-end">
          <div
            dir={`${locale === "/" ? "ltr" : "rtl"}`}
            dangerouslySetInnerHTML={{
              __html: t.section6Paragraph,
            }}
            className={`w-full md:w-[50%] p-6  md:p-20 ${
              locale === "/"
                ? "font-Gotham-Book text-xl md:text-lg text-right mt-10"
                : "font-GE-SS-Text-Light text-2xl md:text-xl text-right mt-3"
            }`}
          />
        </div>
      </div>
    </Section>
  );
};

export default SectionSix;
