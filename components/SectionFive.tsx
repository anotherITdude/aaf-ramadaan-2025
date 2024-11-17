"use client";
import React from "react";
import section_five from "@/public/section_5.png";
import Section from "./Section";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Translations } from "@/types";
import { en } from "@/locales/en";
import { ar } from "@/locales/ar";
import { motion } from "framer-motion";

const SectionFive = () => {
  const locale = usePathname();
  const t: Translations = locale === "/" ? en : ar;

  // Animation variants
  const imageVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut", delay: 0.5 },
    },
  };

  return (
    <Section className="pb-6">
      <div className="flex md:min-h-[600px] section5SM md:section5 pt-8 md:pt-0 min-h-[550px] relative">
        {/* Animated background image with whileInView */}
        <motion.div
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} // Triggers when 20% of the component is visible
          className="absolute max-w-[240px] md:max-w-[330px] -bottom-14 left-0 md:-bottom-0 w-full"
        >
          <Image
            className="w-full"
            src={section_five}
            alt="bg"
            layout="intrinsic" // Ensures the image keeps its intrinsic size
          />
        </motion.div>

        {/* Animated text content with whileInView */}
        <div className="flex justify-end">
          <motion.div
            dir={`${locale === "/" ? "ltr" : "rtl"}`}
            dangerouslySetInnerHTML={{ __html: t.section5Paragraph }}
            className={`w-full md:w-[50%] p-6 md:p-20 ${
              locale === "/"
                ? "font-Gotham-Book text-xl md:text-lg gg text-right"
                : "text-right text-2xl md:text-xl font-GE-SS-Text-Light"
            }`}
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }} // Triggers when 20% of the component is visible
          />
        </div>
      </div>
    </Section>
  );
};

export default SectionFive;
