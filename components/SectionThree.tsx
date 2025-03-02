"use client";
import React from "react";
import Section from "@/components/Section";
import { en } from "@/locales/en";
import { ar } from "@/locales/ar";
import { Translations } from "@/types";
import { usePathname } from "next/navigation";

const SectionThree = () => {
  const locale = usePathname();
  const t: Translations = locale === "/" ? en : ar;
  return (
    <Section>
      <div className="sectiontwo flex min-h-[650px] flex-col justify-center items-end p-6 ">
        <div className="w-[60%]">
        <h2 dangerouslySetInnerHTML={{ __html: t.section2title }} />
        <p dangerouslySetInnerHTML={{ __html: t.section2Paragraph }} />
        </div>
      </div>
    </Section>
  );
};

export default SectionThree;
