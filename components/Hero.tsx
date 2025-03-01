"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

import Section from "./Section";
import Navbar from "./Navbar";
import { en } from "@/locales/en";
import { ar } from "@/locales/ar";
import { Translations } from "@/types";
import { usePathname } from "next/navigation";
import moonSpoon from "@/public/moon_with_spoon.png";
import star5 from "@/public/star5.png";
import bg_product from "@/public/hero_products.png";
import bg_gold from "@/public/bg_gold.png";
import bg_gold_mobile from "@/public/bg_gold_mobile.png";
import ramadaan_logo from "@/public/ramadaan_logo.png";
import top_lamp from "@/public/top_left.png";
import logo from "@/public/logo.png";

const Hero = () => {
  const locale = usePathname();
  const t: Translations = locale === "/" ? en : ar;
  const { scrollY } = useScroll();
  const bgGoldY = useTransform(scrollY, [0, 500], [0, 100]);
  const star1Y = useTransform(scrollY, [0, 500], [0, -50]);
  const star2Y = useTransform(scrollY, [0, 500], [0, -30]);
  const star3Y = useTransform(scrollY, [0, 500], [0, -70]);
  const star4Y = useTransform(scrollY, [0, 500], [0, -20]);
  const star5Y = useTransform(scrollY, [0, 500], [0, -40]);
  const star6Y = useTransform(scrollY, [0, 500], [0, -10]);
  const star7Y = useTransform(scrollY, [0, 500], [0, -60]);

  const [isBlinkingStar1, setIsBlinkingStar1] = useState(false);
  const [isBlinkingStar2, setIsBlinkingStar2] = useState(false);
  const [isBlinkingStar3, setIsBlinkingStar3] = useState(false);
  const [isBlinkingStar4, setIsBlinkingStar4] = useState(false);
  const [isBlinkingStar5, setIsBlinkingStar5] = useState(false);
  const [isBlinkingStar6, setIsBlinkingStar6] = useState(false);
  const [isBlinkingStar7, setIsBlinkingStar7] = useState(false);
  const [isBlinkingStar8, setIsBlinkingStar8] = useState(false);

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
      setInterval(() => blinkAnimation(setIsBlinkingStar3), randomInterval()),
      setInterval(() => blinkAnimation(setIsBlinkingStar4), randomInterval()),
      setInterval(() => blinkAnimation(setIsBlinkingStar5), randomInterval()),
      setInterval(() => blinkAnimation(setIsBlinkingStar6), randomInterval()),
      setInterval(() => blinkAnimation(setIsBlinkingStar7), randomInterval()),
      setInterval(() => blinkAnimation(setIsBlinkingStar8), randomInterval()),
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
    <Section>
      <div className="absolute z-50">
        {" "}
        <Navbar />
      </div>
      <div
        className="flex  min-h-[95vh] md:min-h-[700px] relative flex-col items-center justify-start
      hero overflow-hidden md:rounded-t-3xl
      "
      >
        <div className="absolute -right-12 -top-[62px] md:-right-14 md:-top-20 flex flex-row items-center justify-center">
          <Image
            className=" max-w-[200px] md:max-w-[300px]"
            src={logo}
            alt="Logo"
          />
        </div>
        <div
          className="absolute  flex flex-row items-center justify-center
        left-4 md:left-16 -top-2 md:top-0"
        >
          <Image
            className="max-w-[100px] md:max-w-[110px]"
            src={top_lamp}
            alt="top lamps"
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: "-10%" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col md:flex-row items-center justify-center"
        >
          <Image
            className="max-w-[58%] md:max-w-[410px] mt-[40%] sm:mt-[63%] md:mt-[15%]"
            src={moonSpoon}
            alt="Moon with Spoon"
          />
          <motion.div
            style={{ y: star1Y }}
            dangerouslySetInnerHTML={{ __html: t.herotitle }}
            className={` mt-4 sm:mt-7 md:mt-0 z-50 md:-ml-48 text-secondary 
                ${
                  locale === "/ar"
                    ? "font-Zain-Black text-5xl md:text-6xl"
                    : "font-Gotham-Bold text-2xl md:text-3xl"
                }
                `}
          ></motion.div>
        </motion.div>

        {/* Background Image */}
        <motion.div
          className="absolute bottom-0 md:-bottom-2 z-10"
          style={{ y: bgGoldY }}
          initial={{ opacity: 0, y: "10%" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Image className="md:block hidden" src={bg_gold} alt="Golden Day" />
          <Image className="md:hidden" src={bg_gold_mobile} alt="Golden Day" />
        </motion.div>

        <div className="">
          {/* Stars with parallax effect */}
          <motion.div
            variants={createBlinkingAnimation(isBlinkingStar1)}
            initial="initial"
            animate="animate"
            className="absolute left-[10%] md:left-[25%] top-[45%] max-w-[20px] md:max-w-[50px] z-20"
            style={{ y: star1Y }}
          >
            <Image src={star5} alt="Star 1" />
          </motion.div>
          <motion.div
            variants={createBlinkingAnimation(isBlinkingStar2)}
            initial="initial"
            animate="animate"
            className="absolute left-[35%] md:left-[30%] top-[5%] max-w-[10px] md:max-w-[30px] z-10"
            style={{ y: star2Y }}
          >
            <Image src={star5} alt="Star 2" />
          </motion.div>
          <motion.div
            variants={createBlinkingAnimation(isBlinkingStar3)}
            initial="initial"
            animate="animate"
            className="absolute left-[25%] md:left-[40%] bottom-[22%] md:bottom-[29%] max-w-[10px] md:max-w-[30px] z-20"
            style={{ y: star3Y }}
          >
            <Image src={star5} alt="Star 3" />
          </motion.div>
          <motion.div
            variants={createBlinkingAnimation(isBlinkingStar4)}
            initial="initial"
            animate="animate"
            className="absolute right-[40%] md:right-[32%] bottom-[39%] md:bottom-[33%] max-w-[10px] md:max-w-[30px] z-20"
            style={{ y: star3Y }}
          >
            <Image src={star5} alt="Star 3" />
          </motion.div>
          <motion.div
            variants={createBlinkingAnimation(isBlinkingStar5)}
            initial="initial"
            animate="animate"
            className="absolute top-[42%] md:top-[42%] right-[40%] md:right-[48%] max-w-[10px] md:max-w-[20px] z-10"
            style={{ y: star4Y }}
          >
            <Image src={star5} alt="Star 4" />
          </motion.div>
          <motion.div
            variants={createBlinkingAnimation(isBlinkingStar6)}
            initial="initial"
            animate="animate"
            className="absolute top-[25%] md:top-[18%] right-[40%] max-w-[10px] md:max-w-[20px] z-20"
            style={{ y: star5Y }}
          >
            <Image src={star5} alt="Star 5" />
          </motion.div>
          <motion.div
            variants={createBlinkingAnimation(isBlinkingStar7)}
            initial="initial"
            animate="animate"
            className="absolute right-[15%] md:right-[23%] top-[35%] md:top-[40%] max-w-[15px] z-10"
            style={{ y: star6Y }}
          >
            <Image src={star5} alt="Star 6" />
          </motion.div>
          <motion.div
            variants={createBlinkingAnimation(isBlinkingStar8)}
            initial="initial"
            animate="animate"
            className="absolute right-[8%] top-[50%] max-w-[10px] z-20"
            style={{ y: star7Y }}
          >
            <Image src={star5} alt="Star 7" />
          </motion.div>
        </div>

        <div className="absolute bottom-2 md:bottom-0 flex flex-row items-center justify-between w-full pl-2 md:pl-10 pr-2 md:pr-10">
          <motion.div
            className="z-50 max-w-[150px] md:max-w-[300px] mt-[20%] md:mt-[18%]"
            initial={{ opacity: 0, x: "-10%" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <Image src={ramadaan_logo} alt="Product" />
          </motion.div>
          <motion.div
            className="z-40 max-w-[350px] md:max-w-[440px]"
            initial={{ opacity: 0, x: "10%" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <Image src={bg_product} alt="Product" />
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
