import { TStarProBold, TStarProLight } from '@/styles/fonts';
import '@/styles/JoinUs.css';
import Image from 'next/image';

const JoinUs = () => {
  return (
    <section className="bg-join-us px-32 py-44 max-md:px-5">
      <div className="grid grid-cols-3 max-md:grid-cols-1">
        <div>
          <h2 className={`mb-2 ${TStarProLight.className} text-4xl text-white`}>Be a Part of <span className="block">Daya Dimensi Indonesia</span></h2>
          <div className="mb-10">
            <p className="text-base text-[#FFFFFFCC]">Are you the resilient leaders we are searching for?
              Join Daya Dimensi Indonesia to advance your leadership skill
              and generate exceptional leaders across Indonesia at once.</p>
          </div>
          <div className="flex gap-x-2 items-center btn-action" role="button">
            <span className={`${TStarProBold.className} text-base text-white`}>LEARN MORE</span>
            <Image
              src="/icon/arrow-right-white-sm.svg"
              alt="arrow right white sm"
              width={15}
              height={5}
              className="arrow-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default JoinUs;
