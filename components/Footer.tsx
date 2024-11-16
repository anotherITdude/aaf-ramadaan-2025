import React from "react";
import Image from "next/image";
import bg_footer from "@/public/footer_bg.png";
import Section from "./Section";
const Footer = () => {
  return (
    <Section>
      <div className="md:min-h-[100px] relative ">
        <Image
          className="absolute w-full -bottom-[4.1%] right-0"
          src={bg_footer}
          alt="bg"
        />
      </div>
    </Section>
  );
};

export default Footer;
