"use client";
import React from "react";
import { usePathname } from "next/navigation";
interface ContainerProps {
  children: React.ReactNode;
}
const Container: React.FC<ContainerProps> = ({ children }) => {
  const locale = usePathname();
  return (
    <div
      dir={`${locale === "/ar" ? "rtl" : "ltr"}`}
      className="max-w-full
       lg:max-w-[1100px]
        mx-auto bg-white
        rounded-sm"
    >
      {children}
    </div>
  );
};

export default Container;
