'use client';
import React from "react";
import bg from "@/public/test.png";
import Image from "next/image";
import bg_product from "@/public/hero_product_ar.png";
import Section from "./Section";
import Navbar from "./Navbar";
import { en } from "@/locales/en";
import { ar } from "@/locales/ar";
import { Translations } from "@/types";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const HeroAr = () => {
  const locale = usePathname();
  const t: Translations = locale === "/" ? en : ar;

  // Animation variants for text
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  return (
    <Section>
      <Navbar />
      <div className="min-h-[450px] md:min-h-[600px] relative">
        <Image className="absolute bottom-0" src={bg} alt="bg" />
        <Image
          className="absolute w-full -bottom-2 md:-bottom-[4.1%] right-0"
          src={bg_product}
          alt="bg"
        />
        <div className="w-full md:w-[62%] md:text-7xl p-8 pt-20 md:p-20 font-Zain-Black text-right md:text-left">
          <div className="flex justify-start items-center">
            <motion.div
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="mr-3 text-6xl md:text-7xl"
            >
              {t.herotitlear1}
            </motion.div>
          </div>
          <motion.p
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="text-7xl"
          >
            {t.herotitlear2}
          </motion.p>
        </div>
      </div>
    </Section>
  );
};

export default HeroAr;
