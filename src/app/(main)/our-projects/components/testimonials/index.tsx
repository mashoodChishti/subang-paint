"use client";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState } from "react";

export const Testimonials = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  return (
    <div className="flex flex-col justify-between items-center h-[70vh] w-full my-8">
      <h2 className="text-4xl font-bold">Testimonials</h2>
      <Carousel
        setApi={setApi}
        className="my-8 w-full h-[50vh]"
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="mx-10 text-center">
          <CarouselItem className="px-28 basis-1/3">
            <div className=" h-[90%] border-4 flex flex-col  justify-center p-16 items-center border-[#ececf7] rounded-2xl">
              <p className="text-[#506071] text-lg">
                "Subang Paints exceeded our expectations in every aspect. The
                quality of their paints is unmatched, and the customization
                options allowed us to achieve the exact look we envisioned for
                our home. Truly a reliable and innovative partner in painting."
              </p>
              <h3 className="my-4 font-bold">Hamza S.</h3>
            </div>
          </CarouselItem>
          <CarouselItem className="px-28 basis-1/3">
            <div className=" h-[90%] border-4 flex flex-col justify-center p-16 items-center border-[#ececf7] rounded-2xl">
              <p className="text-[#506071] text-lg">
                "Working with Subang Paints has been a game-changer for our
                construction projects. The expert technical support, efficient
                order processing, and a wide range of products make them our
                go-to choice. Exceptional quality combined with a
                customer-centric approach"
              </p>
              <h3 className="my-4 font-bold">Amna D.</h3>
            </div>
          </CarouselItem>
          <CarouselItem className="px-28 basis-1/3">
            <div className=" h-[90%] border-4 flex flex-col justify-center p-16 items-center border-[#ececf7] rounded-2xl">
              <p className="text-[#506071] text-lg">
                "The Inspiration Hub provided by Subang Paints is a treasure
                trove of ideas. As a designer, I appreciate the continuous
                updates on trends and the creative tips they offer. It's more
                than just a paint brand; it's a source of inspiration that
                elevates my projects."
              </p>
              <h3 className="my-4 font-bold">Dilawar K.</h3>
            </div>
          </CarouselItem>
          <CarouselItem className="px-28 basis-1/3">
            <div className=" h-[90%] border-4 flex flex-col justify-center p-16 items-center border-[#ececf7] rounded-2xl">
              <p className="text-[#506071] text-lg">
                "I'm thrilled with the transformative power of Subang Paints in
                our home. Their vast color palette allowed us to express our
                style effortlessly, and the premium quality ensured a flawless
                finish. Kudos to Subang Paints for making our dream home a
                reality!"
              </p>
              <h3 className="my-4 font-bold">Farooq T.</h3>
            </div>
          </CarouselItem>
          <CarouselItem className="px-28 basis-1/3">
            <div className=" h-[90%] border-4 flex flex-col justify-center p-16 items-center border-[#ececf7] rounded-2xl">
              <p className="text-[#506071] text-lg">
                "As a contractor, I rely on durable and high-quality products,
                and Subang Paints consistently delivers. The paint's coverage is
                unmatched, and the diverse range of finishes accommodates
                various project needs. I confidently recommend Subang Paints to
                fellow professionals and homeowners alike."
              </p>
              <h3 className="my-4 font-bold">Wasay R.</h3>
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
      <div className="flex my-4">
        {Array.from({ length: count }).map((_, index) => (
          <div
            key={index}
            className={
              index === current - 1
                ? "h-2 w-4 mx-2 transition-all duration-200 bg-black rounded-3xl"
                : "h-2 w-2 mx-2 transition-all duration-200 bg-[#d1d1d1] rounded-full"
            }
          ></div>
        ))}
      </div>
    </div>
  );
};
