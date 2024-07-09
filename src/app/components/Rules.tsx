"use client";

import { useState } from "react";
import Image from "next/image";

const Rules = () => {
  const [activated, setActivated] = useState(false);
  return (
    <div>
      <button
        className="relative mt-[10%] border-2 border-white rounded-xl px-12 py-3 text-white font-bold text-xl hover:bg-white hover:text-blue-700 transition-all lg:mt-[50%]"
        onClick={() => (activated ? setActivated(false) : setActivated(true))}
      >
        RULES
      </button>
      <div
        className={
          !activated
            ? "hidden"
            : "bg-white absolute top-0 right-0 w-[100vw] h-[100vh] lg:fixed lg:max-w-[45vw] lg:max-h-[50vh] lg:top-[25vh] lg:left-[27.5vw] lg:rounded-xl"
        }
      >
        <div className="flex flex-col justify-center gap-44 h-[100vh] items-center lg:h-fit lg:gap-16">
          <div className="lg:flex lg:w-full lg:justify-between lg:px-8 lg:pt-10">
            <h1 className="font-bold text-4xl lg:text-3xl">RULES</h1>
            <button
              className="hidden lg:block"
              onClick={() => setActivated(false)}
            >
              <Image
                src={"/images/icon-close.svg"}
                width={20}
                height={20}
                alt="close icon"
              />
            </button>
          </div>
          <Image
            src={"/images/image-rules.svg"}
            width={400}
            height={300}
            alt="rules image"
          />
          <button className="lg:hidden" onClick={() => setActivated(false)}>
            <Image
              src={"/images/icon-close.svg"}
              width={30}
              height={30}
              alt="close icon"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rules;
