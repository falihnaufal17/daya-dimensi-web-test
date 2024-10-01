import { TStarProLight, TStarProRegular } from "@/styles/fonts";
import AboutSummaryImage from "./AboutSummaryImage";

const AboutSummary = () => {
  return (
    <>
      <section className="pt-24 pl-56 bg-[#f5f5f5] pb-64 pr-28 max-md:p-5">
        <h2 className={`${TStarProRegular.className} text-4xl mb-10 text-black max-md:text-center`}>Daya Dimensi In Numbers</h2>
        <div className="px-10 py-11 flex gap-x-16 justify-between max-md:flex-col max-md:w-full max-md:justify-center max-md:items-center max-md:text-center max-md:gap-y-8">
          <div>
            <p className={`text-[#B92322] text-7xl mb-2 ${TStarProLight.className}`}>24+ Years</p>
            <p className="text-[#00000066] text-xl">Experience</p>
          </div>
          <div>
            <p className={`text-[#B92322] text-7xl mb-2 ${TStarProLight.className}`}>50.000+</p>
            <p className="text-[#00000066] text-xl">Executive Clients</p>
          </div>
          <div>
            <p className={`text-[#B92322] text-7xl mb-2 ${TStarProLight.className}`}>400+</p>
            <p className="text-[#00000066] text-xl">Organization Clients</p>
          </div>
        </div>
      </section>
      <AboutSummaryImage />
    </>
  )
}

export default AboutSummary;
