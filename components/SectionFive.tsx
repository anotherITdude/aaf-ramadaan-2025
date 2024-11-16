import React from "react";
import section_five from "@/public/section_5.png";
import Section from "./Section";
import Image from "next/image";
const SectionFive = () => {
  return (
    <Section className="pb-6">
      <div className=" flex md:min-h-[600px] section5 min-h-[500px] relative  ">
        <div>
        <Image
          className="absolute max-w-[330px] -bottom-6"
          src={section_five}
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

export default SectionFive;
