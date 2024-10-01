import { TStarProLight } from "@/styles/fonts";
import Image from "next/image";

const AboutCollaborateReason = () => {
  return (
    <section className="px-28 py-20 bg-[#F5F5F5]">
      <h2 className={`${TStarProLight.className} text-4xl mb-20`}>Reasons to Collaborate</h2>
      <div className="grid grid-cols-3 gap-x-8"> 
        <div className="border-t border-[#E0E0E0] pt-5">
          <Image src={"/icon/learning-red.svg"} alt={"learning red"} className="mb-6" width={56} height={56} />
          <h3 className={`${TStarProLight.className} text-4xl`}>Ethical</h3>
          <p className="text-[#504B49] text-base">We maintain the confidentiality of our clients' data. We uphold our integrity by practicing zero-tolerance policy for bribery.</p>
        </div>
        <div className="border-t border-[#E0E0E0] pt-5">
          <Image src={"/icon/skills-red.svg"} alt={"skills red"} className="mb-6" width={56} height={56} />
          <h3 className={`${TStarProLight.className} text-4xl`}>Reliable</h3>
          <p className="text-[#504B49] text-base">We strive to provide solutions that are supported by data and technology.</p>
        </div>
        <div className="border-t border-[#E0E0E0] pt-5">
          <Image src={"/icon/compassion-red.svg"} alt={"skills red"} className="mb-6" width={56} height={56} />
          <h3 className={`${TStarProLight.className} text-4xl`}>Agile</h3>
          <p className="text-[#504B49] text-base">We strive to provide solutions that are supported by data and technology.</p>
        </div>
      </div>
    </section>
  )
}

export default AboutCollaborateReason;
