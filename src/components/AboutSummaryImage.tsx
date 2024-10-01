import { TStarProRegular } from "@/styles/fonts";
import Image from "next/image";

const AboutSummaryImage = () => {
  return (
    <section className="flex pl-56 pr-28 gap-x-8 pb-28">
      <div>
        <Image src="/leader-of-a-new-planet.png" alt="leader of a new planet" width={481} height={481} className="mb-5" />
        <h3 className={`${TStarProRegular.className} text-4xl mb-1`}>Leaders of a New Planet</h3>
        <p className="text-base text-[#504B49]">
          It is our intention is to generate leaders whose mission is to advance humanity through fresh ideas, forefront skills, and compassion for future generations. We call them Leaders of
          a New Planet.
        </p>
      </div>
      <div>
        <Image src={"/continuous-innovations.png"} alt={"continous innovations"} width={584} height={778} className="mb-5" />
        <h3 className={`${TStarProRegular.className} text-4xl mb-1`}>Continuous Innovations</h3>
        <p className="text-base text-[#504B49]">In working with clients, we curate and provide integrated business and leadership solutions. Therefore, we strive to grow our digital solutions to better cater your needs.</p>
      </div>
    </section>
  )
}

export default AboutSummaryImage;
