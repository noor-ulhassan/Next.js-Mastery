"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("ayush");
  return <>home 2{name}</>;
}
