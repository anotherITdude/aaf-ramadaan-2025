"use client";
import React from "react";
import Section from "@/components/Section";
import { en } from "@/locales/en";
import { ar } from "@/locales/ar";
import { Translations } from "@/types";
import { usePathname } from "next/navigation";
import Image from "next/image";
import section2 from "@/public/section2_right.png";
import star5 from "@/public/star5.png";
import moonStar from "@/public/moon_star.png";
import section2Mobile from "@/public/section2_mobile.png";
import { motion, useScroll, useTransform } from "framer-motion";

const SectionTwo = () => {
  const locale = usePathname();
  const t: Translations = locale === "/" ? en : ar;
  const { scrollY } = useScroll();
  const star1Y = useTransform(scrollY, [0, 500], [0, -100]);
  const moonStarY = useTransform(scrollY, [0, 1000], [0, -160]);
  const star2Y = useTransform(scrollY, [0, 1000], [0, -100]);
  return (
    <Section className="relative overflow-hidden">
      <div className="sectiontwo relative flex min-h-[550px] md:min-h-[650px] flex-col justify-center items-start p-2 md:p-12  overflow-hidden">
        <div className="md:w-[55%] text-white flex flex-col gap-4 p-4 md:p-10 z-40">
          <h2
            className={`${
              locale === "/" ? "font-Gotham-Bold text-2xl md:text-3xl" : "font-Zain-Black text-2xl md:text-4xl text-right"
            }`}
            dangerouslySetInnerHTML={{ __html: t.section2title }}
          />
          <p
            className={`${
              locale === "/" ? "font-Gotham-Book text-lg md:text-xl" : "font-GE-SS-Text-Light text-right text-lg md:text-xl"
            }`}
            dangerouslySetInnerHTML={{ __html: t.section2Paragraph }}
          />
        </div>
      </div>
      <div className="absolute hidden md:block top-0 left-0 w-full h-full">
        <Image src={section2} alt="section2" fill />
      </div>
      <div className="md:hidden bottom-0 left-0 w-full h-[200px] bg-secondary ">
        <Image src={section2Mobile} alt="section2" />
      </div>
      <div className="z-20">
        <motion.div
          //variants={createBlinkingAnimation(isBlinkingStar1)}
          initial="initial"
          animate="animate"
          className="absolute left-[2%] md:left-[5%] bottom-[30%] md:bottom-[5%] max-w-[10px] md:max-w-[20px] z-20"
          style={{ y: star1Y }}
        >
          <Image src={star5} alt="Star 1" />
        </motion.div>

        <motion.div
          //variants={createBlinkingAnimation(isBlinkingStar1)}
          initial="initial"
          animate="animate"
          className="absolute right-[20%] md:right-[50%] top-[15%] md:top-[20%] max-w-[30px] md:max-w-[40px] z-20"
          style={{ y: moonStarY }}
        >
          <Image src={moonStar}  alt="Star 1" />
        </motion.div>
        <motion.div
          //variants={createBlinkingAnimation(isBlinkingStar1)}
          initial="initial"
          animate="animate"
          className="absolute right-[10%] md:left-[45%] bottom-[20%] md:bottom-[5%] max-w-[10px] md:max-w-[20px] z-20"
          style={{ y: star2Y }}
        >
          <Image src={star5} alt="Star 1" />
        </motion.div>
        <motion.div
          //variants={createBlinkingAnimation(isBlinkingStar1)}
          initial="initial"
          animate="animate"
          className="absolute right-[20%] md:left-[43%] bottom-[25%] md:-bottom-[1%] max-w-[10px] md:max-w-[10px] z-20"
          style={{ y: star2Y }}
        >
          <Image src={star5} alt="Star 1" />
        </motion.div>
        <motion.div
          //variants={createBlinkingAnimation(isBlinkingStar1)}
          initial="initial"
          animate="animate"
          className="absolute right-[25%] md:left-[50%] bottom-[20%] md:bottom-[0%] max-w-[10px] md:max-w-[10px] z-20"
          style={{ y: star2Y }}
        >
          <Image src={star5} alt="Star 1" />
        </motion.div>
      </div>
    </Section>
  );
};

export default SectionTwo;
