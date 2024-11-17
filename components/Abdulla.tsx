"use client";
import React from "react";
import Section from "./Section";
import abdulla from "@/public/abdulla.png";
import abdulla_comment from "@/public/abdulla_comment.png";
import abdulla_comment_ar from "@/public/abdulla_comment_ar.png";
import abdulla_glide from "@/public/abdulla_glide.png";
import abdulla_parachute from "@/public/abdulla_parachute.png";
import signature_big from "@/public/signature_big.png";
import Image from "next/image";
import { en } from "@/locales/en";
import { ar } from "@/locales/ar";
import { Translations } from "@/types";
import { usePathname } from "next/navigation";
const Abdulla = () => {
  const locale = usePathname();
  const t: Translations = locale === "/" ? en : ar;
  return (
    <Section className="relative">
      <Image
        className="absolute w-[100px]
      top-10 right-40
      "
        src={abdulla_glide}
        alt="abdulla"
      />
      <Image
        className="absolute w-[60px]
        bottom-40 right-28"
        src={abdulla_parachute}
        alt="abdulla"
      />
      <div className="flex justify-center items-center min-h-[560px]">
        <div>
          <Image className="max-w-[300px]" src={abdulla} alt="abdulla" />
        </div>
        <div>
          <div className={`flex flex-col ${locale === "/" ? "font-Albus text-4xl" : "font-Zain-Black text-4xl"}`}>
            <div
              dangerouslySetInnerHTML={{ __html: t.abdulla1 }}
              className={`flex ${
                locale === "/" ? " justify-start" : "justify-start"
              }`}
            />
            <div
              dangerouslySetInnerHTML={{ __html: t.abdulla2 }}
              className={`flex ${
                locale === "/" ? " justify-center" : "justify-center"
              }`}
            />
            <div
              dangerouslySetInnerHTML={{ __html: t.abdulla3 }}
              className={`flex ${
                locale === "/" ? " justify-end" : "justify-end"
              }`}
            />
          </div>
          <div>
            <Image 
              className="max-w-[400px] -ml-10"
              src={`${locale === "/" ? abdulla_comment.src : abdulla_comment_ar.src}`}
              alt="abdulla"
              layout="intrinsic"
              width={400}
              height={400}
            />
          </div>
          <div className="flex justify-end">
            <Image
              className="max-w-[150px]"
              src={signature_big}
              alt="abdulla"
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Abdulla;
