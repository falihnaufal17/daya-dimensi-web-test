import { TStarProMedium } from "@/styles/fonts";
import Image from "next/image";

interface IUpcomingActivityItemProps {
  type: string;
  schedule: string;
  title: string;
}

const UpcomingActivityItem = ({
  type,
  schedule,
  title
}: IUpcomingActivityItemProps) => {
  return (
    <div className="grid grid-cols-12 items-start border-t border-[#F2F2F2] pt-6 btn-action max-md:grid-cols-2 max-md:gap-y-3" role="button">
      <div className="col-span-3 max-md:col-span-1 order-1">
        <p className="text-[#8B0B04] text-sm mb-2 uppercase">{type}</p>
        <p className="text-[#00000066] text-sm">{schedule}</p>
      </div>
      <div className="col-span-6 max-md:col-span-2 order-3">
        <p className={`${TStarProMedium.className} text-2xl capitalize`}>{title}</p>
      </div>
      <div className="col-span-2 flex justify-end max-md:col-span-1 order-2">
        <Image
          src="/icon/arrow-right-red-sm.svg"
          alt="arrow right red sm"
          width={18}
          height={6}
          className="arrow-bounce text-end" />
      </div>
    </div>
  )
}

export default UpcomingActivityItem;
