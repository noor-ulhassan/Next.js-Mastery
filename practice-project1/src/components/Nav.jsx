import Link from "next/link";
import React from "react";

function Nav() {
  return (
    <div className="w-full h-16 bg-white flex justify-between">
      <div className="w-full max-w-350 mx-auto py-5 px-2 text-black font-bold text-lg">
        🌏 Travel Guide
      </div>
      <div className=" text-black font-medium text-sm ">
        <ul className="justify-between flex items-center gap-8 py-6 pr-6 ">
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/destination">
            <li>Destination</li>
          </Link>
          <Link href="/about">
            <li>About</li>
          </Link>
          <Link href="/contact">
            <li>Contact</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
