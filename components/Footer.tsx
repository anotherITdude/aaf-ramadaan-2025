import React from "react";
import Image from "next/image";
import bg_footer from "@/public/footer_bg.png";
import Section from "./Section";
const Footer = () => {
  return (
    <Section>
      <div className="relative ">
        <Image
          className="absolute w-full bg-white  right-0"
          src={bg_footer}
          alt="bg"
        />
      </div>
    </Section>
  );
};

export default Footer;
