"use client";
import React, { useState, useEffect } from "react";
import LangDropDown from "@/components/custom/LangDropDown";
import NavBurger from "@/components/custom/NavBurger";
import Link from "next/link";
import Image from "next/image";

export default function PageNavbar() {
  const [activeLink, setActiveLink] = useState("");
  const [scrollActive, setScrollActive] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);
  return (
    <nav
      className="flex md:justify-around lg:justify-around xl:justify-around 2xl:justify-around justify-between py-4 bg-white/80
            backdrop-blur-md shadow-md w-full
            fixed top-0 left-0 right-0 z-20"
    >
      <div className="flex items-center sm: justify-center  w-4/12">
        <a className="flex cursor-pointer w-4/12 xs:w-2/12 sm:w-2/12 md:w-2/12 lg:w-1/12 xl:w-1/12 2xl:w-1/12 flex-row">
          <div className="w-10/12">
            <Image
              src="/assets/freemevpn.png"
              alt="Free me VPN"
              quality={100}
              width={5}
              height={5}
              layout="responsive"
            />
          </div>
        </a>

        <a className="flex cursor-pointer xs:hidden sm:hidden md:hidedn lg:hidden xl:hidden 2xl:hidden">
          <h3 className="sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl text-lg text-orange-600 ml-1">
            Free Me
          </h3>
        </a>
        <a className="hidden cursor-pointer xs:flex sm:flex md:flex lg:flex xl:flex 2xl:flex">
          <h3 className="sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl font-medium text-orange-600 ml-5">
            Free me VPN
          </h3>
        </a>
      </div>

      <div className="items-center hidden space-x-8 md:flex">
        <Link
          href={"/"}
          className={
            "flex text-gray-600 hover:text-orange-500 cursor-pointer transition-colors duration-300" +
            (activeLink === "home"
              ? " text-orange-500 animation-active "
              : " text-black-500 hover:text-orange-500 a")
          }
        >
          Home
        </Link>

        <Link
          href={"/"}
          className={
            "flex text-gray-600 hover:text-orange-500 cursor-pointer transition-colors duration-300" +
            (activeLink === "servers"
              ? " text-orange-500 animation-active "
              : " text-black-500 hover:text-orange-500 ")
          }
        >
          Servers
        </Link>

        <Link
          href={"/"}
          className={
            "flex text-gray-600 hover:text-orange-500 cursor-pointer transition-colors duration-300" +
            (activeLink === "feature"
              ? " text-orange-500 animation-active "
              : " text-black-500 hover:text-orange-500 ")
          }
        >
          Feature
        </Link>

        <Link
          href={"/how-to-connect"}
          className={
            "flex text-gray-600 hover:text-orange-500 cursor-pointer transition-colors duration-300" +
            (activeLink === "how-to-connect"
              ? " text-orange-500 animation-active "
              : " text-black-500 hover:text-orange-500 ")
          }
        >
          How to connect
        </Link>

        <a
          className="flex text-gray-600 hover:text-orange-500
                    cursor-pointer transition-colors duration-300"
        ></a>

        <a
          className="flex text-gray-600 hover:text-orange-500
                    cursor-pointer transition-colors duration-300"
        ></a>

        {/* <a
          className="flex text-gray-600 hover:text-orange-500
                    cursor-pointer transition-colors duration-300"
        >
          About Us
        </a> */}
      </div>

      <div className=" items-center cursor-pointer space-x-5 hover:opacity-25 hidden md:flex">
        {/* <LangDropDown /> */}
      </div>

      <div className="flex curser-pointer hover:opacity-25 md:hidden lg:hidden xl:hidden 2xl:hidden mr-7">
        <NavBurger />
      </div>
    </nav>
  );
}
