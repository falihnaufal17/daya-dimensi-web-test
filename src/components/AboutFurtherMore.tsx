import { TStarProBold, TStarProRegular } from '@/styles/fonts';
import '@/styles/furthermore.css'
import Image from 'next/image';

const AboutFurtherMore = () => {
  return (
    <section className="bg-furthermore min-h-screen flex flex-col justify-end px-28 pb-16 max-md:p-5 max-md:justify-center">
      <div className="grid grid-cols-3 gap-8 max-md:grid-cols-1">
        <div className="border-b-2 border-white pb-5">
          <h2 className={`${TStarProRegular.className} text-4xl mb-1 text-white`}>Family</h2>
          <p className="text-base text-[#FFFFFFCC] mb-6">Introducing the DayaLima Family</p>
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
        <div className="border-b border-white pb-5">
          <h2 className={`${TStarProRegular.className} text-4xl mb-1 text-white`}>Board of <span className="block">Management</span></h2>
        </div>
        <div className="border-b border-white pb-5">
          <h2 className={`${TStarProRegular.className} text-4xl mb-1 text-white`}>Partners</h2>
        </div>
      </div>
    </section>
  )
}

export default AboutFurtherMore;
