import { TStarProRegular } from "@/styles/fonts";
import ExpertiseContentGrid from "./ExpertiseContentGrid";

const Expertise = () => {
  return (
    <section className="pt-20 px-28 pb-[440px] bg-[#f5f5f5] max-md:p-5">
      <div className="grid grid-cols-2 mb-14 max-md:grid-cols-1">
        <div>
          <h2 className={`${TStarProRegular.className} text-4xl mb-2`}>Expertise</h2>
          <p className="text-[#504B49] text-base mb-14">&quot;Organisations who will succeed in the long-run are those who are open to new ideas, embrace innovations, instill compassion in every act and decision, and consistent in advancing humanity
            through sustainability.&quot; - Excerpts from &apos;Leaders of a New Planet&apos; book.</p>
        </div>
      </div>
      <ExpertiseContentGrid />
    </section>
  )
}

export default Expertise;
