import Image from "next/image";

export const Hero = () => {
  return (
    <section className="relative">
      <div className=" w-[100vw]  lg:relative h-full lg:h-[95vh] 3xl:h-[55vh]  ">
        <Image
          className="absolute w-[100vw] h-[30vh] object-cover lg:h-[95vh]   3xl:h-[55vh] "
          src="/homepage/homepage-bg.jpg"
          alt=""
          width={1920}
          height={1080}
        />
        <div className="relative flex flex-col items-start justify-center  bg-[#00222C6E] lg:h-[95vh] 3xl:-[55vh] px-8 ">
          <h1 className=" text-white font-bold text-6xl text-center">
            Where Colors Come to Life!
          </h1>
          <h1 className=" text-[#FFFFFFB3] font-medium text-xl text-center">
            Welcome to Subang Paints - Crafting Colors Building Dreams!
          </h1>
          <a href="/examples" className=" ">
            <button className="bg-[#ca1a73]  text-white  h-16 my-12 w-auto px-10 ">
              Get A Quote
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};
