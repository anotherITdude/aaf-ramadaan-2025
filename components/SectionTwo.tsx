"use client";
import React, { useEffect, useState } from "react";
import Section from "@/components/Section";
import { en } from "@/locales/en";
import { ar } from "@/locales/ar";
import { Translations } from "@/types";
import { usePathname } from "next/navigation";
import Image from "next/image";
import section2 from "@/public/section2_right1.png";
import star5 from "@/public/star5.png";
import moonStar from "@/public/moon_star.png";
import section2Mobile from "@/public/section2_mobile.png";
import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";
import Navbar from "./Navbar";
import logo from "@/public/logo.png";
import ramadanGold from "@/public/ramadan_gold.png";
import ramadaanAR_gold from "@/public/ramadan_gold_ar_logo.png";
import Link from "next/link";

const SectionTwo = () => {
  const locale = usePathname();
  const t: Translations = locale === "/" ? en : ar;
  const scrollYState = useMotionValue(0);
  const { scrollY } = useScroll();

  const [isBlinkingStar1, setIsBlinkingStar1] = useState(false);
  const [isBlinkingStar2, setIsBlinkingStar2] = useState(false);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      scrollYState.set(latest);
    });
  }, [scrollY, scrollYState]);

  //const bgGoldY = useTransform(scrollYState, [0, 500], [0, 100]);
  const moonStarY = useTransform(scrollYState, [0, 1000], [0, -160]);
  const star2Y = useTransform(scrollYState, [0, 1000], [0, -100]);
  const star3Y = useTransform(scrollYState, [0, 1000], [0, -500]);

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
    <Section className="relative overflow-hidden md:rounded-t-3xl">
      <div className="absolute z-50">
        {" "}
        <Navbar />
      </div>
      <div className="absolute -right-12 -top-[62px] md:-right-14 md:-top-20 flex z-40 flex-row items-center justify-center">
        <Link href="/">
          <Image
            className=" max-w-[200px] md:max-w-[280px]"
            src={logo}
            alt="Logo"
          />
        </Link>
      </div>
      <div className="sectiontwo relative flex min-h-[550px] md:min-h-[650px] flex-col justify-center items-start p-2 md:p-0  overflow-hidden">
        <div className="md:w-[50%] text-white flex flex-col gap-4 md:gap-6 p-4 mb-4 mt-32 md:mt-0 md:mb-0 md:p-10 z-40">
          <motion.h2
            initial={{ x: -20, opacity: 0 }} // Start off-screen to the left
            animate={{ x: 0, opacity: 1 }} // Move to its original position and fade in when in view
            transition={{ duration: 1 }}
            className={`${
              locale === "/"
                ? "font-Gotham-Bold text-2xl md:text-3xl "
                : "font-Zain-Black text-3xl md:text-4xl text-right   md:pr-4"
            }`}
            dangerouslySetInnerHTML={{ __html: t.section2title }}
          />
          <motion.p
            initial={{ x: 20, opacity: 0 }} // Start off-screen to the left
            animate={{ x: 0, opacity: 1 }} // Move to its original position and fade in when in view
            transition={{ duration: 1 }}
            className={`${
              locale === "/"
                ? "font-Gotham-Book text-lg md:text-xl"
                : "font-GE-SS-Text-Light text-right text-lg md:text-xl md:pr-4"
            }`}
            dangerouslySetInnerHTML={{ __html: t.section2Paragraph }}
          />
          <motion.div
            className={`flex ${
              locale === "/ar" ? "justify-end" : "justify-start"
            }`}
            initial={{ x: -20, opacity: 0 }} // Start off-screen to the left
            animate={{ x: 0, opacity: 1 }} // Move to its original position and fade in when in view
            transition={{ duration: 1 }}
          >
            {locale === "/ar" ? (
              <Image
                className="max-w-[180px]"
                src={ramadaanAR_gold}
                alt="ramadanGold"
              />
            ) : (
              <Image
                className="max-w-[180px] justify-start"
                src={ramadanGold}
                alt="ramadanGold"
              />
            )}
          </motion.div>
        </div>
      </div>
      <motion.div
        className="absolute hidden md:block top-0 left-0 w-full h-full"
        initial={{ x: "50%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image src={section2} alt="section2" fill />
      </motion.div>
      <div className="hidden bottom-0 left-0 w-full h-[200px] bg-secondary ">
        <Image src={section2Mobile} alt="section2" />
      </div>
      <div className="z-20">
        <motion.div
          variants={createBlinkingAnimation(isBlinkingStar1)}
          initial="initial"
          animate="animate"
          className="absolute left-[2%] md:left-[5%] bottom-[30%] md:bottom-[5%] max-w-[10px] md:max-w-[20px] z-20"
          style={{ y: star3Y }}
        >
          <Image src={star5} alt="Star 1" />
        </motion.div>

        <motion.div
          //variants={createBlinkingAnimation(isBlinkingStar1)}
          initial="initial"
          animate="animate"
          className={` absolute  ${
            locale === "/"
              ? "right-[50%] md:right-[50%] top-[10%] md:top-[13%] max-w-[30px] md:max-w-[40px] z-20"
              : "right-[50%] md:right-[48%] top-[10%] md:top-[7%] max-w-[30px] md:max-w-[40px] z-20"
          }`}
          style={{ y: moonStarY }}
        >
          <Image src={moonStar} alt="Star 1" />
        </motion.div>
        <motion.div
          //variants={createBlinkingAnimation(isBlinkingStar1)}
          initial="initial"
          animate="animate"
          className={`absolute ${
            locale === "/"
              ? "right-[10%] md:left-[45%] bottom-[20%] md:bottom-[13%] max-w-[10px] md:max-w-[20px] z-20"
              : "left-[10%] md:left-[45%] bottom-[2%] md:bottom-[13%] max-w-[10px] md:max-w-[20px] z-20"
          }`}
          style={{ y: star2Y }}
        >
          <Image src={star5} alt="Star 1" />
        </motion.div>
        <motion.div
          //variants={createBlinkingAnimation(isBlinkingStar1)}
          initial="initial"
          animate="animate"
          className={`absolute ${
            locale === "/"
              ? "right-[20%] md:left-[43%] bottom-[10%] md:-bottom-[-8%] max-w-[10px] md:max-w-[10px] z-20"
              : "left-[20%] md:left-[43%] bottom-[20%] md:-bottom-[-8%] max-w-[10px] md:max-w-[10px] z-20"
          } max-w-[10px] md:max-w-[10px] z-20  `}
          style={{ y: star2Y }}
        >
          <Image src={star5} alt="Star 1" />
        </motion.div>
        <motion.div
          variants={createBlinkingAnimation(isBlinkingStar2)}
          initial="initial"
          animate="animate"
          className={`absolute ${
            locale === "/"
              ? "right-[25%] md:left-[50%] bottom-[17%] md:bottom-[8%] max-w-[10px] md:max-w-[10px] z-20"
              : "right-[65%] md:left-[50%] bottom-[10%] md:bottom-[8%] max-w-[10px] md:max-w-[10px] z-20"
          }`}
          style={{ y: star2Y }}
        >
          <Image src={star5} alt="Star 1" />
        </motion.div>
      </div>
    </Section>
  );
};

export default SectionTwo;
