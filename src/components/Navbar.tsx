"use client";
import { TStarProRegular } from "@/styles/fonts";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import '@/styles/Navbar.css';
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [navbarBackground, setNavbarBackground] = useState<string>('bg-transparent');
  const pathname = usePathname();

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
          <li className={`${TStarProRegular.className} nav-item text-lg text-[#FFFFFFCC]`}>
            <Link href="/" className={pathname === '/' ? 'active-link' : ''}>
              Home
            </Link>
          </li>
          <li className={`${TStarProRegular.className} nav-item text-lg text-[#FFFFFFCC]`}>
            <Link href="/about" className={pathname === '/about' ? 'active-link' : ''}>
              About
            </Link>
          </li>
          <li className={`${TStarProRegular.className} nav-item text-lg text-[#FFFFFFCC]`}>
            <Link href="/" className={pathname === '/expertise' ? 'active-link' : ''}>
              Expertise
            </Link>
          </li>
          <li className={`${TStarProRegular.className} nav-item text-lg text-[#FFFFFFCC]`}>
            <Link href="/" className={pathname === '/program' ? 'active-link' : ''}>
              Program
            </Link>
          </li>
          <li className={`${TStarProRegular.className} nav-item text-lg text-[#FFFFFFCC]`}>
            <Link href="/" className={pathname === '/odyssey' ? 'active-link' : ''}>
              Odyssey
            </Link>
          </li>
          <li className={`${TStarProRegular.className} nav-item text-lg text-[#FFFFFFCC]`}>
            <Link href="/" className={pathname === '/news' ? 'active-link' : ''}>
              News
            </Link>
          </li>
          <li className={`${TStarProRegular.className} nav-item text-lg text-[#FFFFFFCC]`}>
            <Link href="/" className={pathname === '/contact' ? 'active-link' : ''}>
              Contact
            </Link>
          </li>
          <li className={`${TStarProRegular.className} nav-item text-lg text-[#FFFFFFCC]`}>
            <Link href="/" className={pathname === '/career' ? 'active-link' : ''}>
              Career
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;

