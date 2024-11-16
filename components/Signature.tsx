import React from "react";
import Section from "./Section";
import signature_bg from "@/public/signature_bg.png";
import signature_sign from "@/public/signature_sign.png";
import Image from "next/image";
const Signature = () => {
  return (
    <Section>
      <div className="flex w-full min-h-[450px] justify-center items-center  ">
        <div className="md:w-[55%] p-20 ">
          <p className="font-Gotham-Book">
            You can buy these unique special edition packs highlighting our
            culture and heritage, from{" "}
            <span className="font-Gotham-Bold">November 15 onwards</span>{" "}
            throughout the National Day period.
          </p>
          <p className="font-Gotham-Bold mt-4">
            Join us in appreciating the essence of everything local.
          </p>
        </div>
        <div className="flex  flex-col justify-center items-center md:w-[70%]">
          <Image className="w-[100%] mr-6" src={signature_bg} alt="bg" />
          <div className="flex justify-center gap-x-2 mt-4">
            <p className="font-Albus">
              © Limited Edition packaging for National Day 2024
            </p>
            <Image className="w-[90px]" src={signature_sign} alt="bg" />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Signature;
