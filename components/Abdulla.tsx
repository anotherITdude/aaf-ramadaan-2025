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
        className="absolute w-[80px] md:w-[100px]
        top-[150px] left-10
      md:top-10 md:left-auto md:right-40
      "
        src={abdulla_glide}
        alt="abdulla"
      />
      <Image
        className={`
          ${
            locale === "/"
              ? "absolute w-[50px] md:w-[60px] bottom-[29%] right-8 md:bottom-40 md:right-28"
              : "absolute w-[50px] md:w-[60px] bottom-[24%] right-8 md:bottom-40 md:right-28"
          }
          `}
        src={abdulla_parachute}
        alt="abdulla"
      />
      <div
        className="flex flex-col md:flex-row justify-center items-center min-h-[560px]
      p-6  md:pt-10
      "
      >
        <div
          className={`flex w-full md:hidden mb-16 flex-col ${
            locale === "/" ? "font-Albus text-4xl" : "font-Zain-Black text-4xl"
          }`}
        >
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
            className={` max-w-[300px]
              ${locale === "/" ?
              "mt-6 md:mt-0 mb-6" :
              "mt-6 md:mt-0 mb-10"}
              `}
            src={abdulla}
            alt="abdulla"
          />
        </div>
        <div className="">
          <div
            className={` flex-col hidden md:flex ${
              locale === "/"
                ? "font-Albus text-4xl"
                : "font-Zain-Black text-4xl"
            }`}
          >
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
            <div
              dangerouslySetInnerHTML={{ __html: t.abdullaComment }}
              className={`flex  mb-6 md:hidden ${
                locale === "/"
                  ? " justify-center text-left items-center text-lg font-Gotham-Book mt-8"
                  : " text-xl font-GE-SS-Text-Light text-right justify-center mt-8"
              }`}
            />

            <Image
              className=" hidden md:block max-w-[400px] -ml-10"
              src={`${
                locale === "/" ? abdulla_comment.src : abdulla_comment_ar.src
              }`}
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
