"use client";
import { ScoreContext } from "@/contexts/contexts";
import Image from "next/image";
import { useContext, useState } from "react";

const Header = () => {
  const scoreContext = useContext(ScoreContext);
  return (
    <div className="w-[85%] flex items-center justify-between border border-gray-100 rounded-lg px-6 py-3 md:max-w-[60%]">
      <Image src={"/images/logo.svg"} width={100} height={50} alt={"logo"} />
      <div className="flex flex-col items-center gap-1 bg-white px-5 py-3 rounded-lg md:px-10 md:py-4">
        <p style={{ color: "var(--score-text)" }} className="font-bold text-xs">
          SCORE
        </p>
        <p
          className="font-black text-4xl md:text-5xl"
          style={{ letterSpacing: "-.05em" }}
        >
          {scoreContext?.score}
        </p>
      </div>
    </div>
  );
};

export default Header;
