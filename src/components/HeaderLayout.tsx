import Image from "next/image";
import Breadcrumb from "./Breadcrumb";
import '@/styles/HeaderLayout.css'
import { TStarProRegular } from "@/styles/fonts";

const HeaderLayout = () => {
  return (
    <section className="grid grid-cols-8 bg-[#2F2A2A] max-md:grid-cols-1">
      <div className="col-span-3 pt-32 pl-32 pr-8 pb-14 relative max-md:order-2 max-md:p-5">
        <Image src={"/icon/pentagon-md.svg"} alt={"pentagon"} className="absolute top-44 left-12 animate-spin" width={328} height={321} />
        <Image src={"/icon/pentagon-md.svg"} alt={"pentagon"} className="absolute top-72 -left-48 animate-spin" width={328} height={321} />
        <div className="mb-52">
          <Breadcrumb />
        </div>
        <h1 className={`${TStarProRegular.className} text-5xl mb-2 text-white`}>Force of Progress</h1>
        <p className="text-base mb-20 text-white">
          Daya Dimensi Indonesia is a leadership consultant that supports organisations develop and deliver strategic programmes such as assessment centre, selection, learning, and personal & organisational transformation.
        </p>
        <div className="btn-action" role="button">
          <Image src="/icon/arrow-down-white-sm.svg" alt="arrow down white sm" width={18} height={6} className="arrow-bounce" />
        </div>
      </div>
      <div className="col-span-5 bg-header-layout p-32 max-md:order-1" />
    </section>
  )
}

export default HeaderLayout;
