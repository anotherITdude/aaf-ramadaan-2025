"use client";
import React from "react";
import Section from "./Section";
import abdulla from "@/public/abdulla.png";
import abdulla_comment from "@/public/abdulla_comment.png";
import abdulla_comment_ar from "@/public/abdulla_comment_ar.png";
import abdulla_glide from "@/public/abdulla_glide.png";
import abdulla_parachute from "@/public/abdulla_parachute.png";
import signature_big from "@/public/signature_big.png";
import Image from "next/image";
import { en } from "@/locales/en";
import { ar } from "@/locales/ar";
import { Translations } from "@/types";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const Abdulla = () => {
  const locale = usePathname();
  const t: Translations = locale === "/" ? en : ar;

  // Animation variants for text
  const textVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  // Glider animation for oval movement and rotation
  const glideVariants = {
    gliding: {
      rotate: [0, -5, 5, 0], // Tilt the glider to the left and right
      x: [0, -20, 0], // Oval path on the X-axis
      y: [0, -10, 0], // Oval path on the Y-axis
      scale: [1, 0.8, 1], // Scale up slightly and then return to original size
      transition: {
        duration: 7,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      },
    },
  };

  // Parachute animation for floating and rotation
  const parachuteVariants = {
    floating: {
      y: [1, -1, 1], // Float up and down
      rotate: [0, -5, 5, 0], // Tilt to simulate floating motion
      transition: {
        duration: 5,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      },
    },
  };

  return (
    <Section className="relative">
      <motion.div
        className="absolute w-[80px] md:w-[100px] top-[150px] left-10 md:top-10 md:left-auto md:right-40"
        //@ts-expect-error variants structure issue
        variants={glideVariants}
        animate="gliding"
      >
        <Image className="w-full" src={abdulla_glide} alt="abdulla gliding" />
      </motion.div>

      {/* Parachute animation */}
      <motion.div
        //@ts-expect-error variants structure issue
        variants={parachuteVariants}
        animate="floating"
        className="absolute top-[30%] md:top-[50%] right-8 md:right-28"
      >
        <Image
          className="w-[50px] md:w-[60px]"
          src={abdulla_parachute}
          alt="abdulla parachute"
        />
      </motion.div>

      <div className="flex flex-col md:flex-row justify-center items-center min-h-[560px] p-6 md:pt-10">
        <div
          className={`flex w-full md:hidden mb-16 flex-col ${
            locale === "/" ? "font-Albus text-4xl" : "font-Zain-Black text-4xl"
          }`}
        >
          {/* Text with motion animation */}
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate="visible"
            dangerouslySetInnerHTML={{ __html: t.abdulla1 }}
            className={`flex ${
              locale === "/" ? "justify-start" : "justify-start"
            }`}
          />
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate="visible"
            dangerouslySetInnerHTML={{ __html: t.abdulla2 }}
            className={`flex ${
              locale === "/" ? "justify-center" : "justify-center"
            }`}
          />
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate="visible"
            dangerouslySetInnerHTML={{ __html: t.abdulla3 }}
            className={`flex ${locale === "/" ? "justify-end" : "justify-end"}`}
          />
        </div>

        <div>
          <Image
            className={`max-w-[300px] ${
              locale === "/" ? "mt-6 md:mt-0 mb-6" : "mt-6 md:mt-0 mb-10"
            }`}
            src={abdulla}
            alt="abdulla"
          />
        </div>

        <div>
          <div
            className={`flex-col hidden md:flex ${
              locale === "/"
                ? "font-Albus text-4xl"
                : "font-Zain-Black text-4xl"
            }`}
          >
            {/* Text with motion animation */}
            <motion.div
              variants={textVariants}
              initial="hidden"
              animate="visible"
              dangerouslySetInnerHTML={{ __html: t.abdulla1 }}
              className={`flex ${
                locale === "/" ? "justify-start" : "justify-start"
              }`}
            />
            <motion.div
              variants={textVariants}
              initial="hidden"
              animate="visible"
              dangerouslySetInnerHTML={{ __html: t.abdulla2 }}
              className={`flex ${
                locale === "/" ? "justify-center" : "justify-center"
              }`}
            />
            <motion.div
              variants={textVariants}
              initial="hidden"
              animate="visible"
              dangerouslySetInnerHTML={{ __html: t.abdulla3 }}
              className={`flex ${
                locale === "/" ? "justify-end" : "justify-end"
              }`}
            />
          </div>

          <div>
            <motion.div
              variants={textVariants}
              initial="hidden"
              animate="visible"
              dangerouslySetInnerHTML={{ __html: t.abdullaComment }}
              className={`flex mb-6 md:hidden ${
                locale === "/"
                  ? "justify-center text-left items-center text-xl font-Gotham-Book mt-8"
                  : "text-2xl md:text-lg font-GE-SS-Text-Light text-right justify-center mt-10"
              }`}
            />
            <Image
              className="hidden md:block max-w-[400px] -ml-10"
              src={`${
                locale === "/" ? abdulla_comment.src : abdulla_comment_ar.src
              }`}
              alt="abdulla"
              layout="intrinsic"
              width={400}
              height={400}
            />
          </div>

          <div className="flex justify-end">
            <Image
              className="max-w-[150px]"
              src={signature_big}
              alt="abdulla"
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Abdulla;
