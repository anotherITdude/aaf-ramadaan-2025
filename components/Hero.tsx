"use client";
import React from "react";
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

  return (
    <Section>
      <Navbar />
      <div
        className="flex min-h-[700px] relative flex-col items-center justify-start
      hero overflow-hidden
      "
      >
        <div className="absolute -right-14 -top-20 flex flex-row items-center justify-center">
          <Image className="max-w-[300px]" src={logo} alt="Logo" />
        </div>
        <div className="absolute left-16 top-0 flex flex-row items-center justify-center">
          <Image className="max-w-[110px]" src={top_lamp} alt="Golden Day" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: "-10%" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-row items-center justify-center">
          <Image
            className="max-w-[410px] mt-[15%]"
            src={moonSpoon}
            alt="Moon with Spoon"
          />
          <div
            dangerouslySetInnerHTML={{ __html: t.herotitle }}
            className={`-ml-48 text-secondary 
                ${
                  locale === "/ar"
                    ? "arabic-font-class"
                    : "font-Gotham-Bold text-3xl"
                }
                `}
          ></div>
        </motion.div>

        {/* Background Image */}
        <motion.div
          className="absolute -bottom-2 z-10"
          style={{ y: bgGoldY }}
          initial={{ opacity: 0, y: "10%" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Image src={bg_gold} alt="Golden Day" />
        </motion.div>

        <div className="">
          {/* Stars with parallax effect */}
          <motion.div
            className="absolute left-[25%] top-[45%] max-w-[50px] z-20"
            style={{ y: star1Y }}
          >
            <Image src={star5} alt="Star 1" />
          </motion.div>
          <motion.div
            className="absolute left-[30%] top-[5%] max-w-[30px] z-10"
            style={{ y: star2Y }}
          >
            <Image src={star5} alt="Star 2" />
          </motion.div>
          <motion.div
            className="absolute left-[42%] bottom-[29%] max-w-[30px] z-20"
            style={{ y: star3Y }}
          >
            <Image src={star5} alt="Star 3" />
          </motion.div>
          <motion.div
            className="absolute right-[32%] bottom-[33%] max-w-[30px] z-20"
            style={{ y: star3Y }}
          >
            <Image src={star5} alt="Star 3" />
          </motion.div>
          <motion.div
            className="absolute top-[42%] right-[48%] max-w-[20px] z-10"
            style={{ y: star4Y }}
          >
            <Image src={star5} alt="Star 4" />
          </motion.div>
          <motion.div
            className="absolute top-[18%] right-[40%] max-w-[20px] z-20"
            style={{ y: star5Y }}
          >
            <Image src={star5} alt="Star 5" />
          </motion.div>
          <motion.div
            className="absolute right-[23%] top-[40%] max-w-[15px] z-10"
            style={{ y: star6Y }}
          >
            <Image src={star5} alt="Star 6" />
          </motion.div>
          <motion.div
            className="absolute right-[8%] top-[50%] max-w-[10px] z-20"
            style={{ y: star7Y }}
          >
            <Image src={star5} alt="Star 7" />
          </motion.div>
        </div>

        <div className="absolute bottom-0 flex flex-row items-center justify-between w-full pl-10 pr-10">
          <motion.div
            className="z-50 max-w-[300px] mt-[18%]"
            initial={{ opacity: 0, x: "-10%" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <Image src={ramadaan_logo} alt="Product" />
          </motion.div>
          <motion.div
            className="z-50 max-w-[440px]"
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
