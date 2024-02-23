import { AboutUs } from "./components/About-Us";
import { Hero } from "./components/hero";
import { WhySubang } from "./components/why-subang";
import { Services } from "./components/services";
import { ConnectWithUs } from "./components/connect-with-us";
import { BusinessPartners } from "./components/business-partners";

export default function Home() {
  return (
    <main className="w-[100vw]">
      <Hero />
      <AboutUs />
      <WhySubang />
      <div className=" my-10">
        <Services />
      </div>
      <ConnectWithUs />
      <BusinessPartners />
    </main>
  );
}
