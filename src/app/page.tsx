import Banner from "@/components/Banner";
import Expertise from "@/components/Expertise";
import ExpertiseSlider from "@/components/ExpertiseSlider";
import Footer from "@/components/Footer";
import JoinUs from "@/components/JoinUs";
import Navbar from "@/components/Navbar";
import UpcomingActivities from "@/components/UpcomingActivities";

export default function Home() {
  return (
    <main>
      <Banner />
      <Expertise />
      <ExpertiseSlider />
      <UpcomingActivities />
      <JoinUs />
      <Footer />
    </main>
  );
}
