import Image from 'next/image';
import '../styles/Banner.css'
import SummarizeBanner from './SummarizeBanner';
import { TStarProBold, TStarProRegular } from '@/styles/fonts';

const Banner = () => {
  return (
    <section className="bg-banner max-md:pb pt-20">
      <div className="grid grid-cols-2 max-md:grid-cols-1 px-32 py-20 max-md:p-5">
        <div>
          <h1 className={`text-5xl mb-2 ${TStarProRegular.className}`}>Adopt Globally,<span className="block">Adapt Locally</span></h1>
          <p className="mb-10">
            Daya Dimensi Indonesia is a world-class strategic partner for individual and organisational transformation through humanity-based and technology-supported solutions to help you hire, promote, and develop exceptional leaders.
          </p>
          <div className="flex w-fit gap-x-16 max-md:flex-col max-md:gap-4">
            <div className="flex gap-x-3 btn-action" role="button">
              <span className={`${TStarProBold.className} text-base`}>LEARN MORE ABOUT US</span>
              <Image width={15} height={5} src="/icon/arrow-right-white-sm.svg" alt="arrow right white small" className="arrow-bounce" />
            </div>
            <div className="flex gap-x-3 btn-action" role="button">
              <span className={`${TStarProBold.className} text-base`}>CONTACT US</span>
              <Image width={15} height={5} src="/icon/arrow-right-white-sm.svg" alt="arrow right white small" className="arrow-bounce" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-x-8 max-md:flex-col max-md:gap-y-6 max-md:items-center">
        <SummarizeBanner />
        <Image src="/logo/unwomen.png" width={195} height={64} alt="unwomen" className="object-contain" />
        <Image src="/logo/iso-updated.png" width={260} height={64} alt="unwomen" className="object-contain" />
      </div>
    </section>
  )
}

export default Banner;