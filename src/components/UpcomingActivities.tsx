import { TStarProBold, TStarProLight } from "@/styles/fonts";
import Image from "next/image"
import UpcomingActivityItem from "./UpcomingActivityItem";

const UpcomingActivities = () => {
  return (
    <section className="px-32 max-md:p-5">
      <div className="flex justify-between items-center mb-10">
        <h2 className={`${TStarProLight.className} text-4xl max-md:text-xl`}>Upcoming Activities</h2>
        <div className="flex items-center gap-x-2 btn-action" role="button">
          <span className={`${TStarProBold.className} text-base text-[#B92322]`}>VIEW ALL</span>
          <Image src="/icon/arrow-right-red-sm.svg" alt="arrow right" className="arrow-bounce" width={15} height={5} />
        </div>
      </div>
      <div className="grid grid-cols-8 gap-x-16 max-md:grid-cols-1">
        <div className="col-span-3 max-md:col-span-full">
          <Image src="/webinar.png" alt="webinar" width={481} height={481} />
        </div>
        <div className="col-span-5 grid grid-cols-1 gap-y-10 max-md:col-span-1">
          <UpcomingActivityItem type={"PUBLIC WORKSHOP"} schedule={"25 Feb 2022"} title={"Zoompathy vs Zoom-fatigue: Managing Virtual Meeting Burnout"} />
          <UpcomingActivityItem type={"BUKA PINTU"} schedule={"20 Oct 2021"} title={"Our New Solution To Hire The Right Person For Your Company"} />
          <UpcomingActivityItem type={"LIVE WEBINAR"} schedule={"20 Oct 2021"} title={"DDI : Among Indonesia’s First Signatories of UN WEP"} />
          <UpcomingActivityItem type={"BUKA PINTU"} schedule={"20 Oct 2021"} title={"Our New Solution To Hire The Right Person For Your Company"} />
        </div>
      </div>
    </section>
  )
}

export default UpcomingActivities;
