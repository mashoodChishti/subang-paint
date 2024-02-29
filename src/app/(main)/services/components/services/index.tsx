import Image from "next/image";
export const ServicesComponent = () => {
  return (
    <section className=" w-[100vw] my-16">
      <div className="content-container flex flex-row gap-x-4 justify-center  items-start ml-28">
        <div className="w-1/3  flex flex-col justify-center ">
          <h1 className="text-3xl font-bold">Services</h1>

          <p className="text-sm my-4 ">
            Welcome to Subang Paints, where our commitment to quality,
            customization, and innovation sets us apart as your premier choice
            in the paint industry. Explore our comprehensive range of services
            designed to meet the diverse needs of our valued customers.
          </p>
          <h1 className="text-3xl font-bold">Beyond Paint</h1>

          <p className="text-sm my-4 ">
            Subang Paints is not merely a paint manufacturing company; we are
            your partners in creativity. Our Inspiration Hub serves as a
            resource for trends, tips, and ideas, helping you transform spaces
            into vibrant masterpieces.
          </p>
        </div>
        <div className="w-1/3 flex flex-col justify-center items-center">
          <Image
            className=" h-auto w-full mr-12"
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
