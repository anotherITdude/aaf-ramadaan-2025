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
import { motion } from "framer-motion";

const Signature = () => {
  const locale = usePathname();
  const t: Translations = locale === "/" ? en : ar;

  // Animation variants for text and images
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut", delay: 0.5 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeOut", delay: 0.3 },
    },
  };

  return (
    <Section>
      <div className="flex flex-col md:flex-row w-full min-h-[450px] md:min-h-[450px] justify-center items-center md:mb-0">
        {/* Animated text section with whileInView */}
        <motion.div
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} // Triggers animation when 20% of the component is in view
          className="w-full md:w-[55%] p-4 pl-6 pr-6 pt-0 md:p-20"
          dir={`${locale === "/" ? "ltr" : "rtl"}`}
        >
          <div
            dangerouslySetInnerHTML={{
              __html: t.sectopn7Paragraph1,
            }}
            className={`mt-4 ${locale === "/" ? " font-Gotham-Book text-xl md:text-lg" : "font-GE-SS-Text-Light text-2xl md:text-xl"}`}
          />

          <div
            dangerouslySetInnerHTML={{
              __html: t.sectopn7Paragraph2,
            }}
            className={`mt-4 ${locale === "/" ? " font-Gotham-Bold text-xl md:text-lg" : "font-GE-SS-Text-Bold text-2xl md:text-xl"}`}
          />
        </motion.div>

        {/* Animated image section with whileInView */}
        <motion.div
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} // Triggers animation when 20% of the component is in view
          className="flex flex-col justify-center items-center md:w-[70%]"
        >
          <Image className="w-[100%] mr-6" src={signature_bg} alt="bg" />
          <div className="flex justify-center gap-x-2 mt-4 p-6">
            <p className={locale === "/" ? "font-Albus" : "font-GE-SS-Text-Bold text-lg md:text-lg"}>
              {t.limitedEdition}
            </p>
            <Image className="md:w-[90px]" src={locale === "/" ? signature_sign : signature_sign_ar} alt="signature" />
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default Signature;
