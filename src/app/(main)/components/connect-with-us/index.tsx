import Image from "next/image";

export const ConnectWithUs = () => {
  return (
    <div className="h-[50vh] w-full">
      <section className="">
        <div className="text-black w-[100vw] pb-16 flex justify-center items-center lg:text-white lg:relative h-full lg:h-[35vh] 3xl:h-[65vh]">
          <img
            className="lg:absolute w-[100vw] h-[50vh] object-cover lg:h-[50vh] 3xl:h-[65vh] -z-10"
            src="/homepage/connect-with-us-bg.jpg"
            alt=""
          />

          <div className=" ">
            <div className=" text-white ">
              <div className="p-4 lg:p-16 text-center">
                <h1 className="barcond text-xl lg:text-5xl  font-bold">
                  Server Collections
                </h1>
                <p className=" text-[#FFFFFFB3] text-lg my-8">
                  If so, connect with us! We can assist with all of your home or
                  business paint needs!
                </p>
                <button className="bg-[#ca1a73] text-sm  text-white  h-16  w-auto px-10 ">
                  Get A Quote - It's Free!
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
