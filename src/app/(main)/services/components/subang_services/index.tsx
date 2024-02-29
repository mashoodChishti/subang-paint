"use client";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type Container, type ISourceOptions } from "@tsparticles/engine";
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
import Image from "next/image";
import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

export const SubangServices = () => {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      // await loadAll(engine);
      // await loadFull(engine);
      await loadSlim(engine);
      // await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };
  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "#ffffff",
        },
      },
      autoPlay: true,

      fullScreen: false,
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "attract",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "random",
        },
        move: {
          direction: "top-right",
          enable: true,
          outModes: {
            default: "out",
          },
          random: false,
          speed: 2,
          straight: true,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    []
  );
  return (
    <div className="  w-full">
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
        className="absolute h-[100%] w-full -z-10"
      />

      <div className="flex flex-col items-center justify-center ">
        <div className="h-[30%]">
          <h1 className="text-3xl font-bold text-center">
            {" "}
            Subang Paints Services
          </h1>
          <h2 className=" text-[#404040] text-center">
            Welcome to Subang Paints, where our commitment to quality,
          </h2>
        </div>
        <div className=" h-[70%] flex self-center justify-center items-center">
          <CardContainer className="w-2/3 h-auto sticky ">
            <CardBody className="p-8 hover:shadow-2xl items-center justify-center rounded-xl group hover:bg-[#ebf0e6] transition-all duration-300 hover:scale-105">
              <CardItem translateZ={100}>
                <Image
                  src={"/homepage/homepage_services_card1.png"}
                  alt=""
                  width={30}
                  height={30}
                />
              </CardItem>
              <CardItem
                translateZ={50}
                className="font-bold text-2xl "
                as={"h1"}
              >
                Paint Manufacturing
              </CardItem>
              <CardItem as={"h4"} className="">
                Discover a spectrum of colors with our high-quality paints.
                Subang Paints excels in the manufacturing of paints that not
                only beautify but also endure, making us your trusted partner
                for all your painting projects.
              </CardItem>
              <CardItem translateZ={60}>
                <Link
                  href=""
                  className=" hidden group-hover:flex transition-all delay-150 items-center hover:transition-all  hover:translate-x-4 ease-in-out duration-700 "
                >
                  <p className="text-[#404040] underline transition-all duration-300 hover:underline hover:decoration-[#404040]/40 text-sm">
                    Learn More
                  </p>
                </Link>
              </CardItem>
            </CardBody>
          </CardContainer>
          <CardContainer className="w-2/3 h-auto ">
            <CardBody className="p-8 hover:shadow-2xl rounded-xl group hover:bg-[#ebf0e6] transition-all duration-300 hover:scale-105">
              <CardItem translateZ={100}>
                <Image
                  src={"/homepage/homepage_services_card2.png"}
                  alt=""
                  width={30}
                  height={30}
                />
              </CardItem>
              <CardItem
                translateZ={50}
                className="font-bold text-2xl "
                as={"h1"}
              >
                Customized Solutions
              </CardItem>
              <CardItem as={"h4"} className="">
                Embrace individuality with our customized paint solutions.
                Tailor colors to your unique style and project requirements,
                ensuring that every space reflects your personality. Subang
                Paints turns your vision into vibrant reality.
              </CardItem>
              <CardItem translateZ={10}>
                <Link
                  href=""
                  className=" hidden group-hover:flex transition-all delay-150 items-center hover:transition-all  hover:translate-x-4 ease-in-out duration-700 "
                >
                  <p className="text-[#404040] underline transition-all duration-300 hover:underline hover:decoration-[#404040]/40 text-sm">
                    Learn More
                  </p>
                </Link>
              </CardItem>
            </CardBody>
          </CardContainer>
          <CardContainer className="w-2/3 h-auto ">
            <CardBody className="p-8 hover:shadow-2xl rounded-xl group hover:bg-[#ebf0e6] transition-all duration-300 hover:scale-105">
              <CardItem translateZ={100}>
                <Image
                  src={"/homepage/homepage_services_card3.png"}
                  alt=""
                  width={30}
                  height={30}
                />
              </CardItem>
              <CardItem
                translateZ={50}
                className="font-bold text-2xl "
                as={"h1"}
              >
                (OEM) Services
              </CardItem>
              <CardItem as={"h4"} className="">
                Elevate your projects with Subang Paints' OEM services. Whether
                it's reimagining existing products or crafting tailor-made
                solutions, we are your strategic partners for future
                development, offering innovation that stands out.
              </CardItem>
              <CardItem translateZ={60}>
                <Link
                  href=""
                  className=" hidden group-hover:flex transition-all delay-150 items-center hover:transition-all  hover:translate-x-4 ease-in-out duration-700 "
                >
                  <p className="text-[#404040] underline transition-all duration-300 hover:underline hover:decoration-[#404040]/40 text-sm">
                    Learn More
                  </p>
                </Link>
              </CardItem>
            </CardBody>
          </CardContainer>
        </div>
      </div>
    </div>
  );
};
