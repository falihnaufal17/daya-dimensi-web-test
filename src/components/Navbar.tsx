import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="sticky top-0 left-0 right-0 z-50">
      <div className={`transition-all duration-100 text-white flex justify-between items-center px-32`}>
        <Link href="/">
          <Image src="/desktop/logo/20211126 [DDI] Logo - Horizontal (White) 1.png" alt="logo" width={160} height={50} />
        </Link>
        <ul>
          <li>Home</li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;
