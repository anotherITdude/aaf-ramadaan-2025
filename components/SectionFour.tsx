import React from "react";
import section_four from "@/public/section_4.png";
import Section from "./Section";
import Image from "next/image";
const SectionFour = () => {
  return (
    <Section className="pb-6">
      <div className=" flex md:min-h-[600px] section4 min-h-[500px] relative  ">
      <div>
        <Image
          className="absolute max-w-[300px] -bottom-0"
          src={section_four}
          alt="bg"
        />
        </div>
        <div className="flex w-full justify-end">
          <div className="w-[60%] p-20 text-5xl  font-Albus text-right">
            <p>National Day</p>
            <p>Special </p>
            <p>Edition </p>
            <p>Packs </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default SectionFour;
