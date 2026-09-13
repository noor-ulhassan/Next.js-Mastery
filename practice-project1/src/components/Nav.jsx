"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

function Nav() {
  const pathname = usePathname();

  return (
    <div className="w-full h-16 bg-white flex justify-between fixed top-0">
      <div className="w-full max-w-350 mx-auto py-5 px-2 text-black font-bold text-lg">
        🌏 Travel Guide
      </div>
      <div className=" text-black font-medium text-sm ">
        <ul className="justify-between flex items-center gap-8 py-6 pr-6 ">
          <Link href="/" className={pathname === "/" ? "text-orange-500" : ""}>
            <li>Home</li>
          </Link>
          <Link
            href="/destination"
            className={pathname === "/destination" ? "text-orange-500" : ""}
          >
            <li>Destination</li>
          </Link>
          <Link
            href="/about"
            className={pathname === "/about" ? "text-orange-500" : ""}
          >
            <li>About</li>
          </Link>
          <Link
            href="/contact"
            className={pathname === "/contact" ? "text-orange-500" : ""}
          >
            <li>Contact</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
