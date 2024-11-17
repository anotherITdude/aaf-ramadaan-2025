"use client";
import React from "react";
import section_four from "@/public/section_4.png";
import Section from "./Section";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Translations } from "@/types";
import { en } from "@/locales/en";
import { ar } from "@/locales/ar";
import { motion } from "framer-motion";

const SectionFour = () => {
  const locale = usePathname();
  const t: Translations = locale === "/" ? en : ar;

  // Animation variants for text
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  return (
    <Section className="pb-6">
      <div className="flex flex-col pt-0 md:pt-0 md:min-h-[600px] section4SM md:section4 min-h-[500px] relative">
        <div>
          {/* Animated background image with fixed size */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }} // Triggers when 20% of the component is visible
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
            }}
            className="absolute z-10 -bottom-10 left-0 md:-bottom-0"
            style={{ maxWidth: '300px', width: '100%' }} // Ensure image doesn't resize unexpectedly
          >
            <Image
              className="w-full"
              src={section_four}
              alt="bg"
              width={300} // Set a fixed width for the image to ensure consistency
              height={300} // Set a fixed height to maintain aspect ratio
            />
          </motion.div>
        </div>
        <div className="flex w-full justify-center text-center md:justify-end">
          <div
            className={`w-full md:w-[60%] p-6 md:p-20 text-right ${
              locale === "/" ? "font-Albus text-5xl" : "font-Zain-Black text-4xl md:text-5xl"
            }`}
          >
            {/* Animated text with whileInView */}
            <motion.p
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }} // Triggers when 20% of the component is visible
            >
              {t.nationalday1}
            </motion.p>
            <motion.p
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }} // Triggers when 20% of the component is visible
              transition={{ delay: 0.2 }}
            >
              {t.nationalday2}
            </motion.p>
            <motion.p
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }} // Triggers when 20% of the component is visible
              transition={{ delay: 0.4 }}
            >
              {t.nationalday3}
            </motion.p>
            <motion.p
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }} // Triggers when 20% of the component is visible
              transition={{ delay: 0.6 }}
            >
              {t.nationalday4}
            </motion.p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default SectionFour;
