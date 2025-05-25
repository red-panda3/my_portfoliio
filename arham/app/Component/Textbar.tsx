import React from "react";
import { Geist, Geist_Mono } from "next/font/google";

const geist = Geist({ subsets: ["latin"] });
const geistMono = Geist_Mono({ subsets: ["latin"] });

interface TextBarProps {
  Name: string;
  Title: string;
  size: number;
  side?: boolean;
}
const TextBar: React.FC<TextBarProps> = ({ Name, Title, size, side = true }) => {
  return (
    <div className={`w-full flex ${side ? "flex-row" : "flex-col"} gap-1 ${geist.className} mt-3.5 text-white ml-3`}>
      <p className={`${geistMono.className} md:text-2xl  text-xl`}>{Title}</p>
      <p className={`${geistMono.className} md:${`text-${size}xl`} text-lg`}>{Name}</p>
    </div>
  );
};

export default TextBar;