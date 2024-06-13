"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";

const Homepage = () => {
  const { theme } = useTheme();
  return (
    <section
      id="Home"
      className={`${
        theme === "dark" && "bg-grey-900"
      } relative min-h-screen w-full mx-auto overflow-hidden`}
    >
      <div className="absolute -z-10 min-h-screen h-full w-full">
        <Image
          src="/bg.jpg"
          layout="fill"
          objectFit="cover"
          loading="lazy"
          className="object-bottom"
          quality={100}
          alt={"bgimg"}
        />
      </div>
      <div className="py-16 lg:py-48 flex flex-col-reverse lg:flex-row justify-around gap-10 lg:gap-0">
        Hellos
      </div>
    </section>
  );
};

export default Homepage;
