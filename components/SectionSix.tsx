import React from "react";
import section_six from "@/public/section_6.png";
import Section from "./Section";
import Image from "next/image";
const SectionSix = () => {
  return (
    <Section className="pb-6">
      <div className=" flex md:min-h-[600px] section6 min-h-[500px] relative  ">
        <div>
        <Image
          className="absolute max-w-[450px] -bottom-0 left-6"
          src={section_six}
          alt="bg"
        />
        </div>
        <div className="flex justify-end">
          <p className="w-[50%] p-20 font-Gotham-Book text-right">
          The result is three exclusive illustrations, <span className="font-Gotham-Bold">featuring key landmarks of the UAE </span>such as Old Dubai and Abu Dhabi that hold a mirror to desert life and activities in the Emirates.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default SectionSix;
