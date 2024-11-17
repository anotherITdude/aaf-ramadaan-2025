'use client'
import React from "react";
import { twMerge } from "tailwind-merge";

interface SectionInterface {
  children?: React.ReactNode;
  className?:  string;
}

const Section: React.FC<SectionInterface> = ({ children, className }) => {
  return (
    <div className={`md:pt-0 md:pb-0  
    
    min-h-[100px] mb-4 bg-white ${twMerge(className)}`}>
      {children}
    </div>
  );
};

export default Section;
