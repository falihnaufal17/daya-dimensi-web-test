import { TStarProRegular } from "@/styles/fonts";
import Image from "next/image";

const AboutOurClient = () => {
  return (
    <section className="py-20 px-28 bg-[#2F2A2A] max-md:p-5">
      <h2 className={`${TStarProRegular.className} text-4xl mb-10 text-white max-md:text-center`}>Our Clients</h2>
      <div className="grid grid-cols-6">
        <Image src={"/logo/astrainternational.png"} alt={"astra international"} width={173} height={173} />
        <Image src={"/logo/blibli.png"} alt={"blibli"} width={173} height={173} />
        <Image src={"/logo/bri.png"} alt={"bri"} width={173} height={173} />
        <Image src={"/logo/ifg.png"} alt={"ifg"} width={173} height={173} />
        <Image src={"/logo/kalbefarma.png"} alt={"kalbefarma"} width={173} height={173} />
        <Image src={"/logo/kemdikbud.png"} alt={"kemdikbud"} width={173} height={173} />
        <Image src={"/logo/mandiri.png"} alt={"mandiri"} width={173} height={173} />
        <Image src={"/logo/mindid.png"} alt={"mindid"} width={173} height={173} />
        <Image src={"/logo/pertamina.png"} alt={"pertamina"} width={173} height={173} />
        <Image src={"/logo/pln.png"} alt={"pln"} width={173} height={173} />
      </div>
    </section>
  )
}

export default AboutOurClient;
