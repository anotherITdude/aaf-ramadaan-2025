import React from "react";
import Section from "./Section";
import abdulla from "@/public/abdulla.png";
import abdulla_comment from "@/public/abdulla_comment.png";
import abdulla_glide from "@/public/abdulla_glide.png";
import abdulla_parachute from "@/public/abdulla_parachute.png";
import signature_big from "@/public/signature_big.png";
import Image from "next/image";
const Abdulla = () => {
  return (
    <Section className="relative">
      <Image className="absolute w-[100px]
      top-10 right-40
      " src={abdulla_glide} alt="abdulla" />
      <Image
        className="absolute w-[60px]
        bottom-40 right-28"
        src={abdulla_parachute}
        alt="abdulla"
      />
      <div className="flex justify-center items-center min-h-[560px]">
        <div>
          <Image className="max-w-[300px]" src={abdulla} alt="abdulla" />
        </div>
        <div>
          <div className="flex flex-col font-Albus text-4xl">
            <div className="flex justify-start">Celebrating</div>
            <div className="flex justify-center">Abdulla Lutfi’s</div>
            <div className="flex justify-end">unique local take</div>
          </div>
          <div>
            <Image
              className="max-w-[400px] -ml-10"
              src={abdulla_comment}
              alt="abdulla"
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
