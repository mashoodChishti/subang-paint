import Image from "next/image";
export const AboutSuncondo = () => {
  return (
    <section className=" w-[100vw] my-16">
      <div className="content-container flex flex-row justify-center  items-center ml-28">
        <div className="w-1/3  flex flex-col justify-center ">
          <h1 className="text-4xl font-bold">About Suncondo</h1>

          <p className="text-sm my-8 w-2/3">
            Suncondo brand was created by SUNCONDO CHEMICALS & PAINT (SMC-PVT)
            LTD with headquarter located in Islamabad, Pakistan. Suncondo has 14
            years paint producing, research and developing experiences, 10 years
            projects construction experiences of external/internal wall, has
            ability to produce customized products for the customers all over
            Pakistan. Over the years, we diversified our product range and now
            are proud that we have managed to maintain our quality and a loyal
            customer base and are a trusted brand used widely.
          </p>
        </div>
        <div className="w-1/3 flex flex-col justify-center items-center">
          <Image
            className=" h-auto w-full mr-8 mt-8"
            src="/about/about-suncondo.jpg"
            alt=""
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};
