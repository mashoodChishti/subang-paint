"use client";

import Image from "next/image";
import { Tabs } from "@/components/ui/tabs";

export function TabsComponent() {
  const tabs = [
    {
      title: "Paint Manufacturing",
      value: "paint-manufacturing",
      content: (
        <div className="w-full overflow-hidden relative h-full border rounded-2xl p-10 text-xl md:text-4xl font-bold text-black bg-white ">
          <p>Paint Manufacturing</p>
          <DummyContent
            description="Immerse yourself in a world of color with our extensive range of high-quality paints. From vibrant hues to classic shades, Subang Paints is your trusted source for premium paint manufacturing. Our commitment to quality is unwavering. Subang Paints adheres to stringent international standards (ISO 9001 and ISO 14001), ensuring that every product leaving our facilities is synonymous with durability, coverage, and environmental responsibility."
          />
        </div>
      ),
    },
    {
      title: "Customized Solutions",
      value: "customized-solutions",
      content: (
        <div className="w-full overflow-hidden relative h-full border rounded-2xl p-10 text-xl md:text-4xl font-bold text-black bg-white ">
          <p>Customized Solution</p>
          <DummyContent description="Embrace individuality with our customized paint solutions. Tailor colors to your unique style and project requirements, ensuring that every space reflects your personality. Subang Paints turns your vision into vibrant reality" />
        </div>
      ),
    },
    {
      title: "OEM Services",
      value: "oem-services",
      content: (
        <div className="w-full overflow-hidden relative h-full border rounded-2xl p-10 text-xl md:text-4xl font-bold text-black bg-white ">
          <p>OEM Services</p>
          <DummyContent description="Elevate your projects with Subang Paints' OEM services. Whether it's reimagining existing products or crafting tailor-made solutions, we are your strategic partners for future development, offering innovation that stands out." />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem]  [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-10">
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent = ({ description }: { description: string }) => {
  return <p className="font-normal text-base">{description}</p>;
};
