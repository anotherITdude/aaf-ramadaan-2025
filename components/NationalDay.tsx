import React from "react";
import Section from "./Section";
import bg from "@/public/section_2.png";
import ballon from "@/public/section2_balloon.png";
import Image from "next/image";
const NationalDay = () => {
  return (
    <Section className="overflow-hidden">
      <div className=" flex md:min-h-[600px] relative justify-start  items-start">
        <Image
          className="absolute bottom-0 w-[96%] -right-3 "
          src={bg}
          alt="bg"
        />
        <Image
          className="absolute top-[15%] right-[15%] w-[100px]"
          src={ballon}
          alt="bg"
        />
        <p className="w-[52%] p-20 font-Gotham-Book">
          Ever since H.H. late Sheikh Zayed Bin Sultan Al Nahyan founded Al Ain
          Farms to bring fresh food to the nation over 40 years ago, Al Ain
          Farms is continuing its legacy and responsibility of serving the UAE
          people with freshest and purest dairy and poultry products. Al Ain
          Farms is proudly UAE made and since its inception has been deeply
          rooted within the Emirati culture.
        </p>
      </div>
    </Section>
  );
};

export default NationalDay;
