import Image from "next/image";
import Link from "next/link";

export const WhySubang = () => {
  return (
    <div className="w-[100vw] flex flex-col">
      <div className="flex flex-col self-center items-center justify-center text-center w-[35vw] my-16">
        <h1 className="text-5xl ">Why Choose Subang Paints</h1>
        <h4 className="text-lg my-8 text-[#4B4B4B]">
          Choosing Subang Paints for your painting needs is not just a decision;
          it's an investment in quality, creativity, and a vibrant
          transformation of your spaces. Here are compelling reasons why
          SubangPaints stands out among the rest
        </h4>
      </div>
      <section className="flex justify-center items-center ">
        <Image
          className="w-1/2 h-auto"
          src="/homepage/why-subang-1.jpg"
          alt=""
          width={540}
          height={300}
        />
        <div className="w-1/2 flex flex-col pl-16">
          <h1 className="text-6xl font-bold underline">Unparalleled Quality</h1>
          <h2 className="text-[#404040] w-[70%] my-2">
            Subang Paints is synonymous with excellence. Our commitment to
            stringent quality control processes and adherence to international
            standards (ISO 9001 and ISO 14001) ensures that every product meets
            the highest standards of durability, coverage, and environmental
            responsibility.
          </h2>
          <Link
            href=""
            className="flex items-center hover:transition-all  hover:translate-x-4 ease-in-out duration-700 "
          >
            <hr className="w-10 h-[2px] bg-[#404040] mr-2"></hr>
            <p className="text-[#404040] text-sm">Learn More</p>
          </Link>
        </div>
      </section>
      <section className="flex flex-row-reverse justify-center items-center ">
        <Image
          className="w-1/2 h-auto"
          src="/homepage/why-subang-2.jpg"
          alt=""
          width={500}
          height={300}
        />
        <div className="w-1/2 flex flex-col pl-16">
          <h1 className="text-6xl font-bold underline">
            Experience and
            <br /> Expertise
          </h1>
          <h2 className="text-[#404040] w-[70%] my-2">
            With a team comprising experienced material specialists, technical
            staff, and sales engineers, Subang Paints offers unparalleled
            expertise. Our professionals are dedicated to assisting customers in
            selecting the most appropriate products, providing on-site support
            for applications, and addressing any technical queries.
          </h2>
          <Link
            href=""
            className="flex items-center hover:transition-all  hover:translate-x-4 ease-in-out duration-700 "
          >
            <hr className="w-10 h-[2px] bg-[#404040] mr-2"></hr>
            <p className="text-[#404040] text-sm">Learn More</p>
          </Link>
        </div>
      </section>
      <section className="flex flex-row justify-center items-center ">
        <Image
          className="w-1/2 h-auto"
          src="/homepage/why-subang-3.jpg"
          alt=""
          width={500}
          height={300}
        />
        <div className="w-1/2 flex flex-col pl-16">
          <h1 className="text-6xl font-bold underline">
            Experience and
            <br /> Expertise
          </h1>
          <h2 className="text-[#404040] w-[70%] my-2">
            With a team comprising experienced material specialists, technical
            staff, and sales engineers, Subang Paints offers unparalleled
            expertise. Our professionals are dedicated to assisting customers in
            selecting the most appropriate products, providing on-site support
            for applications, and addressing any technical queries.
          </h2>
          <Link
            href=""
            className="flex items-center hover:transition-all  hover:translate-x-4 ease-in-out duration-700 "
          >
            <hr className="w-10 h-[2px] bg-[#404040] mr-2"></hr>
            <p className="text-[#404040] text-sm">Learn More</p>
          </Link>
        </div>
      </section>
    </div>
  );
};
