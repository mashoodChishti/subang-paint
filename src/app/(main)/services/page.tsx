import { ConnectWithUs } from "./components/connect-with-us";
import { Hero } from "./components/hero";
import { ServicesComponent } from "./components/services";
import { SubangServices } from "./components/subang_services";
import { TabsComponent } from "./components/tabs";
import { Testimonials } from "./components/testimonials";

export default function Services() {
  return (
    <div>
      <Hero />
      <ServicesComponent />
      <TabsComponent />
      {/* <SubangServices /> */}
      <ConnectWithUs />
      <Testimonials />
    </div>
  );
}
