import { BusinessPartners } from "../components/business-partners";
import { ConnectWithUs } from "../components/connect-with-us";
import { Testimonials } from "../components/testimonials";
import { AboutSubang } from "./components/about-subang";
import { AboutSuncondo } from "./components/about-suncondo";
import { Hero } from "./components/hero";
import { WhyWereBetter } from "./components/why-were-better";

export default function AboutUs() {
  return (
    <div>
      <Hero />
      <AboutSubang />
      <AboutSuncondo />
      <WhyWereBetter />
      <ConnectWithUs />
      <Testimonials />
      <BusinessPartners />
    </div>
  );
}
