"use client";
import React from "react";
import Section from "./Section";
import bg from "@/public/section_2.png";
import ballon from "@/public/section2_balloon.png";
import Image from "next/image";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { Translations } from "@/types";
import { en } from "@/locales/en";
import { ar } from "@/locales/ar";

const NationalDay = () => {
  const locale = usePathname();
  const t: Translations = locale === "/" ? en : ar;

  // Framer Motion animation variant for the paragraph
  const textVariants = {
    hidden: { opacity: 0, x: locale === "/" ? -50 : 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  // Balloon animation (move left 100px, then right 100px, and up/down a bit)
  const balloonVariants = {
    float: {
      x: [0, -200, -250, -250, 0], // Horizontal movement (left-right)
      y: [0, 10, -10, 0], // Vertical movement (up-down)
      transition: {
        repeat: Infinity, // Repeat infinitely
        repeatType: "loop", // Loop the animation
        duration: 20, // Cycle duration for complete motion (left-right, up-down)
        ease: "easeInOut", // Smooth easing
      },
    },
  };

  return (
    <Section className="overflow-hidden">
      <div className="flex min-h-[600px] md:min-h-[600px] relative justify-start items-start">
        {/* Background Image */}
        <Image
          className="absolute bottom-0 w-full md:w-[96%] md:-right-3"
          src={bg}
          alt="bg"
        />

        {/* Balloon Image with smooth float animation */}
        <motion.div
          className="absolute bottom-36 md:top-[15%] right-10 md:right-[15%] w-[100px]"
          //@ts-expect-error variants structure is different
          variants={balloonVariants}
          animate="float"
        >
          <Image src={ballon} alt="bg" />
        </motion.div>

        {/* Paragraph with animation */}
        <motion.div
          variants={textVariants}
          initial="hidden"
          animate="visible"
          dangerouslySetInnerHTML={{ __html: t.section2Paragraph }}
          className={`w-full md:w-[52%] pt-10 pr-6 pl-6 md:p-20 ${
            locale === "/"
              ? "text-left text-xl md:text-lg font-Gotham-Book"
              : "text-right text-2xl md:text-xl font-GE-SS-Text-Light"
          }`}
        />
      </div>
    </Section>
  );
};

export default NationalDay;
