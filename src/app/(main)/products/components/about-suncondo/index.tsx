import Image from "next/image";

export const AboutSuncondo = () => {
  return (
    <section className="h-[100vh] w-[100vw] my-16">
      <div className="content-container flex flex-row-reverse justify-center  items-center mr-28">
        <div className="w-1/2 px-16 flex flex-col justify-center ">
          <div className="flex items-center"></div>
          <h1 className="text-5xl font-bold">About Suncondo</h1>

          <p className="mb-8 my-8 text-sm">
            Suncondo, a distinguished brand, emerged under the auspices of
            SUNCONDO CHEMICALS & PAINT (SMC-PVT) LTD, headquartered in
            Islamabad, Pakistan. With a rich legacy spanning 14 years, Suncondo
            has established itself as a stalwart in the realm of paint
            production, research, and development. Bolstered by a decade of
            hands-on experience in external and internal wall projects
            construction, the company has honed its expertise to deliver
            exceptional quality. Suncondo prides itself on its versatile
            capabilities, exemplified by the adept production of customized
            products catering to the diverse needs of customers across Pakistan.
            The brand's commitment to quality has not only fueled its growth but
            has also garnered a loyal customer base, positioning Suncondo as a
            trusted and widely used choice in the market.
          </p>
          <p className=" mb-8 text-sm">
            Over the years, Suncondo has undergone a remarkable evolution,
            diversifying its product range while steadfastly maintaining its
            commitment to excellence. This strategic expansion has enabled the
            brand to meet the dynamic demands of the market and adapt to the
            ever-changing needs of its customers. Today, Suncondo stands as a
            testament to resilience and innovation, symbolizing not just a paint
            manufacturer but a trusted partner in enhancing the aesthetic and
            structural integrity of spaces throughout Pakistan.
          </p>
          <button className="self-start px-6 transition-all duration-300 motion-reduce:border-transparent hover:border-transparent py-3 border-2 text-[#ca1a73] border-[#ca1a73]">
            About Us
          </button>
        </div>
        <div className="w-1/2  flex flex-col justify-center items-center">
          <div className="bg-[#ca1a73] h-[90vh] w-[35vw]">
            <Image
              className=" h-[90vh] w-[110%] ml-8 mt-8"
              src="/homepage/about_img.png"
              alt=""
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
