"use client";
import React from "react";
import Section from "./Section";
import signature_bg from "@/public/signature_bg.png";
import signature_sign from "@/public/signature_sign.png";
import signature_sign_ar from "@/public/signature_sign_ar.png";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { Translations } from "@/types";
import { en } from "@/locales/en";
import { ar } from "@/locales/ar";
const Signature = () => {
  const locale = usePathname();
  const t: Translations = locale === "/" ? en : ar;

  return (
    <Section>
      <div className="flex flex-col md:flex-row w-full min-h-[450px] 
      md:min-h-[450px] justify-center items-center  md:mb-0  ">
        <div className="w-full md:w-[55%] p-4 pl-6 pr-6 pt-0  md:p-20 " dir={`${locale === "/" ? "ltr" : "rtl"}`}>
          <div
            
            dangerouslySetInnerHTML={{
              __html: t.sectopn7Paragraph1,
            }}
            className={`mt-4  ${locale === "/" ? " font-Gotham-Book text-xl md:text-lg" : "font-GE-SS-Text-Light text-2xl md:text-xl"}`}
          />

          <div
            dangerouslySetInnerHTML={{
              __html: t.sectopn7Paragraph2,
            }}
            className={`mt-4  ${locale === "/" ? " font-Gotham-Bold text-xl md:text-lg" : "font-GE-SS-Text-Bold text-2xl md:text-xl"}`}
          />
        </div>
        <div
          className="flex  flex-col justify-center items-center md:w-[70%]">
          <Image className="w-[100%] mr-6" src={signature_bg} alt="bg" />
          <div className="flex  justify-center gap-x-2 mt-4 p-6">
            <p className={locale === "/" ? "font-Albus" : "font-GE-SS-Text-Bold text-lg md:text-lg "}>
              {t.limitedEdition}
            </p>
            <Image className="md:w-[90px]" src={locale === "/" ? signature_sign : signature_sign_ar} alt="bg" />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Signature;
