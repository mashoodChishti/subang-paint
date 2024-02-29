"use client";
import Image from "next/image";
import logo from "../../../../public/subang_logo.png";
import { Archivo } from "next/font/google";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const archivo = Archivo({ subsets: ["latin"] });
export const HeaderNav = () => {
  const pathname = usePathname();
  const [isHome, setIsHome] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  if (typeof window !== "undefined") {
    // safe to use window here
    useEffect(() => {
      if (isHome) {
        const detectScrollY = () => {
          if (window.scrollY > 5) {
            setIsScrolled(true);
          } else {
            setIsScrolled(false);
          }
        };

        window.addEventListener("scroll", detectScrollY);

        return () => {
          window.removeEventListener("scroll", detectScrollY);
        };
      }
    }, [isHome]);
  }

  useEffect(() => {
    pathname === "/" ? setIsHome(true) : setIsHome(false);
  }, [pathname]);

  return (
    <div
      className={clsx(
        "bg-transparent  w-[100vw] h-[15vh] transition-all duration-500 rounded-b-[2.5rem] sticky top-0 inset-x-0 z-50 group p-4",
        { "!fixed": isHome, "bg-white": isHome && isScrolled }
      )}
    >
      <div className="flex justify-between items-center h-full w-full ">
        <div className="flex items-center space-x-8 w-[15%]">
          <a href="/">
            <Image src={logo} alt="" className="h-[12%] w-[60%]  " />
          </a>
        </div>
        <div className="flex items-center space-x-8">
          <a
            href="/"
            className={clsx(
              "text-lg hover:underline transition-all duration-300  hover:decoration-2 hover:underline-offset-8 hover:text-[#ca1a73]",
              {
                "underline decoration-2 underline-offset-8": pathname === "/",
                "text-[#ca1a73]": pathname === "/",
              }
            )}
          >
            Home
          </a>
          <a
            href="/about-us"
            className={clsx(
              "text-lg transition-all duration-300 hover:underline hover:decoration-2 hover:underline-offset-8 hover:text-[#ca1a73]",
              {
                "underline decoration-2 underline-offset-8":
                  pathname === "/about-us",
                "text-[#ca1a73]": pathname === "/about-us",
              }
            )}
          >
            About Us
          </a>
          <a
            href="/products"
            className={clsx(
              "text-lg transition-all duration-300 hover:underline hover:decoration-2 hover:underline-offset-8 hover:text-[#ca1a73]",
              {
                "underline decoration-2 underline-offset-8":
                  pathname === "/products",
                "text-[#ca1a73]": pathname === "/products",
              }
            )}
          >
            Products
          </a>
          <a
            href="/services"
            className={clsx(
              "text-lg transition-all duration-300 hover:underline hover:decoration-2 hover:underline-offset-8 hover:text-[#ca1a73]",
              {
                "underline decoration-2 underline-offset-8":
                  pathname === "/services",
                "text-[#ca1a73]": pathname === "/services",
              }
            )}
          >
            Services
          </a>
          <a
            href="/our-projects"
            className={clsx(
              "text-lg transition-all duration-300 hover:underline hover:decoration-2 hover:underline-offset-8 hover:text-[#ca1a73]",
              {
                "underline decoration-2 underline-offset-8":
                  pathname === "/our-projects",
                "text-[#ca1a73]": pathname === "/our-projects",
              }
            )}
          >
            Our Projects
          </a>
          <a
            href="/contact-us"
            className={clsx(
              "text-lg transition-all duration-300 hover:underline hover:decoration-2 hover:underline-offset-8 hover:text-[#ca1a73]",
              {
                "underline decoration-2 underline-offset-8":
                  pathname === "/contact-us",
                "text-[#ca1a73]": pathname === "/contact-us",
              }
            )}
          >
            Contact
          </a>
        </div>
        <div className="flex  ">
          <a href="/examples" className=" ">
            <button
              className={`bg-[#ca1a73] ${archivo.className} font-medium justify-center text-white  h-8 w-auto px-10 rounded-full`}
            >
              GET YOUR QUOTE
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
