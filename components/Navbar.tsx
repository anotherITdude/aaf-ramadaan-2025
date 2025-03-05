"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const Navbar = () => {
  const locale = usePathname();
  const locales = ["en", "ar"];
  const [animationComplete, setAnimationComplete] = useState(false);

  // Trigger the animation once when the component is mounted
  useEffect(() => {
    setAnimationComplete(true);
  }, []);

  // Animation variants for navbar items
  const navbarVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <div className="flex justify-between pl-4 pr-4 md:pl-4 md:pr-0 pt-3 pb-3 items-center z-50 bg-white/90 rounded-br-3xl">
      {/* Animated Language Switcher */}
      <motion.div
        initial="hidden"
        animate={animationComplete ? "visible" : "hidden"}
        variants={navbarVariants}
        className="md:pr-4 text-lg"
      >
        {locales.map((lang, index) => (
          <React.Fragment key={lang}>
            <Link
              href={lang === "en" ? "/" : `/${lang}`}
              className={`${
                locale === `/${lang}` || (locale === "/" && lang === "en")
                  ? "text-gray-500 cursor-not-allowed underline animate-pulse underline-offset-4 font-Gotham-Bold"
                  : "text-black cursor-pointer font-Gotham-Bold"
              }`}
            >
              {lang === "ar" ? "Ar" : "En"}
            </Link>
            {index !== locales.length - 1 && (
              <span className="font-DIN-Bold pr-1 pl-1 text-md ">&#x2022;</span>
            )}
          </React.Fragment>
        ))}
      </motion.div>

      {/* Animated Logo */}
    </div>
  );
};

export default Navbar;
