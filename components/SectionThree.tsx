"use client";
import React, { useEffect } from "react";
import Section from "@/components/Section";
import { en } from "@/locales/en";
import { ar } from "@/locales/ar";
import { Translations } from "@/types";
import { usePathname } from "next/navigation";
import Image from "next/image";
import products from "@/public/hero_products.png";
import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";
import section3 from "@/public/section_left_bg.png";
import YoutubeEmbed from "./YoutubeEmbed";
import star5 from "@/public/star5.png";
import moonStar from "@/public/moon_star.png";
import bg_gold_mobile from "@/public/bg_gold_mobile.png";

const SectionThree = () => {
  const locale = usePathname();
  const t: Translations = locale === "/" ? en : ar;
  const scrollYState = useMotionValue(0);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.onChange((latest) => {
      scrollYState.set(latest);
    });
  }, [scrollY, scrollYState]);

  const star1Y = useTransform(scrollYState, [0, 500], [0, -100]);
  const moonStarY = useTransform(scrollYState, [0, 1000], [0, -160]);
  const star2Y = useTransform(scrollYState, [0, 1000], [0, -100]);
  const bgGoldY = useTransform(scrollYState, [0, 500], [0, 100]);

  return (
    <Section className="relative overflow-hidden">
      <div className="sectiontwo flex  md:flex-row flex-col-reverse justify-center items-center">
        <div className="md:w-[40%]  flex flex-col justify-center items-center  gap-y-2 z-40">
          <motion.div
            initial={{ x: -20, opacity: 0 }} // Start off-screen to the left
            whileInView={{ x: 0, opacity: 1 }} // Move to its original position and fade in when in view
            transition={{ duration: 1 }}
            dangerouslySetInnerHTML={{ __html: t.herotitle }}
            className={` md:mb-10 mt-10 w-full md:mt-20 text-secondary md:text-primary 
                ${
                  locale === "/ar"
                    ? "font-Zain-Black text-5xl md:text-6xl text-right pr-7"
                    : "font-Gotham-Bold text-2xl md:text-3xl pl-7"
                }
                `}
          ></motion.div>
          <motion.div
            initial={{ x: 20, opacity: 0 }} // Start off-screen to the left
            whileInView={{ x: 0, opacity: 1 }} // Move to its original position and fade in when in view
            transition={{ duration: 1 }}
          >
            <Image
              className="md:max-w-[400px] mt-2 md:-mt-4 mb-10"
              src={products}
              alt="section3"
            />
          </motion.div>
        </div>
        <div className=" w-full md:w-[60%] flex flex-col justify-center items-center z-50">
          <div className="w-[85%] md:w-[50%] mt-20  md:mt-auto p-0">
            <div className="cooking_video">
              <YoutubeEmbed className="rounded-3xl" embedId="Pp7ru2TGt-M" />
              <p
                dangerouslySetInnerHTML={{ __html: t.videoTitle }}
                className={`  text-white
                  ${
                    locale === "/ar"
                      ? "font-GE-SS-Text-Light text-xl md:text-6xl text-right"
                      : "font-Gotham-Black text-sm mt-2 md:text-lg text-center"
                  }
                  `}
              />
            </div>
          </div>
        </div>
        <motion.div
          className="absolute hidden md:block top-0 -left-10 w-full h-full z-30"
          initial={{ x: "-50%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image src={section3} alt="section2" fill />
        </motion.div>
      </div>
      <div className="z-20">
        <motion.div
          //variants={createBlinkingAnimation(isBlinkingStar1)}
          initial="initial"
          animate="animate"
          className="absolute left-[15%] md:left-[90%] bottom-[28%] md:bottom-[5%] max-w-[10px] md:max-w-[20px] z-20"
          style={{ y: star1Y }}
        >
          <Image src={star5} alt="Star 1" />
        </motion.div>

        <motion.div
          //variants={createBlinkingAnimation(isBlinkingStar1)}
          initial="initial"
          animate="animate"
          className="absolute right-[20%] md:right-[10%] top-[22%] md:top-[35%] max-w-[30px] md:max-w-[40px] z-20"
          style={{ y: moonStarY }}
        >
          <Image src={moonStar} alt="Star 1" />
        </motion.div>
        <motion.div
          //variants={createBlinkingAnimation(isBlinkingStar1)}
          initial="initial"
          animate="animate"
          className="absolute left-[20%] md:left-[65%] top-[18%] md:top-[35%] max-w-[10px] md:max-w-[20px] z-20"
          style={{ y: star2Y }}
        >
          <Image src={star5} alt="Star 1" />
        </motion.div>
        <motion.div
          //variants={createBlinkingAnimation(isBlinkingStar1)}
          initial="initial"
          animate="animate"
          className="absolute left-[10%] md:left-[70%] bottom-[15%] md:-bottom-[10%] max-w-[10px] md:max-w-[10px] z-20"
          style={{ y: star2Y }}
        >
          <Image src={star5} alt="Star 1" />
        </motion.div>
        <motion.div
          //variants={createBlinkingAnimation(isBlinkingStar1)}
          initial="initial"
          animate="animate"
          className="absolute left-[20%] md:left-[53%] top-[25%] bottom-[10%] md:-bottom-[1%] max-w-[10px] md:max-w-[10px] z-20"
          style={{ y: star2Y }}
        >
          <Image src={star5} alt="Star 1" />
        </motion.div>
        <motion.div
          //variants={createBlinkingAnimation(isBlinkingStar1)}
          initial="initial"
          animate="animate"
          className="absolute right-[10%] md:left-[50%] bottom-[35%] md:bottom-[0%] max-w-[10px] md:max-w-[10px] z-20"
          style={{ y: star2Y }}
        >
          <Image src={star5} alt="Star 1" />
        </motion.div>
        <motion.div
          className="absolute md:hidden bottom-0 left-0 w-full h-[300px]"
          style={{ y: bgGoldY }}
        >
          <Image
            src={bg_gold_mobile}
            alt="Background Mobile"
            layout="fill"
            objectFit="cover"
          />
        </motion.div>
      </div>
    </Section>
  );
};

export default SectionThree;
