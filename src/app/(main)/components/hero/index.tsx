"use client";
import Image from "next/image";
import Link from "next/link";
export const Hero = ({data}:{data:string}) => {
  return (
    <section className="">
      <div className=" w-[100vw]  lg:relative h-[100vh]   ">
        <div>
          <Image
            className="absolute w-[100vw] h-[100vh] object-cover  "
            src="/homepage/homepage-bg.jpg"
            alt=""
            width={1920}
            height={1080}
          />
        </div>
        <div className="relative flex flex-col items-start justify-center  bg-[#00222C6E] h-[100vh] px-8 ">
          <h1 className=" text-white font-bold text-6xl text-center">
            Where Colors Come to Life!
          </h1>
          <h1 className=" text-[#FFFFFFB3] font-medium text-xl text-center">
            Welcome to Subang Paints - Crafting Colors Building Dreams!
          </h1>
          <Link href="/examples" className=" ">
            <button className="bg-[#ca1a73]  text-white z-30  h-16 my-12 w-auto px-10 ">
              Get A Quote
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};
