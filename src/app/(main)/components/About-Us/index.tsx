import Image from "next/image";

export const AboutUs = () => {
  return (
    <section className="h-[100vh] w-[100vw] my-16">
      <div className="content-container flex flex-row-reverse justify-center  items-center mr-28">
        <div className="w-1/2 px-16 flex flex-col justify-center ">
          <div className="flex items-center">
            <hr className="w-16 h-[4px] bg-[#ca1a73] mr-8"></hr>
            <span className="text-md font-bold text-yellow-300">[</span>{" "}
            <h1 className="text-md uppercase mx-4 font-bold tracking-[0.3em]">
              Subang Paint
            </h1>
            <span className="text-md font-bold text-yellow-300">]</span>
          </div>
          <h1 className="text-5xl font-bold">About Us</h1>

          <p className="mb-8">
            Subang Paints, a brand synonymous with quality and innovation, is
            proudly brought to you by Subang Paints Chemicals & Coatings (Pvt)
            Ltd, headquartered in the vibrant city of Islamabad, Pakistan. With
            a legacy spanning 14 years in the paint manufacturing, research, and
            development domain, and an additional 10 years of expertise in
            projects involving external and internal wall applications, Subang
            Paints has emerged as a trusted name with an unwavering commitment
            to excellence.
          </p>
          <p className=" mb-8">
            Envision a world of vibrant possibilities, where every wall tells a
            unique story. At Subang Paints, our vision is to be the catalyst
            behind these colorful narratives by providing innovative and
            sustainable painting solutions that exceed expectations.
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
