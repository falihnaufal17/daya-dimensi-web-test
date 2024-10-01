"use client";
import { TStarProBold, TStarProRegular } from "@/styles/fonts";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import '@/styles/Navbar.css';
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [navbarBackground, setNavbarBackground] = useState<string>('bg-transparent');
  const pathname = usePathname();
  const isHome = pathname === '/';

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
          <li className={`${TStarProRegular.className} nav-item text-lg ${!isHome ? 'text-[#000000CC]' : 'text-[#FFFFFFCC]'}`}>
            <Link href="/" className={pathname === '/' ? `${!isHome ? `${TStarProBold.className} text-[#000000CC]` : 'text-white'} active-link` : ''}>
              Home
            </Link>
          </li>
          <li className={`${TStarProRegular.className} nav-item text-lg ${!isHome ? 'text-[#000000CC]' : 'text-[#FFFFFFCC]'}`}>
            <Link href="/about" className={pathname === '/about' ? `${!isHome ? `${TStarProBold.className} text-[#000000CC]` : 'text-white'} active-link` : ''}>
              About
            </Link>
          </li>
          <li className={`${TStarProRegular.className} nav-item text-lg ${!isHome ? 'text-[#000000CC]' : 'text-[#FFFFFFCC]'}`}>
            <Link href="/" className={pathname === '/expertise' ? `${!isHome ? `${TStarProBold.className} text-[#000000CC]` : 'text-white'} active-link` : ''}>
              Expertise
            </Link>
          </li>
          <li className={`${TStarProRegular.className} nav-item text-lg ${!isHome ? 'text-[#000000CC]' : 'text-[#FFFFFFCC]'}`}>
            <Link href="/" className={pathname === '/program' ? `${!isHome ? `${TStarProBold.className} text-[#000000CC]` : 'text-white'} active-link` : ''}>
              Program
            </Link>
          </li>
          <li className={`${TStarProRegular.className} nav-item text-lg ${!isHome ? 'text-[#000000CC]' : 'text-[#FFFFFFCC]'}`}>
            <Link href="/" className={pathname === '/odyssey' ? `${!isHome ? `${TStarProBold.className} text-[#000000CC]` : 'text-white'} active-link` : ''}>
              Odyssey
            </Link>
          </li>
          <li className={`${TStarProRegular.className} nav-item text-lg ${!isHome ? 'text-[#000000CC]' : 'text-[#FFFFFFCC]'}`}>
            <Link href="/" className={pathname === '/news' ? `${!isHome ? `${TStarProBold.className} text-[#000000CC]` : 'text-white'} active-link` : ''}>
              News
            </Link>
          </li>
          <li className={`${TStarProRegular.className} nav-item text-lg ${!isHome ? 'text-[#000000CC]' : 'text-[#FFFFFFCC]'}`}>
            <Link href="/" className={pathname === '/contact' ? `${!isHome ? `${TStarProBold.className} text-[#000000CC]` : 'text-white'} active-link` : ''}>
              Contact
            </Link>
          </li>
          <li className={`${TStarProRegular.className} nav-item text-lg ${!isHome ? 'text-[#000000CC]' : 'text-[#FFFFFFCC]'}`}>
            <Link href="/" className={pathname === '/career' ? `${!isHome ? `${TStarProBold.className} text-[#000000CC]` : 'text-white'} active-link` : ''}>
              Career
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;

