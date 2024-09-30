import '@/styles/ExpertiseSlider.css'
import { TStarProRegular } from '@/styles/fonts';
import Image from 'next/image';

const ExpertiseSlider = () => {
  return (
    <section className="relative grid grid-cols-6 -mt-60 mb-28 max-md:mt-0 max-md:grid-cols-1">
      <div className="absolute top-1/2 left-0 trasnform -translate-y-1/2 translate-x-1/4 max-md:static max-md:translate-x-0 max-md:translate-y-0">
        <Image
          src="/kemendikbudristek.png"
          alt="kemendikbudristek"
          width={584}
          height={438} />
      </div>
      <div className="bg-[#B92322] col-start-3 col-end-7 max-md:col-span-1">
        <div className="bg-expertise-slider-inner px-28 py-20 grid grid-cols-6 max-md:p-5 max-md:grid-cols-1">
          <div className="col-start-2 col-end-7">
            <Image
              src="/logo/tut-wuri-handayani.png"
              alt="tut wuri handayani logo"
              width={98}
              height={72}
              className="mb-5" />
            <p className={`${TStarProRegular.className} text-white text-2xl mb-6`}>
              &quot;Kolaborasi dalam Program Guru Penggerak sangat meaningful dan impactful untuk perkembangan pendidikan di Indonesia,
              sehingga perlu untuk dilakukan secara berkelanjutan.&quot;
            </p>
            <div className="mb-8">
              <p className={`${TStarProRegular.className} text-lg text-white`}>Kementerian Pendidikan, Budaya, Riset, dan Teknologi</p>
            </div>
            <div className="flex gap-x-8 justify-end max-md:flex-col max-md:gap-y-4 max-md:items-center">
              <div className="">
              </div>
              <div className="flex gap-x-5">
                <Image
                  src="/icon/chevron-left-cricle-white-md.svg"
                  alt="chevron left"
                  width={56}
                  height={56}
                  role="button" />
                <Image
                  src="/icon/chevron-right-circle-white-md.svg"
                  alt="chevron right"
                  width={56}
                  height={56}
                  role="button" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExpertiseSlider;
