"use client";
import React, { useState, useEffect } from "react";
import LangDropDown from "@/components/custom/LangDropDown";
import NavBurger from "@/components/custom/NavBurger";
import Link from "next/link";
import { Link as LinkScroll } from "react-scroll";

export default function Navbar() {
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
      <div className="flex items-center sm: justify-center">
        <a className="cursor-pointer ">
          <h3 className="text-2xl font-medium text-orange-600 ml-5">
            Free me VPN
          </h3>
        </a>
      </div>

      <div className="items-center hidden space-x-8 md:flex">
        <LinkScroll
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          duration={1000}
          onSetActive={() => {
            setActiveLink("home");
          }}
          className={
            "flex text-gray-600 hover:text-orange-500 cursor-pointer transition-colors duration-300" +
            (activeLink === "home"
              ? " text-orange-500 animation-active "
              : " text-black-500 hover:text-orange-500 a")
          }
        >
          Home
        </LinkScroll>

        <LinkScroll
          activeClass="active"
          to="servers"
          spy={true}
          smooth={true}
          duration={1000}
          onSetActive={() => {
            setActiveLink("servers");
          }}
          className={
            "flex text-gray-600 hover:text-orange-500 cursor-pointer transition-colors duration-300" +
            (activeLink === "servers"
              ? " text-orange-500 animation-active "
              : " text-black-500 hover:text-orange-500 ")
          }
        >
          Servers
        </LinkScroll>

        <LinkScroll
          activeClass="active"
          to="feature"
          spy={true}
          smooth={true}
          duration={1000}
          onSetActive={() => {
            setActiveLink("feature");
          }}
          className={
            "flex text-gray-600 hover:text-orange-500 cursor-pointer transition-colors duration-300" +
            (activeLink === "feature"
              ? " text-orange-500 animation-active "
              : " text-black-500 hover:text-orange-500 ")
          }
        >
          Feature
        </LinkScroll>

        <a
          className="flex text-gray-600 hover:text-orange-500
                    cursor-pointer transition-colors duration-300"
        >
          How to connect
        </a>

        <a
          className="flex text-gray-600 hover:text-orange-500
                    cursor-pointer transition-colors duration-300"
        ></a>

        <a
          className="flex text-gray-600 hover:text-orange-500
                    cursor-pointer transition-colors duration-300"
        ></a>

        <a
          className="flex text-gray-600 hover:text-orange-500
                    cursor-pointer transition-colors duration-300"
        >
          About Us
        </a>
      </div>

      <div className=" items-center cursor-pointer space-x-5 hover:opacity-25 hidden md:flex">
        <LangDropDown />
      </div>

      <div className="flex curser-pointer hover:opacity-25 md:hidden lg:hidden xl:hidden 2xl:hidden mr-7">
        <NavBurger />
      </div>
    </nav>
  );
}
