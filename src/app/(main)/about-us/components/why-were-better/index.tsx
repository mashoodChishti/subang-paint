import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";
import Link from "next/link";
export const WhyWereBetter = () => {
  return (
    <div className="flex my-8 flex-col items-center justify-center ">
      <div className="h-[30%]">
        <h1 className="text-5xl font-bold text-center">Why We're Better</h1>
      </div>
      <div className="  flex  justify-center items-start">
        <CardContainer className=" ">
          <CardBody className="p-8 hover:shadow-2xl items-center justify-center rounded-xl group hover:bg-[#ebf0e6] transition-all duration-300 hover:scale-105">
            <CardItem translateZ={50} className="font-bold text-lg " as={"h1"}>
              Unparalleled Quality
            </CardItem>
            <CardItem as={"h4"} className="">
              Subang Paints is synonymous with excellence. Our commitment to
              stringent quality control processes and adherence to international
              standards (ISO 9001 and ISO 14001) ensures that every product
              meets the highest standards of durability, coverage, and
              environmental responsibility.
            </CardItem>
          </CardBody>
        </CardContainer>
        <CardContainer className="">
          <CardBody className="p-8 hover:shadow-2xl items-center justify-center  rounded-xl group hover:bg-[#ebf0e6] transition-all duration-300 hover:scale-105">
            <CardItem translateZ={50} className="font-bold text-lg " as={"h1"}>
              Customization Mastery
            </CardItem>
            <CardItem as={"h4"} className="">
              Elevate your painting experience with Subang Paints' customized
              solutions. Tailor your colors to suit your unique style and
              project requirements, allowing your spaces to reflect your
              individuality.
            </CardItem>
          </CardBody>
        </CardContainer>
        <CardContainer className=" ">
          <CardBody className="p-8 hover:shadow-2xl items-center justify-center  rounded-xl group hover:bg-[#ebf0e6] transition-all duration-300 hover:scale-105">
            <CardItem translateZ={50} className="font-bold text-lg " as={"h1"}>
              Expert Technical Support
            </CardItem>
            <CardItem as={"h4"} className="">
              Navigate the world of paints with confidence. Our team of material
              specialists, technical staff, and sales engineers are here to
              assist you in selecting the most suitable products and
              applications. Subang Paints goes beyond selling paint; we provide
              expert guidance to ensure your project's success.
            </CardItem>
          </CardBody>
        </CardContainer>
      </div>
      <div className="  flex  justify-center items-start">
        <CardContainer className=" ">
          <CardBody className="p-8 hover:shadow-2xl items-center justify-center rounded-xl group hover:bg-[#ebf0e6] transition-all duration-300 hover:scale-105">
            <CardItem translateZ={50} className="font-bold text-lg " as={"h1"}>
              (OEM) Services
            </CardItem>
            <CardItem as={"h4"} className="">
              Partner with Subang Paints for future development projects. Our
              OEM services offer innovative solutions, from product redesign to
              tailor-made designs, making us your strategic partner in
              creativity and innovation.
            </CardItem>
          </CardBody>
        </CardContainer>
        <CardContainer className="">
          <CardBody className="p-8 hover:shadow-2xl items-center justify-center  rounded-xl group hover:bg-[#ebf0e6] transition-all duration-300 hover:scale-105">
            <CardItem translateZ={50} className="font-bold text-lg " as={"h1"}>
              Efficient Order Processing
            </CardItem>
            <CardItem as={"h4"} className="">
              Experience hassle-free transactions with Subang Paints. Our
              streamlined order processing, under a strict quality control
              system, guarantees timely delivery and support throughout the
              entire process, from inquiry to shipment.
            </CardItem>
          </CardBody>
        </CardContainer>
        <CardContainer className=" ">
          <CardBody className="p-8 hover:shadow-2xl items-center justify-center  rounded-xl group hover:bg-[#ebf0e6] transition-all duration-300 hover:scale-105">
            <CardItem translateZ={50} className="font-bold text-lg " as={"h1"}>
              Inspiration Hub
            </CardItem>
            <CardItem as={"h4"} className="">
              Dive into our Inspiration Hub for trends, tips, and creative
              ideas. SubangPaints is more than just a paint provider; we're your
              guide to the latest in color aesthetics, helping you transform
              your projects into vibrant masterpieces.
            </CardItem>
          </CardBody>
        </CardContainer>
      </div>
    </div>
  );
};
