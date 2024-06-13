"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "@/public/logo.png";
import Link from "next/link";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const links = [
  {
    titel: "Home",
    herf: "#home",
  },
  {
    titel: "About",
    herf: "#home",
  },
  {
    titel: "Projects",
    herf: "#home",
  },
  {
    titel: "Experience",
    herf: "#home",
  },
  {
    titel: "Projects",
    herf: "#home",
  },
  {
    titel: "Contact",
    herf: "#home",
  },
];
const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    const updateScroll = () => {
      window.scrollY >= 90 ? setScroll(true) : setScroll(false);
    };
    window.addEventListener("scroll", updateScroll);
  }, []);

  return (
    <div
      className={`backdrop-filter backdrop-blur-lg ${
        scroll ? "border-b bg-white bg-opacity-40" : "border-b-0"
      } dark:bg-grey-900 dark:bg-opacity-40 border-gray-200 px-24 py-4 dark:border-b-0 z-30 min-w-full flex flex-col fixed`}
    >
      <div className="flex w-full items-center justify-between">
        <div className="w-[45px]">
          <Link href="#home">
            <Image src={logo} alt="logo" />
          </Link>
        </div>
        <div className="flex items-center justify-normal gap-8">
          {links.map((link) => (
            <Link
              href={link.herf}
              key={link.herf}
              className="text-[20px] dark:text-black font-[400] hover:text-[#9254cc]"
            >
              {link.titel}
            </Link>
          ))}
          <div
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="p-2 bg-transparent transition-all ease-in hover:p-2 hover:rounded-full hover:bg-[#0000000a] cursor-pointer"
          >
            {theme === "light" ? (
              <Moon className="text-black" />
            ) : (
              <Sun className="text-black" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
