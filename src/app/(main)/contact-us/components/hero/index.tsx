import Image from "next/image";
import { Playfair_Display } from "next/font/google";
const playfair = Playfair_Display({ subsets: ["latin"] });
export const Hero = () => {
  return (
    <section className="relative">
      <div className=" w-[100vw]  lg:relative h-[40vh]  ">
        <Image
          className="absolute w-[100vw] object-cover h-[40vh] "
          src={"/header.png"}
          alt=""
          width={1920}
          height={1080}
        />
        <div
          className={
            "relative flex flex-col items-start justify-center h-[40vh] px-8 " +
            playfair.className
          }
        >
          <h1 className=" text-white mx-24 font-bold text-6xl  text-center">
            Contact Us
          </h1>
        </div>
      </div>
    </section>
  );
};
