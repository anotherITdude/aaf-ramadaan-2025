"use client";
import React from "react";
import section_six from "@/public/section_6.png";
import Section from "./Section";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Translations } from "@/types";
import { en } from "@/locales/en";
import { ar } from "@/locales/ar";
import { motion } from "framer-motion";

const SectionSix = () => {
  const locale = usePathname();
  const t: Translations = locale === "/" ? en : ar;

  // Animation variants for image and text
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
      <div className="flex md:min-h-[600px] section6SM md:section6 pt-0 md:pt-0 min-h-[550px] relative">
        {/* Animated image section with whileInView */}
        <motion.div
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} // Triggers when 20% of the component is visible
          className="absolute max-w-[80%] md:max-w-[450px] -bottom-0 left-2 md:-bottom-0 w-full"
        >
          <Image
            className="w-full"
            src={section_six}
            alt="bg"
            layout="intrinsic" // Ensures the image keeps its intrinsic size
          />
        </motion.div>

        {/* Animated text section with whileInView */}
        <div className="flex justify-end">
          <motion.div
            dir={`${locale === "/" ? "ltr" : "rtl"}`}
            dangerouslySetInnerHTML={{
              __html: t.section6Paragraph,
            }}
            className={`w-full md:w-[50%] p-6 md:p-20 ${
              locale === "/"
                ? "font-Gotham-Book text-xl md:text-lg text-right mt-10"
                : "font-GE-SS-Text-Light text-2xl md:text-xl text-right mt-3"
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

export default SectionSix;
