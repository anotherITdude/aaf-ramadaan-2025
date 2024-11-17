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
      <div className="flex w-full min-h-[450px] justify-center items-center  ">
        <div className="md:w-[55%] p-20 " dir={`${locale === "/" ? "ltr" : "rtl"}`}>
          <div
            
            dangerouslySetInnerHTML={{
              __html: t.sectopn7Paragraph1,
            }}
            className={`mt-4  ${locale === "/" ? " font-Gotham-Book" : "font-GE-SS-Text-Light text-lg"}`}
          />

          <div
            dangerouslySetInnerHTML={{
              __html: t.sectopn7Paragraph2,
            }}
            className={`mt-4  ${locale === "/" ? " font-Gotham-Bold" : "font-GE-SS-Text-Bold text-lg"}`}
          />
        </div>
        <div
          className="flex  flex-col justify-center items-center md:w-[70%]">
          <Image className="w-[100%] mr-6" src={signature_bg} alt="bg" />
          <div className="flex justify-center gap-x-2 mt-4">
            <p className={locale === "/" ? "font-Albus" : "font-GE-SS-Text-Bold "}>
              {t.limitedEdition}
            </p>
            <Image className="w-[90px]" src={locale === "/" ? signature_sign : signature_sign_ar} alt="bg" />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Signature;
