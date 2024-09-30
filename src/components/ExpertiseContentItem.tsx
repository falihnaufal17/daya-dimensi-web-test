import { TStarProLight } from "@/styles/fonts";
import Image from "next/image";
import '@/styles/ExpertiseContentItem.css';

interface IExpertiseContentItemProps {
  icon: string;
  title: string;
}

const ExpertiseContentItem = ({
  icon,
  title
} : IExpertiseContentItemProps) => {
  return (
    <div className="bg-[#8B0B04] btn-action" role="button">
      <div className="bg-expertise-inner">
        <div className="relative z-10 flex flex-col justify-between h-[379px] px-6 py-8 max-md:h-[300px]">
          <div>
            <Image
              src={`/icon/${icon}`}
              width={56}
              height={56}
              alt={title}
              className="mb-5" />
              <h3 className={`${TStarProLight.className} text-4xl text-white max-md:text-2xl`}>{title}</h3>
          </div>
          <span className="flex justify-end" role="button">
            <Image src="/icon/arrow-right-white-md.svg" alt="arrow right white md" width={30} height={10} className="arrow-bounce" />
          </span>
        </div>
      </div>
    </div>
  )
}

export default ExpertiseContentItem;
