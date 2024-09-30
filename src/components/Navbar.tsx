"use client";
import { TStarProRegular } from "@/styles/fonts";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [navbarBackground, setNavbarBackground] = useState<string>('bg-transparent')

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setNavbarBackground('bg-[#2F2A2A]');
      } else {
        setNavbarBackground('bg-transparent');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50`}>
      <div className={`transition-all duration-100 text-white flex justify-between items-center px-32 ${navbarBackground} py-4`}>
        <Link href="/">
          <Image src="/desktop/logo/20211126 [DDI] Logo - Horizontal (White) 1.png" alt="logo" width={160} height={50} />
        </Link>
        <ul className="flex gap-x-10">
          <li className={`${TStarProRegular.className} text-lg text-[#FFFFFFCC]`}>Home</li>
          <li className={`${TStarProRegular.className} text-lg text-[#FFFFFFCC]`}>About</li>
          <li className={`${TStarProRegular.className} text-lg text-[#FFFFFFCC]`}>Expertise</li>
          <li className={`${TStarProRegular.className} text-lg text-[#FFFFFFCC]`}>Program</li>
          <li className={`${TStarProRegular.className} text-lg text-[#FFFFFFCC]`}>Odyssey</li>
          <li className={`${TStarProRegular.className} text-lg text-[#FFFFFFCC]`}>News</li>
          <li className={`${TStarProRegular.className} text-lg text-[#FFFFFFCC]`}>Contact</li>
          <li className={`${TStarProRegular.className} text-lg text-[#FFFFFFCC]`}>Career</li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;

