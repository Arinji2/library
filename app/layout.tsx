"use client";
import Image from "next/image";
import "./globals.css";
import { Inter, IBM_Plex_Sans, Lato } from "next/font/google";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faBars, faTimes } from "@fortawesome/fontawesome-free-solid";
import * as React from "react";
import { useState, useEffect } from "react";

const iBM_Plex_Sans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: "500",
  variable: "--font-IBM",
});
const lato = Lato({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-Lato",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [scroll, setScroll] = useState(false);

  const [nav, setNav] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      var offset = window.scrollY;
      if (offset > 100) setScroll(true);
      else setScroll(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <html lang="en">
      <body className={`${lato.variable} ${iBM_Plex_Sans.variable}`}>
        {nav ? (
          <div className="fixed top-0 z-[5000] flex h-[100vh] w-full flex-col items-center justify-center gap-10 overflow-hidden bg-[#262626] transition-all duration-700 ease-in-out">
            <Image
              src={"/logo.png"}
              alt="Logo"
              width={176}
              height={95}
              className=""
            />

            <Link
              href="/books"
              className="group flex w-fit flex-col items-center justify-center hover:cursor-pointer"
            >
              <p className="font-lato text-[30px] font-bold text-white  ">
                Books
              </p>
              <div className="h-[4px] w-full origin-left scale-x-0 bg-transparent transition-all duration-500 ease-in-out group-hover:scale-x-100 group-hover:bg-white"></div>
            </Link>
            <Link
              href="/authors"
              className="group flex w-fit flex-col items-center justify-center hover:cursor-pointer"
            >
              <p className="font-lato text-[30px] font-bold text-white">
                Authors
              </p>
              <div className="h-[4px] w-full origin-left scale-x-0 bg-transparent transition-all duration-500 ease-in-out group-hover:scale-x-100 group-hover:bg-white"></div>
            </Link>
            <Link
              href="/genres"
              className="group flex w-fit flex-col items-center justify-center hover:cursor-pointer"
            >
              <p className="font-lato text-[30px] font-bold text-white">
                Genres
              </p>
              <div className="h-[4px] w-full origin-left scale-x-0 bg-transparent transition-all duration-500 ease-in-out group-hover:scale-x-100 group-hover:bg-white"></div>
            </Link>
            <Link
              href="/login"
              className="mr-4 border-2 border-[#E8772E] bg-[#E8772E] pb-2 pl-5 pr-5 pt-2 font-lato text-[30px] font-bold text-white transition-all duration-300 ease-in-out hover:cursor-pointer hover:bg-white hover:text-[#E8772E]"
            >
              Login
            </Link>
            <FontAwesomeIcon
              icon={faTimes as IconProp}
              className=" right-5 mr-4 block h-[30px] w-[30px] text-white md:hidden"
              onClick={() => setNav(!nav)}
            />
          </div>
        ) : (
          <div className=" h-0 w-full bg-[#262626] transition-all duration-700 ease-in-out"></div>
        )}
        <div
          className={`${
            scroll ? "bg-[#262626] " : "bg-transparent "
          }fixed top-0 z-[1000] flex h-[120px] w-full flex-row items-center justify-evenly transition-all duration-300 ease-in-out`}
        >
          <div
            className={`${
              nav ? "hidden " : "flex "
            } h-full w-full flex-row items-center justify-between transition-all duration-1000 ease-in-out md:w-[30%] md:flex-col md:items-start md:justify-center md:gap-0`}
          >
            <Image
              src={"/logo.png"}
              alt="Logo"
              width={176}
              height={95}
              className="ml-4"
            />
            <FontAwesomeIcon
              icon={faBars as IconProp}
              className=" right-5 mr-4 block h-[30px] w-[30px] text-white md:hidden"
              onClick={() => setNav(!nav)}
            />
          </div>
          <div className=" hidden h-full w-[40%] flex-row items-center justify-evenly md:flex">
            <Link
              href="/books"
              className="group flex w-fit flex-col items-center justify-center hover:cursor-pointer"
            >
              <p className="font-lato text-[30px] font-medium text-white">
                Books
              </p>
              <div className="h-[4px] w-full origin-left scale-x-0 bg-transparent transition-all duration-500 ease-in-out group-hover:scale-x-100 group-hover:bg-white"></div>
            </Link>
            <Link
              href="/authors"
              className="group flex w-fit flex-col items-center justify-center hover:cursor-pointer"
            >
              <p className="font-lato text-[30px] font-medium text-white">
                Authors
              </p>
              <div className="h-[4px] w-full origin-left scale-x-0 bg-transparent transition-all duration-500 ease-in-out group-hover:scale-x-100 group-hover:bg-white"></div>
            </Link>
            <Link
              href="/genres"
              className="group flex w-fit flex-col items-center justify-center hover:cursor-pointer"
            >
              <p className="font-lato text-[30px] font-medium text-white">
                Genres
              </p>
              <div className="h-[4px] w-full origin-left scale-x-0 bg-transparent transition-all duration-500 ease-in-out group-hover:scale-x-100 group-hover:bg-white"></div>
            </Link>
          </div>
          <div className="hidden h-full w-[30%] flex-col items-end justify-center md:flex">
            <Link
              href="/login"
              className="mr-4 border-2 border-[#E8772E] bg-[#E8772E] pb-2 pl-5 pr-5 pt-2 font-lato text-[30px] font-medium text-white transition-all duration-300 ease-in-out hover:cursor-pointer hover:bg-white hover:text-[#E8772E]"
            >
              Login
            </Link>
          </div>
        </div>

        {children}
      </body>
    </html>
  );
}
