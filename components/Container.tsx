"use client";
import React from "react";
//import { usePathname } from "next/navigation";
interface ContainerProps {
  children: React.ReactNode;
}
const Container: React.FC<ContainerProps> = ({ children }) => {
  //const locale = usePathname();
  return (
    <div
      className="max-w-full
       lg:max-w-[1100px]
        mx-auto 
        rounded-sm"
    >
      {children}
    </div>
  );
};

export default Container;
