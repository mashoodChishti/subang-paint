import Image from "next/image";
export const AboutSubang = () => {
  return (
    <section className="h-[100vh] w-[100vw] my-16">
      <div className="content-container flex flex-row-reverse justify-center  items-center mr-28">
        <div className="w-1/3  flex flex-col justify-center ">
          <h1 className="text-4xl font-bold">About Suncondo</h1>

          <p className="text-sm my-8 w-2/3">
            Subang Paints, a brand synonymous with quality and innovation, is
            proudly brought to you by Subang Paints Chemicals & Coatings (Pvt)
            Ltd, headquartered in the vibrant city of Islamabad, Pakistan. With
            a legacy spanning 14 years in the paint manufacturing, research, and
            development domain, and an additional 10 years of expertise in
            projects involving external and internal wall applications, Subang
            Paints has emerged as a trusted name with an unwavering commitment
            to excellence.
          </p>
          <h1 className="text-lg font-bold">A Tradition of Excellence</h1>
          <p className=" text-sm mb-8 w-2/3">
            At Subang Paints, we don't just meet standards; we set them. Our
            unwavering commitment to quality is reflected in our adherence to
            international standards (ISO 9001 and ISO 14001), ensuring that
            every paint batch leaving our facilities is a mark of durability,
            coverage, and environmental responsibility.
          </p>
          <h1 className="text-lg font-bold">Customer-Centric Approach</h1>
          <p className=" text-sm mb-8 w-2/3">
            Your satisfaction is our priority. Our customer-centric approach is
            reflected in our responsive customer service, personalized
            solutions, and a commitment to meeting deadlines. We understand that
            each project is unique, and our team is dedicated to assisting you
            every step of the way.
          </p>
        </div>
        <div className="w-1/2  flex flex-col justify-center items-center">
          <Image
            className=" h-[90vh] w-[70%] ml-8 mt-8"
            src="/homepage/why-subang-2.jpg"
            alt=""
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};
