import React from "react";
import bg from "@/public/test.png";
import Image from "next/image";
import bg_product from "@/public/Group34.png";
import Section from "./Section";
const Hero = () => {
  return (
    <Section>
      <div className="md:min-h-[600px]  relative ">
        <Image className="absolute bottom-0" src={bg} alt="bg" />
        <Image
          className="absolute w-full -bottom-[4.1%] right-0"
          src={bg_product}
          alt="bg"
        />
        <div className="w-[52%] md:text-6xl p-20 font-Albus">
          <div className="flex justify-start items-center">
            <div>Happy</div>
            <div className="text-8xl">
              53 
            </div>
            <div><sup className="text-4xl">rd</sup></div>
          </div>
          <p>National Day</p>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
