import { TStarProBold, TStarProLight } from "@/styles/fonts";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#2F2A2A]">
      <div className="flex justify-between mb-14 px-32 py-12 items-center max-md:flex-col max-md:p-5 max-md:gap-y-6 max-md:mb-5">
        <div className="flex gap-x-6 max-md:flex-wrap max-md:justify-center max-md:gap-4">
          <Image src="/desktop/2023 GPTW - Certification 1.png" className="object-contain" alt="gptw" width={35} height={60} />
          <Image src="/logo/unwomen.png" className="object-contain" alt="unwomen" width={152} height={50} />
          <Image src="/logo/iso-updated.png" className="object-contain" alt="iso updated" width={206} height={50} />
        </div>
        <div className="flex gap-x-5 items-center">
          <Image src="/icon/facebook.svg" alt="facebook" className="w-8 h-8" width={32} height={32} />
          <Image src="/icon/instagram.svg" alt="instagram" className="w-8 h-8" width={32} height={32} />
          <Image src="/icon/linkedin.svg" alt="linkedin" className="w-8 h-8" width={32} height={32} />
          <Image src="/icon/youtube.svg" alt="youtube" className="w-8 h-8" width={32} height={32} />
          <Image src="/icon/twitter.svg" alt="twitter" className="w-8 h-8" width={32} height={32} />
        </div>
        <div className="max-md:flex max-md:flex-col max-md:justify-center max-md:items-center">
          <h4 className={`${TStarProLight.className} text-white text-2xl mb-3`}>Subscribe. Join the Community.</h4>
          <form method="post">
            <div className="flex">
              <input
                type="email"
                placeholder="Email address"
                name="email"
                className="placeholder:text-[#00000066] px-4 py-3" />
              <button type="submit" className="bg-[#B92322] px-4 py-5 btn-action">
                <Image src="/icon/arrow-right-white-md.svg" alt="arrow right white" width={18} height={6} className="arrow-bounce" />
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="w-full h-[1px] bg-[#FFFFFF]" />
      <div className="flex justify-between px-32 py-6 max-md:p-5 max-md:flex-col max-md:gap-y-5 max-md:justify-center max-md:items-center">
        <p className="text-white text-sm max-md:text-center">Copyright © 2022 Daya Dimensi Indonesia. Website crafted by Antikode.</p>
        <div className="flex gap-x-3">
          <p className={`${TStarProBold.className} text-sm text-white`}>Privacy Policy</p>
          <span className={`${TStarProBold.className} text-sm text-white`}>|</span>
          <p className={`${TStarProBold.className} text-sm text-white`}>Terms & Conditions</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;