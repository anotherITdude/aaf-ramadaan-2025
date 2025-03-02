"use client";
import React, { useEffect, useState } from "react";
import Section from "@/components/Section";
import { en } from "@/locales/en";
import { ar } from "@/locales/ar";
import { Translations } from "@/types";
import { usePathname } from "next/navigation";
import Image from "next/image";
import section4 from "@/public/section4_left.png";
import ramadanGold from "@/public/ramadan_gold.png";
import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";
import moonStar from "@/public/moon_star.png";
import star5 from "@/public/star5.png";



const SectionFour = () => {
  const locale = usePathname();
  const t: Translations = locale === "/" ? en : ar;
  const scrollYState = useMotionValue(0);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.onChange((latest) => {
      scrollYState.set(latest);
    });
  }, [scrollY, scrollYState]);
  const [isBlinkingStar1, setIsBlinkingStar1] = useState(false);
  const [isBlinkingStar2, setIsBlinkingStar2] = useState(false);  

  
  //const bgGoldY = useTransform(scrollYState, [0, 500], [0, 100]);
  const star1Y = useTransform(scrollYState, [0, 500], [0, -100]);
  const moonStarY = useTransform(scrollYState, [0, 1000], [0, -160]);
  const star2Y = useTransform(scrollYState, [0, 1000], [0, -100]);
  const star3Y = useTransform(scrollYState, [0, 1000], [0, -60]);

  useEffect(() => {
    const blinkAnimation = (
      setBlinking: React.Dispatch<React.SetStateAction<boolean>>,
    ) => {
      setBlinking(true);
      setTimeout(() => {
        setBlinking(false);
      }, 500); // Duration of the blink
    };

    const randomInterval = () =>
      Math.floor(Math.random() * (10000 - 2000 + 1)) + 2000; // Random interval between 2000ms and 5000ms

    const intervals = [
      setInterval(() => blinkAnimation(setIsBlinkingStar1), randomInterval()),
      setInterval(() => blinkAnimation(setIsBlinkingStar2), randomInterval()),
    ];

    return () => intervals.forEach(clearInterval);
  }, []);

  // Blinking animation for each star
  const createBlinkingAnimation = (isBlinking: boolean) => {
    // Array of possible durations
    const durations = [0.1, 0.02, 0.003, 0.005, 0.007]; // You can adjust these values as needed
    const randomDuration =
      durations[Math.floor(Math.random() * durations.length)]; // Select a random duration

    return {
      initial: { opacity: 1 },
      animate: {
        opacity: isBlinking ? [1, 0, 0, 0.5, 1] : 1,
        transition: {
          duration: randomDuration, // Use the random duration
          repeat: isBlinking ? Infinity : 0,
          repeatType: "reverse" as const,
          ease: "easeInOut",
        },
      },
    };
  };

  return (
    <Section className="relative overflow-hidden">
      <div className="sectiontwo flex flex-col md:flex-row min-h-[650px] justify-center items-center pt-14 pb-14  md:pt-0 md:pb-0  p-6 md:p-10 md:rounded-b-3xl ">
        <div className="w-full md:w-[40%] z-50">
          <Image className="md:max-w-[340px] " src={section4} alt="section4 " />
        </div>
        <div className="w-full md:w-[60%] flex flex-col md:gap-y-5 gap-y-5">
          <motion.h2
             initial={{ x: -20, opacity: 0 }} // Start off-screen to the left
             whileInView={{ x: 0, opacity: 1 }} // Move to its original position and fade in when in view
             transition={{ duration: 1 }}
            dangerouslySetInnerHTML={{ __html: t.section4title }}
            className={` text-white pt-4 md:pt-0
          ${
            locale === "/ar"
              ? "font-Zain-Black text-5xl md:text-6xl text-right"
              : "font-Gotham-Bold text-2xl md:text-3xl text-left"
          }
          `}
          />
          <motion.p
             initial={{ x: 20, opacity: 0 }} // Start off-screen to the left
             whileInView={{ x: 0, opacity: 1 }} // Move to its original position and fade in when in view
             transition={{ duration: 1 }}
            dangerouslySetInnerHTML={{ __html: t.section4Paragraph }}
            className={`text-white ${
              locale === "/"
                ? "font-Gotham-Book text-lg md:text-xl"
                : "font-GE-SS-Text-Light text-right text-lg md:text-xl"
            }`}
          />
          <motion.div
             initial={{ x: -20, opacity: 0 }} // Start off-screen to the left
             whileInView={{ x: 0, opacity: 1 }} // Move to its original position and fade in when in view
             transition={{ duration: 1 }}
          >
            <Image className="max-w-[180px]" src={ramadanGold} alt="ramadanGold" />
          </motion.div>
        </div>
      </div>
      <div>
      <motion.div
          //variants={createBlinkingAnimation(isBlinkingStar2)}
          initial="initial"
          animate="animate"
          className="absolute right-[70%] md:right-[85%] top-[16%] md:top-[30%] max-w-[30px] md:max-w-[40px] z-20"
          style={{ y: moonStarY }}
        >
          <Image src={moonStar} alt="Star 1" />
        </motion.div>

        <motion.div
          variants={createBlinkingAnimation(isBlinkingStar2)}
          initial="initial"
          animate="animate"
          className="absolute right-[20%] md:right-[10%] top-[15%] md:top-[25%] max-w-[30px] md:max-w-[20px] z-20"
          style={{ y: star2Y }}
        >
          <Image src={star5} alt="Star 1" />
        </motion.div>

        <motion.div
          //variants={createBlinkingAnimation(isBlinkingStar1)}
          initial="initial"
          animate="animate"
          className="absolute right-[30%] md:right-[20%] -bottom-[5%] md:bottom-[-5%] max-w-[15px] md:max-w-[20px] z-20"
          style={{ y: star1Y }}
        >
          <Image src={star5} alt="Star 1" />
        </motion.div>

        <motion.div
          variants={createBlinkingAnimation(isBlinkingStar1)}
          initial="initial"
          animate="animate"
          className="absolute right-[10%] md:right-[60%] bottom-[0%] md:bottom-[-9%] max-w-[20px] md:max-w-[15px] z-20"
          style={{ y: star2Y }}
        >
          <Image src={star5} alt="Star 1" />
        </motion.div>

        <motion.div
          //variants={createBlinkingAnimation(isBlinkingStar2)}
          initial="initial"
          animate="animate"
          className="absolute right-[8%] md:right-[50%] top-[60%] md:top-[15%] max-w-[10px] md:max-w-[10px] z-20"
          style={{ y: star3Y }}
        >
          <Image src={star5} alt="Star 1" />
        </motion.div>
      </div>
    </Section>
  );
};

export default SectionFour;
